import { atom } from "recoil"

const data = [
    {
        header:"Contact Us",
        links : [
           {
                title :"+91 9987149456",
                link : "#"
           },
           {
                title :"info@pocketme.in",
                link : "#"
           }
        ]
    },
    {
        header:"Company",
        links : [
           {
                title :"About Us",
                link : "#"
           },
           {
                title :"Contact Us",
                link : "#"
           },
           {
                title :"Careers",
                link : "#"
           },
           {
                title :"Blog",
                link : "#"
           },
           {
                title :"FAQs",
                link : "#"
           }
        ]
    },
    {
        header:"Legal",
        links : [
           {
                title :"Terms & Conditions",
                link : "/terms-and-conditions"
           },
           {
                title :"Privacy Policy",
                link : "/privacy-policy"
           },
           {
                title :"Code of Conduct",
                link : "#"
           },
           {
                title :"Fair Practice Code",
                link : "#"
           },
           {
                title :"Digital Lending",
                link : "#"
           },
           {
                title :"Interest Rate Policy",
                link : "#"
           },
           {
                title :"Grievance Redressal Policy",
                link : "#"
           },
           {
                title :"Ombudsman Scheme",
                link : "#"
           },
           {
                title :"LSP & DLA",
                link : "#"
           },
           {
                title :"Disclosures",
                link : "#"
           }
        ]
    },
]

export const footerAtom = atom({
    key : "footerSections",
    default : data
})