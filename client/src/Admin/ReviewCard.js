import React from "react";
import { Container, Segment, Item } from "semantic-ui-react";

function reviewcard({ content, full_name, image, id }) {
	return (
		<>
			<Container>
				<Segment style={{ marginTop: "2em" }}>
					{/* ------------------------- Reviews --------------------*/}
					<Item.Group>
						<Item>
							<Item.Image size='small' src={image} />

							<Item.Content>
								{/* <Item.Header as='a'>Title</Item.Header> */}
								<Item.Description>{content}</Item.Description>
								<Item.Extra>Posted By: {full_name}</Item.Extra>
								<Item.Extra>Review ID: {id}</Item.Extra>
							</Item.Content>
						</Item>
					</Item.Group>
				</Segment>
			</Container>
		</>
	);
}

export default reviewcard;
