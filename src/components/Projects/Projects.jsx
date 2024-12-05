import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import weather from "../../assets/Projects/weather-app.png";
import amazon1 from "../../assets/Projects/amazon-data-visualization-dashbord.png";
import superstore from "../../assets/Projects/superstore-data-dashboard.png";
import olympic from "../../Assets/Projects/olympic-data-dashboard.png";
import zomato from "../../Assets/Projects/zomato.png";
import ecommerce from "../../Assets/Projects/ecommerce-website.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" >
            <ProjectCard
              imgPath={zomato}
              isBlog={false}
              title="Zomato API - Food Ordering System"
              description="Developed a food order application using Spring Boot, featuring a RESTful API for seamless client-server interactions. Designed and implemen-ted APIs for managing customers, restaurants, and menus with efficient CRUD operations. Utilized Hibernate for Object-Relational Mapping (ORM) to streamline database interactions with MySQL. Implemented email-based authentication to enhance user account security."
              ghLink="https://github.com/Pratham-dhobi/zomato"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce Web Application"
              description="I developed an e-commerce web application using Spring MVC, featuring functionalities like secure payment integration, user authentication, and session management. The application includes OTP-based email authentication for added security and ensures a smooth user experience through an efficient architecture. With a focus on scalability and responsi-veness, this project demonstrates my skills in creating robust web solutions using the Spring MVC framework."
              ghLink="https://github.com/Pratham-dhobi/ecommerce-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Application"
              description="This responsive weather application provides real-time weather data, including temperature, pressure, UV index etc. for various locations. It also offers an hourly and 15-day temperature forecast, ensuring users stay updated with both current and future weather conditions with user-friendly interface. This application built with HTML, CSS and Vanilla Javascript."
              ghLink="https://github.com/Pratham-dhobi/weather-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon1}
              isBlog={false}
              title="Amazon Data Visualization Dashboard"
              description="I developed a Tableau project focused on visualizing Amazon data to uncover valuable insights. The project includes interactive dashboards showcasing key metrics like sales trends, customer distribution, and product performance across categories. Visualizations such as bar charts, line graphs, and heatmaps were used for a comprehensive analysis. This project demonstrates my proficiency in data visualization and storytelling."
              ghLink="https://github.com/Pratham-dhobi/Tableau-Projects/tree/main/AmazonData"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={superstore}
              isBlog={false}
              title="Superstore Data Visualization Dashboard"
              description="I created a Tableau project for Super Store data visualization, providing detailed insights into sales performance, profit trends, and customer demographics. The project features interactive dashboards with visualizations like bar graphs, pie charts, and heatmaps to analyze regional and category-wise performance. This project highlights my ability to transform raw data into actionable business insights through effective visualization."
              ghLink="https://github.com/Pratham-dhobi/Tableau-Projects/tree/main/SuperStoreData"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olympic}
              isBlog={false}
              title="Olympic Data Visualization Dashboard"
              description="I developed a Tableau project to visualize Olympic data, showcasing trends in medal counts, athlete performance, and country-wise achievements over the years. The project includes interactive dashboards with visual elements like line charts, heatmaps, and geographical maps for an engaging analysis. It provides valuable insights into historical data and patterns in the Olympics, reflecting my expertise in data visualization and analytics."
              ghLink="https://github.com/Pratham-dhobi/Tableau-Projects/tree/main/Summer_Olympic_Data"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
