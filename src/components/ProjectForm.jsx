
import React, { useState } from 'react';

const ProjectForm = ({ addProject }) => {
  const [projectName, setProjectName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('active');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = { name: projectName, dueDate, status };
    addProject(newProject);
    setProjectName('');
    setDueDate('');
    setStatus('active'); 
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 border  p-4 mb-3">
        <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="projectName" className="form-label">Project Name</label>
        <input
          type="text"
          className="form-control"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dueDate" className="form-label">Due Date</label>
        <input
          type="date"
          className="form-control"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="status" className="form-label">Status</label>
        <select
          className="form-control"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mx-auto d-block mt-4">Add Project</button>
    </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
