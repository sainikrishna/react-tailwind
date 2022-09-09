import AppStoreLogo from "../../components/appStoreLogo";
import Section from "../../components/section";

export default function HomeHero() {
  return (
    <Section className="md:flex mt-4 bg-transparent z-20">
      <div className="w-full md:w-7/12 flex flex-col justify-center md:pr-40 z-20">
        <div className="text-4xl md:text-7xl text-gray mb-8 md:mb-12 z-20">
          The next evolution of meditation
        </div>
        <p className="text-gray-light text-lg md:text-xl mb-4 md:mb-6 z-20">
          We’re building a community-powered meditation platform to support
          wellbeing in web3
        </p>
        <p className="text-gray-light text-lg md:text-xl mb-5 z-20">
          Our iOS app enables you to meditate any time, any place, so you can
          find a Moment of clarity and calm no matter how busy life gets
        </p>
        <div className="flex md:block justify-center md:justify-start z-20">
          <AppStoreLogo />
        </div>
      </div>
      <div className="flex-1 w-full p-20 md:pr-0 md:pt-0 xl:pr-32 md:w-8/12 z-20">
        <img
          src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/630362bbfe07530aeea369f0_Group%2026-p-800.png"
          className="w-100 z-20"
        />
      </div>
      <video id="07bb2aaa-768a-25b7-cc23-757cf4d80355-video" autoPlay muted loop className="video" playsInline="" data-wf-ignore="true" data-object-fit="cover"><source src="https://uploads-ssl.webflow.com/622f0adc088d28dd47af1002/622f0adc088d281396af1024_HeroAnim3000px_h264_6Kkbps-poster-00001.jpg" data-wf-ignore="true" /><source src="https://uploads-ssl.webflow.com/622f0adc088d28dd47af1002/622f0adc088d281396af1024_HeroAnim3000px_h264_6Kkbps-transcode.mp4" data-wf-ignore="true" /><source src="https://uploads-ssl.webflow.com/622f0adc088d28dd47af1002/622f0adc088d281396af1024_HeroAnim3000px_h264_6Kkbps-transcode.webm" data-wf-ignore="true" /></video>
    </Section>
  );
}
