import React, {useEffect, useState} from 'react';
import {create, getUser, update} from "../Queries/queries";
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
import {ICreate} from "../interfaces/ICreate";
import {IUpdate} from "../interfaces/IUpdate";

type Props = {
    method: string
}
const UpdateComponent = (props:Props) => {
    let [updatee, setUpdatee] = useState<IUpdate[]>([])
    useEffect(()=>{
        async function init(){
            let query = await update(props.method);
            setUpdatee([query])
        }
        init();
    }, []);
    return (
        <div>
            <h1 className="Header">Update with <code>{props.method}</code></h1>
            {updatee.map(item => (
                <div key={Math.random()*100} className="center">
                    <MDBCard>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <a>
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>Updated</MDBCardTitle>
                            <MDBCardText>
                                <h1>{item.name} {item.job} {new Date(item.updatedAt).toString()}</h1>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            ))}
        </div>

    );
};

export default UpdateComponent;