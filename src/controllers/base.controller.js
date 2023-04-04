
class BaseController {

    send_success(res,success_message, data=[]) {
        res.send({message:success_message,data:data});
    }
    
    send_error(res, error_message, error_code){
        res.status(error_code).send({message:error_message});
    }
}

module.exports = BaseController;