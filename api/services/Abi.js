module.exports = {
  DataSharingAbi: [
    {
      "constant": false,
      "inputs": [],
      "name": "searchDataByOwner",
      "outputs": [
        {
          "name": "",
          "type": "bytes32[]"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "register",
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
          "name": "dataName",
          "type": "bytes32"
        },
        {
          "name": "requestAddress",
          "type": "address"
        }
      ],
      "name": "rejectDataRequest",
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
          "name": "dataName",
          "type": "bytes32"
        }
      ],
      "name": "showDataRequestStatus",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "dataName",
          "type": "bytes32"
        }
      ],
      "name": "requestData",
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
          "name": "dataName",
          "type": "bytes32"
        },
        {
          "name": "dataDescription",
          "type": "string"
        },
        {
          "name": "ownerAddr",
          "type": "address"
        },
        {
          "name": "capability",
          "type": "bytes32"
        },
        {
          "name": "dataHash",
          "type": "bytes32"
        }
      ],
      "name": "publishData",
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
      "name": "userRegister",
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
      "name": "dataObject",
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
          "name": "dataName",
          "type": "bytes32"
        }
      ],
      "name": "showDataRequestList",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "dataName",
          "type": "bytes32"
        }
      ],
      "name": "getDataByCapability",
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
      "name": "requestManagement",
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
      "name": "owner",
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
      "name": "accessManagement",
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
          "name": "dataName",
          "type": "bytes32"
        }
      ],
      "name": "showDataCap",
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
          "name": "dataName",
          "type": "bytes32"
        },
        {
          "name": "requestAddress",
          "type": "address"
        }
      ],
      "name": "confirmDataRequest",
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
      "name": "dataRegister",
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
          "name": "_applicant",
          "type": "address"
        }
      ],
      "name": "getResisterStatus",
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
          "name": "_stockBasicInfo",
          "type": "address"
        }
      ],
      "name": "setStockBasicAddress",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getStockOutAddress",
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
          "name": "_stockOut",
          "type": "address"
        }
      ],
      "name": "setStockOutAddress",
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
      "name": "addressArrays",
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
      "name": "addressArraysNum",
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
          "name": "_applicant",
          "type": "address"
        }
      ],
      "name": "weatherRepetition",
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
          "name": "_applicant",
          "type": "address"
        }
      ],
      "name": "getResisterInfo",
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
        }
      ],
      "name": "getStockInAddress",
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
      "name": "stockBasicAddress",
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
      "name": "stockOutAddress",
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
      "name": "stockInAddress",
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
      "name": "registerAddress",
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
          "name": "_applicant",
          "type": "address"
        }
      ],
      "name": "reject",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_applicant",
          "type": "address"
        }
      ],
      "name": "approved",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getStockBasicAddress",
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
          "name": "_applicant",
          "type": "address"
        },
        {
          "name": "_register",
          "type": "address"
        }
      ],
      "name": "setRegisterAddress",
      "outputs": [],
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
          "name": "_stockIn",
          "type": "address"
        }
      ],
      "name": "setStockInAddress",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_administrator",
          "type": "address"
        },
        {
          "name": "_stringUtils",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "constructor"
    }
  ],
  UserManagementAbi: [
    {
      "constant": false,
      "inputs": [
        {
          "name": "coName",
          "type": "string"
        },
        {
          "name": "coAddress",
          "type": "string"
        },
        {
          "name": "corpName",
          "type": "string"
        },
        {
          "name": "corpId",
          "type": "uint256"
        },
        {
          "name": "tel",
          "type": "uint256"
        },
        {
          "name": "fax",
          "type": "uint256"
        }
      ],
      "name": "register",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getResisterInfo",
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
      "name": "stringUtils",
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
          "name": "_buyer",
          "type": "address"
        },
        {
          "name": "_buyerName",
          "type": "string"
        },
        {
          "name": "_stockName",
          "type": "string"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "sell",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "stockIn",
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
          "name": "_seller",
          "type": "address"
        },
        {
          "name": "_sellerName",
          "type": "string"
        },
        {
          "name": "_stockName",
          "type": "string"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        },
        {
          "name": "_qrCode",
          "type": "uint256"
        }
      ],
      "name": "store",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "stockOut",
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
      "name": "coStockBasicInformation",
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
          "name": "_stockName",
          "type": "string"
        },
        {
          "name": "_stockId",
          "type": "uint256"
        },
        {
          "name": "_stockType",
          "type": "string"
        },
        {
          "name": "_inventory",
          "type": "uint256"
        },
        {
          "name": "_stockNum",
          "type": "uint256"
        },
        {
          "name": "_storeRoomNum",
          "type": "uint256"
        },
        {
          "name": "_posNum",
          "type": "uint256"
        },
        {
          "name": "_qrCode",
          "type": "uint256"
        }
      ],
      "name": "registerBasicInfo",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    }
  ],
  RegisterAbi:[
    {
      "constant": false,
      "inputs": [
        {
          "name": "_coName",
          "type": "string"
        },
        {
          "name": "_coAddress",
          "type": "string"
        },
        {
          "name": "_corpName",
          "type": "string"
        },
        {
          "name": "_corpId",
          "type": "uint256"
        },
        {
          "name": "_tel",
          "type": "uint256"
        },
        {
          "name": "_fax",
          "type": "uint256"
        }
      ],
      "name": "register",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "registerInfo",
      "outputs": [
        {
          "name": "coName",
          "type": "string"
        },
        {
          "name": "coAddress",
          "type": "string"
        },
        {
          "name": "corpName",
          "type": "string"
        },
        {
          "name": "corpId",
          "type": "uint256"
        },
        {
          "name": "tel",
          "type": "uint256"
        },
        {
          "name": "fax",
          "type": "uint256"
        },
        {
          "name": "rStatus",
          "type": "uint8"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "approved",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "reject",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
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
      "name": "registerStatus",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getResisterStatus",
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
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "constructor"
    }
  ],
  CoStockBasicInformationAbi:[
    {
      "constant": false,
      "inputs": [
        {
          "name": "_stockName",
          "type": "string"
        },
        {
          "name": "_inventory",
          "type": "uint256"
        }
      ],
      "name": "updateInventory",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_stockName",
          "type": "string"
        }
      ],
      "name": "getStockInventory",
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
      "name": "stockName",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_stockName",
          "type": "string"
        }
      ],
      "name": "getStockQrCode",
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
      "inputs": [],
      "name": "owner",
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
      "name": "stockNameNum",
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
          "name": "_stockName",
          "type": "string"
        },
        {
          "name": "_stockId",
          "type": "uint256"
        },
        {
          "name": "_stockType",
          "type": "string"
        },
        {
          "name": "_inventory",
          "type": "uint256"
        },
        {
          "name": "_stockNum",
          "type": "uint256"
        },
        {
          "name": "_storeRoomNum",
          "type": "uint256"
        },
        {
          "name": "_posNum",
          "type": "uint256"
        },
        {
          "name": "_qrCode",
          "type": "uint256"
        }
      ],
      "name": "registerBasicInfo",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_stringUtils",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "constructor"
    }
  ],
  StockInAbi:[
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "storeRecord",
      "outputs": [
        {
          "name": "stockName",
          "type": "string"
        },
        {
          "name": "seller",
          "type": "address"
        },
        {
          "name": "sellerName",
          "type": "string"
        },
        {
          "name": "quantity",
          "type": "uint256"
        },
        {
          "name": "qrCode",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
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
      "name": "sellersNum",
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
          "type": "address"
        }
      ],
      "name": "storeRecordNum",
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
      "name": "sellers",
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
          "name": "_stockBasicInfo",
          "type": "address"
        },
        {
          "name": "_seller",
          "type": "address"
        },
        {
          "name": "_sellerName",
          "type": "string"
        },
        {
          "name": "_stockName",
          "type": "string"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        },
        {
          "name": "_qrCode",
          "type": "uint256"
        }
      ],
      "name": "store",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "constructor"
    }
  ],
  StockOutAbi:[
    {
      "constant": true,
      "inputs": [],
      "name": "buyersNum",
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
      "inputs": [],
      "name": "owner",
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
          "name": "_stockBasicInfo",
          "type": "address"
        },
        {
          "name": "_buyer",
          "type": "address"
        },
        {
          "name": "_buyerName",
          "type": "string"
        },
        {
          "name": "_stockName",
          "type": "string"
        },
        {
          "name": "_quantity",
          "type": "uint256"
        }
      ],
      "name": "sell",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "coStockBasicInformation",
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
          "type": "uint256"
        }
      ],
      "name": "buyers",
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
      "name": "sellRecordNum",
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
          "type": "address"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "sellRecord",
      "outputs": [
        {
          "name": "stockName",
          "type": "string"
        },
        {
          "name": "buyer",
          "type": "address"
        },
        {
          "name": "buyerName",
          "type": "string"
        },
        {
          "name": "quantity",
          "type": "uint256"
        },
        {
          "name": "qrCode",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "constructor"
    }
  ]
}