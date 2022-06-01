import React from "react";
import Euginia from "./images/Euginia.jpg";
import Geneva from "./images/Geneva.jpg";
import { Container, Header, Image, Segment, Grid } from "semantic-ui-react";
import MainHeader from "./Header";
import MainFooter from "./Footer";

function About() {
	return (
		<>
			<MainHeader />
			<div className='center'>
				<h1 className='centerp'>About the Jewelers</h1>
			</div>
			<Container style={{ marginTop: "1em" }}>
				<h2 style={{ textAlign: "center" }}>
					<q>
						<i>
							When I work and sit here creating these jewelry, I think
							positive things and I believe that those thoughts are carried with
							them.  Maybe that's why people always feel joy when they recieve their
							sets
						</i>
					</q>
					<p style={{ marginTop: "1em", textAlign: "center" }}> - E.Byjoe - </p>
				</h2>
				<Segment style={{ padding: "1em 0em" }} vertical>
					<Grid container stackable verticalAlign='middle'>
						<Grid.Row>
							<Grid.Column width={8}>
								<Header as='h3' style={{ fontSize: "2em" }}>
									Euginia Byjoe
								</Header>
								<p style={{ fontSize: "1.33em" }}>
									"When I work and sit here creating these jewelry, I think
									positive things and I believe that those thoughts are carried
									with them. Maybe that's why people always feel joy when they
									recieve their sets"
								</p>
							</Grid.Column>
							<Grid.Column floated='right' width={6}>
								<Image
									bordered
									rounded
									size='medium'
									src={Euginia}
									style={{ boxShadow: " 5px 5px 5px turquoise" }}
								/>
							</Grid.Column>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column width={8}>
								<Header as='h3' style={{ fontSize: "2em" }}>
									Geneva Johnson
								</Header>
								<p style={{ fontSize: "1.33em" }}>Add Neva's Bio Here</p>
							</Grid.Column>
							<Grid.Column floated='right' width={6}>
								<Image
									bordered
									rounded
									size='medium'
									src={Geneva}
									style={{ boxShadow: " 5px 5px 5px maroon" }}
								/>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</Container>
			<MainFooter />
		</>
	);
}

export default About;
