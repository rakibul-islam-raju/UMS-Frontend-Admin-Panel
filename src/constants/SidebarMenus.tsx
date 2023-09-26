import {
	MenuFoldOutlined,
	TeamOutlined,
	HomeOutlined,
} from "@ant-design/icons";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { ROLES } from "./roles";
import Link from "next/link";

type CustomMenuItem = ItemType & {
	role?: string;
	children?: CustomMenuItem[];
};

const filterMenuItems = (
	menuItems: CustomMenuItem[],
	role: string
): CustomMenuItem[] => {
	return menuItems
		.filter((item) => item.role === role || !item.role)
		.map((item) => {
			if (!item.role && item.children) {
				// Recursively filter children
				item.children = filterMenuItems(item.children, role);
			}
			return item;
		});
};

const SidebarMenus = (role: string) => {
	const MENUS: CustomMenuItem[] = [
		{
			label: <Link href={`/`}>Home</Link>,
			key: "/",
			icon: <HomeOutlined />,
		},
		// admin menus
		{
			label: "Management",
			key: "management",
			icon: <MenuFoldOutlined />,
			role: ROLES.ADMIN,
			children: [
				{
					label: <Link href={`/${role}/faculty`}>Faculty</Link>,
					key: `${role}/faculty`,
				},
			],
		},
		// common menus
		{
			label: "Profile",
			key: "profile",
			icon: <MenuFoldOutlined />,
			children: [
				{
					label: <Link href={`/${role}/user-profile`}>User Profile</Link>,
					key: `${role}/user-profile`,
				},
			],
		},
	];

	const filteredMenus = filterMenuItems(MENUS, role);

	return filteredMenus;
};

export default SidebarMenus;
