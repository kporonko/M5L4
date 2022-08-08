import React from 'react';
import {MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBRipple} from "mdb-react-ui-kit";
import {IResource} from "../interfaces/IResource";

const ResourceCard = (props: {item: IResource}) => {
    return (
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
                    {props.item.id}) {props.item.name} {props.item.year} {props.item.color} {props.item.pantone_value}
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    );
};

export default ResourceCard;