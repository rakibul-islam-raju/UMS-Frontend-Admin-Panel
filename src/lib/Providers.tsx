import { store } from "@/redux/store";
import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";

type Props = {
	children: ReactNode;
};

const Providers: FC<Props> = ({ children }) => {
	return (
		<Provider store={store}>
			<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
		</Provider>
	);
};

export default Providers;
