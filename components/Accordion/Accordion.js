import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";

const accordionData = [
    {
        id: uuid(),
        title: "What services does Sparkling Star Company offer?",
        isOpen: true,
        content:
            "Sparkling Star is a comprehensive interior design and fitout company, offering a range of services that encompass 3D visualization, project management, furniture manufacturing, and furniture procurement. Our expertise extends to technical solutions, including plumbing, HVAC, lighting, and electrical works."
    },
    {
        id: uuid(),
        title: "How can I initiate the process of availing your services?",
        isOpen: false,
        content:
            "Getting started is easy! Simply reach out to us through our website to schedule a consultation or fill out the contact form on our website or give us a call. We'll promptly get in touch to discuss your project and set up a meeting at your convenience."
    },
    {
        id: uuid(),
        title: "What types of projects does your company undertake?",
        isOpen: false,
        content:
            "Sparkling Star undertakes projects in various sectors, including commercial offices, retail spaces, hospitality, residential renovations, healthcare facilities, educational institutions, cultural spaces, and industrial facilities. We blend creativity and technical expertise to transform various spaces into functional and visually appealing environments."
    },
    {
        id: uuid(),
        title: "What is the typical timeline for a project involving interior design, fitout, and technical services?",
        isOpen: false,
        content:
            "The timeline for an interior design & fit-out services project varies depending on the project's size and complexity. It typically involves initial client meetings, site assessments, concept development, detailed planning, approvals and permits, material procurement, production or construction, joinery and a final handover."
    },
    {
        id: uuid(),
        title: "How do you handle unexpected challenges during a project?",
        isOpen: false,
        content:
            "Our approach to handling unexpected challenges during a project is rooted in our experienced and solutions-oriented team. In the rare event of unforeseen issues, we prioritize a proactive mindset to swiftly address and resolve challenges. Our team's adaptability and problem-solving skills contribute to maintaining the project's overall efficiency and success, providing our clients with confidence in our ability to navigate unexpected hurdles effectively."
    },
    {
        id: uuid(),
        title: "Can your design and fit-out services be customized for small-scale residential projects as well as large commercial ventures?",
        isOpen: false,
        content:
            "Absolutely! From small-scale residential projects to large-scale commercial developments, we handle projects of all sizes. Because of our adaptability, we can customize our services to each client's unique needs."
    },
    {
        id: uuid(),
        title: "How involved will I be in the decision-making process for my project?",
        isOpen: false,
        content:
            "We highly value client input and collaboration. Throughout the project, we keep you informed and involved in decision-making to ensure the final result aligns with your vision and expectations. We provide end-to-end services, including sourcing and selecting furniture and decor items that align with the design concept and preferences."
    }
];

const accordionItemType = {
    top: "rounded-t-lg",
    default: "border rounded-none border-t-0",
    bottom: "border border-t-0 rounded-b-lg"
};

export const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-4xl mx-auto offset-y-0 offset-x-8">
            {accordionData.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={clsx(
                        "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                        {
                            [accordionItemType.top]: index === 0,
                            [accordionItemType.default]:
                                index > 0 && index < accordionData.length - 1,
                            [accordionItemType.bottom]:
                                index === accordionData.length - 1
                        }
                    )}
                >
                    <h2 className="accordion-item--heading mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                            />
                        </button>
                    </h2>
                    <div
                        className={clsx(
                            "accordion-item--content py-4 px-5 text-base",
                            {
                                hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
                                "!visibility block":
                                    activeAccordion === accordionItem.id // Use block class to show content again
                            }
                        )}
                    >
                        <p>{accordionItem.content}</p>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
