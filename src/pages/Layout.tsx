import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Description";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default Layout;

