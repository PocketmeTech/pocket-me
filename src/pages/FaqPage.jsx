import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WhyPocketme from "../components/WhyPocketme";
import {Question} from "../components/Question";

const faqs = [
    {
        question : "What is an instant loan?",
        answer : "An instant loan is a type of loan that can be approved and disbursed quickly, usually within a few minutes to a few hours."
    },
    {
        question : "How do I apply for an instant loan?",
        answer : "You can apply for an instant loan throught our app by filling out a simple online application form and submitting the required documents."
    },
    {
        question : "What are the eligibility criteria for an instant loan?",
        answer : "The eligibility criteria  vary depending on the lender, but typically include factors such as age, income, credit score, and employment status."
    },
    {
        question : "How long does it take to get approved?",
        answer : "Approval times can vary depending on factors such as the lender's policies and the completeness of your application, but it is usually within a few minutes to a few hours."
    },
    {   question : "How much can I borrow with an instant loan?",
        answer : "The amount you can borrow depends on factors such as your income, credit score, and the lender's policies. Typically, instant loans range from a few hundred to several thousand dollars."
    },
    {
        question : "What are the interest rates for instant loans?",
        answer : "Interest rates vary depending on the lender, your credit wothiness, and the loan amount and tenure. It is important to copare rates from different lenders before applying."
    },
    {
        question : "What documents do I need to apply?",
        answer : "The required documents may vary depending on the lender, but commonly include proof of identity, address, income and bank statements."
    },
    {
        question : "How do I repay an instant loan?",
        answer : "You can repay your instant loan through automatic deductions from your bank account, post-dated cheques, or online payment methods, depending on the lender's policies."
    },
    {
        question : "Can I prepay my instant loan?",
        answer : "Yes, most lenders allow you to prepay your instant loan either in part or in full. However, there may be prepayment charges or penalties, so it is advisable to check with the lender."
    },
    {
        question : "What happens if I default on my instant loan?",
        answer : "Defaulting on your instant loan can have serious consequences including damage to your credit score, legal action, and seizure of collateral (if applicable). It is important to repay your loan on time."
    }
]

function FaqPage(){
    return <div >
       <div className="flex flex-col items-center px-10 md:px-20 mt-8 mb-20">
            <div className="text-center my-5 text-3xl font-bold">
                Frequently Asked Questions
            </div>
            <img className="mx-auto mb-10" src="/heading-line-dec.png" alt="" />
            {faqs.map((entry,idx) => (
                <Question key={idx} question={entry.question} answer={entry.answer} />
            ))}
        </div>
    </div>
}

export default FaqPage;