import { Accordion } from "@components/Accordion";
import { BadgeGroup, BadgeMessage } from "@components/Badge";
import { MotionBTTContainer } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";

export const FAQContent = () => {
    return (
        <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer id="faq" className="faq">
                <BadgeGroup alignment="center">
                    <BadgeMessage>FAQ</BadgeMessage>
                </BadgeGroup>
                <PageTitle className="text-center mx-auto" type="default">
                    Got questions?
                </PageTitle>
                <Accordion />
            </SectionContainer>
        </MotionBTTContainer>
    );
};
