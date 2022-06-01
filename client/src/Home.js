import React from "react";
import {
	Container,
	Header,
	Image,
	Form,
	Placeholder,
	Message,
	Icon,
	Button,
} from "semantic-ui-react";
import ByjoeCreationsLogo from "./images/E.ByjoeLogo2.png";
import CoralSet from "./images/coralset.jpg";
import ButterlyBracelets from "./images/butterflybracelets.jpg";
import BlueSet from "./images/blueset.jpg";import MainHeader from "./Header.js";
import MainFooter from "./Footer.js";

			

function Home() {
	const options = [
		{ key: "s", text: "Self", value: "self" },
		{ key: "f", text: "Friend", value: "friend" },
		{ key: "o", text: "Other", value: "other" },
	];

	return (
		<>
			<MainHeader />
			<Container
				style={{
					backgroundColor: "#2BCACF",
					backgroundSize: "inherit",
				}}
			>
				<Image
					centered
					src={ByjoeCreationsLogo}
					alt='E.Byjoe Creations logo'
					style={{
						height: "150px",
					}}
				/>
			</Container>
			<Container style={{ marginTop: ".5em" }}>
				<div className='row'>
					<div className='column'>
						<Image rounded src={CoralSet} alt='Large Coral Set' />
					</div>
					<div className='column'>
						<Image
							rounded
							src={ButterlyBracelets}
							alt='Turquoise Butterfly Bracelets'
						/>
					</div>
					<div className='column'>
						<Image rounded src={BlueSet} alt='Large Turquoise Set' />
					</div>
				</div>
			</Container>

			<Container>
				<Header as='h1' style={{ textAlign: "center" }}>
					Welcome!
				</Header>

				<div>
					<p>Welcome </p>
					<p text>OMG I NEED TO FINISH THIS IN 5 DAYS!</p>
					// Add the Who We Are Text Here Later (Info about the Jewelry) //
					<Placeholder>
						<Placeholder.Paragraph>
							<Placeholder.Line />
							<Placeholder.Line />
							<Placeholder.Line />
							<Placeholder.Line />
							<Placeholder.Line />
						</Placeholder.Paragraph>
						<Placeholder.Paragraph>
							<Placeholder.Line />
							<Placeholder.Line />
							<Placeholder.Line />
						</Placeholder.Paragraph>
					</Placeholder>
					{/* ----------------------- Order Form Start -----------------------* */}
					{/* <div
						style={{
							backgroundColor: "#2BCACF",
							backgroundSize: "inherit",
							marginTop: "2em",
							padding: "2em",
						}}
					>
						<h3>
							Wowed by the wonderful work on the site and would love a set for
							your self or as a gift?
							<br />
							<br />
							Plese fill out a <a href='#'>Order Form Here</a> and we'll
							be in touch!
						</h3>

						<p>
							* All sets are made with Sterling Sliver with the following choice
							of stones: Stabilized Kingman Turquoise, Apple Coral and White
							Shell. If you wish to customize with mixing these stones in a set
							or with other stones please state below in the order form.
							<br />
							<br />
							<strong>
								*** Please gather your jewelry measurements as custom orders are
								NOT refundable. ***
							</strong>
						</p>

						<div>
							<Message
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
									/>
									<Form.Input
										fluid
										label='Last Name'
										placeholder='Last Name'
										type='text'
									/>
								</Form.Group>
								<Form.Input label='E-mail' placeholder='E-mail' type='text' />
								<Form.Input
									label='Phone Number'
									type='phone number'
									placeholder='000-000-0000'
								/>

								<Form.Select
									fluid
									label='Who is this Order for?'
									options={options}
									placeholder='Select One'
								/>
								<Form.TextArea
									label='Order Details'
									placeholder='Please Fill this form out sizes and a decription of what you want to order...
					
Example: Hello! I am intresed in the Coral Set, large. My ring size is 7.5 and necklace length is 24 inchs. '
								/>

								<Form.Checkbox
									inline
									label='I acknowledge the Sizes listed in the form are Correct'
								/>
								<Button color='blue'>Submit</Button>
							</Form>
							<Message attached='bottom' warning>
								<Icon name='warning' />
								Reminder: All Custom Orders ONCE STARTED are NON REFUNDABLE.
							</Message>
						</div>
					</div> */}
					{/* ----------------------- Order Form End ----------------------- */}
				</div>
			</Container>
			<MainFooter />
		</>
	);
}

export default Home;
