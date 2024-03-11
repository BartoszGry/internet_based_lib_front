
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AdminPanel from './AdminPanel';
import LoginPage from './LoginPage';
import NewsPanel from './NewsPanel';
import RegistrationPage from './RegistrationPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import BookPage from './BookPage';
import SearchPanel from './SerchPanel';

const App = () => {
  return (
    <Router>
      <Routes>  
        <Route path="/" Component={Home} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/registration" Component={RegistrationPage} />
        <Route path="/pass" Component={ForgotPasswordPage} />
        <Route path="/admin" Component={AdminPanel} />
        <Route path="/admin/newspanel" Component={NewsPanel} />
        <Route path="/books/:bookId" Component={BookPage} />
        <Route path="/search" element={<SearchPanel searchData={null} />} />
      </Routes>
    </Router>
  );
};

export default App;



