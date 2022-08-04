import React, {useEffect} from 'react';
import queries from "../Queries/queries";
import {IUser} from "../interfaces/IUser";


const UserComponent = async () => {
    // const [user, setUser] = React.useState<IUser[]>([]);
    let user = await queries();

    return (
        <div>
            <ul>
                <li>Id: {user.data.id}</li>
                <li>Email: {user.data.email}</li>
                <li>First name: {user.data.first_name}</li>
                <li>Last name: {user.data.last_name}</li>
                <li>Avatar: {user.data.url_avatar}</li>
            </ul>
        </div>
    );
};

export default UserComponent;