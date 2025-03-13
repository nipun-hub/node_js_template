import userService from "../services/user.service.js";
import { successResponse, notFoundResponse, serverErrorResponse, badRequestResponse } from "../utils/response.utils.js";

class UserController {
    async getAllUsers(req, res) {
        try {
            const response = await userService.getAllUsers();
            successResponse(res, "Data retrieved successfully", response);
        } catch (error) {
            serverErrorResponse(res, error.message || "An unexpected error occurred");
        }
    }

    async getUserById(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return badRequestResponse(res, "User ID is required");
            }

            const response = await userService.getUserById(id);
            if (!response) {
                return notFoundResponse(res, `User with ID ${id} not found`);
            }

            successResponse(res, "Data retrieved successfully", response);
        } catch (error) {
            serverErrorResponse(res, error.message || "An unexpected error occurred");
        }
    }

    async createUser(req, res) {
        try {
            const { name, email } = req.body;
            if (!name || !email) {
                return badRequestResponse(res, "Name and email are required");
            }

            const response = await userService.createUser({ name, email });
            successResponse(res, "User created successfully", response);
        } catch (error) {
            serverErrorResponse(res, error.message || "An unexpected error occurred");
        }
    }

    async updateUser(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return badRequestResponse(res, "User ID is required");
            }

            const response = await userService.updateUser(id,  req.body);
            if (!response) {
                return notFoundResponse(res, `User with ID ${id} not found`);
            }

            successResponse(res, "User updated successfully", response);
        } catch (error) {
            serverErrorResponse(res, error.message || "An unexpected error occurred");
        }
    }

    async deleteUser(req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                return badRequestResponse(res, "User ID is required");
            }

            const response = await userService.deleteUser(id);
            if (!response) {
                return notFoundResponse(res, `User with ID ${id} not found`);
            }

            successResponse(res, "User deleted successfully", response);
        } catch (error) {
            serverErrorResponse(res, error.message || "An unexpected error occurred");
        }
    }
}

export default new UserController();
