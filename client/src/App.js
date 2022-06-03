import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./index.css";
import Home from "./Home";
import AdminLogin from "./Admin/AdminLogIn.js";
import OrderForm from "./OrderForm.js";
import Contact from "./ContactUs.js";
import About from "./About.js";
import AdminReviews from "./Admin/AdminReviews";
import Reviews from "./Reviews.js";
import FAQ from "./FAQ.js";
import JewelryLibrary from "./JewelryLibrary.js";
import CurrentInventory from "./CurrentInventory";
import AdminLanding from "./Admin/AdminLandingPage";
import AddInventory from "./Admin/AddInventory";
import Logout from "./Admin/Logout.js";

import "semantic-ui-css/semantic.min.css";

function App() {
	const [user, setUser] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	return (
		<>
			{/* <MainHeader /> */}
			<Routes>
				<Route path='/' element={<Home />}></Route>
				{/* <Route path='*' element={<NoPage />} /> */}
				<Route
					path='/Admin'
					element={
						<AdminLogin
							setIsAuthenticated={setIsAuthenticated}
							isAuthenticated={isAuthenticated}
							setUser={setUser}
						/>
					}
				></Route>

				<Route path='/logout' element={<Logout />}></Route>
				<Route
					path='/AdminLanding'
					element={
						<AdminLanding
							setIsAuthenticated={setIsAuthenticated}
							isAuthenticated={isAuthenticated}
							user={user}
							setUser={setUser}
						/>
					}
				></Route>
				<Route
					path='/AdminReviews'
					element={
						<AdminReviews
							setIsAuthenticated={setIsAuthenticated}
							isAuthenticated={isAuthenticated}
							user={user}
							setUser={setUser}
						/>
					}
				></Route>
				<Route path='/orderform' element={<OrderForm />}></Route>
				<Route path='/contact' element={<Contact />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/reviews' element={<Reviews />}></Route>
				<Route path='/faq' element={<FAQ />}></Route>
				<Route path='/inventory' element={<CurrentInventory />}></Route>
				<Route path='/jewelrylibrary' element={<JewelryLibrary />}></Route>
				<Route path='/addinventory' element={<AddInventory />}></Route>
			</Routes>

			{/* <MainFooter /> */}
		</>
	);
}

export default App;
