import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer";
import DownloadBanner from "../components/DownloadBanner";
import { useEffect } from "react";

function AboutUsPage(){
    return <div>
        <AboutUs />
        <DownloadBanner />
    </div>
}

export default AboutUsPage;