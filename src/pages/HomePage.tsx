import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import FeaturedReviews from "@/components/FeaturedReviews";
import ContactSection from "@/components/ContactSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <FeaturedReviews />
      <ContactSection />
    </div>
  );
};

export default HomePage;