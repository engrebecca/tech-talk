import React, { useState, useEffect } from 'react';
import API from '../utils/API';

function MemberPage() {


    useEffect(() => {
        loadMembers()
    }, []);

    function loadMembers() {
        API.User.getUser()
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    return (
        <div></div>
    );
};

export default MemberPage;