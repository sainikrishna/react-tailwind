import Button from "../button";

export default function Header(){
    return <div className="px-20 py-5 flex justify-between">
        <img src="https://uploads-ssl.webflow.com/622f0adc088d28dd47af1002/622f0adc088d28334daf101a_MoS-Logo.svg" className="h-10 z-20"/>
        <div className="flex items-center z-20">
            <Button>
                Download
            </Button>
            <div className="text-7xl"></div>
            <div className="">
                <div>
                <img src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/62aa103ba3b5e010a2284829_Union.svg" className="h-5 cursor-pointer"/>
                </div>
            </div>
        </div>
    </div>
}