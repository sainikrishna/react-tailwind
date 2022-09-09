import Button from "../../components/button";
import CircleButton from "../../components/button/circleButton";

export default function Footer() {
    return <section className="px-20 py-10 flex justify-between items-center">
        <div className="text-gray text-base">
            <div>© 2022 Moments of Space Ltd</div>
            <div className="mb-4">community@momentsofspace.com</div>
            <div>Company No. 12173633</div>
        </div>
        <div className="text-gray text-base flex items-center">
            <img src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/6272cb4ace88bb0344155fae_LinkedIn%20Icon.svg" className="h14" />
            <img src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/6272cb778150585bdff60630_TwitterLogoC0F1.svg" className="h14" />
            <img src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/6272cb349219050e401faff4_Instagram%20Icon.svg" className="h14" />
            <img src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/63038ad1c5a73ea3ac9a7ed9_LinkedIn%20Icon.svg" className="h14" />
            <img src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/63038ad13165c51d0ae18199_Discord%20Icon.svg" className="h14" />
            <Button className="ml-8">Sign Up</Button>
        </div>
        <div className="text-gray text-base text-right">
            <div>FAQS</div>
            <div>Newsletter</div>
            <div>Privacy Plicy</div>
            <div>Terms & Conditions</div>
        </div>
    </section>
}