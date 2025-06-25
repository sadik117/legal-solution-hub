// components/Carousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const slides = [
    {
      image:
        "https://i.ibb.co/fzxJZYHK/alexander-shatov-mr4-JG4-SYOF8-unsplash.jpg",
      title: "Discover New Apps",
      subtitle: "Explore trending, useful and innovative apps.",
    },
    {
      image:
        "https://i.ibb.co/016K7Vp/premium-photo-1682310173726-98697f7e2414.jpg",
      title: "Boost Productivity",
      subtitle: "Find tools to increase efficiency and stay focused.",
    },
    {
      image:
        "https://i.ibb.co/WWrCsFtS/youtube-icon-6953526-1280.jpg ",
      title: "Learn & Grow",
      subtitle: "Access apps that help you learn new skills daily.",
    },
  ];

  return (
    <div className="w-11/12 mt-3 max-w-6xl mx-auto h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-md mb-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-opacity-40 p-5 text-gray-200">
                <h2 className="text-2xl md:text-4xl font-bold mb-3">
                  {slide.title}
                </h2>
                <p className="text-xs md:text-sm">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
