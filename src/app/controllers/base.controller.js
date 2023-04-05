
class BaseController {
    
    send_jason (res, code, response_message) {
        return res.status(code).json({message:response_message});
    }
    /**
     * This method is helpful for sending success response from controller
     * @param {*} res 
     * @param {*} success_message 
     * @param {*} data 
     */
    send_success (res,success_message, data={}) {
        return res.send({message:success_message,data:data});
    }
    
    /**
     * This method is helpful for sending error response from controller
     * @param {*} res 
     * @param {*} error_message 
     * @param {*} error_code 
     */
    send_error (res,error_code, error_message) {
        return this.send_jason(res, error_code, error_message);
    }

    /**
     * This method will be useful for sending unathorized response
     * @param {*} res 
     * @param {*} error_message 
     * @returns 
     */
    send_unauthorized (res, error_message) {
        return this.send_jason(res, 401, error_message?error_message:'Unauthorized')
    }

    /**
     * This method will be useful for sending forbidden response
     * @param {*} res 
     * @param {*} error_message 
     * @returns 
     */
    send_fobidden (res, error_message) {
        return this.send_jason(res, 403, error_message?error_message:'Forbidden')
    }

    /**
     * If resourse is not available this method will be helpful for sending the response
     * @param {*} res 
     * @param {*} error_message 
     * @returns 
     */
    send_not_found (res, error_message) {
        return this.send_jason(res, 404, error_message?error_message:'Not found')
    }

    /**
     * If client tries to send request too many time in given time interval we can stop client by sending this response
     * @param {*} res 
     * @param {*} error_message 
     * @returns 
     */
    send_too_many (res, error_message) {
        return this.send_jason(res, 429, error_message?error_message:'Too many requests')
    }
}

module.exports = BaseController;