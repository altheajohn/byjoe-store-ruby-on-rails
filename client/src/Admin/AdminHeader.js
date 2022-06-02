import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Dropdown, Image, Menu, Button } from "semantic-ui-react";
import butterfly from "../images/butterfly.png";

function AdminHeader({ isAuthenticated, setUser, setIsAuthenticated, user }) {
	const navigate = useNavigate();

	function logout() {
		fetch("/logout", {
			method: "DELETE",
		}).then(() => {
			setIsAuthenticated(false);
			setUser(null);
			navigate("/");
		});
	}

	return (
		<>
			<Menu stackable borderless inverted>
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
						Home{}
					</Menu.Item>
					<Menu.Item as='a' href='/orderform'>
						E-mail
					</Menu.Item>

					<Dropdown item simple text='Shop Inventory'>
						<Dropdown.Menu>
							<Dropdown.Item href='/addinventory'>Add Inventory</Dropdown.Item>

							<Dropdown.Item href='/jewelrylibrary'>
								Jewelry Library
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown item simple text='More'>
						<Dropdown.Menu stackable>
							<Dropdown.Item href='/reviews'>Reviews</Dropdown.Item>
							<Dropdown.Item href='/contact'>Contact Us</Dropdown.Item>
							<Dropdown.Item href='/about'>About Us</Dropdown.Item>
							<Dropdown.Item>
								<Button style={{ margin: ".25em" }} size='small'>
									Log Out
								</Button>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Menu.Item position='right' as='a' href='/logout'>
						<Button
							floated='right'
							id='logOutButton'
							className='button is-warning'
							onClick={logout}
						>
							Logout
						</Button>
					</Menu.Item>
				</Container>
			</Menu>
		</>
	);
}

export default AdminHeader;
