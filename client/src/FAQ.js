import React from "react";
import { Container, Header } from "semantic-ui-react";
import MainHeader from "./Header.js";
import MainFooter from "./Footer.js";

function FAQ() {
	return (
		<>
			<MainHeader />
			<div className='center'>
				<h1 className='centerp'>FAQ</h1>
			</div>

			<Container style={{ marginTop: "1em" }}>
				<h2 style={{ textAlign: "center" }}></h2>
				<Header as='h3' style={{ fontSize: "2em" }}>
					Location
				</Header>
				<p style={{ fontSize: "1.33em" }}>
					Byjoe Creations is located on the Navajo Nation in Navajo, New Mexico,
					USA.
				</p>
				<Header as='h3' style={{ fontSize: "1.75em" }}>
					SHIPPING / RETURNS
				</Header>
				<Header as='h1' style={{ fontSize: "1.25em" }}>
					How is E. Byjoe Creations affected by Covid-19?
				</Header>
				<p style={{ fontSize: "1.33em" }}>
					If you have any questions or concerns about orders during this time,
					please email byjoecreations@gmail.com and we will get back to you as
					soon as we can. Please include your name and item(s) in the subject
					line.
				</p>
				<p style={{ fontSize: "1.33em" }}>
					We have resumed normal operations, however it may take longer than our
					normal timeline to ship. We are currently shipping at least once a
					week on Fridays & Saturdays. (Orders will be packed 12-5pm MST on
					Fridays. Orders made after 12pm MST on Friday may ship the following
					week, not the next day).
				</p>
				<p style={{ fontSize: "1.33em" }}>
					If you're local to the Navajo Nation area and would like your order
					faster, we now offer local pick up! Just select "pick up" as your
					delivery method and we will email you when your order is ready to be
					picked up.
				</p>
				<Header as='h1' style={{ fontSize: "1.25em" }}>
					How long will it take for me to get my order?
				</Header>
				<p style={{ fontSize: "1.33em" }}>
					Orders may take up to 2-3 weeks after payment processing to create and
					ship. Please be advised that larger sets take about 7-10 days to
					create and will need more time to make. Please order a month in
					advance if you wish to receive items early.
				</p>
				<p style={{ fontSize: "1.33em" }}>
					It may take up to 3-7 days to receive your order after you place it
					and to begin the process.
				</p>
				<p style={{ fontSize: "1.33em" }}>
					Mailed Orders are being packed with the utmost care for sanitation and
					cleanliness.{" "}
				</p>
				<Header as='h1' style={{ fontSize: "1.25em" }}>
					How can I check on the progress of my order delivery?
				</Header>
				<p style={{ fontSize: "1.33em" }}>
					All orders are shipped via USPS Priority with insurance and tracking
					included so that our customers can follow the status of their
					deliveries and ensure they arrive safely. This info will be emailed as
					soon as your order is ready for shipment. 
				</p>
				<p style={{ fontSize: "1.33em" }}>
					Orders that are being “picked-up”, will be e-mail when orders are
					ready to arrange pick-up.
				</p>
				<p style={{ fontSize: "1.33em" }}>
					Please note that once the package is shipped we are unable to
					intercept its delivery, please ensure that the address you provide at
					checkout is correct and up to date. We do not assume responsibility
					for packages delivered to the wrong address.
				</p>
				<Header as='h1' style={{ fontSize: "1.25em" }}>
					Can I return or exchange an item I ordered?
				</Header>
				<p style={{ fontSize: "1.33em" }}>
					We are unable to accommodate returns/exchanges during this time,
					unless of course the item you receive is not what you ordered. We do
					not typically accept returns or exchanges as most of our releases are
					produced in limited quantities. 
				</p>
				<p style={{ fontSize: "1.33em" }}>
					In the event that a return or exchange can be accepted, the
					customer assumes responsibility for all shipping costs.
				</p>
				<p style={{ fontSize: "1.33em" }}>
					We do our best to ensure sizes are correct and once made are eligible
					for a ReFund. If you have a question or are unsure about sizing before
					ordering, feel free to contact us.
				</p>

				<Header as='h1' style={{ fontSize: "1.75em" }}>
					CARE INSTRUCTIONS
				</Header>
			</Container>
			<MainFooter />
		</>
	);
}

export default FAQ;

// <Header as='h1' style={{ fontSize: "1.25em" }}>
// 			?
// 		</Header>
// 		<p style={{ fontSize: "1.33em" }}></p>

// <Header as='h1' style={{ fontSize: "1.25em" }}>
// 			How can I check on the progress of my order delivery?
// 		</Header>
// 		<p style={{ fontSize: "1.33em" }}></p>
// 		<p style={{ fontSize: "1.33em" }}></p>
// 		<p style={{ fontSize: "1.33em" }}></p>
