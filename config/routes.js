/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  //'/': {
  //  view: 'homepage'
  // }
  'post /api/Account/createAccount': 'Account.createAccount',
  'get /api/Account/getAccounts': 'Account.getAccounts',
  'get /api/Account/getBalance': 'Account.getBalance',
  'post /api/Account/transfer': 'Account.transferAccount',
  'get /api/Contract/public': 'Contract.publicVariable',
  'post /api/Contract/company/register': 'Contract.registerCompany',
  'post /api/Contract/company/registerBasicInfo': 'Contract.registerBasicInfo',

  //管理员,审核公司注册信息
  'post /api/Admin/auditRegister': 'Admin.auditRegister',
  //管理员登录
  'post /api/Admin/adminLogin':'Login.adminLogin',
  //企业登录
  'post /api/Company/login':'Login.login',
  /**
  * 新的粮食追溯合约接口
  * get方法
  */
  'get /api/Contract/basicContractInfo':'Contract.basicContractInfo',

  //企业注册公司信息
  'post /api/Company/enterpriseRegister':'Company.enterpriseRegister',
  //企业添加库区
  'post /api/Company/addNewReservoir':'Company.addNewReservoir',
  //企业添加仓库
  'post /api/Company/addNewStock':'Company.addNewStock',
  //企业添加敖间
  'post /api/Company/addNewAo':'Company.addNewAo',
  //企业添加货位
  'post /api/Company/addNewGoods':'Company.addNerGoods',
  //企业出库登记
  'post /api/Company/addStockOut':'Company.addStockOut',
  //企业入库登记
  'post /api/Company/addStockIn':'Company.addStockIn',

  //查询
  //企业预注册信息
  'get /api/Search/getPreEnterprises':'Search.getPreEnterprises',
  //企业注册信息
  'get /api/Search/getEnterprises':'Search.getEnterprises',
  //管理员的待审核信息
  'get /api/Search/getPendingTask':'Search.getPendingTask',
  //查询库区信息getReservoirs
  'get /api/Search/getReservoirs':'Search.getReservoirs',
  //查询仓库信息
  'get /api/Search/getStocks':'Search.getStocks',
  //查询厫间信息
  'get /api/Search/getAos':'Search.getAos',
  //查询货位信息
  'get /api/Search/getGoods':'Search.getGoods',
  //查询入库信息
  'get /api/Search/getStockInList':'Search.getStockInList',
  //查询出库信息
  'get /api/Search/getStockOutList':'Search.getStockOutList',
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
