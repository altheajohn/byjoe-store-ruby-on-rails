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

function reviewcard({ content, full_name, image }) {
	// const paragraph = (
	// 	<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
	// );
	return (
		<>
			<Container>
				<Segment style={{ marginTop: "2em" }}>
					{/* ------------------------- Reviews --------------------*/}
					<Item.Group>
						<Item>
							<Item.Image size='small' src={image} />

							<Item.Content>
								<Item.Header as='a'>ITEM</Item.Header>
								<Item.Description>{content}</Item.Description>
								<Item.Extra>
									Posted By: {full_name}
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
				</Segment>
			</Container>
		</>
	);
}

export default reviewcard;
