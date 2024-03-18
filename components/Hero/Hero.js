"use client";

import { ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";

const banners = [
    "image/banners/01.jpeg",
    "image/banners/02.jpeg",
    "image/banners/03.jpeg",
    "image/banners/04.jpeg",
    "image/banners/05.jpeg",
    "image/banners/06.jpeg"
];

export const Hero = () => {
    const bgImageName = banners[Math.floor(Math.random() * banners.length)];
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
                        Redefine your workspace
                    </PageTitle>
                    <Content
                        className="text-black dark:text-white text-center"
                        alignment="center"
                    >
                        <p>
                            Whether transforming indoor environments for optimal
                            functionality or enhancing exteriors with
                            captivating aesthetics, our team is dedicated to
                            creating cohesive, inspiring spaces that reflect our
                            clients&apos; visions and elevate the overall design
                            experience.
                        </p>
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
