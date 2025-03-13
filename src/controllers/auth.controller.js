import AuthService from '../services/auth.service.js';
import { serverErrorResponse, successResponse } from '../utils/response.utils.js';


class AuthController {
    async login(req, res) {
        try {
            const userData = req.body;
            const user = await AuthService.login(userData);
            successResponse(res, "User logged in successfully", user);
        } catch (error) {
            serverErrorResponse(res, error.message || "An unexpected error occurred");
        }
    }
    async register(req, res) {
        try {
            const userData = req.body;
            await AuthService.register(userData);
            successResponse(res, "User registered successfully");
        } catch (error) {
            serverErrorResponse(res, error.message || "An unexpected error occurred");
        }
    }
    async logout(req, res) { }
    async refresh(req, res) { }
}

export default new AuthController();