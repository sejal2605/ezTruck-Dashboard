import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import { FaHome, FaTruckLoading, FaChartLine, FaDollyFlatbed } from "react-icons/fa";
import {
  ImUsers,
  ImFolderPlus,
  ImCart,
} from "react-icons/im";
const Dashboard = () => {
  const cardData = [
    { title: "6", subtitle: "Total Customer" },
    { title: "5", subtitle: "Total Supplier" },
    { title: "7", subtitle: "Total Medicine" },
    { title: "0", subtitle: "Out of Stock" },
    { title: "0", subtitle: "Expired" },
    { title: "2", subtitle: "Total Invoice" },
    // { title: "Card 3", subtitle: "Subtitle 3" },
  ];
  const pageData = [
    {
      path: "/invoice",
      name: "Create New Invoice",
      icon: <FaHome />,
    },
    {
      path: "/new_customer",
      name: "Add New Customer",
      icon: <ImUsers />,
    },
    {
      path: "/medicine",
      name: "Add New Medicine",
      icon: <ImFolderPlus />,
    },
    {
      path: "/supplier",
      name: "Add New Supplier",
      icon: <FaTruckLoading />,
    },
    {
      path: "/purchase",
      name: "Add New Purchase",
      icon: <ImCart />,
    },
    {
      path: "/sales_report",
      name: "Sales Report",
      icon: <FaChartLine />,
    },
    {
      path: "/purchage_report",
      name: "Purchase Report",
      icon: <FaDollyFlatbed />,
    },
    // { cardt: "Card 4", subtitle: "card 4" },
  ];

  return (
    <>
    <hr
          style={{
            width: "cover",
            borderColor: "red",
            borderStyle: "solid",
        opacity: "2.25"
          }}>
            
          </hr>
      <Container
        style={{
          marginTop: "15px",
          marginBottom: "15px",
          width:"auto"
        }}>
        <div className="row space-2" style={{ marginTop: "6px" ,padding:'20px'}}>
          <div className="col-md-9">
            <div className="row d-flex justify-content-around">
              {cardData.map((card, index) => (
                <div className="col" key={index}>
                  <Card
                    style={{
                      width: "15rem",
                      height: "5rem",
                      margin: 10,
                      borderColor: "skyblue",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-body-secondary">
                        {card.subtitle}
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-1">
            <div
              class="card"
              style={{
                width: "18rem",
                height: '11rem',
                margin: 10,
                borderColor: "red",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <div class="card-body">
                <h5 class="card-title mb-4">Today's Report</h5>
                <h6 class="card-subtitle mb-4 text-body-secondary">
                  Total Sales
                </h6>
                <h6 class="card-subtitle mb-5 text-body-secondary">
                  Total Purchase
                </h6>

              </div>
            </div>
          </div>
        </div>
        <hr
          style={{
            width: "cover",
            borderColor: "red",
            borderStyle: "solid",
        opacity: "2.25"
          }}
        />
        
        <div className="row" style={{ padding: "20px" }}>
          {pageData.map((card, index) => (
            <div className="col-md-3" key={index}>
              <NavLink to={card.path}>
              <Card
                style={{
                  
                  width: "100%", // Adjust width as needed
                  height: "8rem",
                  textAlign: "center",
                  // padding: "20px",
                  margin: 10,
                  borderColor: "skyblue",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <Card.Body>
                  <div style={{ height: "1.75rem", fontSize: "1.75em" }}>
                    {card.icon}
                  </div>
                  <Card.Subtitle
                    className="mb-2 text-body-secondary"
                    style={{ marginTop: "30px" }}
                  >
                    {card.name}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
              </NavLink>
            </div>
            
          ))}
        </div>
         
      </Container>
    </>
  );
};

export default Dashboard;