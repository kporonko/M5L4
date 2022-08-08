import React from 'react';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBRipple} from "mdb-react-ui-kit";
import {IUser} from "../interfaces/IUser";

const UserCard = (props:{item:IUser}) => {
    return (
        <div className="center">
            <MDBCard>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage className={props.item.avatar} src={props.item.avatar} position='top' alt='...'/>
                    <a>
                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>
                        </div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>User</MDBCardTitle>
                    <MDBCardText>
                        {props.item.id}) {props.item.first_name} {props.item.last_name} {props.item.email}
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default UserCard;