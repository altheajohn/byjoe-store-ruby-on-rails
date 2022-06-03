import React from "react";
import AdminHeader from "./AdminHeader.js";
import AdminFooter from "./AdminFooter.js";
import { Container } from "semantic-ui-react";
function AdminLandingPage() {
	return (
		<>
			<AdminHeader />
			<Container style={{ marginBottom: "25em", marginTop: "2em"}}>
				<h1 style={{ marginBottom: "2em" }}>
					{" "}
					Welcome to the Admin Landing Page
				</h1>

				<iframe
					src='https://docs.google.com/spreadsheets/d/e/2PACX-1vTuguHC85bdiIHdQmLw5MsPy680LT0GP4C3PpRHxqYv7C-EXRTvTGQtOZv8i2Vn6LTj_bPvjA7ZJh4-/pubhtml?gid=1744981966&amp;single=true&amp;widget=true&amp;headers=false'
					width='1000'
					height='200'
					frameborder='2'
					marginheight='0'
					marginwidth='0'
				></iframe>

				<h1> ah, we'll add more on this page later...</h1>
			</Container>

			<AdminFooter />
		</>
	);
}

export default AdminLandingPage;
