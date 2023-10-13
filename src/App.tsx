import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TablePage from './components/tablePage';
import UsersPage from './components/usersPage';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TablePage />} />
          <Route path='/users' element={<UsersPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
