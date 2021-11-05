import { User } from "../../interface/user.interface"

import db from "../../db";

const GetUser = async (ctx : any) => {

    ctx.body = { 
        msg: "The user has been fetched."
    }
};

const InsertUser = async (ctx : any) => {
    const data = <User>ctx.request.body;
    ctx.body = { 
        name : data.name,
        age : data.age,
        favorite : data.favorite
    }
};

export {
    GetUser,
    InsertUser
};