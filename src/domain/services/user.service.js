const { User } = require("../../domain/models/User");
const { DI } = require("../../utils/bootstrap-micro-orm");
const { wrap } = require("@mikro-orm/core");

class UserService {
    /**
     * This method will return all users from database tables
     * @returns
     */
    async get_all_users () {
        return await DI.userRepository.find({});
    }

    /**
     *  this method will create new user in app_users table
     */
    async create_user (full_name, user_id, password) {
        try {
            const user = new User(full_name, user_id, password);
            await DI.userRepository.persistAndFlush(user);
            return true;
        } catch (error) {
            throw error;
        }
    }

    /**
     *  this method will update existing user in app_users table
     */
    async update_user (id, full_name, user_id) {
        try {
            const update_user_by_id = await DI.userRepository.findOne({ id });
            if (update_user_by_id.id !== id) throw new Error("User not found");

            let updated_user_values = wrap(update_user_by_id).assign({
                ...update_user_by_id,
                full_name: full_name,
                user_id: user_id,
            });
            console.log(updated_user_values);
            await DI.userRepository.persistAndFlush(updated_user_values);

            return true;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserService();
