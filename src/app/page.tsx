"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumLarge"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Games",          id: "game-showcase"},
        {
          name: "Projects",          id: "future-projects"},
        {
          name: "Connect",          id: "social-media"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="kingpm08"
      button={{
        text: "Hire Me",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="kingpm08"
      description="Welcome to kingpm08 Universe. Game Developer & Web Creator, crafting immersive experiences and powerful digital solutions."
      buttons={[
        {
          text: "Explore My Work",          href: "#game-showcase"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/anime-car-city_23-2151710936.jpg"
      imageAlt="Futuristic pixel art cityscape with neon lights"
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",          content: "About My Journey as "},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/blue-white-keyboard-high-angle_23-2149680245.jpg",          alt: "Game developer and web creator workspace"},
        {
          type: "text",          content: " kingpm08"},
      ]}
      buttons={[
        {
          text: "View My Resume",          href: "#"},
      ]}
    />
  </div>

  <div id="game-showcase" data-section="game-showcase">
      <ProductCardThree
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      animationType="slide-up"
      products={[
        {
          id: "game-1",          name: "Dynamic Combat",          price: "Coming Soon",          imageSrc: "http://img.b2bpic.net/free-photo/anime-casino-illustration_23-2151726851.jpg",          imageAlt: "Game screenshot of character in combat"},
        {
          id: "game-2",          name: "Epic Boss Battles",          price: "Coming Soon",          imageSrc: "http://img.b2bpic.net/free-photo/8-bits-fisherman-characters-gaming-assets_23-2151143748.jpg",          imageAlt: "Game screenshot of boss battle"},
        {
          id: "game-3",          name: "Vibrant Worlds",          price: "Coming Soon",          imageSrc: "http://img.b2bpic.net/free-photo/pixel-art-river-landscape-illustration_23-2151793163.jpg",          imageAlt: "Game screenshot of peaceful town"},
      ]}
      title="Pixel Saga: A Dragon Ball Inspired Adventure"
      description="Dive into a vibrant 2D pixel art world, where classic martial arts action meets an epic narrative. Battle unique foes, discover hidden powers, and embark on a quest inspired by legendary anime."
    />
  </div>

  <div id="future-projects" data-section="future-projects">
      <BlogCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      title="Future Horizons: Web & AI Innovations"
      description="A sneak peek into upcoming web development and artificial intelligence projects that blend creativity with cutting-edge technology."
      blogs={[
        {
          id: "project-1",          category: "Web Dev",          title: "Responsive Portfolio Platform",          excerpt: "Developing a dynamic and highly responsive portfolio site with interactive components and seamless user experience.",          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-modern-technology-background-with-digital-particles-design_1048-15444.jpg",          imageAlt: "Abstract web development concept",          authorName: "kingpm08",          authorAvatar: "http://img.b2bpic.net/free-photo/background-with-printed-circuit-board-concept-modern-technologies_169016-61023.jpg",          date: "Coming Soon"},
        {
          id: "project-2",          category: "AI/ML",          title: "Intelligent Game NPC Behavior",          excerpt: "Implementing AI-driven non-player character behaviors for more immersive and challenging gaming experiences.",          imageSrc: "http://img.b2bpic.net/free-photo/computer-screen-with-ai-program-turning-text-prompt-into-videos-results_482257-125496.jpg",          imageAlt: "Abstract AI neural network",          authorName: "kingpm08",          authorAvatar: "http://img.b2bpic.net/free-photo/cyberpunk-illustration-with-neon-colors-futuristic-technology_23-2151672067.jpg",          date: "Coming Soon"},
        {
          id: "project-3",          category: "Full Stack",          title: "Cloud-Based Gaming Platform",          excerpt: "Designing and building a scalable cloud platform for hosting and streaming indie games, focusing on low-latency streaming.",          imageSrc: "http://img.b2bpic.net/free-photo/desktop-pc-wooden-desk-showcases-infographics-client-reach-data_482257-126876.jpg",          imageAlt: "Minimalist web interface design",          authorName: "kingpm08",          authorAvatar: "http://img.b2bpic.net/free-photo/3d-graph-computer-illustration_23-2151884885.jpg",          date: "Coming Soon"},
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "5+",          description: "Years Experience"},
        {
          id: "m2",          value: "3",          description: "Games Shipped"},
        {
          id: "m3",          value: "10+",          description: "Web Projects"},
      ]}
      title="My Achievements & Milestones"
      description="Key statistics showcasing my dedication to game development and web creation."
    />
  </div>

  <div id="social-media" data-section="social-media">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "YouTube",        "TikTok",        "GitHub",        "Instagram",        "Twitter",        "LinkedIn",        "Itch.io"]}
      title="Connect with kingpm08"
      description="Follow my journey in game development and web creation across these platforms."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "animated-grid"}}
      tag="Let's Collaborate"
      title="Ready to Build Something Amazing?"
      description="Whether it's a game idea, a web project, or just a chat, I'm always open to new opportunities. Reach out and let's create!"
      buttons={[
        {
          text: "Get in Touch",          href: "mailto:kingpm08@example.com"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Quick Links",          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "Games",              href: "#game-showcase"},
            {
              label: "Projects",              href: "#future-projects"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "YouTube",              href: "https://youtube.com/kingpm08"},
            {
              label: "TikTok",              href: "https://tiktok.com/kingpm08"},
            {
              label: "GitHub",              href: "https://github.com/kingpm08"},
            {
              label: "Instagram",              href: "https://instagram.com/kingpm08"},
          ],
        },
      ]}
      bottomLeftText="© 2023 kingpm08. All rights reserved."
      bottomRightText="Built with passion and pixel power."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
