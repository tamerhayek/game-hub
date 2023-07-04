import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Box padding={3}>
				<Outlet />
			</Box>
			<Banner />
		</>
	);
};

export default Layout;

