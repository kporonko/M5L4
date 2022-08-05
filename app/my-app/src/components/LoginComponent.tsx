import React, {useEffect, useState} from 'react';
import {create, getUser, loginUser, registerUser} from "../Queries/queries";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
} from 'mdb-react-ui-kit';
import {ILogin} from "../interfaces/ILogin";

const LoginComponent = () => {
    let [login, setLogin] = useState<ILogin[]>([])
    useEffect(()=>{
        async function init(){
            let query = await loginUser();
            setLogin([query])
        }
        init();
    }, []);
    return (
        <div>
            <h1 className="Header">Login</h1>
            {login.map(item => (
                <div className="center">
                    <MDBCard>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <a>
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>Logged</MDBCardTitle>
                            <MDBCardText>
                                <h1>{item.token}</h1>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            ))}
        </div>

    );
};

export default LoginComponent;