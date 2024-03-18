import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "Emily J.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "The thought of remodelling our new house intimidated us, but Sparkling Star made it pleasant and stress-free. Their staff respected our choices while offering creative solutions. We were pleasantly surprised by the outcome, and our house now perfectly captures our personality."
    },
    {
        id: uuid(),
        title: "Jason F.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "I recently engaged Sparkling Company for the renovation of our small office space, and I couldn't be more thrilled with the progress and results so far. From the initial consultation to the ongoing work, their team has consistently demonstrated professionalism, inventiveness, and a commitment to excellence. Looking forward to the completed project!."
    },
    {
        id: uuid(),
        title: "Miguel J.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Our experience with the landscaping work done by sparkling star on our private villa has been nothing short of magical.  We wholeheartedly recommend their services to anyone seeking a transformative and personalized approach to landscaping."
    },
    {
        id: uuid(),
        title: "Kim L.",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "The incredible design team of sparkling star did an amazing makeover for our 2 bhk apartment. Their unique touch gave our room the ideal balance of style and utility."
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <Icon icon={item.icon} className="mb-4 w-10 h-10 my-2" />
                    <h3 className="text-xl mb-2 font-medium text-gray/60">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <o className="flex">
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                    </o>
                </div>
            ))}
        </SectionContainer>
    );
};
