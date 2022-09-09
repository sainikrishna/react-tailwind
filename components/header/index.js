import Button from "../button";
import Section from "../section";

export default function Header(props){
    return <Section className="py-5 flex justify-between">
        <img src="https://uploads-ssl.webflow.com/622f0adc088d28dd47af1002/622f0adc088d28334daf101a_MoS-Logo.svg" className="h-8 md:h-10 z-20 cursor-pointer"/>
        <div className="flex items-center z-20">
            <div className="hidden md:block">
                <Button>
                    Download
                </Button>
            </div>
            <div className="text-7xl"></div>
            <div onClick={props.onOpenDrawer} className="">
                <img src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/62aa103ba3b5e010a2284829_Union.svg" className="h-5 cursor-pointer"/>
            </div>
        </div>
    </Section>
}