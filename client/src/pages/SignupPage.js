import React from "react";
import Container from "../components/Container";
import SignUp from "../components/SignUp";
import NavbarHP from "../components/NavbarHP";

function SignupPage() {
    return (
        <div>
            <NavbarHP />
            <Container>
                <SignUp />
            </Container>
            <StickyFooter />
        </div>
    );
};

export default SignupPage;