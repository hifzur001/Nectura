import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Shop from "./components/Shop";
import Testimonial from "./components/Testimonial";

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Features />
            <Products />
            <Brands />
            <Shop />
            <Testimonial />
            <Contact />
            <Footer />
        </main>
    );
};

export default App;
