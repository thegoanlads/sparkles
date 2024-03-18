import { Carousel } from "@components/Carousel";

const DATA = [
    { image: "https://picsum.photos/id/1018/1920/1080/" },
    { image: "https://picsum.photos/id/1015/1920/1080/" },
    { image: "https://picsum.photos/id/1018/1920/1080/" },
    { image: "https://picsum.photos/id/1015/1920/1080/" },
    { image: "https://picsum.photos/id/1018/1920/1080/" },
    { image: "https://picsum.photos/id/1015/1920/1080/" },
    { image: "https://picsum.photos/id/1018/1920/1080/" },
    { image: "https://picsum.photos/id/1015/1920/1080/" },
    { image: "https://picsum.photos/id/1018/1920/1080/" },
    { image: "https://picsum.photos/id/1015/1920/1080/" },
    { image: "https://picsum.photos/id/1018/1920/1080/" },
    { image: "https://picsum.photos/id/1015/1920/1080/" }
];

export const CarouselContent = () => {
    return <Carousel data={DATA} />;
};
