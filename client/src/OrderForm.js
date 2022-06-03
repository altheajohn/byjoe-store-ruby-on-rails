import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Message, Icon, Button, Container } from "semantic-ui-react";
import MainHeader from "./Header.js";
import MainFooter from "./Footer.js";

function OrderForm() {
	const navigate = useNavigate();
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [orderfor, setOrderFor] = useState("");
	const [orderdetails, setOrderDetails] = useState("");
	const [errors, setErrors] = useState("");

	const options = [
		{ key: "s", text: "Self", value: "self" },
		{ key: "f", text: "Friend", value: "friend" },
		{ key: "o", text: "Other", value: "other" },
	];

	function onSubmit(e) {
		e.preventDefault();
		const order = {
			first_name: firstname,
			last_name: lastname,
			email,
			phone,
			order_for: orderfor,
			order_details: orderdetails,
		};

		fetch("/order_forms", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(order),
		}).then((res) => {
			if (res.ok) {
				res.json().then((order) => {
					alert("Your Orer Form has been submitted successfully");
					navigate("/");
				});
			} else {
				res.json().then((json) => setErrors(json.error));
			}
		});
	}

	return (
		<>
			<MainHeader />
			<Container>
				{/* <Message
					attached
					header='Custom Order Form '
					content='Fill out the form below to for a custom order qoute.'
				/>
				<Form className='attached fluid segment'>
					<Form.Group widths='equal'>
						<Form.Input
							fluid
							label='First Name'
							placeholder='First Name'
							type='text'
							required
							onChange={(event) => setFirstName(event.target.value)}
						/>
						<Form.Input
							fluid
							label='Last Name'
							placeholder='Last Name'
							type='text'
							required
							onChange={(event) => setLastName(event.target.value)}
						/>
					</Form.Group>
					<Form.Input
						label='E-mail'
						placeholder='E-mail'
						type='text'
						autoComplete='email'
						onChange={(event) => setEmail(event.target.value)}
					/>
					<Form.Input
						label='Phone Number'
						type='phone number'
						placeholder='000-000-0000'
						autoComplete='phone'
						required
						onChange={(event) => setPhone(event.target.value)}
					/>

					<Form.Select
						fluid
						label='Who is this Order for?'
						options={options}
						placeholder='Select One'
						required
						onChange={(event) => setOrderFor(event.target.value)}
					/>
					<Form.TextArea
						label='Order Details'
						placeholder='Please Fill this form out sizes and a decription of what you want to order...
					
Example: Hello! I am intresed in the Coral Set, large. My ring size is 7.5 and necklace length is 24 inchs. '
						required
						onChange={(event) => setOrderDetails(event.target.value)}
					/>

					<Form.Checkbox
						inline
						label='I acknowledge the Sizes listed in the form are Correct'
						required
					/>
					<Button color='blue' onClick={onSubmit}>
						Submit
					</Button>
				</Form>
				<Message attached='bottom' warning>
					<Icon name='warning' />
					Reminder: All Custom Orders ONCE STARTED are NON REFUNDABLE.
				</Message> */}

				<iframe
					src='https://docs.google.com/forms/d/e/1FAIpQLSeqvZaGlMnZCpwkQlTEGjSABnuqh1Yfnptji5aO8rjav8tFaQ/viewform?embedded=true'
					width='1000'
					height='1387'
					frameborder='0'
					marginheight='0'
					marginwidth='0'
				>
					Loading…
				</iframe>
			</Container>

			<MainFooter />
		</>
	);
}

export default OrderForm;
