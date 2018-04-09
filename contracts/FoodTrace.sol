pragma solidity ^0.4.11;


contract Main{
    
    //����Ա��ַ
    address public administrator;
    
    RegisterManagement public registerManagement;
    AdminManagement public adminManagement;
    ClientManagement public clientManagement;
    WarehouseManagement public warehouseManagement;
    
    
    function Main(){
       administrator = msg.sender;
       registerManagement = new RegisterManagement();
       adminManagement = new AdminManagement();
    }
    
    modifier OnlyAdministrator{
        if(msg.sender != administrator) return;
        _;
    }
    
    modifier OnlyRegister{
        if(!registerManagement.isRegister(registerManagement.addrToName(msg.sender))) return;
        _;
    }
    
    
    //ע����ҵ��Ϣ
    function eRegister(bytes32 e_name,bytes32 e_type,bytes32 e_contact,bytes32 e_position,
                        bytes32 e_legalPerson,uint e_contactTel,uint e_socialCode,uint e_legalID,
                        uint e_fax,uint e_organCode,uint e_legalTel,bytes32 e_email)  returns(bool flag){
      flag = registerManagement.preRegister(e_name,e_type,e_contact,e_position,e_legalPerson,
                        e_contactTel,e_socialCode,e_legalID,e_fax,e_organCode,e_legalTel,e_email);
             registerManagement.addToPendingTask(adminManagement,e_name);
             registerManagement.nameRegister(msg.sender,e_name);
    }
    
    //���ע��
    function auditRegister(bytes32 e_name,uint _statusCode) OnlyAdministrator returns(bool){
        bool flag2 = adminManagement.auditRegisterPart2(e_name,_statusCode,registerManagement);
        bool flag1 = adminManagement.auditRegisterPart1(e_name,_statusCode,registerManagement);
        return flag2 && flag1 ? true : false;
    }
    
    //��ӿͻ� 
    function addNewClient(bytes32 c_name,bytes32 c_position,bytes32 c_legalPerson,uint c_legalTel,
                       bytes32 c_contact,uint c_contactTel,uint c_socialCode,uint c_fax,
                       bytes32 c_email,bytes32 c_time,bytes32 c_province,bytes32 c_city) OnlyRegister{
        clientManagement = ClientManagement(registerManagement.clientManagementAddr(msg.sender));
        clientManagement.addClient(c_name,c_position,c_legalPerson,c_legalTel,c_contact,c_contactTel,
                                c_socialCode,c_fax,c_email,c_time,c_province,c_city);
    }
    
    //ɾ���ͻ� 
    function deleteClient(bytes32 c_name) OnlyRegister returns(bool){
        clientManagement = ClientManagement(registerManagement.clientManagementAddr(msg.sender));
        return clientManagement.deleteClient(c_name);
    }
    
    //��ӿ���
    function addNewReservoir(bytes32 _name,uint _QHDM,bytes32 _province,bytes32 _city,bytes32 _county,
                             bytes32 _town,uint _postCode) OnlyRegister {
        WarehouseManagement warehouseManagement1 = registerManagement.warehouseManagementAddr(msg.sender);
        warehouseManagement1.addReservoir(_name,_QHDM,_province,_city,_county,_town,_postCode,registerManagement,msg.sender);
    }
    
    // //ɾ������
    // function deleteReservoir(bytes32 _name){
        
    // }

    
    //��Ӳֿ� 
    function addNewStock(uint _reservoirNo,bytes32 _rName,bytes32 _name,bytes32 _type,uint _capacity,uint _validCapacity) OnlyRegister{
        WarehouseManagement warehouseManagement1 = registerManagement.warehouseManagementAddr(msg.sender);
        warehouseManagement1.addStock(_reservoirNo,_rName,_name,_type,_capacity,_validCapacity);
    }
    
    //��Ӱ���
    function addNewAo(uint _reservoirNo,bytes32 _rName,uint _barnNo,bytes32 _stockName,bytes32 _name) OnlyRegister {
        WarehouseManagement warehouseManagement1 = registerManagement.warehouseManagementAddr(msg.sender);
        warehouseManagement1.addAo(_reservoirNo,_rName,_barnNo,_stockName,_name);
    }
    
    //��ӻ�λ
    function addNerGoods(uint _gNo,uint _rNo, bytes32 _rName,uint _sBarnNo,bytes32 _sName,uint _aNo,bytes32 _aName,
                      bytes32 _gName,bytes32 _gFlag,bytes32 _gCurrentCapacity) OnlyRegister {
        WarehouseManagement warehouseManagement1 = registerManagement.warehouseManagementAddr(msg.sender);
        warehouseManagement1.addGoods(_gNo,_rNo,_rName,_sBarnNo,_sName,_aNo,_aName,_gName,_gFlag,_gCurrentCapacity);
    }
    
    //����
    function addStockOut(bytes32 _ename,bytes32 _pname,uint _pquantity,uint _pTraceCode) OnlyRegister {
        StockOutManagement stockOutManagement1 = registerManagement.stockOutManagementAddr(msg.sender);
        stockOutManagement1.stockOut(_ename,_pname,_pquantity,_pTraceCode);
    }
    
    //��� 
    function addStockIn(bytes32 _ename,uint _gNo,bytes32 _province,bytes32 _city,bytes32 _county,bytes32 _town,
                     uint _pYear,bytes32 _variety,bytes32 _level,uint _quantity,bytes32 _qReport) OnlyRegister {
        StockInManagement stockInManagement1 = registerManagement.stockInManagementAddr(msg.sender);
        stockInManagement1.stockIn(_ename,_gNo,_province,_city,_county,_town,_pYear,_variety,_level,_quantity,_qReport);
    }
    
    
    
}

/*
 * ע������Լ
 *
 */
contract RegisterManagement{
    
    mapping(address => ClientManagement) public clientManagementAddr;
    mapping(address => WarehouseManagement) public warehouseManagementAddr;
    mapping(address => StockOutManagement) public stockOutManagementAddr;
    mapping(address => StockInManagement) public stockInManagementAddr;
    
    mapping(address => bytes32) public addrToName;
    mapping(bytes32 => address) public nameToAddress;
    
    //��ע����ҵ�б�
    mapping(bytes32 => EnterpriseInfo) public enterprises;
    bytes32[] public enterpriseName;
    uint public enterpriseNum;
    
    //�������ҵ�б�
    mapping(bytes32 => EnterpriseInfo) public preEnterprises;
    bytes32[] public preEnterpriseName;
    uint public preEnterpriseNum;
    
    EnterpriseInfo public enterpriseInfo;
    
     struct EnterpriseInfo{
        bytes32 name;
        bytes32 etype;
        bytes32 contact;
        bytes32 position;
        bytes32 legalPerson;
        uint contactTel;
        uint socialCode;
        uint legalID;
        uint fax;
        uint organCode;
        uint legalTel;
        bytes32 email;
    }
    
    function enterpriseRegister(bytes32 e_name,bytes32 e_type,bytes32 e_contact,bytes32 e_position,
                                bytes32 e_legalPerson,uint e_contactTel,uint e_socialCode,uint e_legalID,
                                uint e_fax,uint e_organCode,uint e_legalTel,bytes32 e_email) returns(bool) {
        if(isRegister(e_name)) return false;
        enterprises[e_name] = EnterpriseInfo(e_name,e_type,e_contact,e_position,e_legalPerson,e_contactTel,
                                             e_socialCode,e_legalID,e_fax,e_organCode,e_legalTel,e_email);
        enterpriseName.push(e_name);
        enterpriseNum++;
       //ClientManager clientManager = new ClientManager();
       // clientManagerAddr[e_name]
        return true;
    }
    
    function nameRegister(address _user,bytes32 _name){
       addrToName[_user] = _name; 
       nameToAddress[_name] = _user;
    }
    
    
    
    function preRegister(bytes32 e_name,bytes32 e_type,bytes32 e_contact,bytes32 e_position,
                                bytes32 e_legalPerson,uint e_contactTel,uint e_socialCode,uint e_legalID,
                                uint e_fax,uint e_organCode,uint e_legalTel,bytes32 e_email) returns(bool){
        if(isPreRegister(e_name)) return false;
        preEnterprises[e_name] = EnterpriseInfo(e_name,e_type,e_contact,e_position,e_legalPerson,e_contactTel,
                                              e_socialCode,e_legalID,e_fax,e_organCode,e_legalTel,e_email);
        preEnterpriseName.push(e_name);
        preEnterpriseNum++;
        return true;
    }
    
    function addToPendingTask(AdminManagement adminManagement,bytes32 e_name){
        adminManagement.addPendingTask(e_name,"currentTime","Audit","ERegister");
    }
    
    function isPreRegister(bytes32 e_name)  returns(bool){
         if(preEnterpriseNum != 0){
            for(uint i=0;i<preEnterpriseNum;i++){
                if(preEnterpriseName[i] == e_name){
                    return true;
                }
            }
        }
        return false;
    }
    
    function isRegister(bytes32 e_name)  returns(bool){
        if(enterpriseNum != 0){
            for(uint i=0;i<enterpriseNum;i++){
                if(enterpriseName[i] == e_name){
                    return true;
                }
            }
        }
        return false;
    }
    
    function getEnterprisePart1(bytes32 e_name)returns(bytes32,bytes32,bytes32,bytes32,bytes32){
        return(preEnterprises[e_name].name,preEnterprises[e_name].etype,preEnterprises[e_name].contact,
               preEnterprises[e_name].position,preEnterprises[e_name].legalPerson);
    }
    
    function getEnterprisePart2(bytes32 e_name)returns(uint,uint,uint,uint,uint,uint,bytes32){
        return(preEnterprises[e_name].contactTel,preEnterprises[e_name].socialCode,preEnterprises[e_name].legalID,
               preEnterprises[e_name].fax,preEnterprises[e_name].organCode,preEnterprises[e_name].legalTel,
               preEnterprises[e_name].email);
    }
    
    function setValuePart1(bytes32 e_name,bytes32 e_type,bytes32 e_contact,bytes32 e_position,bytes32 e_legalPerson){
        enterpriseInfo.name = e_name;
        enterpriseInfo.etype = e_type;
        enterpriseInfo.contact = e_contact;
        enterpriseInfo.position = e_position;
        enterpriseInfo.legalPerson = e_legalPerson;
        enterprises[e_name] = enterpriseInfo;
        enterpriseName.push(e_name); 
        enterpriseNum++;
    }
    
    function setValuePart2(uint e_contactTel,uint e_socialCode,uint e_legalID,
                           uint e_fax,uint e_organCode,uint e_legalTel,bytes32 e_email){
        enterpriseInfo.contactTel = e_contactTel;
        enterpriseInfo.socialCode = e_socialCode;
        enterpriseInfo.legalID = e_legalID;
        enterpriseInfo.fax = e_fax;
        enterpriseInfo.organCode = e_organCode;
        enterpriseInfo.contactTel = e_legalTel;
        enterpriseInfo.email = e_email;
    }
    
    function deletePre(bytes32 e_name){
        uint index = preEnterpriseNum;
        while(preEnterpriseName[index-1] != e_name){
            if(index == 1) return;
            index--;
        }
        for(uint i = index;i<preEnterpriseNum-1;i++){
            preEnterpriseName[i] = preEnterpriseName[i+1]; 
        }
        delete preEnterpriseName[preEnterpriseNum-1];
        preEnterpriseName.length--;
        preEnterpriseNum--;
    }
    
    function createRelevantContract(address _user){
            clientManagementAddr[_user] = new ClientManagement();
            warehouseManagementAddr[_user] = new WarehouseManagement();
            stockOutManagementAddr[_user] = new StockOutManagement();
            stockInManagementAddr[_user] = new StockInManagement();
    }
    
   
    
    
}

/*
 * ����Ա�����Լ
 */
contract AdminManagement{
    
    //���������б�
    mapping(bytes32 => PendingTask) public taskList;
    bytes32[] public taskName;
    uint public taskNum;
    
    
    struct PendingTask{
        bytes32 ename;
        bytes32 time;
        bytes32 task;
        bytes32 business;
        bool rStatus;
    }
    
    
    function addPendingTask(bytes32 e_name, bytes32 a_time,bytes32 a_task,
                            bytes32 a_business){
        taskList[e_name] = PendingTask(e_name,a_time,a_task,a_business,false);
        taskName.push(e_name);
        taskNum++;
    }
    
    
    function auditRegisterPart1(bytes32 e_name,uint statusCode,RegisterManagement registerManagement) returns(bool){
        if(statusCode != 0 && statusCode != 1) return false;
        if(statusCode == 0){
        //   var (name,etype,contact,position,legalPerson,contactTel,socialCode,
        //         legalID,fax,organCode,legalTel,email) = registerManagement.preEnterprises(e_name);
        //   var (name,etype,contact,position,legalPerson,contactTel,socialCode,
        //         legalID,fax,organCode,legalTel,email) = registerManagement.preEnterprises(e_name);
           var(name,etype,contact,position,legalPerson) = registerManagement.getEnterprisePart1(e_name);
           registerManagement.setValuePart1(name,etype,contact,position,legalPerson);
          // bool a = registerManagement.enterpriseInfo();
           taskList[e_name].rStatus = true;
           registerManagement.deletePre(e_name);
           registerManagement.createRelevantContract(registerManagement.nameToAddress(e_name));
           return true; 
        } else {
            registerManagement.deletePre(e_name);    
        }
        
    }
    
    function auditRegisterPart2(bytes32 e_name,uint statusCode,RegisterManagement registerManagement) returns(bool){
        if(statusCode != 0 && statusCode != 1) return false;
        if(statusCode == 0){
            var(contactTel,socialCode,legalID,fax,organCode,legalTel,email) = registerManagement.getEnterprisePart2(e_name);
             registerManagement.setValuePart2(contactTel,socialCode,legalID,fax,organCode,legalTel,email);
            return true;
        }
    }
    
    
}

/*
 * �ͻ������Լ
 *
 */
contract ClientManagement{
    
    RegisterManagement registerManagement;
    //�ͻ��б�
    mapping(bytes32 => ClientInfo) public clients;
    bytes32[] public clientName;
    uint public clientNum;
    
    struct ClientInfo{
        bytes32 name;
        bytes32 position;
        bytes32 legalPerson;
        uint legalTel;
        bytes32 contact;
        uint contactTel;
        uint socialCode;
        uint fax;
        bytes32 email;
        bytes32 time;
        bytes32 province;
        bytes32 city;
    }
    
    function addClient(bytes32 c_name,bytes32 c_position,bytes32 c_legalPerson,uint c_legalTel,
                       bytes32 c_contact,uint c_contactTel,uint c_socialCode,uint c_fax,
                       bytes32 c_email,bytes32 c_time,bytes32 c_province,bytes32 c_city) returns(bool){
        if(isAdd(c_name)) return false;
        clients[c_name] = ClientInfo(c_name,c_position,c_legalPerson,c_legalTel,c_contact,
                                     c_contactTel,c_socialCode,c_fax,c_email,c_time,c_province,c_city);
        clientName.push(c_name);
        clientNum++;
    }
    
    function deleteClient(bytes32 c_name) returns(bool){
        uint index = clientNum;
        while(clientName[index-1] != c_name){
            if(index == 1) return false;
            index--;
        }
        for(uint i = index;i<clientNum-1;i++){
            clientName[i] = clientName[i+1]; 
        }
        delete clientName[clientNum-1];
        clientName.length--;
        clientNum--;
        return true;
    }
    
    function isAdd(bytes32 c_name)  returns(bool){
        if(clientNum != 0){
            for(uint i=0;i<clientNum;i++){
                if(clientName[i] == c_name){
                    return true;
                }
            }
        }
        return false;
    }
    
}


/*
 *  �ֿ�����Լ
 *
 */
contract WarehouseManagement{
    
    ReservoirInfo[] public reservoirs;
    uint public reservoirNum;
    
    
    StockInfo[] public stocks;
    uint public stockNum;
    
    AoInfo[] public aos;
    uint public aoNum;
    
    GoodsInfo[] public goods;
    uint public goodsNum;
    
    
    //������Ϣ 
    struct ReservoirInfo{
        uint rNo;
        bytes32 rName;
        uint rSocalCode;
        uint rQHDM;
        bytes32 rProvince;
        bytes32 rCity;
        bytes32 rCounty;
        bytes32 rTown;
        uint rPostCode;
        bytes32 rAddress;
    }
    
    //�ֿ���Ϣ
    struct StockInfo{
        uint sReservoirNo;
        bytes32 sReservoirName;
        uint sBarnNo;
        bytes32 sName;
        bytes32 sType;
        uint sCapacity;
        uint sValidCapacity;
    }
    
    //������Ϣ
    struct AoInfo{
        uint aReservoirNo;
        bytes32 aReservoirName;
        uint aBarnNo;
        bytes32 aStockName;
        uint aNo;
        bytes32 aName;
    }
    
    //��λ��Ϣ
    struct GoodsInfo{
        uint gNo;
        uint rNo;
        bytes32 rName;
        uint sBarnNo;
        bytes32 sName;
        uint aNo;
        bytes32 aName;
        bytes32 gName;
        bytes32 gFlag;
        bytes32 gCurrentCapacity;
    }
    
    //此处应有问题：参数的数量不对，可能是获取企业数据有误
    function addReservoir(bytes32 _name,uint _QHDM,bytes32 _province,bytes32 _city,bytes32 _county,
                             bytes32 _town,uint _postCode,RegisterManagement _registerManagement,address _user){
        require(isReservoirExist(_name) == false);
        var (,position,,,,,socialCode,,,,,) = _registerManagement.enterprises(_registerManagement.addrToName(_user));
        reservoirs.push(ReservoirInfo(++reservoirNum,_name,socialCode,_QHDM,_province,_city,_county,_town,_postCode,position));
    }
    
    // function delReservoir(bytes32 _name){
    //     uint index = reservoirNum;
    //     while(reservoirs[index-1] != _name){
    //         if(index == 1) return;
    //         index--;
    //     }
    //     for(uint i = index;i<reservoirNum-1;i++){
    //         reservoirs[i] = reservoirs[i+1]; 
    //     }
    //     delete reservoirs[reservoirs-1];
    //     reservoirs.length--;
    //     reservoirNum--;
    // }
    
    
    function addStock(uint _reservoirNo,bytes32 _rName,bytes32 _name,bytes32 _type,uint _capacity,uint _validCapacity){
        require(isStockExist(_name) == false);
        stocks.push(StockInfo(_reservoirNo,_rName,++stockNum,_name,_type,_capacity,_validCapacity));
    }
    
    
    function addAo(uint _reservoirNo,bytes32 _rName,uint _barnNo,bytes32 _stockName,bytes32 _name){
        require(isAoExist(_name) == false);
        aos.push(AoInfo(_reservoirNo,_rName,_barnNo,_stockName,++aoNum,_name));
    }
    
    function addGoods(uint _gNo,uint _rNo, bytes32 _rName,uint _sBarnNo,bytes32 _sName,uint _aNo,bytes32 _aName,
                      bytes32 _gName,bytes32 _gFlag,bytes32 _gCurrentCapacity){
        require(isGoodExist(_gName) == false);
        goods.push(GoodsInfo(_gNo,_rNo,_rName,_sBarnNo,_sName,_aNo,_aName,_gName,_gFlag,_gCurrentCapacity));
    }
    
    
    
    
    function isReservoirExist(bytes32 _name) returns(bool){
        if(reservoirNum == 0) return false;
        for(uint i=0;i<reservoirNum;i++){
            if(reservoirs[i].rName == _name){
                return true;
            }
        }
        return false;
    }
    
    
    function isStockExist(bytes32 _name) returns(bool){
        if(stockNum == 0) return false;
        for(uint i=0;i<stockNum;i++){
            if(stocks[i].sName == _name){
                return true;
            }
        }
        return false;
    }
    
    function isAoExist(bytes32 _name) returns(bool){
        if(aoNum == 0) return false;
        for(uint i=0;i<aoNum;i++){
            if(aos[i].aName == _name){
                return true;
            }
        }
        return false;
    }
    
    function isGoodExist(bytes32 _name) returns(bool){
        if(goodsNum == 0) return false;
        for(uint i=0;i<goodsNum;i++){
            if(goods[i].aName == _name){
                return true;
            }
        }
        return false;
    }
    
    
}


/*
 *  �������Լ
 *
 */
contract StockInManagement{
    
    mapping(bytes32 => StockInInfo[]) public stockInList;
    mapping(bytes32 => uint) public stockInNum;
    
    struct StockInInfo{
        bytes32 ename;
        uint gNo;
        bytes32 province;
        bytes32 city;
        bytes32 county;
        bytes32 town;
        uint pYear;
        bytes32 variety;
        bytes32 level;
        uint quantity;
        bytes32 qReport;
    } 
    
    function stockIn(bytes32 _ename,uint _gNo,bytes32 _province,bytes32 _city,bytes32 _county,bytes32 _town,
                     uint _pYear,bytes32 _variety,bytes32 _level,uint _quantity,bytes32 _qReport){
        stockInList[_ename].push(StockInInfo(_ename,_gNo,_province,_city,_county,_town,_pYear,_variety,_level,_quantity,_qReport));
        stockInNum[_ename]++;
    }
    
}

/*
 *  ��������Լ
 *
 */
contract StockOutManagement{
    
    mapping(bytes32 => StockOutInfo[]) public stockOutList;
    mapping(bytes32 => uint) public stockOutNum;
    
    struct StockOutInfo{
        bytes32 eName;
        bytes32 pName;
        uint pQuantity;
        uint pTraceCode;
    }
    
    function stockOut(bytes32 _ename,bytes32 _pname,uint _pquantity,uint _pTraceCode){
        stockOutList[_ename].push(StockOutInfo(_ename,_pname,_pquantity,_pTraceCode));
        stockOutNum[_ename]++;
    }
    
    
}