import "./App.css";
import Atributos from "./components/Atributos";
import BackToTop from "./components/BackToTop";
import Casino from "./components/Casino";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import HeroSection from "./components/HeroSection";
import Lanza from "./components/Lanza";
import MasAccording from "./components/MasAccording";
import Misson from "./components/Misson";
import Nuestras from "./components/Nuestras";
import Platinum from "./components/Platinum";
import Potenciando from "./components/Potenciando";
import RezonesPara from "./components/RezonesPara";
import { useEffect, useState } from "react";

function App() {
    const [Loader, setLorder] = useState(false);
    useEffect(() => {
        setLorder(true);
        setTimeout(() => {
            setLorder(false);
        }, 3500);
    }, []);
    return ( <
        >
        <
        div > { " " } {
            Loader ? ( <
                Preloader / >
            ) : ( <
                div className = "bg-[#00141B]" >
                <
                HeroSection / >
                <
                Misson / >
                <
                Atributos / >
                <
                Potenciando / >
                <
                Casino / >
                <
                RezonesPara / >
                <
                Nuestras / >
                <
                Platinum / >
                <
                MasAccording / >
                <
                Lanza / >
                <
                Footer / >
                <
                BackToTop / >
                <
                /div>
            )
        } { " " } <
        /div>{" "} <
        />
    );
}

export default App;