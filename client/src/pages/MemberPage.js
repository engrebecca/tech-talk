import React, { useState, useEffect } from 'react';
import API from '../utils/API';

function MemberPage() {


    useEffect(( => {
        loadMembers()
    }), []);

    function loadMembers() {

    }

    return (
        <div></div>
    );
};

export default MemberPage;