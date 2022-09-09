import Button from "../../components/button";
import Section from "../../components/section";

export default function Footer() {
    return <Section className="py-10 md:flex justify-between items-center">
        <div className="text-gray text-xs md:text-base text-center md:text-left">
            <div>© 2022 Moments of Space Ltd</div>
            <div className="md:mb-4">community@momentsofspace.com</div>
            <div>Company No. 12173633</div>
        </div>
        <div className="text-gray text-base flex items-center my-2 md:my-2 justify-center">
            <img src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/6272cb4ace88bb0344155fae_LinkedIn%20Icon.svg" className="h-8 md:h-14" />
            <img src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/6272cb778150585bdff60630_TwitterLogoC0F1.svg" className="h-8 md:h-14" />
            <img src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/6272cb349219050e401faff4_Instagram%20Icon.svg" className="h-8 md:h-14" />
            <img src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/63038ad1c5a73ea3ac9a7ed9_LinkedIn%20Icon.svg" className="h-8 md:h-14" />
            <img src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/63038ad13165c51d0ae18199_Discord%20Icon.svg" className="h-8 md:h-14" />
            <Button className="ml-8 mr-0">Sign Up</Button>
        </div>
        <div className="text-gray text-xs md:text-base text-center md:text-right">
            <div>FAQS</div>
            <div>Newsletter</div>
            <div>Privacy Plicy</div>
            <div>Terms & Conditions</div>
        </div>
    </Section>
}