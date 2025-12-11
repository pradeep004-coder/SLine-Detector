import joi from "joi";

const userValidation = (req, res, next) => {
 const schema = joi.object({
        name: joi.string().min(3).required(),
        age: joi.number().min(0).max(150).required(),
        gender: joi.string().max(1).required(),
        SLine: joi.number().min(0).max(150).required()
    })

    const {error} = schema.validate(req.body);
    if (error) {
        return res.status(400).json({message: 'incorrect request', error});
    }
    next();
}

export default userValidation;