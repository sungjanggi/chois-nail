import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Access from "@/components/Access";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Gallery />
      <Concept />
      <Reservation />
      <Access />
      <Footer />
    </main>
  );
}
