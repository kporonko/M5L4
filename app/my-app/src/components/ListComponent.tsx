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



const ListComponent = () => {
    let [user, setUser] = useState<IUser[]>([])
    const deleteUser = (user:IUser) =>{
        debugger
        setUser(prevUser => {
            prevUser.splice(prevUser.indexOf(user), 1);
            return [...prevUser]
        })
    }
    useEffect(()=>{
        async function init(){
            let userQuery = await getUsersList();
            console.log("userQuery");
            console.log(userQuery);
            setUser(userQuery);
        }
        init();
    }, []);
    return (
        <div>
            List Users Query
            {user.map(item => (
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

    );
};

export default ListComponent;