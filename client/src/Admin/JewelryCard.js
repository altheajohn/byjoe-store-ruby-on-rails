import React from "react";
import { Card, Image } from "semantic-ui-react";

function jewelrycard() {
	return (
		<Card style={{ margin: "1em" }}>
			<Image
				src='https://react.semantic-ui.com/images/wireframe/image.png'
				wrapped
				ui={false}
			/>
			<Card.Content>
				<Card.Header>Jewelry Name</Card.Header>
				<Card.Description>
					<ul>
						<li>Jewelry Catagory </li>
						<li> Jewelry Color </li>
						<li> Jewelry Size</li>
					</ul>
				</Card.Description>

				<p>Jewelry Description</p>
			</Card.Content>
		</Card>
	);
}

export default jewelrycard;
