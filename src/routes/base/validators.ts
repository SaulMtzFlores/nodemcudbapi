import { commonBase } from "../../routes/base.validators"
import { Joi } from "../../core/joi"
import { pagination } from "../../routes/base.validators";

export const baseModel = Joi.object({
    ...commonBase
}).options({ allowUnknown: true });

export const getAllModel = Joi.object({
    data: Joi.array().items(baseModel),
    pagination
}).required();

export const newModel = Joi.object({
    name: Joi.string().required(),
    active: Joi.boolean().optional()
}).required();

export const editModelV = Joi.object({
    name: Joi.string().optional(),
    active: Joi.boolean().optional()
}).required();