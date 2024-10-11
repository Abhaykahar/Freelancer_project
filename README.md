Project Management Dashboard
This is a Project Management Dashboard built using React.js and Bootstrap. The app helps users manage projects and payments, providing a clear overview of earnings and allowing easy project tracking and payment status updates. Data is stored in localStorage to maintain state between sessions.

Features
Project Management
View Projects: See all projects with details such as name, due date, and status (active or completed).
Add Projects: Create new projects by specifying the project name, due date, and status.
Delete Projects: Remove projects from the dashboard when no longer needed.
Payment Management
Add Payments: Add new payments with the amount and status (paid or unpaid).
Mark as Paid: Update the status of payments to "Paid."
Delete Payments: Remove payments from the system.
Earnings Overview
Displays a bar chart summarizing total earnings.
Shows earnings broken down by month.
Persistent Data
Projects and payments are saved in localStorage for persistence between page reloads.
Technologies Used
React.js: Core framework for building the app.
React Router: For routing between different pages (Dashboard, Projects, Payments).
Chart.js: Used for rendering the earnings overview bar chart.
Bootstrap 5: For styling and responsiveness.
LocalStorage: For storing project and payment data.