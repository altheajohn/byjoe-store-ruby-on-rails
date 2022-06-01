import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./Home";
import MainHeader from "./Header.js";
import MainFooter from "./Footer.js";
import AdminLogin from "./Admin/AdminLogIn.js";
import OrderForm from "./OrderForm.js";
import Contact from "./ContactUs.js";
import About from "./About.js";
import Reviews from "./Reviews.js";
import FAQ from "./FAQ.js";
import JewelryLibrary from "./JewelryLibrary.js";
import CurrentInventory from "./CurrentInventory";
import AdminLanding from "./Admin/AdminLandingPage";
import AddInventory from "./Admin/AddInventory";

import "semantic-ui-css/semantic.min.css";

function App() {
	return (
		<>
			{/* <MainHeader /> */}
			<Routes>
				<Route path='/' element={<Home />}></Route>
				{/* <Route path='*' element={<NoPage />} /> */}
				<Route path='/Admin' element={<AdminLogin />}></Route>
				<Route path='/AdminLanding' element={<AdminLanding />}></Route>
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
