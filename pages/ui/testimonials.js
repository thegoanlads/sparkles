import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Columns } from "@components/Columns";
import { MotionBTTContainer } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";

export const TestimonialsContent = () => {
    return (
        <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer id="testimonials" className="benefits">
                <BadgeGroup alignment="center">
                    <BadgeMessage>Testimonials</BadgeMessage>
                    <BadgeIcon icon="twemoji:waving-hand" />
                </BadgeGroup>
                <PageTitle className="text-center mx-auto" type="default">
                    What customers have to say about us
                </PageTitle>
                <Columns />
            </SectionContainer>
        </MotionBTTContainer>
    );
};
