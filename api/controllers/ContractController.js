module.exports = {
    publicVariable: function (req, res) {
        let web3 = web3j.web3();
        let abis = Abi.DataSharingAbi;
        let contractAddress = '0x2a83FE5DFd9cbBca7623FAe987ba613D68f79ea9';
        let contract = web3.eth.contract(abis);
        let contractInstance = contract.at(contractAddress);
        let userRegister = contractInstance.userRegister.call();
        let dataRegister = contractInstance.dataRegister.call();
        res.send({
            code: 0,
            data: {
                userRegisterPub: userRegister,
                dataRegister: dataRegister
            }
        });

    },
    /**
     * 用户注册信息
     * registerInfo ={coName:'',coAddress:'',corpName:'',corpId:'',tel:'',fax:'',};
     * @param register
     * @param account
     * @param password
     * @returns {[*]}
     */
    registerCompany: function (req, res) {
        let register = req.body;
        let web3 = web3j.web3();
        let unlock = web3.personal.unlockAccount(register.account, register.password);
        let isAddress = web3.isAddress(register.account);
        if (isAddress) {
            if (unlock) {
                let UserManagementContract = web3.eth.contract(Abi.UserManagementAbi);
                let UserManagementContractInstance = UserManagementContract.at(constUtiles.UserManagementAddress);
                UserManagementContractInstance.register(
                    register.coName,
                    register.coAddress,
                    register.corpName,
                    register.corpId,
                    register.tel,
                    register.fax,
                    {
                        from: register.account,
                        gas: 10000000
                    }, (error, result) => {
                        if (!error) {
                            res.send({
                                code: 0,
                                data: {
                                    'transactionHash': result
                                }
                            });
                        } else {
                            res.send({
                                code: 10003,
                                info: error
                            });
                        }
                    });
            } else {
                res.send({
                    code: 10002,
                    info: '密码有误，请重新输入'
                });
            }
        } else {
            res.send({
                code: 10001,
                info: '账户地址有误'
            });
        }
    },
    /**
     * 注册仓库信息
     * registerBasicInfo ={account：'',password:'',coName:'',coAddress:'',corpName:'',corpId:'',tel:'',fax:'',};
     * @param registerBasicInfo
     * @returns {[*]}
     */
    registerBasicInfo: function (req, res) {
        let params = req.body;
        let web3 = web3j.web3();
        let unlock = web3.personal.unlockAccount(params.account, params.password);
        let isAddress = web3.isAddress(params.account);
        if (isAddress) {
            if (unlock) {
                let UserManagementContract = web3.eth.contract(Abi.UserManagementAbi);
                let UserManagementContractInstance = UserManagementContract.at(constUtiles.UserManagementAddress);
                UserManagementContractInstance.registerBasicInfo(
                    params._stockName,
                    params._stockId,
                    params._stockType,
                    params._inventory,
                    params._stockNum,
                    params._storeRoomNum,
                    params._posNum,
                    params._qrCode,
                    {
                        from: params.account,
                        gas: 10000000
                    }, (error, result) => {
                        if (!error) {
                            res.send({
                                code: 0,
                                data: {
                                    'transactionHash': result
                                }
                            });
                        } else {
                            res.send({
                                code: 10003,
                                info: error
                            });
                        }
                    });
            } else {
                res.send({
                    code: 10002,
                    info: '密码有误，请重新输入'
                });
            }
        } else {
            res.send({
                code: 10001,
                info: '账户地址有误'
            });
        }
    },
    //--------------------------管理员------------------------------------------

    /**
     * 合约的基本信息（管理员地址，注册地址）
     * @param registerBasicInfo
     * @returns {[*]}
     */
    basicContractInfo: (req, res) => {
        let contractInstance = contractInstanceUtils.getMainContractInstance();
        let administrator = contractInstance.administrator.call();
        let registerManagement = contractInstance.registerManagement.call();
        let adminManagement = contractInstance.adminManagement.call();
        res.send({
            code: 0,
            data: {
                'administrator': administrator,
                'registerManagement': registerManagement,
                'adminManagement': adminManagement
            }
        });
    },
    /**
     * POST
     * 企业注册
     * @param enterpriseRegister={
     * bytes32 e_name,bytes32 e_type,bytes32 e_contact,bytes32 e_position,
     * bytes32 e_legalPerson,uint e_contactTel,uint e_socialCode,uint e_legalID,
     * uint e_fax,uint e_organCode,uint e_legalTel,bytes32 e_emai
     * }
     * @returns {[*]}
     */
    enterpriseRegister: (req, res) => {
        let web3 = web3j.web3();
        let contractInstance = contractInstanceUtils.getMainContractInstance();
        let param = req.body;
        let unlock = web3.personal.unlockAccount(param.account, param.password);
        let isAddress = web3.isAddress(param.account);
        //string转换bytes32
        let params = {
            e_name: web3.fromAscii(param.e_name),
            e_type: web3.fromAscii(param.e_type),
            e_contact: web3.fromAscii(param.e_contact),
            e_position: web3.fromAscii(param.e_position),
            e_legalPerson: web3.fromAscii(param.e_legalPerson),
            e_contactTel: param.e_contactTel,
            e_socialCode: param.e_socialCode,
            e_legalID: param.e_legalID,
            e_fax: param.e_fax,
            e_organCode: param.e_organCode,
            e_legalTel: param.e_legalTel,
            e_email: web3.fromAscii(param.e_email)
        };
        if (isAddress) {
            if (unlock) {
                let iseRegister = contractInstance.eRegister(
                    params.e_name,
                    params.e_type,
                    params.e_contact,
                    params.e_position,
                    params.e_legalPerson,
                    params.e_contactTel,
                    params.e_socialCode,
                    params.e_legalID,
                    params.e_fax,
                    params.e_organCode,
                    params.e_legalTel,
                    params.e_email, {
                        from: param.account,
                        gas: 10000000
                    }, (error, result) => {
                        if (!error) {
                            res.send({
                                code: 0,
                                data: {
                                    'transactionHash': result
                                }
                            });
                            let transactionHash = result;
                        } else {
                            res.send({
                                code: 10003,
                                info: error
                            });
                        };
                    }
                );
            } else {
                res.send({
                    code: 10002,
                    info: '密码有误，请重新输入'
                });
            }
        } else {
            res.send({
                code: 10001,
                info: '账户地址有误'
            });
        };
    },

};

