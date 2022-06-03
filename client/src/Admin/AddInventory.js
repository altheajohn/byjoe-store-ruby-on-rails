import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader.js";
import AdminFooter from "./AdminFooter.js";
import JewelryCard from "./JewelryCard.js";
import { Container, Grid, Button, Header, Segment, Icon, Form, Item} from "semantic-ui-react";

function AddInventory() {
	const [product, setProduct] = useState([]);
	const [errors, setErrors] = useState("");

	useEffect(() => {
		fetch(`/products`).then((res) => {
			if (res.ok) {
				res.json().then((product) => {
					setProduct(product);
				});
			} else {
				res.json().then((json) => setErrors(json.error));
			}
		});
	}, []);
	return (
		<div>
			<AdminHeader />

			<Container>
				<Container>
					<h1 style={{ marginTop: "1em", textAlign: "center" }}>
						Add/Delete Inventory 
					</h1>

					<Header as='h3' style={{ fontSize: "1.5em" }}>
						Add Inventory
					</Header>

					<Segment
						placeholder
						style={{ marginTop: "1em", marginBottom: "10em" }}
					>
						<Header icon>
							<Icon name='image outline' />
							Upload Image
						</Header>
						<Button primary name='image' value=''>
							Add Image
						</Button>

						<Form style={{ marginTop: "1em" }}>
							<Form.Input
								fluid
								label='Full Name'
								placeholder='First name'
								value=''
								type='text'
								required
							/>

							<Form.TextArea
								label='Review'
								placeholder='Tell us more about your order...'
								type='text'
								required
								value=''
							/>
							<Form.Input
								label='Rating'
								placeholder='1-5'
								type='rating'
								required
								value=''
							/>

							<Form.Input
								label='Email'
								placeholder='E-mail '
								type='email'
								required
								value=''
							/>

							<Form.Button primary>Submit Review</Form.Button>
						</Form>
					</Segment>

					<Grid stackable columns={3} style={{ margin: "1em" }}>
						<Grid.Row>
							<Grid.Column>
								{product?.map((item) => (
									<JewelryCard
										name={item.name}
										description={item.description}
										image={item.image}
										size={item.size}
										category_id={item.category__id}
									/>
									
								))}
								
							</Grid.Column>

							{/* <Grid.Column>
							<JewelryCard />
						</Grid.Column>
						<Grid.Column>
							<JewelryCard />
						</Grid.Column>
						<Grid.Column>
							<JewelryCard />
						</Grid.Column>
						<Grid.Column>
							<JewelryCard />
						</Grid.Column>
						<Grid.Column>
							<JewelryCard />
						</Grid.Column> */}
						</Grid.Row>
					</Grid>
				</Container>
			</Container>

			<AdminFooter />
		</div>
	);
}
export default AddInventory;
