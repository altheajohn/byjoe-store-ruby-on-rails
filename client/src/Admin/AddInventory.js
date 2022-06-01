import React from "react";
import AdminHeader from "./AdminHeader.js";
import AdminFooter from "./AdminFooter.js";
import JewelryCard from "./JewelryCard.js";
import { Container } from "semantic-ui-react";

function AddInventory() {
	return (
		<div>
			<AdminHeader />

			<Container>
				<h1> Add Inventory Page </h1>
				<JewelryCard />
			</Container>

			<AdminFooter />
		</div>
	);
}
export default AddInventory;
