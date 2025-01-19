'use client'
import { useState } from 'react';
import Marquee from "./ui/marquee";
import { Blend, Crop, Sparkle, Sparkles } from 'lucide-react';
// import { useAppSelector } from '@/lib/redux/hook';

const domains  = [
            {
                "domainId": 14,
                "domainName": <Crop size={40} />,
                "description": "Excel in public speaking and communication with expert coaching. Learn techniques to captivate audiences, express ideas clearly, and build confidence. Become a persuasive and influential speaker in both personal and professional settings"
            },
            {
                "domainId": 11,
                "domainName": <Sparkles size={40}/>,
                "description": "Bring ideas to life with product development expertise. Learn to strategize, prototype, and deliver innovative solutions that meet market demands. Master the entire lifecycle, from concept to launch, with guidance from industry leaders."
            },
            {
                "domainId": 10,
                "domainName": <Blend size={40}/>,
                "description": "Demystify the world of economics with expert-led insights into global markets, policies, and trends. Learn key concepts, data analysis, and economic strategies. Build the knowledge to succeed in academia, business, or government roles."
            },
            {
                "domainId": 5,
                "domainName": <Sparkle size={40}/>,
                "description": "Open doors to new cultures and careers with expert-led language learning programs. Master pronunciation, grammar, and vocabulary tailored to your needs. Learn any language with confidence, fluency, and cultural understanding."
            },
            {
                "domainId": 4,
                "domainName": <Crop size={40}/>,
                "description": "Stay ahead with comprehensive knowledge of taxation laws and strategies. Learn to optimize tax planning, ensure compliance, and understand global tax systems. Gain the expertise to manage personal or business finances with confidence"
            },
        ]

const ReviewCard = ({
    domainName,
    description,
}: {
    domainName: any;
    description: string;
}) => {
    return (
        <figure className="flex justify-center">
            <div className="max-w-sm w-full lg:flex">
                <div className="bg-white rounded-md border-l-2 border-[#ff6a3d] p-4 flex flex-col items-start text-secondary">
                    <div className="font-bold text-[20px] mb-2">{domainName}</div>
                    <p className="text-gray-700 text-[14px]">{description}</p>
                </div>
            </div>
        </figure>
    );
};

export function HeroCard() {
    // const { domains, selectedDomain, status } = useAppSelector((state) => state.domain)
    const [currentIndex, setCurrentIndex] = useState(0);
    const firstRow = domains.slice(0, domains.length / 2);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % domains.length);
    };

    
    return (
        <div className="relative mt-28">
            <Marquee pauseOnHover className="[--duration:20s] hidden md:flex">
                <div className="flex gap-4">
                    {firstRow.map((review, index) => (
                        <ReviewCard {...review} key={`${review.domainName}-${index}`} />
                    ))}
                </div>
            </Marquee>

            {/* Mobile Carousel */}
            <div className=" md:hidden justify-center">
                <div className="relative">
                    <ReviewCard {...domains[currentIndex]} />
                    <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <button
                            onClick={handleNext}
                            className="bg-white p-1 rounded-full shadow-md text-black"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-[#ff6a3d76] via-transparent to-transparent opacity-50"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-[#ff6a3d76] via-transparent to-transparent opacity-50"></div>
        </div>
    );
}
