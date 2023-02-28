import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import Sidebar from '../Sidebar/sidebar'
import './App.css'
function App() {
    return (
        <div className="wrapper">
            <Header />
            <Main />
            <Sidebar />
            <Footer />
        </div>
    )
}
export default App
