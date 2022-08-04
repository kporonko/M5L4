import React, {useEffect, useState} from 'react';
import queries from "../Queries/queries";
import {IUser} from "../interfaces/IUser";
import './UserComponent.css'

const UserComponent = () => {
    let [user, setUser] = useState<IUser[]>([])
    useEffect(()=>{
        async function init(){
            let userQuery = await queries();
            setUser([userQuery.data])
        }
        init();
    }, []);
    return (
        <div className="main-div">
            <h1 className="main-h1">User</h1>
            {user.map(item => (
                <ul>
                    <li>Id: {item.id}</li>
                    <li>Email: {item.email}</li>
                    <li>First name: {item.first_name}</li>
                    <li>Last name: {item.last_name}</li>
                    <li>Avatar: {item.url_avatar}</li>
                </ul>
            ))}
        </div>
    );
};

export default UserComponent;