module.exports = {
    /**
     * POST
     * 企业登录
     * @param login={
     * account,password,e_name
     * }
     * @returns {[*]}
     */
    login: (req, res) => {
        let web3 = web3j.web3();
        let param = req.body;
        let isAddress = web3.isAddress(param.account);
        let unlock = web3.personal.unlockAccount(param.account, param.password);
        let e_name = web3.fromAscii(param.e_name, 32);
        let contractInstance = contractInstanceUtils.getRegisterManagementContractInstance();
        let preEnterpriseName = contractInstance.preEnterpriseName.call(0);
        let preEnterpriseNameNum = contractInstance.preEnterpriseNum.call();
        let registerName = [];
        for (i = 0; i < preEnterpriseNameNum; i++) {
            registerName[i] = web3.toAscii(contractInstance.preEnterpriseName.call(i));
            console.log(registerName[i]);
        }
        let index = registerName.indexOf(param.e_name);
        console.log(index);
        if (isAddress) {
            if (unlock) {
                res.send({
                    code: 0,
                    info: '登录成功',
                    data: registerName
                });
            } else {
                res.send({
                    code: 10002,
                    info: '密码错误'
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
     * POST
     * 管理员登录
     * @param adminLogin={
     * account,password
     * }
     * @returns {[*]}
     */
    adminLogin: (req, res) => {
        let param = req.body;
        let web3 = web3j.web3();
        let isAddress = web3.isAddress(param.account);
        let unlock = web3.personal.unlockAccount(param.account, param.password);
        let contractInstance = contractInstanceUtils.getMainContractInstance();
        if (isAddress) {
            if (unlock) {
                let administrator = contractInstance.administrator.call();
                // console.log(administrator);
                if (administrator === param.account) {
                    res.send({
                        code: 0,
                        info: '登录成功'
                    });
                } else {
                    res.send({
                        code: 10003,
                        info: '登录失败，您不是管理员！'
                    });
                }
            } else {
                res.send({
                    code: 10002,
                    info: '密码错误'
                });
            }
        } else {
            res.send({
                code: 10001,
                info: '账户地址有误'
            });
        }
    }
}