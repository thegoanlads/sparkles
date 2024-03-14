"use client";
import ReactPlayer from "react-player";

export function VideoPlay({ videosrc }) {
    return (
        <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
            <ReactPlayer
                // width="500px"
                // height="400px"
                url={videosrc}
                controls={true}
                // light is usefull incase of dark mode
                // light={false}
                // picture in picture
                // pip={true}
            />
            <source src={videosrc} type="video/mp4" />
        </section>
    );
}
