import { SectionContainer } from "@components/Section";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import {
    TestimonialsContent,
    FAQContent,
    ContactContent,
    CarouselContent,
    WelcomeContent,
    HomePageSEO
} from "@components/ui/index";
import { useTheme } from "next-themes";
import { Hero } from "@components/Hero";

export default function Home() {
    const { theme, setTheme } = useTheme();
    return (
        <Layout className="">
            {/* { SEO Content } */}
            <HomePageSEO />
            <div
                className={`main-wrapper bg-[${
                    theme == "light" ? "#F3F5F8" : "#14191a"
                }] relative z-10 pb-16 pt-16`}
            >
                {/* { Page Hero } */}
                <Hero />
                {/* { Page Banner } */}
                {/* <HomeBanner /> */}
                {/* { Carousel Banner } */}
                <CarouselContent />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 pt-10 sm:gap-24">
                    {/* Features */}
                    <WelcomeContent />
                    {/* Testimonials */}
                    <TestimonialsContent />
                    {/* FAQ */}
                    <FAQContent />
                    {/* Contact */}
                    <ContactContent />
                </SectionContainer>
            </div>
        </Layout>
    );
}
