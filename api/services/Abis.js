module.exports = {
    MainAbi: [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "e_name",
                    "type": "bytes32"
                },
                {
                    "name": "e_type",
                    "type": "bytes32"
                },
                {
                    "name": "e_contact",
                    "type": "bytes32"
                },
                {
                    "name": "e_position",
                    "type": "bytes32"
                },
                {
                    "name": "e_legalPerson",
                    "type": "bytes32"
                },
                {
                    "name": "e_contactTel",
                    "type": "uint256"
                },
                {
                    "name": "e_socialCode",
                    "type": "uint256"
                },
                {
                    "name": "e_legalID",
                    "type": "uint256"
                },
                {
                    "name": "e_fax",
                    "type": "uint256"
                },
                {
                    "name": "e_organCode",
                    "type": "uint256"
                },
                {
                    "name": "e_legalTel",
                    "type": "uint256"
                },
                {
                    "name": "e_email",
                    "type": "bytes32"
                }
            ],
            "name": "eRegister",
            "outputs": [
                {
                    "name": "flag",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "registerManagement",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_ename",
                    "type": "bytes32"
                },
                {
                    "name": "_pname",
                    "type": "bytes32"
                },
                {
                    "name": "_pquantity",
                    "type": "uint256"
                },
                {
                    "name": "_pTraceCode",
                    "type": "uint256"
                }
            ],
            "name": "addStockOut",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "c_name",
                    "type": "bytes32"
                },
                {
                    "name": "c_position",
                    "type": "bytes32"
                },
                {
                    "name": "c_legalPerson",
                    "type": "bytes32"
                },
                {
                    "name": "c_legalTel",
                    "type": "uint256"
                },
                {
                    "name": "c_contact",
                    "type": "bytes32"
                },
                {
                    "name": "c_contactTel",
                    "type": "uint256"
                },
                {
                    "name": "c_socialCode",
                    "type": "uint256"
                },
                {
                    "name": "c_fax",
                    "type": "uint256"
                },
                {
                    "name": "c_email",
                    "type": "bytes32"
                },
                {
                    "name": "c_time",
                    "type": "bytes32"
                },
                {
                    "name": "c_province",
                    "type": "bytes32"
                },
                {
                    "name": "c_city",
                    "type": "bytes32"
                }
            ],
            "name": "addNewClient",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_reservoirNo",
                    "type": "uint256"
                },
                {
                    "name": "_rName",
                    "type": "bytes32"
                },
                {
                    "name": "_name",
                    "type": "bytes32"
                },
                {
                    "name": "_type",
                    "type": "bytes32"
                },
                {
                    "name": "_capacity",
                    "type": "uint256"
                },
                {
                    "name": "_validCapacity",
                    "type": "uint256"
                }
            ],
            "name": "addNewStock",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "adminManagement",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "e_name",
                    "type": "bytes32"
                },
                {
                    "name": "_statusCode",
                    "type": "uint256"
                }
            ],
            "name": "auditRegister",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "clientManagement",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_ename",
                    "type": "bytes32"
                },
                {
                    "name": "_gNo",
                    "type": "uint256"
                },
                {
                    "name": "_province",
                    "type": "bytes32"
                },
                {
                    "name": "_city",
                    "type": "bytes32"
                },
                {
                    "name": "_county",
                    "type": "bytes32"
                },
                {
                    "name": "_town",
                    "type": "bytes32"
                },
                {
                    "name": "_pYear",
                    "type": "uint256"
                },
                {
                    "name": "_variety",
                    "type": "bytes32"
                },
                {
                    "name": "_level",
                    "type": "bytes32"
                },
                {
                    "name": "_quantity",
                    "type": "uint256"
                },
                {
                    "name": "_qReport",
                    "type": "bytes32"
                }
            ],
            "name": "addStockIn",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_gNo",
                    "type": "uint256"
                },
                {
                    "name": "_rNo",
                    "type": "uint256"
                },
                {
                    "name": "_rName",
                    "type": "bytes32"
                },
                {
                    "name": "_sBarnNo",
                    "type": "uint256"
                },
                {
                    "name": "_sName",
                    "type": "bytes32"
                },
                {
                    "name": "_aNo",
                    "type": "uint256"
                },
                {
                    "name": "_aName",
                    "type": "bytes32"
                },
                {
                    "name": "_gName",
                    "type": "bytes32"
                },
                {
                    "name": "_gFlag",
                    "type": "bytes32"
                },
                {
                    "name": "_gCurrentCapacity",
                    "type": "bytes32"
                }
            ],
            "name": "addNerGoods",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_reservoirNo",
                    "type": "uint256"
                },
                {
                    "name": "_rName",
                    "type": "bytes32"
                },
                {
                    "name": "_barnNo",
                    "type": "uint256"
                },
                {
                    "name": "_stockName",
                    "type": "bytes32"
                },
                {
                    "name": "_name",
                    "type": "bytes32"
                }
            ],
            "name": "addNewAo",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "c_name",
                    "type": "bytes32"
                }
            ],
            "name": "deleteClient",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_name",
                    "type": "bytes32"
                },
                {
                    "name": "_QHDM",
                    "type": "uint256"
                },
                {
                    "name": "_province",
                    "type": "bytes32"
                },
                {
                    "name": "_city",
                    "type": "bytes32"
                },
                {
                    "name": "_county",
                    "type": "bytes32"
                },
                {
                    "name": "_town",
                    "type": "bytes32"
                },
                {
                    "name": "_postCode",
                    "type": "uint256"
                }
            ],
            "name": "addNewReservoir",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "warehouseManagement",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "administrator",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "type": "constructor"
        }
    ],
    AdminManagementAbi: [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "e_name",
                    "type": "bytes32"
                },
                {
                    "name": "a_time",
                    "type": "bytes32"
                },
                {
                    "name": "a_task",
                    "type": "bytes32"
                },
                {
                    "name": "a_business",
                    "type": "bytes32"
                },
                {
                    "name": "a_brief",
                    "type": "bytes32"
                }
            ],
            "name": "addPendingTask",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "e_name",
                    "type": "bytes32"
                },
                {
                    "name": "statusCode",
                    "type": "uint256"
                },
                {
                    "name": "registerManagement",
                    "type": "address"
                },
                {
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "auditRegisterPart1",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "taskNum",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "taskName",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "e_name",
                    "type": "bytes32"
                },
                {
                    "name": "statusCode",
                    "type": "uint256"
                },
                {
                    "name": "registerManagement",
                    "type": "address"
                }
            ],
            "name": "auditRegisterPart2",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "taskList",
            "outputs": [
                {
                    "name": "time",
                    "type": "bytes32"
                },
                {
                    "name": "task",
                    "type": "bytes32"
                },
                {
                    "name": "business",
                    "type": "bytes32"
                },
                {
                    "name": "brief",
                    "type": "bytes32"
                },
                {
                    "name": "rStatus",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        }
    ],
    RegisterManagementAbi: [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "e_name",
                    "type": "bytes32"
                },
                {
                    "name": "e_type",
                    "type": "bytes32"
                },
                {
                    "name": "e_contact",
                    "type": "bytes32"
                },
                {
                    "name": "e_position",
                    "type": "bytes32"
                },
                {
                    "name": "e_legalPerson",
                    "type": "bytes32"
                },
                {
                    "name": "e_contactTel",
                    "type": "uint256"
                },
                {
                    "name": "e_socialCode",
                    "type": "uint256"
                },
                {
                    "name": "e_legalID",
                    "type": "uint256"
                },
                {
                    "name": "e_fax",
                    "type": "uint256"
                },
                {
                    "name": "e_organCode",
                    "type": "uint256"
                },
                {
                    "name": "e_legalTel",
                    "type": "uint256"
                },
                {
                    "name": "e_email",
                    "type": "bytes32"
                }
            ],
            "name": "enterpriseRegister",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "e_name",
                    "type": "bytes32"
                },
                {
                    "name": "e_type",
                    "type": "bytes32"
                },
                {
                    "name": "e_contact",
                    "type": "bytes32"
                },
                {
                    "name": "e_position",
                    "type": "bytes32"
                },
                {
                    "name": "e_legalPerson",
                    "type": "bytes32"
                }
            ],
            "name": "setValuePart1",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "enterpriseName",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "e_name",
                    "type": "bytes32"
                }
            ],
            "name": "isRegister",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "e_name",
                    "type": "bytes32"
                }
            ],
            "name": "deletePre",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "stockInManagementAddr",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "stockOutManagementAddr",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_user",
                    "type": "address"
                },
                {
                    "name": "_flag",
                    "type": "bool"
                }
            ],
            "name": "createRelevantContract",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "nameToAddress",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "e_name",
                    "type": "bytes32"
                }
            ],
            "name": "isPreRegister",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "enterpriseInfo",
            "outputs": [
                {
                    "name": "name",
                    "type": "bytes32"
                },
                {
                    "name": "etype",
                    "type": "bytes32"
                },
                {
                    "name": "contact",
                    "type": "bytes32"
                },
                {
                    "name": "position",
                    "type": "bytes32"
                },
                {
                    "name": "legalPerson",
                    "type": "bytes32"
                },
                {
                    "name": "contactTel",
                    "type": "uint256"
                },
                {
                    "name": "socialCode",
                    "type": "uint256"
                },
                {
                    "name": "legalID",
                    "type": "uint256"
                },
                {
                    "name": "fax",
                    "type": "uint256"
                },
                {
                    "name": "organCode",
                    "type": "uint256"
                },
                {
                    "name": "legalTel",
                    "type": "uint256"
                },
                {
                    "name": "email",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "e_name",
                    "type": "bytes32"
                }
            ],
            "name": "getEnterprisePart1",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "enterprises",
            "outputs": [
                {
                    "name": "name",
                    "type": "bytes32"
                },
                {
                    "name": "etype",
                    "type": "bytes32"
                },
                {
                    "name": "contact",
                    "type": "bytes32"
                },
                {
                    "name": "position",
                    "type": "bytes32"
                },
                {
                    "name": "legalPerson",
                    "type": "bytes32"
                },
                {
                    "name": "contactTel",
                    "type": "uint256"
                },
                {
                    "name": "socialCode",
                    "type": "uint256"
                },
                {
                    "name": "legalID",
                    "type": "uint256"
                },
                {
                    "name": "fax",
                    "type": "uint256"
                },
                {
                    "name": "organCode",
                    "type": "uint256"
                },
                {
                    "name": "legalTel",
                    "type": "uint256"
                },
                {
                    "name": "email",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "adminManagement",
                    "type": "address"
                },
                {
                    "name": "e_name",
                    "type": "bytes32"
                }
            ],
            "name": "addToPendingTask",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "warehouseManagementAddr",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "e_contactTel",
                    "type": "uint256"
                },
                {
                    "name": "e_socialCode",
                    "type": "uint256"
                },
                {
                    "name": "e_legalID",
                    "type": "uint256"
                },
                {
                    "name": "e_fax",
                    "type": "uint256"
                },
                {
                    "name": "e_organCode",
                    "type": "uint256"
                },
                {
                    "name": "e_legalTel",
                    "type": "uint256"
                },
                {
                    "name": "e_email",
                    "type": "bytes32"
                }
            ],
            "name": "setValuePart2",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "e_name",
                    "type": "bytes32"
                }
            ],
            "name": "getEnterprisePart2",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "addrToName",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "clientManagementAddr",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "preEnterprises",
            "outputs": [
                {
                    "name": "name",
                    "type": "bytes32"
                },
                {
                    "name": "etype",
                    "type": "bytes32"
                },
                {
                    "name": "contact",
                    "type": "bytes32"
                },
                {
                    "name": "position",
                    "type": "bytes32"
                },
                {
                    "name": "legalPerson",
                    "type": "bytes32"
                },
                {
                    "name": "contactTel",
                    "type": "uint256"
                },
                {
                    "name": "socialCode",
                    "type": "uint256"
                },
                {
                    "name": "legalID",
                    "type": "uint256"
                },
                {
                    "name": "fax",
                    "type": "uint256"
                },
                {
                    "name": "organCode",
                    "type": "uint256"
                },
                {
                    "name": "legalTel",
                    "type": "uint256"
                },
                {
                    "name": "email",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "e_name",
                    "type": "bytes32"
                },
                {
                    "name": "e_type",
                    "type": "bytes32"
                },
                {
                    "name": "e_contact",
                    "type": "bytes32"
                },
                {
                    "name": "e_position",
                    "type": "bytes32"
                },
                {
                    "name": "e_legalPerson",
                    "type": "bytes32"
                },
                {
                    "name": "e_contactTel",
                    "type": "uint256"
                },
                {
                    "name": "e_socialCode",
                    "type": "uint256"
                },
                {
                    "name": "e_legalID",
                    "type": "uint256"
                },
                {
                    "name": "e_fax",
                    "type": "uint256"
                },
                {
                    "name": "e_organCode",
                    "type": "uint256"
                },
                {
                    "name": "e_legalTel",
                    "type": "uint256"
                },
                {
                    "name": "e_email",
                    "type": "bytes32"
                }
            ],
            "name": "preRegister",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_user",
                    "type": "address"
                },
                {
                    "name": "_name",
                    "type": "bytes32"
                }
            ],
            "name": "nameRegister",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "preEnterpriseNum",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "preEnterpriseName",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "enterpriseNum",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        }
    ],
    WarehouseManagementAbi: [
        {
            "constant": true,
            "inputs": [],
            "name": "aoNum",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_name",
                    "type": "bytes32"
                }
            ],
            "name": "isAoExist",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "stocks",
            "outputs": [
                {
                    "name": "sReservoirNo",
                    "type": "uint256"
                },
                {
                    "name": "sReservoirName",
                    "type": "bytes32"
                },
                {
                    "name": "sBarnNo",
                    "type": "uint256"
                },
                {
                    "name": "sName",
                    "type": "bytes32"
                },
                {
                    "name": "sType",
                    "type": "bytes32"
                },
                {
                    "name": "sCapacity",
                    "type": "uint256"
                },
                {
                    "name": "sValidCapacity",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "goods",
            "outputs": [
                {
                    "name": "gNo",
                    "type": "uint256"
                },
                {
                    "name": "rNo",
                    "type": "uint256"
                },
                {
                    "name": "rName",
                    "type": "bytes32"
                },
                {
                    "name": "sBarnNo",
                    "type": "uint256"
                },
                {
                    "name": "sName",
                    "type": "bytes32"
                },
                {
                    "name": "aNo",
                    "type": "uint256"
                },
                {
                    "name": "aName",
                    "type": "bytes32"
                },
                {
                    "name": "gName",
                    "type": "bytes32"
                },
                {
                    "name": "gFlag",
                    "type": "bytes32"
                },
                {
                    "name": "gCurrentCapacity",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "goodsNum",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_name",
                    "type": "bytes32"
                },
                {
                    "name": "_QHDM",
                    "type": "uint256"
                },
                {
                    "name": "_province",
                    "type": "bytes32"
                },
                {
                    "name": "_city",
                    "type": "bytes32"
                },
                {
                    "name": "_county",
                    "type": "bytes32"
                },
                {
                    "name": "_town",
                    "type": "bytes32"
                },
                {
                    "name": "_postCode",
                    "type": "uint256"
                },
                {
                    "name": "_registerManagement",
                    "type": "address"
                },
                {
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "addReservoir",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_reservoirNo",
                    "type": "uint256"
                },
                {
                    "name": "_rName",
                    "type": "bytes32"
                },
                {
                    "name": "_barnNo",
                    "type": "uint256"
                },
                {
                    "name": "_stockName",
                    "type": "bytes32"
                },
                {
                    "name": "_name",
                    "type": "bytes32"
                }
            ],
            "name": "addAo",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_name",
                    "type": "bytes32"
                }
            ],
            "name": "isReservoirExist",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "stockNum",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_gNo",
                    "type": "uint256"
                },
                {
                    "name": "_rNo",
                    "type": "uint256"
                },
                {
                    "name": "_rName",
                    "type": "bytes32"
                },
                {
                    "name": "_sBarnNo",
                    "type": "uint256"
                },
                {
                    "name": "_sName",
                    "type": "bytes32"
                },
                {
                    "name": "_aNo",
                    "type": "uint256"
                },
                {
                    "name": "_aName",
                    "type": "bytes32"
                },
                {
                    "name": "_gName",
                    "type": "bytes32"
                },
                {
                    "name": "_gFlag",
                    "type": "bytes32"
                },
                {
                    "name": "_gCurrentCapacity",
                    "type": "bytes32"
                }
            ],
            "name": "addGoods",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_reservoirNo",
                    "type": "uint256"
                },
                {
                    "name": "_rName",
                    "type": "bytes32"
                },
                {
                    "name": "_name",
                    "type": "bytes32"
                },
                {
                    "name": "_type",
                    "type": "bytes32"
                },
                {
                    "name": "_capacity",
                    "type": "uint256"
                },
                {
                    "name": "_validCapacity",
                    "type": "uint256"
                }
            ],
            "name": "addStock",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "reservoirs",
            "outputs": [
                {
                    "name": "rNo",
                    "type": "uint256"
                },
                {
                    "name": "rName",
                    "type": "bytes32"
                },
                {
                    "name": "rSocalCode",
                    "type": "uint256"
                },
                {
                    "name": "rQHDM",
                    "type": "uint256"
                },
                {
                    "name": "rProvince",
                    "type": "bytes32"
                },
                {
                    "name": "rCity",
                    "type": "bytes32"
                },
                {
                    "name": "rCounty",
                    "type": "bytes32"
                },
                {
                    "name": "rTown",
                    "type": "bytes32"
                },
                {
                    "name": "rPostCode",
                    "type": "uint256"
                },
                {
                    "name": "rAddress",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_name",
                    "type": "bytes32"
                }
            ],
            "name": "isStockExist",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_name",
                    "type": "bytes32"
                }
            ],
            "name": "isGoodExist",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "reservoirNum",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "aos",
            "outputs": [
                {
                    "name": "aReservoirNo",
                    "type": "uint256"
                },
                {
                    "name": "aReservoirName",
                    "type": "bytes32"
                },
                {
                    "name": "aBarnNo",
                    "type": "uint256"
                },
                {
                    "name": "aStockName",
                    "type": "bytes32"
                },
                {
                    "name": "aNo",
                    "type": "uint256"
                },
                {
                    "name": "aName",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "type": "function"
        }
    ],
    ClientManagementAbiAbi: [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "c_name",
                    "type": "bytes32"
                },
                {
                    "name": "c_position",
                    "type": "bytes32"
                },
                {
                    "name": "c_legalPerson",
                    "type": "bytes32"
                },
                {
                    "name": "c_legalTel",
                    "type": "uint256"
                },
                {
                    "name": "c_contact",
                    "type": "bytes32"
                },
                {
                    "name": "c_contactTel",
                    "type": "uint256"
                },
                {
                    "name": "c_socialCode",
                    "type": "uint256"
                },
                {
                    "name": "c_fax",
                    "type": "uint256"
                },
                {
                    "name": "c_email",
                    "type": "bytes32"
                },
                {
                    "name": "c_time",
                    "type": "bytes32"
                },
                {
                    "name": "c_province",
                    "type": "bytes32"
                },
                {
                    "name": "c_city",
                    "type": "bytes32"
                }
            ],
            "name": "addClient",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "clientName",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "clientNum",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "c_name",
                    "type": "bytes32"
                }
            ],
            "name": "isAdd",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "c_name",
                    "type": "bytes32"
                }
            ],
            "name": "deleteClient",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "clients",
            "outputs": [
                {
                    "name": "name",
                    "type": "bytes32"
                },
                {
                    "name": "position",
                    "type": "bytes32"
                },
                {
                    "name": "legalPerson",
                    "type": "bytes32"
                },
                {
                    "name": "legalTel",
                    "type": "uint256"
                },
                {
                    "name": "contact",
                    "type": "bytes32"
                },
                {
                    "name": "contactTel",
                    "type": "uint256"
                },
                {
                    "name": "socialCode",
                    "type": "uint256"
                },
                {
                    "name": "fax",
                    "type": "uint256"
                },
                {
                    "name": "email",
                    "type": "bytes32"
                },
                {
                    "name": "time",
                    "type": "bytes32"
                },
                {
                    "name": "province",
                    "type": "bytes32"
                },
                {
                    "name": "city",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "type": "function"
        }
    ],
    StockInManagementAbi: [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_ename",
                    "type": "bytes32"
                },
                {
                    "name": "_gNo",
                    "type": "uint256"
                },
                {
                    "name": "_province",
                    "type": "bytes32"
                },
                {
                    "name": "_city",
                    "type": "bytes32"
                },
                {
                    "name": "_county",
                    "type": "bytes32"
                },
                {
                    "name": "_town",
                    "type": "bytes32"
                },
                {
                    "name": "_pYear",
                    "type": "uint256"
                },
                {
                    "name": "_variety",
                    "type": "bytes32"
                },
                {
                    "name": "_level",
                    "type": "bytes32"
                },
                {
                    "name": "_quantity",
                    "type": "uint256"
                },
                {
                    "name": "_qReport",
                    "type": "bytes32"
                }
            ],
            "name": "stockIn",
            "outputs": [],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "stockInList",
            "outputs": [
                {
                    "name": "ename",
                    "type": "bytes32"
                },
                {
                    "name": "gNo",
                    "type": "uint256"
                },
                {
                    "name": "province",
                    "type": "bytes32"
                },
                {
                    "name": "city",
                    "type": "bytes32"
                },
                {
                    "name": "county",
                    "type": "bytes32"
                },
                {
                    "name": "town",
                    "type": "bytes32"
                },
                {
                    "name": "pYear",
                    "type": "uint256"
                },
                {
                    "name": "variety",
                    "type": "bytes32"
                },
                {
                    "name": "level",
                    "type": "bytes32"
                },
                {
                    "name": "quantity",
                    "type": "uint256"
                },
                {
                    "name": "qReport",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "stockInNum",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        }
    ],
    StockOutManagementAbi: [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "stockOutNum",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "stockOutList",
            "outputs": [
                {
                    "name": "eName",
                    "type": "bytes32"
                },
                {
                    "name": "pName",
                    "type": "bytes32"
                },
                {
                    "name": "pQuantity",
                    "type": "uint256"
                },
                {
                    "name": "pTraceCode",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_ename",
                    "type": "bytes32"
                },
                {
                    "name": "_pname",
                    "type": "bytes32"
                },
                {
                    "name": "_pquantity",
                    "type": "uint256"
                },
                {
                    "name": "_pTraceCode",
                    "type": "uint256"
                }
            ],
            "name": "stockOut",
            "outputs": [],
            "payable": false,
            "type": "function"
        }
    ]

}