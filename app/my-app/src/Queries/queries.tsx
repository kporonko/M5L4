import {IUserData} from "../interfaces/IUserData";
import React from "react";
import {IUser} from "../interfaces/IUser";

const getUser = async (): Promise<IUserData> => {
    const result: Response = await fetch(`https://reqres.in/api/users/2`);
    const body = await result.json();

    console.log("Body Response: ");
    console.log(body);

    const castedBody = body as IUserData; // cast using as operator.

    console.log("CastedBody Response: ");
    console.log(castedBody);

    return (
        castedBody
    );
}

export default getUser;