import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "./pages//Home/Home";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

function App() {
    return (
        <Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </Fragment>
    );
}
export default App;
