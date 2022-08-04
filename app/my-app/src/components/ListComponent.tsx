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
    const deleteUser: (ev: React.MouseEvent<HTMLButtonElement>, index: number) => void = (ev, index) =>{
        setUser(prevUser => {
            prevUser.splice(index, 1);
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
                <div className="center" onClick={function(ev){
                    deleteUser
                }}>
                    <MDBCard>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage className={item.avatar} src={item.avatar} position='top' alt='...'/>
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}>
                                </div>
                        </MDBRipple>
                        <MDBCardBody>
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