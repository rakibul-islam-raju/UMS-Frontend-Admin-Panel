import { store } from "@/redux/store";
import { CssBaseline } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";

type Props = {
	children: ReactNode;
};

const Providers: FC<Props> = ({ children }) => {
	return (
		<Provider store={store}>
			<CssBaseline />
			{children}
		</Provider>
	);
};

export default Providers;
