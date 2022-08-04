import React, {useEffect, useState} from 'react';
import {getComponent} from "../Queries/queries";
import {IResourceData} from "../interfaces/IResourceData";

import {IUser} from "../interfaces/IUser";
import './UserComponent.css'
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

const UserComponent = () => {
    let [user, setUser] = useState<IResource[]>([])
    useEffect(()=>{
        async function init(){
            let userQuery = await getComponent();
            setUser([userQuery.data])
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
                            <a>
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>
                                </div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>Resource</MDBCardTitle>
                            <MDBCardText>
                                {item.id}) {item.name} {item.year} {item.color} {item.pantone_value}
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            ))}
        </div>

    );
};

export default UserComponent;