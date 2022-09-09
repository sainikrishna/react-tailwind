import Header from "../../components/header";
import Footer from "./footer";
import HomeHero from "./hero";
import JoinUs from "./joinUs";
import Rating from "./rating";
import Tabs from "./tabs";

export default function HomeContainer(){
    return <>
        <Header />
        <HomeHero />
        <Rating />
        <Tabs />
        <JoinUs />
        <Footer />
        <video id="07bb2aaa-768a-25b7-cc23-757cf4d80355-video" autoPlay muted loop className="video" playsinline="" data-wf-ignore="true" data-object-fit="cover"><source src="https://uploads-ssl.webflow.com/622f0adc088d28dd47af1002/622f0adc088d281396af1024_HeroAnim3000px_h264_6Kkbps-poster-00001.jpg" data-wf-ignore="true" /><source src="https://uploads-ssl.webflow.com/622f0adc088d28dd47af1002/622f0adc088d281396af1024_HeroAnim3000px_h264_6Kkbps-transcode.mp4" data-wf-ignore="true" /><source src="https://uploads-ssl.webflow.com/622f0adc088d28dd47af1002/622f0adc088d281396af1024_HeroAnim3000px_h264_6Kkbps-transcode.webm" data-wf-ignore="true" /></video>
        {/* <video className="h-96 w-96" width="400" height="500" autoPlay muted controls loop={true}> */}
  {/* <source src="https://uploads-ssl.webflow.com/622f0adc088d28dd47af1002/622f0adc088d281396af1024_HeroAnim3000px_h264_6Kkbps-poster-00001.jpg" data-wf-ignore="true" /> */}
  {/* <source src="https://uploads-ssl.webflow.com/622f0adc088d28dd47af1002/622f0adc088d281396af1024_HeroAnim3000px_h264_6Kkbps-transcode.mp4" data-wf-ignore="true" /> */}
  {/* <source src="https://uploads-ssl.webflow.com/622f0adc088d28dd47af1002/622f0adc088d281396af1024_HeroAnim3000px_h264_6Kkbps-transcode.webm" data-wf-ignore="true" /> */}
{/* </video> */}
    </>
}