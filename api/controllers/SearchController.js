module.exports = {
    //管理员待审核注册列表
    getPendingTask: (req, res) => {
        let web3 = web3j.web3();
        let contractInstance = contractInstanceUtils.getAdminManagementContractInstance();
        let taskNum = contractInstance.taskNum.call().toNumber();
        let taskName = [];
        for (i = 0; i < taskNum; i++) {
            taskName[i] = contractInstance.taskName.call(i);
            console.log(taskName[i]);
        }
        let taskList = [];
        for (i = 0; i < taskNum; i++) {
            taskList[i] = contractInstance.taskList.call(taskName[i]);
            taskName[i] = web3.toAscii(taskName[i]);
            for (j = 0; j < 4; j++) {
                taskList[i][j] = web3.toAscii(taskList[i][j]);
            }
        }
        res.send({
            code: 0,
            data: {
                taskList,
                taskName
            }
        })

    },
    //管理员查询企业预注册信息
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
            for (j = 0; j < 5; j++) {
                preEnterprises[i][j] = web3.toAscii(preEnterprises[i][j]);
            }
            preEnterprises[i][11] = web3.toAscii(preEnterprises[i][11]);
        }

        res.send({
            code: 0,
            data: {
                preEnterprises
            }
        })
    },
    //管理员查询企业注册信息
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
            for (j = 0; j < 5; j++) {
                enterprises[i][j] = (web3.toAscii(enterprises[i][j]));
            }
            enterprises[i][11] = web3.toAscii(enterprises[i][11]);
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
    //企业查询库区信息
    getReservoirs: (req, res) => {
        let web3 = web3j.web3();
        let param = req.query;
        console.log(param.account);
        let contractInstance = contractInstanceUtils.getWarehouseManagementContractInstanceReg(param.account);

        let reservoirNum = contractInstance.reservoirNum.call().toNumber();
        let reservoirs = [];
        for (i = 0; i < reservoirNum; i++) {
            reservoirs[i] = contractInstance.reservoirs.call(i);
            // reservoirs[1] = web3.toAscii(reservoirs[1]);
            for (j = 0; j < 10; j++) {
                reservoirs[i][1] = web3.toAscii(reservoirs[i][1]);
                reservoirs[i][9] = web3.toAscii(reservoirs[i][9]);
                for (k = 4; k < 8; k++) {
                    reservoirs[i][k] = web3.toAscii(reservoirs[i][k]);
                }
            }
        }
        res.send({
            code: 0,
            data: {
                reservoirs,
                reservoirNum
            }
        })
    },
    //企业查询仓库信息
    getStocks: (req, res) => {
        let web3 = web3j.web3();
        let param = req.query;
        let contractInstance = contractInstanceUtils.getWarehouseManagementContractInstanceReg(param.account);

        let stockNum = contractInstance.stockNum.call();
        let stocks = [];
        for (i = 0; i < stockNum; i++) {
            stocks[i] = contractInstance.stocks.call(i);
            stocks[i][1] = web3.toAscii(stocks[i][1]);
            stocks[i][3] = web3.toAscii(stocks[i][3]);
            stocks[i][4] = web3.toAscii(stocks[i][4]);
        }
        res.send({
            code: 0,
            data: {
                stocks,
                stockNum
            }
        })
    },
    //查询厫间信息
    getAos: (req, res) => {
        let web3 = web3j.web3();
        let param = req.query;
        let contractInstance = contractInstanceUtils.getWarehouseManagementContractInstanceReg(param.account);

        let aoNum = contractInstance.aoNum.call();
        let aos = [];
        for (i = 0; i < aoNum; i++) {
            aos[i] = contractInstance.aos.call(i);
            aos[i][1] = web3.toAscii(aos[i][1]);
            aos[i][3] = web3.toAscii(aos[i][3]);
            aos[i][5] = web3.toAscii(aos[i][5]);
        }
        res.send({
            code: 0,
            data: {
                aos,
                aoNum
            }
        })
    },
    //查询货位信息
    getGoods: (req, res) => {
        let web3 = web3j.web3();
        let param = req.query;
        let contractInstance = contractInstanceUtils.getWarehouseManagementContractInstanceReg(param.account);

        let goodsNum = contractInstance.goodsNum.call();
        let goods = [];
        for (i = 0; i < goodsNum; i++) {
            goods[i] = contractInstance.goods.call(i);
            goods[i][1] = web3.toAscii(goods[i][1]);
            goods[i][3] = web3.toAscii(goods[i][3]);
            goods[i][5] = web3.toAscii(goods[i][5]);
        }
        res.send({
            code: 0,
            data: {
                goods,
                goodsNum
            }
        })
    },
    //查询入库信息
    getStockInList: (req, res) => {
        let param = req.query;
        let web3 = web3j.web3();
        let contractInstance = contractInstanceUtils.getStockInManagementContractInstanceReg(param.account);

        let stockInNum = contractInstance.stockInNum.call();
        let stockInList = [];
        for (i = 0; i < stockInNum; i++) {
            stockInList[i] = contractInstance.stockInList.call(i);
            for (k = 0; k < 11; k++) {
                if (k === 1 || k === 6 || k === 9) {
                    stockInList[i][k] = stockInList[i][k];
                } else {
                    stockInList[i][k] = web3.toAscii(stockInList[i][k]);
                }
            }
        }
        res.send({
            code: 0,
            data: {
                stockInList,
                stockInNum
            }
        })
    },
    //查询出库信息
    getStockOutList: (req, res) => {
        let param = req.query;
        let web3 = web3j.web3();
        let contractInstance = contractInstanceUtils.getStockOutManagementContractInstanceReg(param.account);

        let stockOutNum = contractInstance.stockOutNum.call();
        let stockOutList = [];
        for (i = 0; i < stockOutNum; i++) {
            stockOutList[i] = contractInstance.stockOutList.call(i);
            stockOutList[i][0] = web3.toAscii(stockOutList[i][0]);
            stockOutList[i][1] = web3.toAscii(stockOutList[i][1]);
        }
        res.send({
            code: 0,
            data: {
                stockOutList,
                stockOutNum
            }
        })
    }
}