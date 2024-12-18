import { ContactCard } from "../components/ContactCard";
import { EmailIcon } from "../icons/EmailIcon";
import { MobileIcon } from "../icons/MobileIcon";

function ContactUs(){
    return <>
       <div className="flex flex-col items-center px-10 md:px-20 mt-8 mb-20">
            <div className="text-center my-5 text-3xl font-bold">
               Contact Us
            </div>
            <img className="mx-auto mb-10" src="/heading-line-dec.png" alt="" />
            <div className="text-center text-xl font-bold mb-4">Get In touch with Pocketme Customer Care!</div>
            <div className="mb-12 md:w-96 text-justify">Your Lending Partner, Just a Click Away – Reach Out for Hassle-Free Support! <br/><br />
                Have questions about your loan or need assistance? Our friendly support team is here to help you. We're just a message or call away. Let us make borrowing simple, transparent, and stress-free for you!
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <ContactCard label="Email" icon={<EmailIcon />} value="care@pocketme.in" />
                <ContactCard label="Call" icon={<MobileIcon />} value="+91 9987149456" />
            </div>
        </div>
    </>
}

export default ContactUs;