import React from 'react';

const ProjectCard = ({ project, deleteProject }) => {
  const { id, name, dueDate, status } = project;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Due: {dueDate}</p>
        <p className="card-text">Status: {status}</p>
        <button className="btn btn-danger" onClick={() => deleteProject(id)}>Delete</button>
      </div>
    </div>
  );
};

export default ProjectCard;
