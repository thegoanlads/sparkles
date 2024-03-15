import { SectionContainer } from "@components/Section";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { TestimonialsContent } from "./ui/testimonials";
import { FAQContent } from "./ui/faq";
import { ContactContent } from "./ui/contact";
import { CarouselContent } from "./ui/carousel";
import { WelcomeContent } from "./ui/welcome";
import { HomePageSEO } from "./ui/seo";

export default function Home() {
    return (
        <Layout className="">
            {/* { SEO Content } */}
            <HomePageSEO />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* { Carousel Banner } */}
                <CarouselContent />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
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
