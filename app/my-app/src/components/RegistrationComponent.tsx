import React, {useEffect, useState} from 'react';
import {create, getUser, registerUser} from "../Queries/queries";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';
import {ICreate} from "../interfaces/ICreate";
import {IRegister} from "../interfaces/IRegister";

const RegistrationComponent = () => {
    let [register, setRegister] = useState<IRegister[]>([])
    useEffect(()=>{
        async function init(){
            let query = await registerUser();
            setRegister([query])
        }
        init();
    }, []);
    return (
        <div>
            <h1 className="Header">Register</h1>
            {register.map(item => (
                <div key={item.id} className="center">
                    <MDBCard>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <a>
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>Registered</MDBCardTitle>
                            <MDBCardText>
                                <h1>{item.id} {item.token}</h1>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            ))}
        </div>

    );
};

export default RegistrationComponent;