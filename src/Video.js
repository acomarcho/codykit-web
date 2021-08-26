import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const Video = () => {
  return (
    <ScrollAnimation animateIn="zoomIn">
      <section className="video-section">
        <div className="video-container">
          <div className="section-title">
            <h1>Video</h1>
          </div>
          <div className="video-frame">
            <iframe
              src="https://www.youtube.com/embed/ZJS5YVl6w5E"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Video;
