import { useState } from "react";

const tabs = [
    {
        name: "Moments",
        title: "Short meditations that fit into your everyday",
        image: "https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/63036b5cb6f3cde7a8bc2f6b_ZYX_4479%20copy13.jpg",
        description: "Our content is divided into short sessions, called Moments, that range from just two to eight minutes in length, making it easy for you to incorporate meditation into your daily life"
    },
    {
        name: "On the Go",
        title: "Meditate on the move with Walking Mode",
        image: "https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/63036b47e66a552daaadc036_DSC_1316%20copy14.jpg",
        description: "Meditation isn't something you have to do seated, at home, with your eyes closed. Walking Mode lets you meditate on the move, so whether you're commuting to work, walking the dog, or working out, you can turn your daily activities into opportunities to be mindful."
    },
    {
        name: "Reflect",
        title: "Personalised guidance based on your needs",
        image: "https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/6273bc3251c1e3fc972a6a4f_AZYX_1317%201.png",
        description: "Check-in with our Reflect feature, and we'll personalise your Path based on what you need most. You'll move through four different Pillars that will help you relax your body, calm your mind, increase emotional awareness, and become more present and mindful as you move through your day."
    },
    {
        name: "Learn",
        title: "Learn skills to maintain a mindful state",
        image: "https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/6273bc3291505ed68c71a369_AZYX_1436%201.png",
        description: "Journey through a series of step-by-step skills, each one building upon the last. Learn the technique in Foundation, meditate with more space in Practice, and integrate mindfulness into your daily life with a Nano."
    },
    {
        name: "Journey",
        title: "Track your progress and build a habit",
        image: "https://uploads-ssl.webflow.com/60cbc0da55451be74897d8d4/6273bc335466bb92ca04a07a_DSC_5679%201.png",
        description: "As you move through the Paths, we'll track your progress in the Journey Tab so you can see how far you've come. And if you accept notifications, we’ll send you helpful nudges so you can find more opportunities to be mindful in your day."
    },
]

export default function Tabs(){
    const [active, setActive] = useState(0);

    const data = tabs[active];

    return <section className="mt-16 px-20 pb-28 border-b border-b-gray-600">
        <div className="mb-14 flex justify-between mb-14">
            {tabs.map((tab, index) => (
                <div onClick={() => setActive(index)} key={tab} className={`${index === active ? "text-gray" : "text-gray-light"} text-lg font-normal border-b border-b-gray-300 pb-2.5 pt-7 flex-1 text-center mr-7 cursor-pointer last:mr-0`}>{tab.name}</div>
            ))}
            
        </div>
        <div className="flex justify-between">
                <div className="flex-1 mr-6">
                    <img src={data.image} className="h-96 rounded" />
                </div>
                <div className="flex-1 pl-14 pr-32">
                    <div className="text-gray text-5xl mb-5">{data.title}</div>
                    <div className="text-gray-light text-xl">{data.description}</div>
                </div>
        </div>
    </section>
}