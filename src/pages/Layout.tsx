import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Box padding={3}>
				<Outlet />
			</Box>
		</>
	);
};

export default Layout;

