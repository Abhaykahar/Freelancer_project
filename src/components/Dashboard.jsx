import React from 'react';
import ProjectCard from './ProjectCard';

const Dashboard = ({ projects, deleteProject }) => {
  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="col-md-4 mb-4">
          <ProjectCard project={project} deleteProject={deleteProject} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
