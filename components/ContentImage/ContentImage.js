import { Content } from "@components/Content/Content";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Redefine Your Space",
        content:
            "Tailored Interior Solutions for Residential and Commercial Settings. Elevate your living and working environments with our bespoke interior solutions. Whether it's your home or business, we specialize in creating spaces that reflect your style and enhance functionality.",
        align: "right",
        image: "/gazebo-exterior/1ge.jpeg"
    },
    {
        id: uuid(),
        title: "Our Skills & Expertise",
        content:
            "At Sparkling Star, our expertise extends to both residential and commercial design. From cozy homes to dynamic workspaces, we bring a blend of creativity, technical proficiency, and client-focused dedication to every project.",
        align: "left",
        image: "/gazebo-exterior/2ge.jpeg"
    },
    {
        id: uuid(),
        title: "Portfolio Highlights",
        content:
            "Explore our portfolio to witness the transformation of diverse spaces. From elegant commercial centers to comfortable residential havens, our portfolio demonstrates the adaptability and quality we bring to every project.",
        align: "right",
        image: "/gazebo-exterior/3ge.jpeg"
    },
    {
        id: uuid(),
        title: "Watch Our Latest Projects",
        content:
            "Take a visual journey through our latest residential and commercial projects in our video gallery. See how we skillfully combine design and functionality to create spaces that evoke strong emotions.",
        align: "left",
        image: "/gazebo-exterior/2ge.jpeg"
    }
];

export const ContentImage = () => {
    const { theme, setTheme } = useTheme();

    return (
        <SectionContainer className="process-items max-w-4xl mx-auto mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={412}
                            height={330}
                            alt="Process Banner 1"
                            className="drop-shadow-xl rounded-md h-full offset-y-0 offset-x-8 blur-16"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-gray/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-center">
                            {item.title}
                        </h3>
                        <p className="text-center" alignment="center">
                            {item.content}
                        </p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
