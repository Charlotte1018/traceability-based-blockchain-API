/**
 * PurchaseController
 *
 * @description :: Server-side logic for managing purchases
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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
                let UserManagementContractInstance = UserManagementContract.at(constUtiles.UserManagementAbiAddress);
                UserManagementContractInstance.register(
                    register.coName,
                    register.coAddress,
                    register.corpName,
                    register.corpId,
                    register.tel,
                    register.fax,
                    {
                        from: register.account
                        // gas: 10000000
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
    }
};

