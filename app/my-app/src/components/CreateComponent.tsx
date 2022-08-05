import React, {useEffect, useState} from 'react';
import {create, getUser} from "../Queries/queries";
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
import {ICreate} from "../interfaces/ICreate";

const CreateComponent = () => {
    let [createe, setCreatee] = useState<ICreate[]>([])
    useEffect(()=>{
        async function init(){
            let query = await create();
            setCreatee([query])
        }
        init();
    }, []);
    return (
        <div>
            {createe.map(item => (
                <div key={item.id} className="center">
                    Create
                    <MDBCard>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <a>
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>Created</MDBCardTitle>
                            <MDBCardText>
                                <h1>{item.id} {item.name} {item.job} {new Date(item.createdAt).toLocaleTimeString()}</h1>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            ))}
        </div>

    );
};

export default CreateComponent;