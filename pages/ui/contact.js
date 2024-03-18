import { BadgeGroup, BadgeMessage } from "@components/Badge";
import { Content } from "@components/Content";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";

export const ContactContent = () => {
    return (
        <SectionContainer id="contact" className="contact">
            <BadgeGroup alignment="center">
                <BadgeMessage>Contact</BadgeMessage>
            </BadgeGroup>
            <PageTitle className="text-center mx-auto" type="default">
                Ready to transform your space?
            </PageTitle>
            <Content className="text-center" alignment="center">
                <p>
                    Contact our team for a consultation. Whether you have a
                    specific project in mind or need guidance, we&apos;re here
                    to help. Reach out to us or use our convenient online form.
                </p>
            </Content>
        </SectionContainer>
    );
};
