import Analysis from '@/components/Analysis';
import BlogSection from '@/components/BlogSection';
import CaseStudies from '@/components/CaseStudies';
import ContactSection from '@/components/ContactSection';
import FunFact from '@/components/FunFact';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Process/>
      <Analysis/>
      <CaseStudies/>
      <ServicesSection/>
      <FunFact/>
      <WhyChooseUs/>
      <TestimonialSection/>
      <BlogSection/>
      <ContactSection/>
    </main>
  );
}