import React from "react";
import Container from "../components/Container";
import SignUp from "../components/SignUp";

function SignupPage() {
    return (
        <div>
                  <NavbarHP />
            <Container>
                <SignUp />
            </Container>
        </div>
    );
};

export default SignupPage;