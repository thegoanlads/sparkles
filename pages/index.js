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
import { VideoPlay } from "@components/Video";
import { MotionBTTContainer } from "@components/Motion";

const videoLinks = [
    "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
];

export default function Home() {
    const item = videoLinks[Math.floor(Math.random() * videoLinks.length)];
    return (
        <Layout className="">
            <HomePageSEO />

            <div className={`main-wrapper relative z-10 pb-16 pt-16`}>
                <Hero />
                {/* <HomeBanner /> */}
                <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
                    <SectionContainer className="components--container wrap wrap-px grid gap-8 pt-10 sm:gap-24">
                        <VideoPlay videosrc={item} />
                        {/* <CarouselContent /> */}
                        <WelcomeContent />
                        <TestimonialsContent />
                        <FAQContent />
                        <ContactContent />
                    </SectionContainer>
                </MotionBTTContainer>
            </div>
        </Layout>
    );
}
