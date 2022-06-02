import React, { useEffect, useState } from "react";
import MainHeader from "./Header.js";
import MainFooter from "./Footer.js";
import JewelryCard from "./Admin/JewelryCard";
import { Container, Grid, Button } from "semantic-ui-react";

function CurrentInventory() {
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
			<MainHeader />
			<Container>
				<h1 style={{ marginTop: "1em", textAlign: "center" }}>
					Current Inventory - All Items are{" "}
					<span style={{ color: "red" }}>Final Sale</span>
				</h1>
				<p style={{ marginTop: "1em", fontWeight: "bold" }}>
					** If an item is posted it is available for purchase. Once item has
					been sold, the item will be removed from the inventory. All items are
					one of a kind. If you wish to purchase multiple items at once, or
					multiples of one item, please place an order here. **
				</p>

				<Grid stackable columns={3} style={{ margin: "1em" }}>
					<Grid.Row >
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
							{/* ? <Button> Purchase/Sold/Idk</Button> */}
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

			<MainFooter />
		</div>
	);
}
export default CurrentInventory;
