"use client";

import { Divider, Drawer, List, Typography } from "@mui/material";
import { DrawerHeader } from "./DashboardLayoutContent";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import SidebarMenus, { MenuItem } from "@/constants/SidebarMenus";
import { ROLES } from "@/constants/roles";
import { useRouter } from "next/navigation";

export const drawerWidth = 240;

type SidebarProps = {
	open: boolean;
	handleDrawerClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ open, handleDrawerClose }) => {
	const router = useRouter();

	const [menuAnchor, setMenuAnchor] = useState<string | null>(null);

	const handleClick = (menuItem: MenuItem) => {
		if (menuItem.path) router.push(menuItem.path);
		if (menuItem.children) {
			if (menuItem.key === menuAnchor) {
				setMenuAnchor(null);
			} else {
				setMenuAnchor(menuItem.key);
			}
		}
	};

	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				whiteSpace: "nowrap",
				boxSizing: "border-box",
				"& .MuiDrawer-paper": {
					width: drawerWidth,
				},
			}}
			variant="persistent"
			anchor="left"
			open={open}
		>
			<DrawerHeader>
				<Typography variant="h5" align="center">
					UMS
				</Typography>
			</DrawerHeader>
			<Divider />
			<List
				sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
				component="nav"
				aria-labelledby="sidebar-manus"
			>
				{SidebarMenus(ROLES.ADMIN).map((menu) => {
					if (menu?.children) {
						return (
							<>
								<ListItemButton
									onClick={() => handleClick(menu)}
									key={menu.key}
								>
									<ListItemIcon>{menu.icon}</ListItemIcon>
									<ListItemText primary={menu.label} />
									{menu.key === menuAnchor ? <ExpandLess /> : <ExpandMore />}
								</ListItemButton>
								<Collapse
									in={menu.key === menuAnchor}
									timeout="auto"
									unmountOnExit
								>
									{menu.children.map((submenu) => (
										<List key={submenu.key} component="div" disablePadding>
											<ListItemButton
												onClick={() => handleClick(submenu)}
												sx={{ pl: 4 }}
											>
												<ListItemIcon>{submenu.icon}</ListItemIcon>
												<ListItemText primary={submenu.label} />
											</ListItemButton>
										</List>
									))}
								</Collapse>
							</>
						);
					} else {
						return (
							<ListItemButton onClick={() => handleClick(menu)} key={menu.key}>
								<ListItemIcon>{menu.icon}</ListItemIcon>
								<ListItemText primary={menu.label} />
							</ListItemButton>
						);
					}
				})}
			</List>
		</Drawer>
	);
};

export default Sidebar;
