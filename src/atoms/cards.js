import { atom } from "recoil";

const value = [
    {
        url : "/service-icon-01.png",
        title : "Lowest Interest Rates",
        description : "Get personal loans for multiple purposes at the lowest interest rates."
    },
    {
        url : "/service-icon-02.png",
        title : "100% Paperless",
        description : "Get a personal loan completely online. No paperwork or physical documentation is required."
    },
    {
        url : "/service-icon-03.png",
        title : "Fast Processing and Disbursal",
        description : "Apply online, check your eligibility, and get money directly in your bank in less than 24 hours"
    },
    {
        url : "/service-icon-04.png",
        title : "Safe, Secure and Transparent",
        description : "Our loan application process is fully secured and safe and there are no hidden charges."
    }
];

export const cardAtom = atom({
    key : 'cardDetails',
    default : value
})