import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TablePage from 'components/TablePage'
import UsersPage from 'components/UsersPage'
import 'App.scss'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TablePage />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route
                        path="*"
                        element={<h1 style={{ color: 'red' }}>Error</h1>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
