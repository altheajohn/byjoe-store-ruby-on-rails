import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
} from "semantic-ui-react";
import butterfly from "../images/goldenbutterfly.png";
import AdminFooter from "./AdminFooter";
import MainHeader from "../Header";

function Login({ setUser, setIsAuthenticated }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const [error, setError] = useState([]);

	function onSubmit(e) {
		console.log("testing");
		e.preventDefault();
		const user = {
			username: username,
			password,
		};
		fetch("/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		}).then((res) => {
			if (res.ok) {
				res.json().then((user) => {
					setUser(user);
					setIsAuthenticated(true);
					navigate("/adminlanding");
				});
			} else {
				res.json().then((json) => setError(json.error));
			}
		});
	}

	return (
		<>
			<MainHeader />

			<Grid
				textAlign='center'
				style={{ height: "80vh", backgroundColor: "rgba(255,255,255)" }}
				verticalAlign='middle'
			>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as='h1' color='purple'>
						Admin Login <Image src={butterfly} />
					</Header>
					<Form size='large'>
						<Segment stacked>
							<Form.Input
								fluid
								icon='user'
								iconPosition='left'
								placeholder='Username'
								type='text'
								id='username'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
							<Form.Input
								fluid
								icon='lock'
								iconPosition='left'
								placeholder='Password'
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>

							<Button onClick={onSubmit} color='teal' fluid size='large'>
								Login
							</Button>
						</Segment>
					</Form>
					{error ? <div>{error}</div> : null}
					<Message>
						<a href='/'>Back to Home Page</a>
					</Message>
				</Grid.Column>
			</Grid>
			<AdminFooter />
		</>
	);
}
export default Login;
