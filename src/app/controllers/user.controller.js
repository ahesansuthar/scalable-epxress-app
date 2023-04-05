const BaseController = require('./base.controller');
const logger = require('../../utils/logger');
const { User } = require("../../domain/models/User");
const {DI} = require("../../utils/bootstrap-micro-orm");
const { user } = require('../../configs/mikro-orm.config');
class UserController extends BaseController{
    
    /**
     * Index action
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async index(req, res, next){
        logger.info("Preparing response for all users");
        const { full_name, user_id, password } = req.query;
        console.log(full_name, user_id, password);
        try {
            const user = new User(full_name, user_id, password);
            await DI.userRepository.persistAndFlush(user);
            this.send_success(res,'respond with a resource from controller',[{user:1,name:'express'}]);
        } catch (e) {
            return this.send_error(res,400,e.message);
        }
    }

    /**
     * error_response action
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async error_response(req, res, next){
        // try {
        //     const users = await DI.userRepository.find({});
        //     this.send_success(res,'User List Retrieved',[{users:users}]);
        // } catch (e) {
        //     return this.send_error(res,500,e.message);
        // }
        this.send_error(res,500, 'Server error occur');
    }
}

module.exports = new UserController();