import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from '../src/pages/Signup/SignupPage';
import PollPage from './pages/Poll/PollPage';
import Modal from './components/modal/CreatePoll';
import { AuthProvider } from './auth/AuthContextComponent'; // check if this path is correct

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <NavBar onModalToggle={handleModalToggle} />
          {showModal && <Modal />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/poll/:id" element={<PollPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
