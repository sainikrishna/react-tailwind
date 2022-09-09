import AppStoreLogo from "../../components/appStoreLogo";
import Section from "../../components/section";

export default function JoinUs() {
    return <Section className="px-20 py-10 md:py-28">
        <div className="h-115 w-full relative">
            <img src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/6239ea5bfa04a21737f19daa_Frame%2028.png" className="hidden md:block h-full w-full" />
            <img src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/6239ea5bfa04a2388df19db1_Frame%2028%20(1).png" className="md:hidden h-full w-full" />
            <div className="absolute top-8 md:top-20 left-8 md:left-20 md:w-1/2">
                <div className="text-gray text-2xl md:text-5xl leading-tight mb-5 md:mb-16 pr-8">Join us on the journey, download the app for free today</div>
                <AppStoreLogo />
            </div>
        </div>
        
    </Section>
}