import User from "../models/User.js";

class UserService {
    async getAllUsers() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            throw new Error(error.message || "Failed to retrieve users");
        }
    }

    async getUserById(id) {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        } catch (error) {
            throw new Error(error.message || "Failed to retrieve user");
        }
    }

    async createUser({ name, email }) {
        try {
            const newUser = await User.create({ name, email });
            return newUser;
        } catch (error) {
            throw new Error(error.message || "Failed to create user");
        }
    }

    async updateUser(id, { fname, lname, email }) {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error("User not found");
            }
            user.firstName = fname || user.firstName;
            user.lastName = lname || user.lastName;
            user.email = email || user.email;
            await user.save();
            return user;
        } catch (error) {
            throw new Error(error.message || "Failed to update user");
        }
    }

    async deleteUser(id) {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error("User not found");
            }
            await user.destroy();
            return { message: "User deleted successfully" };
        } catch (error) {
            throw new Error(error.message || "Failed to delete user");
        }
    }
}

export default new UserService();
