import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddContactPage from './pages/AddContact';
import EditContactPage from './pages/EditContact';
import ViewContactPage from './pages/ViewContact';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddContactPage />} />
        <Route path="/edit/:id" element={<EditContactPage />} />
        <Route path="/view/:id" element={<ViewContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;