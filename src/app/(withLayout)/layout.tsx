import DashboardLayoutContent from "@/components/DashboardLayoutContent";

type Props = {
	children: React.ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<DashboardLayoutContent>{children}</DashboardLayoutContent>
		</>
	);
};

export default DashboardLayout;
