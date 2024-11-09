import Header from "../components/Home/header";
import Section1 from "../components/Home/Section1";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";


function Home() {

    return (
        <div className="font-quicksand bg-gradient-to-r from-gray-900 via-black to-gray-900 min-h-screen text-white">
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </div>
    );
}

export default Home;
