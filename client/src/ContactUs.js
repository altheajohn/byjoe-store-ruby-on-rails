import React from "react";
import {
	Container,
	Form,
	Input,
	TextArea,
	Button,
	Segment,
} from "semantic-ui-react";
import MainHeader from "./Header.js";
import MainFooter from "./Footer.js";

function ContactUs() {
	return (
		<>
			<MainHeader />
			<div className='center'>
				<h1 className='centerp'>Contact Us</h1>
			</div>
			<Container>
				<Form style={{ marginTop: "3em", marginBottom: "10em" }}>
					<h1>WRITE TO US</h1>
					<br />
					<Form.Group widths='equal'>
						<Form.Field
							id='form-input-control-first-name'
							control={Input}
							label='First name'
							placeholder='First name'
						/>
						<Form.Field
							id='form-input-control-last-name'
							control={Input}
							label='Last name'
							placeholder='Last name'
						/>
						<Form.Field
							id='form-input-control-phone'
							control={Input}
							label='phone'
							placeholder='000-000-0000'
						/>
					</Form.Group>
					<Form.Field
						id='form-textarea-control-opinion'
						control={TextArea}
						label='Message'
					/>
					<Form.Field
						id='form-input-control-error-email'
						control={Input}
						label='Email'
						placeholder='joe@schmoe.com'
						// error={{
						// 	content: "Please enter a valid email address",
						// 	pointing: "below",
						// }}
					/>
					<Button
						color='primary'
						id='form-button-control-public'
						content='Confirm'
					></Button>
				</Form>
			</Container>

			<MainFooter />
		</>
	);
}

export default ContactUs;
