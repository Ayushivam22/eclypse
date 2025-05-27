import "./App.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";

function App() {
    return (
        <div className="bg-black text-white">
            <div className="App flex flex-col items-center md:mx-14">
                <Header />
                <Hero />
                <Gallery />
                <ProductCard />
            </div>
        </div>
    );
}

export default App;
