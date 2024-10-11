
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProjectForm from './components/ProjectForm'; 
import PaymentsList from './components/PaymentsList';
import EarningsOverview from './components/EarningsOverview';
import Header from './components/Header';
import PaymentForm from './components/PaymentForm'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('projects');
    return savedProjects ? JSON.parse(savedProjects) : [
      { id: 1, name: 'Project Alpha', dueDate: '2024-10-31', status: 'active' },
      { id: 2, name: 'Project Beta', dueDate: '2024-11-15', status: 'completed' },
    ];
  });


  const [payments, setPayments] = useState(() => {
    const savedPayments = localStorage.getItem('payments');
    return savedPayments ? JSON.parse(savedPayments) : [
      { id: 1, amount: 1500, status: 'unpaid' },
      { id: 2, amount: 2000, status: 'paid' },
    ];
  });


  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('payments', JSON.stringify(payments));
  }, [payments]);


  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
  };


  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };


  const addPayment = (newPayment) => {
    setPayments([...payments, { ...newPayment, id: payments.length + 1 }]);
  };


  const markAsPaid = (id) => {
    setPayments(payments.map((payment) =>
      payment.id === id ? { ...payment, status: 'paid' } : payment
    ));
  };

  const deletePayment = (id) => {
    setPayments(payments.filter((payment) => payment.id !== id));
  };

  return (
    <Router>
      <div className="App">

        <Header />

        <div className="container">
          <Routes>

            <Route path="/" element={
              <>
                <h1 className="my-4">Dashboard</h1>
                <Dashboard projects={projects} deleteProject={deleteProject} />
                <EarningsOverview payments={payments}  />
              </>
            } />


            <Route path="/projects" element={
              <>
                <h2 className="my-4">Projects</h2>
                <ProjectForm addProject={addProject} />
                <Dashboard projects={projects} deleteProject={deleteProject} />
              </>
            } />


            <Route path="/payments" element={
              <>
                <h2 className="my-4">Payments</h2>
                <PaymentForm addPayment={addPayment} />
                <PaymentsList payments={payments} markAsPaid={markAsPaid} deletePayment={deletePayment} />
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
