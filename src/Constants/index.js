import performance1 from "../assets/apple/performance1.png";
import performance2 from "../assets/apple/performance2.png";
import performance3 from "../assets/apple/performance3.png";
import performance4 from "../assets/apple/performance4.png";
import performance5 from "../assets/apple/performance5.jpg";
import performance6 from "../assets/apple/performance6.png";
import performance7 from "../assets/apple/performance7.png";
import videoPath1 from "../assets/apple/videos/feature-1.mp4";
import videoPath2 from "../assets/apple/videos/feature-2.mp4";
import videoPath3 from "../assets/apple/videos/feature-3.mp4";
import videoPath4 from "../assets/apple/videos/feature-4.mp4";
import videoPath5 from "../assets/apple/videos/feature-5.mp4";
import featureIcon1 from "../assets/apple/feature-icon1.svg";
import featureIcon2 from "../assets/apple/feature-icon2.svg";
import featureIcon3 from "../assets/apple/feature-icon3.svg";
import featureIcon4 from "../assets/apple/feature-icon4.svg";
import featureIcon5 from "../assets/apple/feature-icon5.svg";

const links = [
  { label: "Store" },
  { label: "Mac" },
  { label: "iPhone" },
  { label: "Watch" },
  { label: "Vision" },
  { label: "AirPods" },
];

const noChangeParts = [
  "Object_84",
  "Object_37",
  "Object_34",
  "Object_12",
  "Object_80",
  "Object_35",
  "Object_36",
  "Object_13",
  "Object_125",
  "Object_76",
  "Object_33",
  "Object_42",
  "Object_58",
  "Object_52",
  "Object_21",
  "Object_10",
];

const performanceImages = [
  { id: "p1", src: performance1 },
  { id: "p2", src: performance2 },
  { id: "p3", src: performance3 },
  { id: "p4", src: performance4 },
  { id: "p5", src: performance5 },
  { id: "p6", src: performance6 },
  { id: "p7", src: performance7 },
];

const performanceImgPositions = [
  {
    id: "p1",
    left: 5,
    bottom: 65,
  },
  {
    id: "p2",
    right: 10,
    bottom: 60,
  },
  {
    id: "p3",
    right: -5,
    bottom: 45,
  },
  {
    id: "p4",
    right: -10,
    bottom: 0,
  },
  {
    id: "p5",
    left: 20,
    bottom: 50,
  },
  {
    id: "p6",
    left: 2,
    bottom: 30,
  },
  {
    id: "p7",
    left: -5,
    bottom: 0,
  },
];

const features = [
  {
    id: 1,
    icon: featureIcon1,
    highlight: "Email AI.",
    text: "Summarize and draft replies to emails instantly, so you stay on top of your inbox.",
    styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
  },
  {
    id: 2,
    icon: featureIcon2,
    highlight: "Image AI.",
    text: "Generate or edit images with ease. Just type what you imagine, and let AI bring it to life.",
    styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
  },
  {
    id: 3,
    icon: featureIcon3,
    highlight: "Summarize AI.",
    text: "Turn long articles, reports, or notes into clear, bite-sized summaries in seconds.",
    styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
  },
  {
    id: 4,
    icon: featureIcon4,
    highlight: "AirDrop.",
    text: "Wirelessly share photos, large files, and more between your iPhone, your Mac, & other devices.",
    styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
  },
  {
    id: 5,
    icon: featureIcon5,
    highlight: "Writing Tool.",
    text: "Write smarter and faster, whether it’s blogs, essays, or captions, AI helps polish your words.",
    styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
  },
];

const featureSequence = [
  { videoPath: { videoPath1 }, boxClass: ".box1", delay: 1 },
  { videoPath: { videoPath2 }, boxClass: ".box2", delay: 0 },
  { videoPath: { videoPath3 }, boxClass: ".box3", delay: 0 },
  { videoPath: { videoPath4 }, boxClass: ".box4", delay: 0 },
  { videoPath: { videoPath5 }, boxClass: ".box5", delay: 0 },
];

const footerLinks = [
  { label: "Privacy Policy", link: "#" },
  { label: "Terms of Use", link: "#" },
  { label: "Sales Policy", link: "#" },
  { label: "Legal", link: "#" },
  { label: "Site Map", link: "#" },
];

export {
  features,
  featureSequence,
  footerLinks,
  links,
  noChangeParts,
  performanceImages,
  performanceImgPositions,
};
