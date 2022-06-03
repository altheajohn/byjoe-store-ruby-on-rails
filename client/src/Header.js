import React from "react";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";
import butterfly from "./images/butterfly.png";

function MainHeader() {
	return (
		<>
			<Menu stackable borderless>
				<Container>
					<Menu.Item header>
						<Image
							size='mini'
							src={butterfly}
							style={{ marginRight: "1em" }}
							href='/admin'
						/>
						E.Byjoe & G.Johnson Creations
					</Menu.Item>
					<Menu.Item as='a' href='/'>
						{" "}
						Home{" "}
					</Menu.Item>
					<Menu.Item as='a' href='/orderform'>
						Order Form
					</Menu.Item>

					<Dropdown item simple text='Shop'>
						<Dropdown.Menu>
							<Dropdown.Item href='/inventory'>Current Inventory</Dropdown.Item>

							<Dropdown.Item
							// href='/jewelrylibrary'
							>
								Jewelry Library
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown item simple text='More'>
						<Dropdown.Menu stackable>
							<Dropdown.Item href='/reviews'>Reviews</Dropdown.Item>
							<Dropdown.Item href='/contact'>Contact Us</Dropdown.Item>
							<Dropdown.Item href='/about'>About Us</Dropdown.Item>
							<Dropdown.Item href='/faq'>FAQ</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Container>
			</Menu>
		</>
	);
}

export default MainHeader;
