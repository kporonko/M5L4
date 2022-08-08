import React, {useEffect, useState} from 'react';
import {getUser} from "../Queries/queries";
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
import Empty from "./Empty";
import {map} from "react-bootstrap/ElementChildren";
import DeleteComponent from "./DeleteComponent";
import UserCard from "./UserCard";

const UserComponent = () => {
    let [user, setUser] = useState<IUser[]>([])
    useEffect(()=>{
        async function init(){
            let userQuery = await getUser();
            console.log(userQuery)
            if (Object.keys(userQuery).length !== 0)
                setUser([userQuery.data])
            {console.log(Object.keys(userQuery).length === 0)}
        }
        init();
    }, []);
    return (
        <div>
            <h1 className="Header">Single User Query</h1>
            {Object.keys(user).length === 0 ? <Empty/> :
                <UserCard item={user[0]}/>
            }
        </div>

    );
};

export default UserComponent;