
function DownloadBanner(){
    return (
        <div className="mx-10 md:mx-20 my-20 p-5 bg-mainColor rounded-3xl text-center">
            <div className="text-white text-3xl">Download Pocketme</div>
            <p className="text-white">Your Personal Loan App</p>
            <p>Instantly withdraw money from your credit limit of up to ₹1,00,000! No paperwork, ever</p>
            <div className="flex gap-10 justify-center mt-10">
                    <a className="mw-10" href="#">
                        <img src="/google-play.png" alt="" />
                    </a>
                    {/*<a href="#">
                        <img src="/app-store.png" alt="" />
                    </a>*/}
            </div>
        </div>
    )
}

export default DownloadBanner;