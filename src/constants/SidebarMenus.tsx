import HomeIcon from "@mui/icons-material/Home";
import { ROLES } from "./roles";

export type MenuItem = {
	label: string;
	key: string;
	path?: string;
	role?: string;
	icon?: React.ReactNode;
	children?: MenuItem[];
};

const filterMenuItems = (menuItems: MenuItem[], role: string): MenuItem[] => {
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

const SidebarMenus = (role: string): MenuItem[] => {
	const MENUS: MenuItem[] = [
		{
			label: "Home",
			path: `/`,
			key: "/",
			icon: <HomeIcon />,
		},
		// admin menus
		{
			label: "Management",
			key: "management",
			icon: <HomeIcon />,
			role: ROLES.ADMIN,
			children: [
				{
					label: "Faculty",
					key: `${role}/faculty`,
				},
			],
		},
		// common menus
		{
			label: "Profile",
			key: "profile",
			icon: <HomeIcon />,
			children: [
				{
					label: "User Profile",
					key: `${role}/user-profile`,
				},
			],
		},
	];

	const filteredMenus = filterMenuItems(MENUS, role);

	return filteredMenus;
};

export default SidebarMenus;
