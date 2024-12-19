import './App.css';
// import { Route, Router, Routes } from 'react-router-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminLogin from './Page/AdminLogin/AdminLogin';
import AccountManage from './Page/AccountManage/AccountManage';
import StudentList from './Page/ListProgress/ListProgress';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard/account-manage" element={<AccountManage />} />
        <Route path="/dashboard/list-progress" element={<StudentList />} />

      </Routes>
    </Router>
  );
}

export default App;
