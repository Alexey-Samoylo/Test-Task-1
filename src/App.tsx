import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TablePage from 'components/TablePage';
import UsersPage from 'components/UsersPage';
import 'App.scss';
import Typography from 'elements/Typography';

function App() {
    return (
        <div className="App">
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
