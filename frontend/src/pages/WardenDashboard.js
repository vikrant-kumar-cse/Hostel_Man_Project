import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import WardenSidebar from '../components/WardenSidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleSuccess } from '../utils';
import 'react-toastify/dist/ReactToastify.css';

const WardenDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('role');
    handleSuccess('Logged out');
    setTimeout(() => {
      navigate('/warden-login');
    }, 1000);
  };

  return (
    <Container fluid className="p-0">
      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-dark text-white d-flex flex-column align-items-start" style={{ minHeight: '100vh', padding: '20px' }}>
          <WardenSidebar />
        </Col>

        {/* Main Content */}
        <Col md={9} className="bg-light" style={{ minHeight: '100vh', padding: '30px' }}>
          <div className="bg-white shadow rounded p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="text-success mb-0">🎯 Warden Dashboard</h2>
              <Button variant="danger" onClick={handleLogout}>Logout</Button>
            </div>
            <hr />
            <Outlet />
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default WardenDashboard;
