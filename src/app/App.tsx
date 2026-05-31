import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HistorySection } from './components/HistorySection';
import { ProductsSection } from './components/ProductsSection';
import { CooperativeSection } from './components/CooperativeSection';
import { ChurchesSection } from './components/ChurchesSection';
import { CulturalAssociationSection } from './components/CulturalAssociationSection';
import { TheaterSection } from './components/TheaterSection';
import { FootballSection } from './components/FootballSection';
import { CampingSection } from './components/CampingSection';
import { BusinessesSection } from './components/BusinessesSection';
import { NewsSection } from './components/NewsSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HistorySection />
      <ProductsSection />
      <CooperativeSection />
      <ChurchesSection />
      <CulturalAssociationSection />
      <TheaterSection />
      <FootballSection />
      <CampingSection />
      <BusinessesSection />
      <NewsSection />
      <GallerySection />
      <Footer />
    </div>
  );
}