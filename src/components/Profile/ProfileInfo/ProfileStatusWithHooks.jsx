import React, { useState,useEffect } from "react";
import classes from './ProfileStatus.module.css'

const ProfileStatusWIthHooks=(props)=> {
    let [editMode,setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    },[props.status])

    const activateEditMode=()=>{
        setEditMode(true);
    }
    const deactivateEditMode=()=>{
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange=(e)=>{
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div className={classes.status}>
                    <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status}
                    />
                </div>
            }
        </div>
    )
}
    

export default ProfileStatusWIthHooks;