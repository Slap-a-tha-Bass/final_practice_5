import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { ReqUsers } from '../../../../types';
import { jwtConfig } from '../../config';
import { insert_user } from '../../db/queries/users';
import { generateHash } from '../../utils/passwords';
const router = express.Router();

router.post('/', async (req: ReqUsers,res) => {
    const { name, email, password } = req.body;
    try {
        const hashed = generateHash(password);
        const newUser = { name, email, password: hashed }
        const register = await insert_user(newUser);
        const token = jwt.sign({ userid: register.insertId, email, role: 'guest'},
        jwtConfig.secret,
        {expiresIn: jwtConfig.expires});
        res.json({ register, token });
        return;
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.sqlMessage})
    }
});

export default router;