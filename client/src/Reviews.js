import React from "react";
import {
	Container,
	Button,
	Header,
	Icon,
	Segment,
	Item,
	Image,
	Form,
	// Input,
	// TextArea,
} from "semantic-ui-react";

import MainHeader from "./Header.js";
import MainFooter from "./Footer.js";

function Reviews() {
	const paragraph = (
		<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
	);
	return (
		<>
			<MainHeader />

			<div className='center'>
				<h1 className='centerp'>Reviews</h1>
			</div>
			<Container>
				<Segment style={{ marginTop: "2em" }}>
					{/* ------------------------- Reviews --------------------*/}
					<Item.Group>
						<Item>
							<Item.Image
								size='small'
								src='https://react.semantic-ui.com/images/wireframe/image.png'
							/>

							<Item.Content>
								<Item.Header as='a'>ITEM</Item.Header>
								<Item.Description>{paragraph}</Item.Description>
								<Item.Extra>
									Posted By: User's Name Here
									<Button.Group floated='right' size='mini' compact>
										<Button basic color='purple'>
											Edit
										</Button>
										<Button.Or />
										<Button basic color='red'>
											Delete
										</Button>
									</Button.Group>
								</Item.Extra>
							</Item.Content>
						</Item>

						<Item>
							<Item.Image
								size='small'
								src='https://react.semantic-ui.com/images/wireframe/image.png'
							/>

							<Item.Content>
								<Item.Header as='a'>ITEM</Item.Header>
								<Item.Description>{paragraph}</Item.Description>
								<Item.Extra>
									Posted By: User's Name Here
									<Button.Group floated='right' size='mini' compact>
										<Button basic color='purple'>
											Edit
										</Button>
										<Button.Or />
										<Button basic color='red'>
											Delete
										</Button>
									</Button.Group>
								</Item.Extra>
							</Item.Content>
						</Item>

						<Item>
							<Item.Image
								size='small'
								src='https://react.semantic-ui.com/images/wireframe/image.png'
							/>

							<Item.Content>
								<Item.Header as='a'>ITEM</Item.Header>
								<Item.Description>{paragraph}</Item.Description>
								<Item.Extra>
									Posted By: User's Name Here
									<Button.Group floated='right' size='mini' compact>
										<Button basic color='purple'>
											Edit
										</Button>
										<Button.Or />
										<Button basic color='red'>
											Delete
										</Button>
									</Button.Group>
								</Item.Extra>
							</Item.Content>
						</Item>
					</Item.Group>

					{/* ------------------------- Review Form -------------------- */}
				</Segment>
				<Header as='h3' style={{ fontSize: "1.5em" }}>
					Submit A Review
				</Header>

				<Segment placeholder style={{ marginTop: "1em", marginBottom: "10em" }}>
					<Header icon>
						<Icon name='image outline' />
						Upload Image
					</Header>
					<Button primary>Add Image</Button>

					<Form style={{ marginTop: "1em" }}>
						<Form.Input fluid label='First name' placeholder='First name' />
						<Form.Input fluid label='Last name' placeholder='Last name' />

						<Form.TextArea
							label='Review'
							placeholder='Tell us more about your order...'
						/>

						<Form.Button primary>Submit Review</Form.Button>
					</Form>
				</Segment>
			</Container>
			<MainFooter />
		</>
	);
}

export default Reviews;
