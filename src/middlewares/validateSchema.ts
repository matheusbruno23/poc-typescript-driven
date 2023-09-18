import { errors } from "@/errors/error";
import { NextFunction, Request, Response } from "express";
import Joi, {Schema} from "joi"

type SchemaType<T> = Schema<T>

export function validateSchema<T>(schema: SchemaType<T>) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body)
        if(validation.error) {
            throw errors.wrongData()
        }
        next()
    }
}