import Model from '../models/user';
import Jwt from 'jsonwebtoken';

async function create($ctx) {
    const { email, password, confirmPassword, fullName } = $ctx.request.body;
    try {
        await Model.create({
            name: fullName,
            email: email,
            password: password,
            confirm_password: confirmPassword
        });
        $ctx.ok({ error: null });
    } catch ($err) {
        $ctx.ok({ error: $err.message });
    }

}

async function findById($ctx) {
    try {
        const user = await Model.findById($ctx.params.id);
        $ctx.ok({ data: user });
    } catch ($err) {
        $ctx.ok({ error: $err.message });
    }
}

async function update($ctx) {
    try {
        const user = await Model.findByIdAndUpdate($ctx.params.id, {
            name: $ctx.request.body.name
        }, {
                new: true,
                runValidators: true
            });
        $ctx.ok({ data: user });
    } catch ($err) {
        $ctx.ok({ error: $err.message });
    }
}

async function login($ctx) {
    const { email, password } = $ctx.request.body;
    try {
        const user = await Model.findByName(email);
        if (!user) {
            return $ctx.ok({ error: '该用户不存在' });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return $ctx.ok({ error: '用户名或密码错误' });
        }
        const token = genToken(user);
        $ctx.ok({ data: { token: token } });
    } catch ($err) {
        $ctx.ok({ error: $err.message });
    }
}

function genToken($user) {
    const token = Jwt.sign({
        id: $user._id
    }, '5201314', { expiresIn: 60 * 60 * 24 });
    return token;
}

export { create, findById, update, login };