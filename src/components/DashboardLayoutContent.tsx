"use client";

import Sidebar from "@/components/Sidebar";
import { Layout, theme } from "antd";

const { Header, Content } = Layout;

type Props = {
	children: React.ReactNode;
};

const DashboardLayoutContent: React.FC<Props> = ({ children }) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout>
			<Sidebar />
			<Layout>
				<Header style={{ padding: 0, background: colorBgContainer }}></Header>
				<Content
					style={{
						margin: "24px 16px",
						padding: 24,
						background: colorBgContainer,
					}}
				>
					{children}
				</Content>
			</Layout>
		</Layout>
	);
};

export default DashboardLayoutContent;
