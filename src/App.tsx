import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Features />
            <Products />
        </main>
    );
};

export default App;
