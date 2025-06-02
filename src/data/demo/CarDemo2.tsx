import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { AmenitiesList, InfoList } from "../../types/CommonComponents";
import { StepsList } from "../../types/HomeDemo";
import { CounterList } from "../../types/CommonComponents";

export const CounterData: CounterList[] = [
  { end: 135, suffix: "+", label: "Freelancer Joined" },
  { end: 8, prefix: "0", suffix: "%", label: "Years of Experience" },
  { end: 35, suffix: "K+", label: "Company Joined" },
];

export const AboutListData: AmenitiesList[] = [
  { image: "car2/1.svg", title: "Wide Selection of Vehicles" },
  { image: "car2/4.svg", title: "24/7 Customer Support" },
  { image: "car2/2.svg", title: "Flexible Booking Options" },
  { image: "car2/5.svg", title: "Convenient Airport Services" },
  { image: "car2/3.svg", title: "Insurance Coverage" },
];

export const CategoriesContentData: string = "Whether you're planning a family vacation, a business trip, or a weekend getaway with friends, we've got you covered.";

// Slider options from swiper plugin
export const CategoriesSettingData = {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  slidesPerView: 5,
  spaceBetween: 30,
  modules: [Navigation],
};

export const StepBookingContentData: string = "When it comes to renting a car for your next adventure, we understand you have choices.";

export const StepsData: StepsList[] = [
  {
    step: "01",
    title: "Search",
    description: "For finding the perfect vehicle for your journey, utilize our user-friendly search feature.",
  },
  {
    step: "02",
    title: "Choose",
    description: "Insurance coverage to GPS navigation systems, reserved to meet your specific preferences and requirements.",
  },
  {
    step: "03",
    title: "Customize",
    description: "Customize your reservation to fit your specific requirements for your memorable trip.",
  },
  {
    step: "04",
    title: "Confirmation",
    description: "Receive instant confirmation of your booking and prepare for an unforgettable journey!",
  },
];

export const ServiceListData: AmenitiesList[] = [
  { image: "car2/s-1.svg", title: "Mileage Unlimited" },
  { image: "car2/s-2.svg", title: "Pick up Services" },
  { image: "car2/s-3.svg", title: "Delivery to Door" },
];

export const BlogsContentData: string = "oin us on a heartwarming journey as we share the story of our happy family's adventures on the road.";

export const BlogsData: InfoList[] = [
  {
    image: "car2/blog/2.jpg",
    title: "Perfect Ride with Our Car Rental",
    text: "It's about the experiences, the memories, and the freedom that come with each mile traveled.",
  },
  {
    image: "car2/blog/3.jpg",
    title: "A Beginner's Guide to Car Maintenance",
    text: "Owning a car comes with the responsibility of regular maintenance to keep it running smoothly.",
  },
  {
    image: "car2/blog/4.jpg",
    title: "Why Understanding Your Car Matters",
    text: "Planning a road trip can be exciting, but ensuring your car is ready for the journey is crucial.",
  },
];

export const TestimonialsContentData: string = "Take a moment to read through these testimonials and gain insight into why we're the preferred choice for travelers worldwide.";

export const InstagramSliderData: string[] = ["1", "2", "3", "4", "5", "6", "1", "2", "3", "4", "5", "6"];

export const FeaturedCarContentData: string = "As one of the best-selling midsize sedans in America, the Camry offers an exceptional driving experience for both daily commutes and long road trips.";

export const ChooseUsContent: string = "We understand that you have options when it comes to renting a car for your travels. Here's why we believe we stand out from the rest.";

export const OurDedicationContent: string = "We are committed to ensuring that every aspect of your rental experience is designed to bring you pleasure and contentment.";

// Slider options from swiper plugin
export const LogoCar2Slider = {
  slidesPerView: 5,
  spaceBetween: 120,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    991: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1399: {
      slidesPerView: 5,
      spaceBetween: 120,
    },
  },
};

export const Job3BoxSlider = {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  pagination: {
    clickable: true,
  },
  modules: [Pagination],
};

export const car2InstagramSlider = {
  slidesPerView: 9,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    445: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 5,
    },
    991: {
      slidesPerView: 6,
    },
    1299: {
      slidesPerView: 7,
    },
    1500: {
      slidesPerView: 8,
    },
    1650: {
      slidesPerView: 9,
    },
  },
};
