import { Error } from "@/protocols/types";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export default function errorHandler(error: Error , req: Request, res: Response, next: NextFunction){
    console.log(error)
    if(error.type === "conflict"){
        return res.status(httpStatus.CONFLICT).send(error.message)
    }
    if(error.type === "notFound"){
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }
    if(error.type === "wrongData"){
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong.")
}