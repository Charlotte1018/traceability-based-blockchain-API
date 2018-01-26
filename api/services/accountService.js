module.exports = {
    /**
     * 解锁账户
     * @param account
     * @param password
     * @returns {[*]}
     */
    unlockAccount: function (account,password) {
        let web3 = web3j.web3();
        return web3.personal.unlockAccount(account, password);
    },
    

    
}