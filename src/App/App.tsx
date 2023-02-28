import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import Sidebar from '../Sidebar/sidebar'
import AboutUs from '../AboutUs/AboutUs'
import ContactUS from '../ContactUs/ContactUs'
import Services from '../Services/Services'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
function App() {
    return (
        <div className="wrapper">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/about" element={<AboutUs />}></Route>
                    <Route path="/services" element={<Services />}></Route>
                    <Route path="/contactus" element={<ContactUS />}></Route>
                </Routes>
            </Router>
            <Main />
            <Sidebar />
            <Footer />
        </div>
    )
}
export default App
