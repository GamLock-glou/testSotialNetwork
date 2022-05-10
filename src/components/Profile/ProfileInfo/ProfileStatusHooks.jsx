import React from 'react';
import { useState, useEffect } from 'react';

export const ProfileStatusHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );
    const EditeMode = () => {
        setEditMode(!editMode);
        props.updateStatus(status);

    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <div>
            {!editMode ?
                <div>
                    <span onDoubleClick={EditeMode}>{props.status || "No STATUS"}</span>
                </div>
                :
                <div>
                    <input
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={EditeMode}
                        value={status}
                    />
                </div>
            }
        </div>
    );
};