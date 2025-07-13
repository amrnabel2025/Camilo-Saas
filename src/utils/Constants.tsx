import happy1 from "../../public/happy1.png";
import happy2 from "../../public/happy2.jpg";
import happy3 from "../../public/happy3.jpg";
import image1 from "../../public/Ride-security-with-Live-Camera-Tracking.png";
import image3 from "../../public/Shared,-eco-friendly-Transfers.png";
import {
  Feature1SVG,
  Feature2SVG,
  Feature3SVG,
  HumanSVG,
  WhoWeAre1SVG,
  WhoWeAre2SVG,
  WhoWeAre4SVG,
} from "../../public/SVGs";
import image2 from "../../public/Traffic-Congestion-Reduction.png";

//______________________________________ F E A T U R E S ______________________________________//
export const features = [
  {
    icon: <Feature1SVG />,
    bgcolor: "#c6e1dd",
    title: "feature1",
    desc: "feature1Description",
    width: { xs: "100%", md: "100%" },
  },
  {
    icon: <Feature2SVG />,
    bgcolor: "#fef0e6",
    title: "feature2",
    desc: "feature2Description",
    width: { xs: "100%", md: "100%" },
  },
  {
    icon: <Feature3SVG />,
    bgcolor: "#d2e4f1",
    title: "feature3",
    desc: "feature3Description",
    width: { xs: "100%", md: "100%" },
  },
];

//______________________________________ W H O W E A R E ______________________________________//
export const whoWeAreFeatures = [
  {
    icon: <WhoWeAre1SVG />,
    label: "feature4",
  },
  {
    icon: <WhoWeAre2SVG />,
    label: "feature2",
  },
  {
    icon: <WhoWeAre4SVG />,
    label: "feature3",
  },
  {
    icon: <HumanSVG />,
    label: "feature1",
  },
];

//______________________________________ T E S T I M O N I A L S ______________________________________//
export const testimonials = [
  {
    name: "client1.name",
    message: "client1.message",
    avatar: happy1.src,
    rating: 5,
  },
  {
    name: "client2.name",
    message: "client2.message",
    avatar: happy2.src,
    rating: 5,
  },
  {
    name: "client3.name",
    message: "client3.message",
    avatar: happy3.src,
    rating: 5,
  },
];

//______________________________________ R E A S O N S ______________________________________//
export const reasons = [
  {
    id: "shared",
    text: "feature1",
    top: 235,
    smallTop: 243,
    image: image3,
  },
  {
    id: "traffic",
    text: "feature2",
    top: 296,
    smallTop: 304,
    image: image2,
  },
  {
    id: "security",
    text: "feature3",
    top: 357,
    smallTop: 365,
    image: image1,
  },
];

//______________________________________ V I D E O S ______________________________________//
export const BACKGROUND_VIDEOS = [
  "/videos/backgroundVideo.mp4",
  "/videos/backgroundVideo2.mp4",
  "/videos/backgroundVideo3.mp4",
  "/videos/backgroundVideo4.mp4",
];
