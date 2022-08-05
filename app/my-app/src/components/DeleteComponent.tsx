import React, {useEffect, useState} from 'react';
import {create, deleteUser, getUser} from "../Queries/queries";
import './Styles.css'
import {IDelete} from "../interfaces/IDelete";

const DeleteComponent = () => {
    let [deletee, setDeletee] = useState<number>(0)
    useEffect(()=>{
        async function init(){
            let query = await deleteUser();
            setDeletee(query)
        }
        init();
    }, []);
    return (
        <div>
            <h1 className="Header">Deleted?</h1>
            <div style={{padding: '20px', backgroundColor:'grey'}} className="center">
                Code: {deletee}
            </div>
        </div>

    );
};

export default DeleteComponent;