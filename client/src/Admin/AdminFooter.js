import React from "react";
import {
	Segment,
	Container,
	Divider,
	Image,
	List,
	Grid,
	Header,
} from "semantic-ui-react";

function AdminFooter() {
	return (
		<>
			<Segment
				inverted
				vertical
				style={{ margin: "5em 0em 0em", padding: "2em 0em" }}
			>
				<Container textAlign='bottom'>
					<List horizontal inverted divided link size='small'>
						<List.Item as='a' href='/contact'>
							Contact Us
						</List.Item>
						<List.Item as='a' href='#'>
							&copy; Copyright 2022 E.Byjoe & G.Johnson
						</List.Item>
						<List.Item as='a' href='#'>
							Social Media
						</List.Item>
					</List>
				</Container>
			</Segment>
		</>
	);
}

export default AdminFooter;
