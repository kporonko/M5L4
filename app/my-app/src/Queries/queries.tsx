import {IUserData} from "../interfaces/IUserData";
import React from "react";
import {IUser} from "../interfaces/IUser";
import {IResource} from "../interfaces/IResource";
import {IResourceData} from "../interfaces/IResourceData";

export async function getUser(): Promise<IUserData> {
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

export async function getUsersList(): Promise<IUserData[]> {
    debugger
    const result: Response = await fetch(`https://reqres.in/api/users?page=2`);
    const body = await result.json();

    console.log("Body Response: ");
    console.log(body);

    //const castedBody = body as IUserData[]; // cast using as operator.
    const castedBody = body.data; // cast using as operator.

    console.log("CastedBody Response: ");
    console.log(castedBody);

    return (
        castedBody
    );
}
export async function getComponent(): Promise<IResourceData> {
    const result: Response = await fetch(`https://reqres.in/api/unknown/2`);
    const body = await result.json();

    console.log("Body Response: ");
    console.log(body);

    const castedBody = body as IResourceData;

    console.log("CastedBody Response: ");
    console.log(castedBody);

    return (
        castedBody
    );
}

