module.exports = {
    getUserManagementContractInstance:function(){
        let web3 = web3j.web3();
        let UserManagementAbi = Abi.UserManagementAbi;
        let UserManagementContract = web3.eth.contract(UserManagementAbi);
        let UserManagementContractInstance = UserManagementContract.at(constUtiles.UserManagementAbiAddress);
        return UserManagementContractInstance;
    },
    getMainContractInstance:()=>{
        let web3 = web3j.web3();
        let abis = Abis.MainAbi;
        let contractAddress = constUtiles.MainAddress;
        let contract = web3.eth.contract(abis);
        let contractInstance = contract.at(contractAddress);
        return contractInstance;
    }
}