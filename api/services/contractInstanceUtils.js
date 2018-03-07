module.exports = {
    getUserManagementContractInstance: function () {
        let web3 = web3j.web3();
        let UserManagementAbi = Abi.UserManagementAbi;
        let UserManagementContract = web3.eth.contract(UserManagementAbi);
        let UserManagementContractInstance = UserManagementContract.at(constUtiles.UserManagementAbiAddress);
        return UserManagementContractInstance;
    },
    getMainContractInstance: () => {
        let web3 = web3j.web3();
        let abis = Abis.MainAbi;
        let contractAddress = constUtiles.MainAddress;
        let contract = web3.eth.contract(abis);
        let contractInstance = contract.at(contractAddress);
        return contractInstance;
    },
    getRegisterManagementContractInstance: () => {
        let web3 = web3j.web3();
        let abis = Abis.MainAbi;
        let contractAddress = constUtiles.MainAddress;
        let contract = web3.eth.contract(abis);
        let contractInstance = contract.at(contractAddress);
        let registerManagementAddress = contractInstance.registerManagement.call();
        let registerManagementAbi = Abis.registerManagementAbi;
        let registerManagementContract = web3.eth.contract(registerManagementAbi);
        let registerManagementContractInstance = registerManagementContract.at(registerManagementAddress);
        return registerManagementContractInstance;
    },
    getAdminManagementContractInstance: () => {
        let web3 = web3j.web3();
        let abis = Abis.MainAbi;
        let contractAddress = constUtiles.MainAddress;
        let contract = web3.eth.contract(abis);
        let contractInstance = contract.at(contractAddress);
        let adminManagementAddress = contractInstance.adminManagement.call();
        let adminManagementAbi = Abis.AdminManagementAbi;
        let adminManagementContract = web3.eth.contract(adminManagementAbi);
        let adminManagementContractInstance = adminManagementContract.at(adminManagementAddress);
        return adminManagementContractInstance;
    },
    getRegisterManagementContractInstance: () => {
        let web3 = web3j.web3();
        let abis = Abis.MainAbi;
        let contractAddress = constUtiles.MainAddress;
        let contract = web3.eth.contract(abis);
        let contractInstance = contract.at(contractAddress);
        let registerManagementAddress = contractInstance.registerManagement.call();
        let registerManagementAbi = Abis.RegisterManagementAbi;
        let registerManagementContract = web3.eth.contract(registerManagementAbi);
        let registerManagementContractInstance = registerManagementContract.at(registerManagementAddress);
        return registerManagementContractInstance;
    },
    getWarehouseManagementContractInstance: () => {
        let web3 = web3j.web3();
        let abis = Abis.MainAbi;
        let contractAddress = constUtiles.MainAddress;
        let contract = web3.eth.contract(abis);
        let contractInstance = contract.at(contractAddress);
        let warehouseManagementAddress = contractInstance.warehouseManagement.call();
        let warehouseManagementAbi = Abis.WarehouseManagementAbi;
        let warehouseManagementContract = web3.eth.contract(warehouseManagementAbi);
        let warehouseManagementContractInstance = warehouseManagementContract.at(warehouseManagementAddress);
        return warehouseManagementContractInstance;
    }

}