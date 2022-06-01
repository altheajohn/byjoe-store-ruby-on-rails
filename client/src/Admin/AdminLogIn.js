import React from "react";
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
} from "semantic-ui-react";
import butterfly from '../images/goldenbutterfly.png'
import AdminFooter from "./AdminFooter";
import MainHeader from "../Header";

function Login() {
	return (
		<>
			<MainHeader />
			
			<Grid
				textAlign='center'
				style={{ height: "80vh", backgroundColor: "rgba(255,255,255)"}}
				verticalAlign='middle'
			>
				<Grid.Column style={{ maxWidth: 450 }} >
					<Header as='h1' color='purple' >
						Admin Login <Image src={butterfly} />
					</Header>
					<Form size='large'>
						<Segment stacked>
							<Form.Input
								fluid
								icon='user'
								iconPosition='left'
								placeholder='Username'
							/>
							<Form.Input
								fluid
								icon='lock'
								iconPosition='left'
								placeholder='Password'
								type='password'
							/>

							<Button color='teal' fluid size='large'>
								Login
							</Button>
						</Segment>
					</Form>
					<Message>
						<a href='/'>Back to Home Page</a>
					</Message>
				</Grid.Column>
			</Grid>
			<AdminFooter/>
		</>
	);
}
export default Login;
