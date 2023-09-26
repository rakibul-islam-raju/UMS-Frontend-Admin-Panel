"use client";

import SidebarMenus from "@/constants/SidebarMenus";
import { ROLES } from "@/constants/roles";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, MenuProps, theme } from "antd";
import { useState } from "react";
const { Sider } = Layout;

const Sidebar: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);

	const {
		token: { colorBgContainer, colorPrimary },
	} = theme.useToken();

	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={collapsed}
			style={{ minHeight: "100vh", position: "relative" }}
		>
			<div className="demo-logo-vertical" />
			<Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={["1"]}
				items={SidebarMenus(ROLES.ADMIN)}
			/>

			<div style={{ position: "absolute", top: 8, right: -35 }}>
				<Button
					type="text"
					icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					onClick={() => setCollapsed(!collapsed)}
					style={{
						backgroundColor: colorPrimary,
						color: "#fff",
					}}
				></Button>
			</div>
		</Sider>
	);
};

export default Sidebar;
