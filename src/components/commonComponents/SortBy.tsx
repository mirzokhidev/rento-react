import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Home, HouseInAmsterdam } from "../../constants";
import { routes } from "../../routers/routes";

const SortBy = () => {
  return (
    <div className="sortby-section">
      <Container>
        <div className="breadcrumb-content">
          <ul className="breadcrumbs-list">
            <li>
              <Link to={routes.Home.PropertyDemo1}>{Home}</Link>
            </li>
            <li>{HouseInAmsterdam}</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default SortBy;
