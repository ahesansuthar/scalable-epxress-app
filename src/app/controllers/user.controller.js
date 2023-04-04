const BaseController = require('./base.controller');
const logger = require('../../utils/logger');

class UserController extends BaseController{
    
    /**
     * Index action
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    index(req, res, next){
        logger.info("Sending response from index action");
        logger.debug("Yes this debug log also be printed");
        this.send_success(res,'respond with a resource from controller',[{user:1,name:'express'}]);
    }

    /**
     * error_response action
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    error_response(req, res, next){
        this.send_error(res,500, 'Server error occur');
    }
}

module.exports = new UserController();