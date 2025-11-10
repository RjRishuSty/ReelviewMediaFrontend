import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SchoolIcon from "@mui/icons-material/School";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ComputerIcon from "@mui/icons-material/Computer";
import FlightIcon from "@mui/icons-material/Flight";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import MovieIcon from "@mui/icons-material/Movie";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import PetsIcon from "@mui/icons-material/Pets";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

export const servicesCategories = [
  {
    id: 1,
    label: "Hospital",
    numberOfPartner: 25,
    rating: 4.8,
    icon: <LocalHospitalIcon sx={{ fontSize: 40, color: "#1976d2" }} />,
    img: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg",
    description: "Helping hospitals build strong online visibility and trust.",
  },
  {
    id: 2,
    label: "Wedding",
    numberOfPartner: 40,
    rating: 4.6,
    icon: <FavoriteIcon sx={{ fontSize: 40, color: "#e91e63" }} />,
    img: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
    description: "Making every wedding story viral with creative visuals.",
  },
  {
    id: 3,
    label: "Hotels",
    numberOfPartner: 32,
    rating: 4.7,
    icon: <HotelIcon sx={{ fontSize: 40, color: "#009688" }} />,
    img: "https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg",
    description: "Boosting bookings through impactful digital storytelling.",
  },
  {
    id: 4,
    label: "Automotive",
    numberOfPartner: 18,
    rating: 4.5,
    icon: <DirectionsCarIcon sx={{ fontSize: 40, color: "#f57c00" }} />,
    img: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
    description: "Driving engagement and brand loyalty for automotive brands.",
  },
  {
    id: 5,
    label: "Education",
    numberOfPartner: 27,
    rating: 4.9,
    icon: <SchoolIcon sx={{ fontSize: 40, color: "#3f51b5" }} />,
    img: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
    description: "Helping institutions attract students through social media.",
  },
  {
    id: 6,
    label: "Restaurants",
    numberOfPartner: 22,
    rating: 4.4,
    icon: <RestaurantIcon sx={{ fontSize: 40, color: "#c62828" }} />,
    img: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
    description: "Making food content irresistible and brand recognizable.",
  },
  {
    id: 7,
    label: "Real Estate",
    numberOfPartner: 30,
    rating: 4.6,
    icon: <HomeWorkIcon sx={{ fontSize: 40, color: "#4caf50" }} />,
    img: "/assets/images/services/realestate.jpg",
    description: "Showcasing properties with high-quality visuals and ads.",
  },
  {
    id: 8,
    label: "Fashion",
    numberOfPartner: 45,
    rating: 4.8,
    icon: <CheckroomIcon sx={{ fontSize: 40, color: "#9c27b0" }} />,
    img: "/assets/images/services/fashion.jpg",
    description: "Building strong style brands with stunning reel visuals.",
  },
  {
    id: 9,
    label: "Fitness",
    numberOfPartner: 20,
    rating: 4.7,
    icon: <FitnessCenterIcon sx={{ fontSize: 40, color: "#ff5722" }} />,
    img: "/assets/images/services/fitness.jpg",
    description: "Creating motivating and performance-driven fitness content.",
  },
  {
    id: 10,
    label: "Technology",
    numberOfPartner: 35,
    rating: 4.9,
    icon: <ComputerIcon sx={{ fontSize: 40, color: "#0288d1" }} />,
    img: "/assets/images/services/technology.jpg",
    description: "Simplifying complex tech into engaging visual stories.",
  },
  {
    id: 11,
    label: "Travel",
    numberOfPartner: 29,
    rating: 4.5,
    icon: <FlightIcon sx={{ fontSize: 40, color: "#00bcd4" }} />,
    img: "/assets/images/services/travel.jpg",
    description: "Inspiring travelers through cinematic destination reels.",
  },
  {
    id: 12,
    label: "Beauty",
    numberOfPartner: 33,
    rating: 4.6,
    icon: <FaceRetouchingNaturalIcon sx={{ fontSize: 40, color: "#ec407a" }} />,
    img: "/assets/images/services/beauty.jpg",
    description: "Highlighting beauty transformations with trendy content.",
  },
  {
    id: 13,
    label: "Food",
    numberOfPartner: 26,
    rating: 4.7,
    icon: <FastfoodIcon sx={{ fontSize: 40, color: "#ff9800" }} />,
    img: "/assets/images/services/food.jpg",
    description: "Tasty visuals that attract customers instantly.",
  },
  {
    id: 14,
    label: "Photography",
    numberOfPartner: 24,
    rating: 4.8,
    icon: <PhotoCameraIcon sx={{ fontSize: 40, color: "#6a1b9a" }} />,
    img: "/assets/images/services/photography.jpg",
    description: "Helping photographers showcase portfolios that convert.",
  },
  {
    id: 15,
    label: "Entertainment",
    numberOfPartner: 38,
    rating: 4.9,
    icon: <MovieIcon sx={{ fontSize: 40, color: "#f44336" }} />,
    img: "/assets/images/services/entertainment.jpg",
    description: "Creating viral content for music, film, and media brands.",
  },
  {
    id: 16,
    label: "E-commerce",
    numberOfPartner: 50,
    rating: 4.8,
    icon: <ShoppingCartIcon sx={{ fontSize: 40, color: "#8bc34a" }} />,
    img: "/assets/images/services/ecommerce.jpg",
    description: "Boosting online store visibility through creative campaigns.",
  },
  {
    id: 17,
    label: "Healthcare",
    numberOfPartner: 21,
    rating: 4.7,
    icon: <MedicalServicesIcon sx={{ fontSize: 40, color: "#0288d1" }} />,
    img: "/assets/images/services/healthcare.jpg",
    description: "Educating audiences through reliable health content.",
  },
  {
    id: 18,
    label: "Architecture",
    numberOfPartner: 17,
    rating: 4.6,
    icon: <ArchitectureIcon sx={{ fontSize: 40, color: "#795548" }} />,
    img: "/assets/images/services/architecture.jpg",
    description: "Showcasing modern spaces with elegant visual storytelling.",
  },
  {
    id: 19,
    label: "Pet Services",
    numberOfPartner: 19,
    rating: 4.5,
    icon: <PetsIcon sx={{ fontSize: 40, color: "#ff9800" }} />,
    img: "/assets/images/services/pets.jpg",
    description: "Building adorable campaigns for pet brands and clinics.",
  },
];
