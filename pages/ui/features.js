import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";

export const FeaturesContent = () => {
    return (
        <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer className="feature-tabs">
                <BadgeGroup alignment="center">
                    <BadgeMessage>More Features</BadgeMessage>
                    <BadgeIcon icon="twemoji:waving-hand" />
                </BadgeGroup>
                <PageTitle className="text-center mx-auto" type="default">
                    Master Your Meal Planning and Nutrition Journey
                </PageTitle>
                <Content className="text-center" alignment="center">
                    <p>
                        Our comprehensive Notion template designed to empower
                        you on your meal planning and nutrition journey. With
                        our user-friendly features, customizable layouts, and
                        seamless recipe integration, taking control of your
                        meals has never been easier.
                    </p>
                </Content>
                <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                    <Card className="col-span-1 text-primary-900">
                        <CardBody className="w-full bg-white-600/20 p-12">
                            <CardImage
                                src="/features4.png"
                                alt="Customizable Layouts image used."
                            />
                            <CardHeader className="!text-black !text-2xl !font-bold">
                                Customizable Layouts
                            </CardHeader>
                            <p>
                                Personalize your meal planning experience with
                                our flexible layouts. Tailor your sections,
                                categories, and tabs to suit your unique style
                                and organization preferences. Our template
                                adapts to your needs, providing a seamless and
                                personalized planning experience.
                            </p>
                        </CardBody>
                    </Card>
                    <Card className="col-span-1 text-primary-900">
                        <CardBody className="w-full bg-white-600/20 p-12">
                            <CardImage
                                src="/features3.png"
                                alt="Progress Tracking image used."
                            />
                            <CardHeader className="!text-black !text-2xl !font-bold">
                                Progress Tracking
                            </CardHeader>
                            <p>
                                Celebrate your wins and stay motivated on your
                                nutrition journey. sparkles allows you to
                                monitor your progress with weight, measurements,
                                and other key metrics. Track your improvements
                                over time and see the positive impact of your
                                healthy choices.
                            </p>
                        </CardBody>
                    </Card>
                </CardGroup>
            </SectionContainer>
        </MotionBTTContainer>
    );
};
