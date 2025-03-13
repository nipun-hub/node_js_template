import bcrypt from 'bcryptjs';
import User from "../models/User.js";

class AuthService {
    async login({ email, password }) {
        try {
            if (!email || !password) {
                throw new Error('Email and password are required');
            }

            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailRegex.test(email)) {
                throw new Error('Invalid email');
            }

            if (password.length < 8) {
                throw new Error('Password must be at least 8 characters');
            }

            const user = await User.findOne({ where: { email } });
            if (!user) {
                throw new Error('User not found');
            }

            // Compare the provided password with the hashed password in the database
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                throw new Error('Invalid password');
            }
            return "User logged in successfully";
        } catch (error) {
            throw new Error(error.message || 'User logged error');
        }
    }

    async register({ fname, lname, email, password }) {
        try {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!emailRegex.test(email)) {
                throw new Error('Invalid email');
            }

            if (password.length < 8) {
                throw new Error('Password must be at least 8 characters');
            }

            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                throw new Error('User already exists');
            }

            //hashed password
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User.create({ firstName: fname, lastName: lname, email, password: hashedPassword });
            return user;
        } catch (error) {
            throw new Error(error.message || 'User registered error');
        }
    }
}

export default new AuthService();