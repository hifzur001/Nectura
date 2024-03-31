import Announcement from "./vendors/Announcement";
import Arrivals from "./vendors/Arrivals";
import Banner from "./vendors/Banner";
import Brands from "./vendors/Brands";
import Header from "./vendors/Header";
const App = () => {
    return (
        <main>
            <Announcement />
            <Header />
            <Banner />
            <Brands />
            <Arrivals />
        </main>
    );
};

export default App;
