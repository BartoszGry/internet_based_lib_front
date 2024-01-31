import { Offcanvas, Nav } from 'react-bootstrap';


const SideBar = () => {
  return (
    <Offcanvas placement="start" show={true} onHide={() => {}} scroll={true} backdrop={false} keyboard={false}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="px-0">
        <Nav className="nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
          <Nav.Item>
            <Nav.Link href="#" className="nav-link text-truncate">
              <i className="fs-5 bi-house"></i><span className="ms-1 d-none d-sm-inline">Home</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#submenu1" data-bs-toggle="collapse" className="nav-link text-truncate">
              <i className="fs-5 bi-speedometer2"></i><span className="ms-1 d-none d-sm-inline">Dashboard</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="nav-link text-truncate">
              <i className="fs-5 bi-table"></i><span className="ms-1 d-none d-sm-inline">Orders</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="nav-link text-truncate">
              <i className="fs-5 bi-bootstrap"></i><span className="ms-1 d-none d-sm-inline">Bootstrap</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="nav-link text-truncate">
              <i className="fs-5 bi-grid"></i><span className="ms-1 d-none d-sm-inline">Products</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" className="nav-link text-truncate">
              <i className="fs-5 bi-people"></i><span className="ms-1 d-none d-sm-inline">Customers</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SideBar;