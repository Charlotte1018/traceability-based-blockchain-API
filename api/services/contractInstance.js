module.exports = {
    getUserManagementContractInstance:function(){
        let web3 = web3j.web3();
        let UserManagementAbi = Abi.UserManagementAbi;
        let UserManagementContract = web3.eth.contract(UserManagementAbi);
        let UserManagementContractInstance = UserManagementContract.at(constUtiles.UserManagementAbiAddress);
        return UserManagementContractInstance;
    }
}