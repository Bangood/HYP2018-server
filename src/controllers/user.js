import Model from '../models/user';

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
export { create, findById, update };