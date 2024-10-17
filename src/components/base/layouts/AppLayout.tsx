import Navigator from "../Navigation/Navigator";
import { Sidebar } from "../Navigation/Sidebar";
import "../../../styles/baseComponents/AppLayout.scss";

type DashboardProps = {
  children: any;
};

export default function AppLayout(props: DashboardProps) {
  return (
    <>
      <Navigator />
      <Sidebar />
      <div className="app-layout-content">
        <div className="app-layout-main-box">
          <div className="app-layout-box-content">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}
