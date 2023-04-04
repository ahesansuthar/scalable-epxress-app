const BaseController = require('./base.controller');

class UserController extends BaseController{
    
    index(req, res, next){
        this.send_success(res,'respond with a resource from controller',[{user:1,name:'express'}]);
    }

    error_response(req, res, next){
        this.send_error(res,'Un authorize request',401);
    }
}

module.exports = new UserController();