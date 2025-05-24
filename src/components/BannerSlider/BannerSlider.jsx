// In your component file (e.g., Banner.jsx or Banner.tsx)
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BannerSlider = () => {
  const slides = [
    {
      title: "Grow with Confidence",
      description:
        "Track watering schedules, care tips, and plant health — all in one place with GrowGo.",
      image:
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Your Green Companion",
      description:
        "Manage your indoor jungle easily with personalized dashboards and smart reminders.",
      image:
        "https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Plant Care Made Simple",
      description:
        "From beginners to experts, GrowGo helps every plant parent thrive.",
      image:
        "https://images.unsplash.com/photo-1489644484856-f3ddc0adc923?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section className="mt-4 mb-10">
      <div className="w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full h-[400px] md:h-[800px] rounded-xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center flex items-center rounded-xl lg:px-0 px-1"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="bg-black/50 glass p-8 md:p-16 text-white max-w-xl rounded-xl sm:ms-5">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-md md:text-lg">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BannerSlider;
