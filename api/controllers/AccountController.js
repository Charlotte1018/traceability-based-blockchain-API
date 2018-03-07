/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    //acount
    createAccount: function (req, res) {
        let params = req.body;
        let web3 = web3j.web3();
        web3.personal.newAccount(params.password);
        let newAddress = web3.eth.accounts[web3.eth.accounts.length - 1];
        res.send({
            code: 0,
            data: {
                account: newAddress
            }
        })
    },
    getAccounts: function (req, res) {
        let params = req.query;
        let web3 = web3j.web3();
        let accounts = web3.eth.accounts;
        res.send({
            code: 0,
            data: {
                accounts: accounts
            }
        })
    },
    //getBalance
    getBalance: function (req, res) {
        let params = req.query;
        let web3 = web3j.web3();
        let balance = web3.eth.getBalance(params.account);
        res.send({
            code: 0,
            data: {
                balanceUnit: web3.fromWei(balance, params.unit),
                balance: balance
            }
        })
    },
    transferAccount: function (req, res) {
        let params = req.body;
        let web3 = web3j.web3();
        let isAddress = web3.isAddress(params.from) && web3.isAddress(params.to);
        if (isAddress) {
            if (web3.personal.unlockAccount(params.from, params.password)) {
                web3.eth.sendTransaction({
                    from: params.from,
                    to: params.to,
                    value: web3.toWei(params.value),
                    data: web3.toHex(params.data)||`${params.value}ether`,
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

