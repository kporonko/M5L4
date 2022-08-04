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
import {IResource} from "../interfaces/IResource";
import {IUser} from "../interfaces/IUser";
import {IUserData} from "../interfaces/IUserData";

const ListComponent = () => {
    let [user, setUser] = useState<IUser[]>([])
    useEffect(()=>{
        async function init(){
            let userQuery = await getUsersList();
            userQuery.map((item) =>
            {
                setUser([item.data])
            })
        }
        init();
    }, []);
    return (
        <div>
            {user.map(item => (
                <div className="center">
                    Single Resource Query
                    <MDBCard>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage className={item.avatar} src={item.avatar} position='top' alt='...'/>
                            <a>
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>

                                </div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>User</MDBCardTitle>
                            <MDBCardText>
                                {item.id}) {item.first_name} {item.last_name} {item.email}
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            ))}
        </div>

    );
};

export default ListComponent;