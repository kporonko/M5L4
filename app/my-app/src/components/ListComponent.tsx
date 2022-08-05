import React, {useEffect, useState} from 'react';
import {getUsersList} from "../Queries/queries";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';
import {IUser} from "../interfaces/IUser";
import {debug} from "util";



const ListComponent = () => {
    let [users, setUsers] = useState<IUser[]>([])
    function deleteUser (user:IUser) {
        setUsers(prevUsers => {
        console.log(prevUsers)
        console.log(users)
        prevUsers.splice(prevUsers.indexOf(user), 1);
        console.log(prevUsers)
        console.log(users)
        return [...prevUsers]
        })

        // console.log(users)
        // users.splice(users.indexOf(user), 1);
        // console.log(users)
        // debugger
        // setUsers(
        //     users
        // )
    }
    useEffect(()=>{
        async function init(){
            let userQuery = await getUsersList();
            console.log("userQuery");
            console.log(userQuery);
            console.log(users)
            setUsers(userQuery);
            console.log(users)
        }
        init();
    }, []);
    return (
        <div>
            <h1 className="Header">List Users Query</h1>
            <div className="flex-div">
                {users.map(item => (
                    <div key={item.id} className="center">
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage className={item.avatar} src={item.avatar} position='top'/>
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>
                                </div>
                            </MDBRipple>
                            <MDBCardBody onClick={()=>deleteUser(item)}>
                                <MDBCardTitle>User</MDBCardTitle>
                                <MDBCardText>
                                    {item.id} {item.first_name} {item.last_name} {item.email}
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ListComponent;