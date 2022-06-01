import React from "react";
import {
	Container,
	Header,
	Image,
	// Form,
	// Placeholder,
	// Message,
	// Icon,
	// Button,
} from "semantic-ui-react";
import ByjoeCreationsLogo from "./images/E.ByjoeLogo2.png";
import CoralSet from "./images/coralset.jpg";
import ButterlyBracelets from "./images/butterflybracelets.jpg";
import BlueSet from "./images/blueset.jpg";
import MainHeader from "./Header.js";
import MainFooter from "./Footer.js";

function Home() {
	// const options = [
	// 	{ key: "s", text: "Self", value: "self" },
	// 	{ key: "f", text: "Friend", value: "friend" },
	// 	{ key: "o", text: "Other", value: "other" },
	// ];

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
				<Header as='h1' style={{ textAlign: "center", marginTop: "1em" }}>
					Welcome to Euginia Byjoe and Geneva Johnson Creations!
				</Header>

				<div>
					<Header as='h3'>A little Byjoe Jewelry History</Header>
					<p>(needs to be updated and reviewed).</p>
					<p style={{ fontSize: "1.33em" }}>
						The silversmithing trade has been passed down through our family for
						more than 150 years through the generations. This story has its
						beginnings in the 1870’s following the period of massive upheaval
						for Navajo People known as the Long Walk. In 1864 the U.S.
						government wanted to expand its territories westward and decided to
						use military force to round up the Navajo Tribe for relocation from
						thier homeland. The” Long Walk” refers to the long march where many
						perished to what’s known as Bosque Redondo in Northern Mexico. After
						four years of internment 1864-1868, Navajo leaders were able to
						negotiate a peace treaty that allowed them to return to their homes.
					</p>
					<p style={{ fontSize: "1.33em" }}>
						After the return to the homelands, the family settled in Lukachukai,
						AZ. It is a place of incredible beauty and the home of our family of
						silversmiths. Fred Thompson learned silversmithing from his father
						and passed the trade down to his children and those who wanted to
						learn as well. His father had apprenticed with a couple who lived in
						Lukachukai, AZ. During this time Navajos learned trades on the walk
						and upon returning from others outside the tribe and those who came
						to the reservations after.
					</p>
					<p style={{ fontSize: "1.33em" }}>
						Fred’ daughter Virginia and her husband Phillip Byjoe from Many
						Farms,AZ had picked up the trade. In the beginning the work was
						simpler, using stamps and wider needlepoint techniques. Then they
						created their own style. Fine Fred would take quarters they
						collected and flatten the silver and lay quarters on the railroad
						tracks to extract the silver. They would go to Gallup and sell the
						jewelry, or go over the mountain to sell in Shiprock. In the late
						1800’s a trip from Lukachukai to Gallup or Shiprock meant days of
						travel and time spentaway from the family. From Phillip and
						Virginia, their children would help to make the jewlery and thus it
						was passed down to all of them.And here we are today with Euginia
						Byjoe!
					</p>
					<p style={{ fontSize: "1.33em" }}>
						Euginia, with a keen eye for detail, specializes in the stone aspect
						of the jewelry. She cuts, grinds,and shapes every single stone that
						is then carefully placed in the sliver. As the siblings spreaded
						out, they taught others their trade. Geneva learned to solder and
						started to work with the Byjoe Family.
					</p>
					<p style={{ fontSize: "1.33em", fontWeight: "bold" }}>
						Today Euginia and Geneva work side by side creating masterpieces.
					</p>

					<p> </p>

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
