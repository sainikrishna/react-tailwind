import AppStoreLogo from "../../components/appStoreLogo";

export default function HomeHero() {
  return (
    <div className="px-20 flex mt-12 bg-transparent z-20">
      <div className="w-7/12 flex flex-col justify-center pr-40 z-20">
        <div className="text-7xl text-gray mb-12">
          The next evolution of meditation
        </div>
        <p className="text-gray-light text-xl mb-6">
          We’re building a community-powered meditation platform to support
          wellbeing in web3
        </p>
        <p className="text-gray-light text-xl mb-5">
          Our iOS app enables you to meditate any time, any place, so you can
          find a Moment of clarity and calm no matter how busy life gets
        </p>
        <div>
          <AppStoreLogo />
        </div>
      </div>
      <div className="flex-1 w-3/5 pr-32 w-4/12 z-20">
        <img
          src="https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/630362bbfe07530aeea369f0_Group%2026-p-800.png"
          className="w-100"
        />
      </div>
    </div>
  );
}
