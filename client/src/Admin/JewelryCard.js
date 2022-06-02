import React from "react";
import { Card, Image } from "semantic-ui-react";

function jewelrycard({ name, description, image, size, catagory_id }) {
	return (
		<Card style={{ margin: "1em" }}>
			<Image src={image} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{name}</Card.Header>
				<Card.Description>
					<ul>
						<li>Jewelry Catagory: {catagory_id}</li>
						<li> Jewelry Size : {size}</li>
					</ul>
				</Card.Description>

				<p>{description}</p>
			</Card.Content>
		</Card>
	);
}

export default jewelrycard;
