"use client";
import Banner from "@/components/front/Banner";
import Cart from "@/components/front/Cart";
import Feature from "@/components/front/Feature";
import Footer from "@/components/front/Footer";
import Hero from "@/components/front/Hero";
import Navbar from "@/components/front/Navbar";
import TrendingProducts from "@/components/front/TrendingProducts";
import { useState } from "react";

export default function Home() {
  const [showCart, setShowCart] = useState(false);
  return (
    <main>
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Hero />
      <Feature />
      <TrendingProducts />
      <Banner />
      <Footer />
    </main>
  );
}
