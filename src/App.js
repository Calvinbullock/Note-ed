import './App.css';
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>   
    );
}
