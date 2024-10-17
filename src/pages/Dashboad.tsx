import AppLayout from "../components/base/layouts/AppLayout";
import "../styles/pages/Dashboard.scss";
import ApexCircleDiagram from "../components/dashboard/ApexCicleDiagram";
import ApexLineDiagram from "../components/dashboard/ApexLineDiagram";
export default function Dashboard() {
  return (
    <>
      <AppLayout>
        <div className="diagram-section">
          <ApexLineDiagram />
          <div className="diagrams">
            <div className="diagram">
              <ApexCircleDiagram />
            </div>
            <div className="diagram">
              <ApexLineDiagram />
            </div>
          </div>
          <div className="diagrams">
            <div className="diagram">
              <ApexLineDiagram />
            </div>
            <div className="diagram">
              <ApexCircleDiagram />
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
