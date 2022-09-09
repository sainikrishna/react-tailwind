import AppStoreLogo from "../../components/appStoreLogo";

export default function JoinUs() {
    return <section className="px-20 py-28">
        <div className="h-115 w-full relative">
            <img src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/6239ea5bfa04a21737f19daa_Frame%2028.png" className="h-full w-full" />
            <div className="absolute top-20 left-20 w-1/2">
                <div className="text-gray text-52 leading-tight mb-16">Join us on the journey, download the app for free today</div>
                <AppStoreLogo />
            </div>
        </div>
        
    </section>
}