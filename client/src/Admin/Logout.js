import React from "react";
import AdminFooter from "./AdminFooter";
import MainHeader from "../Header.js";
import { Container } from "semantic-ui-react";

function logout() {
	return (
		<>
			<MainHeader />
			<div className='center'>
				<h1 className='centerp'>Logged Out</h1>
			</div>
			<Container style={{ marginTop: "2em", textAlign:"center", color: "teal" }} TextAlign='center'>
                <h2>Have a wonderful day and remember to stay hydrated 😎 </h2>
			</Container>

			<AdminFooter />
		</>
	);
}

export default logout;
