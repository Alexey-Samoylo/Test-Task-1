import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TablePage from './components/tablepage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TablePage />} />
          <Route path='/users' element={<div>Users</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
