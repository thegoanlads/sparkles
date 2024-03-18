import { BadgeGroup, BadgeMessage } from "@components/Badge";
import { Content } from "@components/Content";
import { ContentImage } from "@components/ContentImage";
import { MotionBTTContainer } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";

export const WelcomeContent = () => {
    return (
        <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer id="features" className="features">
                <BadgeGroup alignment="center">
                    <BadgeMessage>Features</BadgeMessage>
                </BadgeGroup>
                <PageTitle className="text-center mx-auto" type="default">
                    Simplify Your Journey with sparkles
                </PageTitle>
                <Content className="text-center" alignment="center">
                    <p>Hey there! Welcome to sparkles:</p>
                </Content>
                <ContentImage />
            </SectionContainer>
        </MotionBTTContainer>
    );
};
