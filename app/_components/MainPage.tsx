"use client";

import React, { useState, useEffect } from "react";
import ExecutiveSummary from "./ExecutiveSummary";
import ProductVision from "./ProductVision";
import Navigation from "./Navigation";
import Hero from "./Hero";
import TheProblem from "./TheProblem";
import MarketOppotunity from "./MarketOppotunity";
import UserPersonas from "./UserPersonas";
import LanguageProgression from "./LanguageProgression";
import FeaturesOverview from "./FeaturesOverview";
import AITechnical from "./AI-Technical";
import ArchitectureDesign from "./ArchitectureDesign";
import Timeline from "./Timeline";
import InvestmentProposition from "./Investment";
import Trust from "./Trust";
import CTA from "./CTA";
import Footer from "./Footer";

const MainPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 via-orange-50 to-amber-50">
      {/* Navigation */}
      <Navigation
        scrollToSection={scrollToSection}
        scrolled={scrolled}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12"
      >
        <Hero scrollToSection={scrollToSection} />
      </section>

      {/* Executive Summary */}
      <section id="executive" className="py-24 px-6 bg-white">
        <ExecutiveSummary />
      </section>

      {/* The Problem */}
      <section id="problem" className="py-24 px-6 bg-amber-900 text-white">
        <TheProblem />
      </section>

      {/* Market Opportunity */}
      <section id="opportunity" className="py-24 px-6">
        <MarketOppotunity />
      </section>

      {/* User Personas */}
      <section id="personas" className="py-24 px-6 bg-white">
        <UserPersonas />
      </section>

      {/* Product Vision */}
      <section id="product" className="py-24 px-6 bg-white">
        <ProductVision />
      </section>

      {/* Language Progression System */}
      <section
        id="progression"
        className="py-24 px-6 bg-linear-to-b from-white to-amber-50"
      >
        <LanguageProgression />
      </section>

      {/* Features Overview */}
      <section
        id="features"
        className="py-24 px-6 bg-linear-to-b from-amber-50 to-white"
      >
        <FeaturesOverview />
      </section>

      {/* AI & Technical Deep Dive */}
      <section id="technical" className="py-24 px-6 bg-amber-900 text-white">
        <AITechnical />
      </section>

      {/* System Architecture Diagram */}
      <section id="architecture" className="py-24 px-6 bg-white">
        <ArchitectureDesign />
      </section>

      {/* Roadmap & Timeline */}
      <section id="roadmap" className="py-24 px-6 bg-white">
        <Timeline />
      </section>

      {/* Investment & Business Model */}
      <section
        id="investment"
        className="py-24 px-6 bg-linear-to-b from-amber-50 to-white"
      >
        <InvestmentProposition />
      </section>

      {/* Trust & Professionalism */}
      <section id="trust" className="py-24 px-6 bg-white">
        <Trust />
      </section>

      {/* Final CTA */}
      <section
        id="cta"
        className="py-24 px-6 bg-linear-to-b from-amber-50 to-white"
      >
        <CTA />
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12 px-6">
        <Footer scrollToSection={scrollToSection} />
      </footer>
    </div>
  );
};

export default MainPage;
