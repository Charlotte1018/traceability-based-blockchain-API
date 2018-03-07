module.exports = {
    //管理员待审核注册列表
    getPendingTask: (req, res) => {
        let web3=web3j.web3();
        let contractInstance = contractInstanceUtils.getAdminManagementContractInstance();
        let taskNum = contractInstance.taskNum.call().toNumber();
        let taskName = [];
        for (i = 0; i < taskNum; i++) {
            taskName[i] = contractInstance.taskName.call(i);
            console.log(taskName[i]);
        }
        let taskList = [];
        for(i=0;i<taskNum;i++){
            taskList[i]=contractInstance.taskList.call(taskName[i]);
            for(j=0;j<4;j++){
                taskList[i][j]=web3.toAscii(taskList[i][j]);
            }
        }
        res.send({
            code: 0,
            data: {
                taskList
            }
        })

    },
    //查询企业预注册信息
    getPreEnterprises: (req, res) => {
        let web3 = web3j.web3();
        let contractInstance = contractInstanceUtils.getRegisterManagementContractInstance();
        let preEnterpriseNum = contractInstance.preEnterpriseNum.call().toNumber();
        let preEnterpriseName = [];
        console.log(preEnterpriseNum);
        for (i = 0; i < preEnterpriseNum; i++) {
            preEnterpriseName[i] = contractInstance.preEnterpriseName.call(i);
            console.log(preEnterpriseName[i]);
        }
        let preEnterprises = [];
        for (i = 0; i < preEnterpriseNum; i++) {
            preEnterprises[i] = contractInstance.preEnterprises.call(preEnterpriseName[i]);
            for(j=0;j<5;j++){
                preEnterprises[i][j]=web3.toAscii(preEnterprises[i][j]);
            }
            preEnterprises[i][11]=web3.toAscii(preEnterprises[i][11]);
        }

        res.send({
            code: 0,
            data: {
                preEnterprises
            }
        })
    },
    //查询企业注册信息
    getEnterprises: (req, res) => {
        let web3 = web3j.web3();
        let contractInstance = contractInstanceUtils.getRegisterManagementContractInstance();
        let enterpriseNum = contractInstance.enterpriseNum.call().toNumber();
        let enterpriseName = [];
        console.log(enterpriseNum);
        for (i = 0; i < enterpriseNum; i++) {
            enterpriseName[i] = contractInstance.enterpriseName.call(i);
            console.log(enterpriseName[i]);
        }
        let enterprises = [];
        for (i = 0; i < enterpriseNum; i++) {
            enterprises[i] = contractInstance.enterprises.call(enterpriseName[i]);
            for(j=0;j<5;j++){
                enterprises[i][j]=(web3.toAscii(enterprises[i][j]));
            }
            enterprises[i][11]=web3.toAscii(enterprises[i][11]);
            // let b = a.replace(/\\u0000/g,'');
            // console.log(a);
        }
        res.send({
            code: 0,
            data: {
                enterprises
            }
        })
    },




}