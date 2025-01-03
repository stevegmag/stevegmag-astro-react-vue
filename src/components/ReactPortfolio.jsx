// src/components/ReactPortfolio.jsx
import React, { useEffect, useState } from 'react';

// Portfolio Detail Component
export const ReactDetailPortfolio = ({ projects, visible }) => {
  if (!visible) return null; // Hide if not visible

  // Render portfolio items dynamically from JSON data
  return (
    <section id="portfolio-list">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Portfolio List Block</h2>
            <h3 className="section-subheading text-muted">A showcase of my work.</h3>
          </div>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div key={project["project-id"]} className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={project.logo} alt={`${project["client-name"]} logo`} />
              </a>
              <div className="portfolio-caption">
                <h4>{project["client-name"]}</h4>
                <p className="text-muted">{project.role}</p>
                <p className="text-muted">{project["team-size"]} | {project.year}</p>
              </div>
              {/* Render Services */}
              <ul>
                {project.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
              {/* Render Technologies */}
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              {/* Render Activities */}
              <ul>
                {project.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
              {/* Render Screenshots */}
              <div className="screenshot-gallery">
                {project.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={`https://stevegmag.webonwater.com/${screenshot}`}
                    alt={`${project["client-name"]} screenshot ${index + 1}`}
                    className="screenshot"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

};

// Portfolio Block Component
export const PortfolioBlockDisplay = ({ projects, visible }) => {
  if (!visible) return null; // Hide if not visible

  return (
    <div className="portfolio-block-display">
      <h2>Portfolio Block Display</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-sm-4 portfolio-item" key={project['project-id']}>
            <a
              href={`#project-${project['project-id']}`}
              className="portfolio-link"
              data-toggle="modal"
            >
              <div className="caption">
                <div className="caption-content">
                  <p>
                    {project['client-name'] || 'Unnamed Project'}
                    <br />
                    Project Details
                  </p>
                  <i className="fa fa-search-plus fa-3x"></i>
                </div>
              </div>
              <img
                src={`https://stevegmag.webonwater.com/${project.logo || 'img/portfolio/default-logo.png'}`}
                className="img-responsive"
                alt={project['client-name'] || 'Unnamed Project'}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};


export const Hello = () => {
  return <h1>Hello, Astro with React!</h1>;
};

// Portfolio Detail Component
const ReactPortfolio = ({ showBlock = true, showDetails = true }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/data/projects.json'); // Relative to project root
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container">
      <h1>Portfolio</h1>
      <ReactDetailPortfolio projects={projects} visible={showDetails} />
      <PortfolioBlockDisplay projects={projects} visible={showBlock} />
    </div>
  );
};

// Export the main component and individual displays
export default ReactPortfolio;
