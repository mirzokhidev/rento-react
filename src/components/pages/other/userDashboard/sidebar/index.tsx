import { Button, Col, Nav, NavItem, NavLink } from "reactstrap";
import { Href, LogOut } from "../../../../../constants";
import { DashboardList } from "../../../../../data/pages/Other";
import { useAppDispatch, useAppSelector } from "../../../../../reduxToolkit/hooks";
import { setActiveTab, setDashboardSidebar, setLogoutModal } from "../../../../../reduxToolkit/reducers/layoutSlice";
import LogoutModal from "./LogoutModal";
import Profile from "./Profile";

const Sidebar = () => {
  const { activeTab, dashboardSidebar } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  return (
    <>
      <Col lg="3">
        <div className={`left-sidebar filter-sidebar ${dashboardSidebar ? "open" : ""}`}>
          <Button className="close-btn" onClick={() => dispatch(setDashboardSidebar())}>
            <i className="ri-close-line" />
          </Button>
          <Profile />
          <Nav pills className="flex-column sidebar-list">
            {DashboardList.map((item, index) => (
              <NavItem key={index}>
                <NavLink href={Href} className={activeTab === item.type ? "active" : ""} color="transparent" onClick={() => dispatch(setActiveTab(item.type))}>
                  {item.title}
                </NavLink>
              </NavItem>
            ))}
            <li>
              <a href={Href} className="btn-border" onClick={() => dispatch(setLogoutModal())}>
                {LogOut}
              </a>
            </li>
          </Nav>
        </div>
      </Col>
      <LogoutModal />
    </>
  );
};

export default Sidebar;
