import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUsPage from "./pages/AboutUsPage";
import HowItWorks from "./pages/HowItWorks";
import ContactUs from "./pages/ContactUs";
import WhyPocketmePage from "./pages/WhyPocketmePage";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import { ScrollToTop } from "./utils/ScrollToTop";
import FaqPage from "./pages/FaqPage";
import { TermsAndConditionsPage } from "./pages/TermsAndConditionsPage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

function App() {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },1000)
  },[])

  return (
    <RecoilRoot>
      <div>
          {loading ? <Loader /> : 
            <div>
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={< Layout/>}>
                    <Route index element={<Home/>} />
                    <Route path="about" element={<AboutUsPage/>} />
                    <Route path="why-pocketme" element={<WhyPocketmePage/>} />
                    <Route path="how-it-works" element={<HowItWorks/>} />
                    <Route path="contact-us" element={<ContactUs/>} />
                    <Route path="faq" element={<FaqPage />} />
                    <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />}/>
                  </Route>
                </Routes>
              </BrowserRouter>
            </div>
          }
      </div>
    </RecoilRoot>
  )
}



export default App;