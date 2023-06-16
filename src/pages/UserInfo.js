import React from 'react';
import {useParams} from "react-router-dom";

const UserInfo = () => {
    const {id}=useParams()

    return (
        <div>
            UserInfo {id}
        </div>
    );
};

export default UserInfo;