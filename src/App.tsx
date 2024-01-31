
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AdminPanel from './AdminPanel';
import LoginPage from './LoginPage';
import NewsPanel from './NewsPanel';
import RegistrationPage from './RegistrationPage';

const App = () => {
  return (
    <Router>
      <Routes>  
        <Route path="/" Component={Home} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/registration" Component={RegistrationPage} />
        <Route path="/admin" Component={AdminPanel} />
        <Route path="/admin/newspanel" Component={NewsPanel} />
      </Routes>
    </Router>
  );
};

export default App;



