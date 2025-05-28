import "./App.css";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Testimonials from "./components/Testimonials";

function App() {
    return (
        <div className="bg-black text-white">
            <div className="App flex flex-col items-center md:mx-14">
                <Header />
                <Hero />
                <Gallery />
                <ProductCard />
                <Dropdown />
                <Testimonials />
                <Footer />
            </div>
        </div>
    );
}

export default App;
