import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import CardUser from "../components/CardUser";

function MemberPage() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        loadMembers()
    }, []);

    function loadMembers() {
        API.User.getUser()
            .then(res => {
                console.log(res.data)
                setMembers(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Navbar />
            {/* <Container>
                <CardUser />
            </Container> */}
            {members.map(member => {
                return (
                    // Pass props to the card component to render each user's individual information
                    <CardUser key={member.id} bio={member.bio} email={member.email} firstName={member.firstName} lastName={member.lastName} loc={member.location} org={member.organization} photo={member.photo} role={member.role} website={member.website} github={member.github}>

                    </CardUser>
                )
            })}
        </div>
    );
};

export default MemberPage;