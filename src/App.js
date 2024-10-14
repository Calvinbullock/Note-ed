import './App.css';
import HomePage from "./components/HomePage";
import SignInPage from "./components/SignInPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/SignIn" element={<SignInPage />} />
            </Routes>
        </BrowserRouter>   
    );
}
