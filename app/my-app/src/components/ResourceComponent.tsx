import React, {useEffect, useState} from 'react';
import {getComponent} from "../Queries/queries";
import {IResourceData} from "../interfaces/IResourceData";

import {IUser} from "../interfaces/IUser";
import './Styles.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';
import {IResource} from "../interfaces/IResource";
import ResourceCard from "./ResourceCard";
import Empty from "./Empty";
import UserCard from "./UserCard";

const UserComponent = () => {
    let [user, setUser] = useState<IResource[]>([])
    useEffect(()=>{
        async function init(){
            let userQuery = await getComponent();

            if (Object.keys(userQuery).length !== 0)
                setUser([userQuery.data])
            {console.log(Object.keys(userQuery).length === 0)}
        }
        init();
    }, []);
    return (
        <div>
            <h1 className="Header">Single Resource Query</h1>
                <div className="center">
                    {Object.keys(user).length === 0 ? <Empty/> :
                        <ResourceCard item={user[0]}/>
                    }
                </div>
        </div>

    );
};

export default UserComponent;