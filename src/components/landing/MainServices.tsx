import "../../styles/landing-components/MainServices.scss";
import ServiceCard from "./mainServicesComponents/ServiceCard";

export default function MainServices() {
  return (
    <>
      <div className="main-services-box">
        <div className="services-box">
          <div className="services-header-section-box">
            <strong className="title"> Servicios </strong>
            <p className="subtitle">
              {" "}
              Estos son los servicios de mayor relevancia a los que tendras
              acceso en nuestra App{" "}
            </p>
          </div>
          <div className="services-body-section-box">
            <ServiceCard
              title="Inventario"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            />
            <ServiceCard
              title="Productos"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            />
            <ServiceCard
              title="Rentas"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            />
            <ServiceCard
              title="Usuarios"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            />
          </div>
        </div>
      </div>
    </>
  );
}
