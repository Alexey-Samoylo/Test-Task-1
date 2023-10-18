import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'App.scss';
import UsersPage from 'pages/UsersPage';
import TablePage from 'pages/TablePage';
import { Typography } from 'components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <div className="App">
            <Toaster position="top-center" />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TablePage />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route
                        path="*"
                        element={
                            <Typography style={{ color: 'red', fontSize: 40 }}>
                                Page not found
                            </Typography>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
