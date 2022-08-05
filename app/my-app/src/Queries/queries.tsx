import {IUserData} from "../interfaces/IUserData";
import React from "react";
import {IUser} from "../interfaces/IUser";
import {IResource} from "../interfaces/IResource";
import {IResourceData} from "../interfaces/IResourceData";
import {ICreate} from "../interfaces/ICreate";
import {IUpdate} from "../interfaces/IUpdate";
import {IDelete} from "../interfaces/IDelete";

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

export async function getUsersList(): Promise<IUser[]> {
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
export async function getResourcesList(): Promise<IResource[]> {
    const result: Response = await fetch(`https://reqres.in/api/unknown`);
    console.log(result)
    const body = await result.json();

    console.log("Body Response: ");
    console.log(body);

    const castedBody = body.data;

    console.log("CastedBody Response: ");
    console.log(castedBody);

    return (
        castedBody
    );
}

export async function create(): Promise<ICreate> {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'morpheus', job: 'leader' })
    };
    const result: Response = await fetch(`https://reqres.in/api/users`, requestOptions);
    console.log(result)
    const body = await result.json();

    console.log("Body Response: ");
    console.log(body);

    const castedBody = body;

    console.log("CastedBody Response: ");
    console.log(castedBody);

    return (
        castedBody
    );
}

export async function update(props:string): Promise<IUpdate> {
    const requestOptions = {
        method: props,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'morpheus', job: 'zion president' })
    };
    const result: Response = await fetch(`https://reqres.in/api/users/2`, requestOptions);
    console.log(result)
    const body = await result.json();

    console.log("Body Response: ");
    console.log(body);

    const castedBody = body;

    console.log("CastedBody Response: ");
    console.log(castedBody);

    return (
        castedBody
    );
}



export async function deleteUser(): Promise<number> {
    const result: Response = await fetch(`https://reqres.in/api/users/2`, {method:'DELETE'});
    console.log(result)

    return (
        result.status
    );
}

export default getUser();
