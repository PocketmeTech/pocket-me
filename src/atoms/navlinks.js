import { atom } from "recoil";
const value = [
    {
        routeName : "Home",
        routePath : "/"
    },
    {
        routeName : "About Us",
        routePath : "/about"
    },
    {
        routeName : "Why Pocketme",
        routePath : "/why-pocketme"
    },
    {
        routeName : "How It Works",
        routePath : "/how-it-works"
    },
    {
        routeName : "Contact Us",
        routePath : "/contact-us"
    },
    {
        routeName : "FAQs",
        routePath : "/faq"
    }
]

export const navlinkAtom = atom({
    key : 'navLinks',
    default : value
})