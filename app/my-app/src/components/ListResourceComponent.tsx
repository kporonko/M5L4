import React, {useEffect, useState} from 'react';
import {getUsersList, getResourcesList} from "../Queries/queries";
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
import {IResource} from "../interfaces/IResource";



const ListResourceComponent = () => {
    let [resources, setResources] = useState<IResource[]>([])

    useEffect(()=>{
        async function init(){
            let userQuery = await getResourcesList();
            console.log("userQuery");
            console.log(userQuery);
            console.log(resources)
            setResources(userQuery);
            console.log(resources)
        }
        init();
    }, []);
    return (
        <div>
            <h1 className="Header">List Resources</h1>
            <div className="flex-div">
                {resources.map(item => (
                    <div key={item.id} className="center">
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
        </div>

    );
};

export default ListResourceComponent;