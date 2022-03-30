import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar2 from "./components/Navbar2/Navbar2";
import Body from "./components/Body/Body";
import TopHeader from "./components/TopHeader/TopHeader";

function App() {
    return (
        <div className="">
            <TopHeader></TopHeader>
            <Navbar2></Navbar2>
            <Banner></Banner>
            <Body></Body>
        </div>
    );
}

export default App;
