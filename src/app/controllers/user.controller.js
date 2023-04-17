const BaseController = require("./base.controller");
const logger = require("../../utils/logger");
const UserService = require("../../domain/services/user.service");

class UserController extends BaseController {
    /**
   * Index action updated for git commit
   */
    async index (req, res) {
        this.send_success(res, "respond with a resource from controller", [
            { user: "New user", id: 45 },
        ]);
    }

    /**
   * Listing all users
   */
    async list(req, res) {
        logger.info("Listing all users");
        const { full_name, user_id, password } = req.body;

        try {
            const users = await UserService.get_all_users(
                full_name,
                user_id,
                password
            );
            this.send_success(res, "User List.", { users: users });
        } catch (e) {
            logger.error("Error occurs while creating new user. Reason:" + e.message);
            return this.send_error(res, 400, e.message);
        }
    }

    /**
   * create new user action updated action
   */
    async create (req, res) {
        logger.info("Creating new user");
        const { full_name, user_id, password } = req.body;

        try {
            await UserService.create_user(full_name, user_id, password);
            this.send_success(res, "User created successfully.", [
                { user: full_name, id: user_id },
            ]);
        } catch (e) {
            logger.error("Error occurs while creating new user. Reason:" + e.message);
            return this.send_error(res, 400, e.message);
        }
    }

    /**
   * Update exsiting user action
   */
    async update (req, res) {
        logger.info("Updating existing user");
        const { id, full_name, user_id } = req.body;
        console.log("user_id", id);
        try {
            await UserService.update_user(id, full_name, user_id);
            this.send_success(res, "User updated successfully.", [
                { user: full_name, id: user_id },
            ]);
        } catch (e) {
            logger.error("Error occurs while updating user. Reason:" + e.message);
            return this.send_error(res, 400, e.message);
        }
    }

    /**
   * error_response action
   */
    async error_response (req, res) {
        this.send_error(res, 500, "Server error occur");
    }
}

module.exports = new UserController();
