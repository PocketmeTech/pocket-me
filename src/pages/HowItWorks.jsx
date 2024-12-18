import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WhyPocketme from "../components/WhyPocketme";
import { Step } from "../components/Step";

function HowItWorks(){
    return <div>
        
        <div className="flex flex-col items-center px-10 md:px-20 mt-8 mb-20">
            <div className="text-center my-5 text-3xl font-bold">
               How It Works
            </div>
            <img className="mx-auto mb-10" src="/heading-line-dec.png" alt="" />
            <div className="text-center text-xl mb-3 font-bold">From application to approval, instant loans made effortless in minutes!</div>
            <p className="leading-loose text-justify">
                Need a financial boost? With our instant loan app, you can apply in just minutes, get quick approval, and have funds deposited directly into your account. No more long waits or complicated processes—just fast, secure, and reliable support tailored to your financial needs. Whether it’s an unexpected expense or an important opportunity, we’re committed to making borrowing easy, so you can focus on what truly matters.<br/><br/>
                
            </p>
            <Step reverse={false} title="Step 1" imgs={["1_LaunchApp.png","2_SelectLanguage.png","3_AcceptTerms.png","4_Register.png","5_VerifyOTP.png"]} description={["Install the app","Select the Language","Accept terms and provide permissions","Register using your mobile number"]}/>
            <br />
            <br/>
            <Step reverse={true} title="Step 2" imgs={["6_CompleteKYC.png","7_Documents.png","8_VerifyPan.png","9_VerifyAadhar.png","10_Selfie.png"]} description={["Complete KYC of your documents","Verify your PAN details","Verify your Aadhar card details","Upload your selfie"]}/>
            <br />
            <br/>
            <Step reverse={false} title="Step 3" imgs={["11_PersonalDetails.png","12_Dashboard.png"]} description={["Upload your personal details","You can apply easily once you are approved"]} />
        </div>
    </div>
}

export default HowItWorks;