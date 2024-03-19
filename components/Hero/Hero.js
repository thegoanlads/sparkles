"use client";

import { ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { v4 as uuid } from "uuid";

const heroProps = [
    {
        id: uuid(),
        title: "Redefine Your Space",
        content:
            "Tailored Interior Solutions for Residential and Commercial Settings. Elevate your living and working environments with our bespoke interior solutions. Whether it's your home or business, we specialize in creating spaces that reflect your style and enhance functionality.",
        bgImageName: "image/banners/02.jpeg"
    },
    {
        id: uuid(),
        title: "Our Skills & Expertise",
        content:
            "At Sparkling Star, our expertise extends to both residential and commercial design. From cozy homes to dynamic workspaces, we bring a blend of creativity, technical proficiency, and client-focused dedication to every project.",
        bgImageName: "image/banners/04.jpeg"
    },
    {
        id: uuid(),
        title: "Portfolio Highlights",
        content:
            "Explore our portfolio to witness the transformation of diverse spaces. From elegant commercial centers to comfortable residential havens, our portfolio demonstrates the adaptability and quality we bring to every project.",
        bgImageName: "image/banners/05.jpeg"
    },
    {
        id: uuid(),
        title: "Watch Our Latest Projects",
        content:
            "Take a visual journey through our latest residential and commercial projects in our video gallery. See how we skillfully combine design and functionality to create spaces that evoke strong emotions.",
        bgImageName: "image/banners/06.jpeg"
    }
];

const HeroContent = ({ title, content, bgImageName }) => {
    return (
        <SectionContainer
            className="relative min-h-screen w-full"
            style={{
                backgroundImage: `url(/${bgImageName})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/* <div className="absolute inset-0 h-full w-full bg-white bg-gray-900/60" /> */}
            <div className="grid min-h-screen px-8">
                <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
                    <PageTitle className="text-black dark:text-white">
                        {title}
                    </PageTitle>
                    <Content
                        className="text-black dark:text-white text-center"
                        alignment="center"
                    >
                        <p>{content}</p>
                    </Content>
                    <ButtonGroup className="hidden md:block mt-8">
                        <a
                            role="button"
                            href="#contact"
                            className="btn btn--secondary ml-4"
                        >
                            Book an Appointment today
                        </a>
                    </ButtonGroup>
                </div>
            </div>
        </SectionContainer>
    );
};

export const Hero = () => {
    const item = heroProps[Math.floor(Math.random() * heroProps.length)];
    return (
        <HeroContent
            title={item.title}
            content={item.content}
            bgImageName={item.bgImageName}
        />
    );
};
