import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { Href } from "../../../../constants";
import { useAppDispatch, useAppSelector } from "../../../../reduxToolkit/hooks";
import { fetchProductApiData } from "../../../../reduxToolkit/reducers/productSlice";
import { routes } from "../../../../routers/routes";
import Breadcrumbs from "../../../commonComponents/breadcrumbs";
import Sidebar from "./sidebar";
import UserDashboardTabs from "./tabs";

const UserDashboardContainer = () => {
  const dispatch = useAppDispatch();
  const { dashboardSidebar } = useAppSelector((state) => state.layout);

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  return (
    <>
      <Breadcrumbs title="User Dashboard" url={routes.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <section className="section-b-space user-dashboard-section">
        <Container>
          <Row>
            <Sidebar />
            <UserDashboardTabs />
          </Row>
        </Container>
      </section>
      <Link to={Href} className={`filter-overlay ${dashboardSidebar ? "show" : ""}`} />
    </>
  );
};

export default UserDashboardContainer;
