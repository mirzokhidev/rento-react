import { routes } from "../../routers/routes";
import { IconLinkList } from "../../types/CommonComponents";
import { LanguagesList, MenuItemType } from "../../types/Layout";

export const Cities: string[] = [
  "Amsterdam",
  "Ankara",
  "Athens",
  "Atlantic",
  "Baltimore",
  "Bangkok",
  "Beijing",
  "Berlin",
  "Berne",
  "Brussels",
  "Budapest",
  "Buenos Aires",
  "Cairo",
  "Canberra",
  "Cannes",
  "Cape Town",
  "Chicago",
  "Cologne",
  "Copenhagen",
  "Damascus",
  "Delhi",
  "Dubai",
  "Dublin",
  "Florence",
  "Hague",
  "Havana",
  "Helsinki",
  "Hong Kong",
  "Honolulu",
  "Istanbul",
  "Jakarta",
  "Jerusalem",
  "Kansas City",
  "Kathmandu",
  "Kuala Lumpur",
  "Lisbon",
  "London",
  "Los Angeles",
  "Luxembourg",
  "Madrid",
  "Manila",
  "Melbourne",
  "Milan",
  "Montreal",
  "Moscow",
  "Munich",
  "Nazareth",
  "New York",
  "Nice",
  "Osaka",
  "Ottawa",
  "Paris",
  "Philadelphia",
  "Phnom Penh",
  "Prague",
  "Quito",
  "Reykjavik",
  "Rio de Janeiro",
  "San Francisco",
  "Santa Fe",
  "Santiago",
  "Shanghai",
  "Singapore City",
  "Stockholm",
  "Saint Petersburg",
  "Seoul",
  "Sydney",
  "Taipei",
  "Toronto",
  "Venice",
  "Vienna",
  "Washington",
  "Armenia",
  "Argentina",
  "Australia",
  "Aruba",
  "Belize",
  "Burundi",
  "Cape Verde",
  "Wokha",
  "Chile",
  "Ethiopia",
  "Zunheboto",
];

export const MenuItem: MenuItemType[] = [
  {
    title: "Home",
    type: "sub",
    active: false,
    megaMenuImage: true,
    children: [
      {
        title: "Car Minimal Demo",
        image: "other/menu/1.jpg",
        path: routes.Home.CarDemo1,
        type: "link",
      },
      {
        title: "Car Minimal Demo",
        image: "other/menu/2.jpg",
        path: routes.Home.CarDemo2,
        type: "link",
      },
    ],
  },
  {
    title: "Car",
    type: "sub",
    active: false,
    children: [
      {
        title: "Grid Pages",
        type: "sub",
        active: false,
        children: [
          {
            title: "Car 2 grid",
            type: "sub",
            path: routes.Car.Grid.Car2Grid,
            active: false,
          },
          {
            title: "Car 2 right grid",
            type: "sub",
            path: routes.Car.Grid.Car2RightGrid,
            active: false,
          },
          {
            title: "Car 3 grid",
            type: "sub",
            path: routes.Car.Grid.Car3Grid,
            active: false,
          },
          {
            title: "Car 3 right grid",
            type: "sub",
            path: routes.Car.Grid.Car3RightGrid,
            active: false,
          },
          {
            title: "Car no sidebar",
            type: "sub",
            path: routes.Car.Grid.CarNoSidebar,
            active: false,
          },
        ],
      },
      {
        title: "Listing Pages",
        type: "sub",
        active: false,
        children: [
          {
            title: "Car left list",
            type: "sub",
            path: routes.Car.Listing.CarLeftList,
            active: false,
          },
          {
            title: "Car right list",
            type: "sub",
            path: routes.Car.Listing.CarRightList,
            active: false,
          },
        ],
      },
      {
        title: "Other Pages",
        type: "sub",
        active: false,
        children: [
          {
            title: "Car left drawer",
            type: "sub",
            path: routes.Car.Other.CarLeftDrawer,
            active: false,
          },
          {
            title: "Car right drawer",
            type: "sub",
            path: routes.Car.Other.CarRightDrawer,
            active: false,
          },
          {
            title: "Car infinite scroll",
            type: "sub",
            path: routes.Car.Other.CarInfiniteScroll,
            active: false,
          },
          {
            title: "Car load more",
            type: "sub",
            path: routes.Car.Other.CarLoadMore,
            active: false,
          },
          {
            title: "Car top category",
            type: "sub",
            path: routes.Car.Other.CarTopCategory,
            active: false,
          },
          {
            title: "Car top filter",
            type: "sub",
            path: routes.Car.Other.CarTopFilter,
            active: false,
          },
          {
            title: "Car without slider",
            type: "sub",
            path: routes.Car.Other.CarWithoutSlider,
            active: false,
          },
        ],
      },
      {
        title: "Detail Pages",
        type: "sub",
        active: false,
        children: [
          {
            title: "Car classic",
            type: "sub",
            path: routes.Car.Detail.CarClassic,
            active: false,
          },
          {
            title: "Car layout 1",
            type: "sub",
            path: routes.Car.Detail.CarLayout1,
            active: false,
          },
          {
            title: "Car layout 2",
            type: "sub",
            path: routes.Car.Detail.CarLayout2,
            active: false,
          },
          {
            title: "Car slider",
            type: "sub",
            path: routes.Car.Detail.CarSlider,
            active: false,
          },
          {
            title: "Car expand slider",
            type: "sub",
            path: routes.Car.Detail.CarExpandSlider,
            active: false,
          },
          {
            title: "Car modern slider",
            type: "sub",
            path: routes.Car.Detail.CarModernSlider,
            active: false,
          },
          {
            title: "Car scrollspy",
            type: "sub",
            path: routes.Car.Detail.CarScrollspy,
            active: false,
          },
          {
            title: "Car video",
            type: "sub",
            path: routes.Car.Detail.CarVideo,
            active: false,
          },
          {
            title: "Car classic slider",
            type: "sub",
            path: routes.Car.Detail.CarClassicSlider,
            active: false,
          },
          {
            title: "Car thumbnail slider",
            type: "sub",
            path: routes.Car.Detail.CarThumbnailSlider,
            active: false,
          },
        ],
      },
      {
        title: "Car wishlist",
        type: "sub",
        path: routes.Car.CarWishlist,
        active: false,
      },
    ],
  },
  {
    title: "Pages",
    type: "sub",
    active: false,
    megaMenu: true,
    children: [
      {
        section: [
          {
            title: "Blog Pages",
            active: false,
            children: [
              {
                title: "Blog left sidebar",
                path: routes.Pages.Blog.BlogLeftSidebar,
                type: "link",
              },
              {
                title: "Blog right sidebar",
                path: routes.Pages.Blog.BlogRightSidebar,
                type: "link",
              },
              {
                title: "Blog 2 grid",
                path: routes.Pages.Blog.Blog2Grid,
                type: "link",
              },
              {
                title: "Blog 2 grid right",
                path: routes.Pages.Blog.Blog2GridRight,
                type: "link",
              },
              {
                title: "Blog title",
                path: routes.Pages.Blog.BlogTitle,
                type: "link",
              },
              {
                title: "Blog layout 1",
                path: routes.Pages.Blog.BlogLayout1,
                type: "link",
              },
              {
                title: "Blog no sidebar",
                path: routes.Pages.Blog.BlogNoSidebar,
                type: "link",
              },
              {
                title: "Blog top slider",
                path: routes.Pages.Blog.BlogToSlider,
                type: "link",
              },
              {
                title: "Blog 3 masonry",
                path: routes.Pages.Blog.Blog3Masonry,
                type: "link",
              },
              {
                title: "Blog load more",
                path: routes.Pages.Blog.BlogLoadMore,
                type: "link",
              },
              {
                title: "Blog left list",
                path: routes.Pages.Blog.BlogLeftList,
                type: "link",
              },
              {
                title: "Blog right list",
                path: routes.Pages.Blog.BlogRightList,
                type: "link",
              },
              {
                title: "Blog infinite scroll",
                path: routes.Pages.Blog.BlogInfiniteScroll,
                type: "link",
              },
            ],
          },
        ],
      },
      {
        section: [
          {
            title: "Blog Detail Pages",
            active: false,
            children: [
              {
                title: "Blog left classic",
                path: routes.Pages.Blog.Detail.BlogLeftClassic,
                type: "link",
              },
              {
                title: "Blog right classic",
                path: routes.Pages.Blog.Detail.BlogRightClassic,
                type: "link",
              },
              {
                title: "Blog video layout",
                path: routes.Pages.Blog.Detail.BlogVideoLayout,
                type: "link",
              },
              {
                title: "Blog audio layout",
                path: routes.Pages.Blog.Detail.BlogAudioLayout,
                type: "link",
              },
              {
                title: "Blog slider layout",
                path: routes.Pages.Blog.Detail.BlogSliderLayout,
                type: "link",
              },
              {
                title: "Blog quote layout",
                path: routes.Pages.Blog.Detail.BlogQuoteLayout,
                type: "link",
              },
            ],
          },
          {
            title: "Portfolio Pages",
            active: false,
            children: [
              {
                title: "Portfolio 2 grid",
                path: routes.Pages.Portfolio.Portfolio2Grid,
                type: "link",
              },
              {
                title: "Portfolio 3 grid",
                path: routes.Pages.Portfolio.Portfolio3Grid,
                type: "link",
              },
              {
                title: "Portfolio 4 grid",
                path: routes.Pages.Portfolio.Portfolio4Grid,
                type: "link",
              },
              {
                title: "Portfolio transform",
                path: routes.Pages.Portfolio.PortfolioTransform,
                type: "link",
              },
              {
                title: "Portfolio video modal",
                path: routes.Pages.Portfolio.PortfolioVideoModal,
                type: "link",
              },
            ],
          },
        ],
      },
      {
        section: [
          {
            title: "Portfolio Pages",
            active: false,
            children: [
              {
                title: "Portfolio gallery icon",
                path: routes.Pages.Portfolio.PortfolioGalleryIcon,
                type: "link",
              },
              {
                title: "Portfolio image change",
                path: routes.Pages.Portfolio.PortfolioImageChange,
                type: "link",
              },
              {
                title: "Portfolio box slider",
                path: routes.Pages.Portfolio.PortfolioBoxSlider,
                type: "link",
              },
              {
                title: "Portfolio parallax",
                path: routes.Pages.Portfolio.PortfolioParallax,
                type: "link",
              },
              {
                title: "Portfolio vertical slider",
                path: routes.Pages.Portfolio.PortfolioVerticalSlider,
                type: "link",
              },
              {
                title: "Portfolio creative full",
                path: routes.Pages.Portfolio.PortfolioCreativeFull,
                type: "link",
              },
              {
                title: "Portfolio modern",
                path: routes.Pages.Portfolio.PortfolioModern,
                type: "link",
              },
            ],
          },
          {
            title: "Portfolio Detail Pages",
            active: false,
            children: [
              {
                title: "Portfolio detail 1",
                path: routes.Pages.Portfolio.Detail.PortfolioDetail1,
                type: "link",
              },
              {
                title: "Portfolio detail 2",
                path: routes.Pages.Portfolio.Detail.PortfolioDetail2,
                type: "link",
              },
            ],
          },
        ],
      },
      {
        section: [
          {
            title: "Other Pages",
            active: false,
            children: [
              {
                title: "About Us 1",
                path: routes.Pages.Other.AboutUs1,
                type: "link",
              },
              {
                title: "About Us 2",
                path: routes.Pages.Other.AboutUs2,
                type: "link",
              },
              {
                title: "About Us 3",
                path: routes.Pages.Other.AboutUs3,
                type: "link",
              },
              {
                title: "Contact Us 1",
                path: routes.Pages.Other.ContactUs1,
                type: "link",
              },
              {
                title: "Contact Us 2",
                path: routes.Pages.Other.ContactUs2,
                type: "link",
              },
              {
                title: "Contact Us 3",
                path: routes.Pages.Other.ContactUs3,
                type: "link",
              },
              {
                title: "Services",
                path: routes.Pages.Other.Services,
                type: "link",
              },
              {
                title: "Our Team",
                path: routes.Pages.Other.Team,
                type: "link",
              },
              {
                title: "Pricing",
                path: routes.Pages.Other.Pricing,
                type: "link",
              },
              {
                title: "Testimonial",
                path: routes.Pages.Other.Testimonial,
                type: "link",
              },
              {
                title: "FAQ",
                path: routes.Pages.Other.Faq,
                type: "link",
              },
              {
                title: "User Dashboard",
                path: routes.Pages.Other.UserDashboard,
                type: "link",
              },
            ],
          },
        ],
      },
      {
        section: [
          {
            title: "Other Pages",
            active: false,
            children: [
              {
                title: "Privacy",
                path: routes.Pages.Other.Privacy,
                type: "link",
              },
              {
                title: "Terms & Condition",
                path: routes.Pages.Other.Condition,
                type: "link",
              },
              {
                title: "404",
                path: routes.Pages.Other.Error404,
                type: "link",
              },
              {
                title: "Coming Soon",
                path: routes.Pages.Other.ComingSoon,
                type: "link",
              },
              {
                title: "Login 1",
                path: routes.Pages.Other.Login1,
                type: "link",
              },
              {
                title: "Login 2",
                path: routes.Pages.Other.Login2,
                type: "link",
              },
              {
                title: "Login 3",
                path: routes.Pages.Other.Login3,
                type: "link",
              },
              {
                title: "Login 4",
                path: routes.Pages.Other.Login4,
                type: "link",
              },
              {
                title: "Signup 1",
                path: routes.Pages.Other.SignUp1,
                type: "link",
              },
              {
                title: "Signup 2",
                path: routes.Pages.Other.SignUp2,
                type: "link",
              },
              {
                title: "Signup 3",
                path: routes.Pages.Other.SignUp3,
                type: "link",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const AccountData: string[] = [
  "All Rides",
  "My Account",
  "Saved Cars",
  "Privacy",
  "Searches",
  "Recommendations",
  "My Profile",
];

export const LanguagesData: LanguagesList[] = [
  { data: "en", language: "English" },
  { data: "sp", language: "Spanish" },
  { data: "fr", language: "French" },
  { data: "ge", language: "German" },
  { data: "ko", language: "Korean" },
];

export const SocialLinks: IconLinkList[] = [
  { url: "https://www.facebook.com/", icon: "ri-facebook-fill" },
  { url: "https://x.com/", icon: "ri-twitter-x-line" },
  { url: "https://www.instagram.com/", icon: "ri-instagram-line" },
  { url: "https://www.youtube.com/", icon: "ri-youtube-fill" },
];

export const HeaderClassMap: { [key: string]: string } = {
  "car-2": " car-top-header",
};

export const ContainerClassMap: { [key: string]: string } = {
  "car-2": "car2-header",
};
