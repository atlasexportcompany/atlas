import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Ship, 
  Plane, 
  Package, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Calculator,
  MessageSquare,
  ChevronRight,
  ArrowRight,
  Search,
  CheckCircle2
} from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import BaseProducts from './components/BaseProducts';
import Simulator from './components/Simulator';
import CustomOrder from './components/CustomOrder';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-slate-50 font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <BaseProducts />
        <Simulator />
        <CustomOrder />
      </main>
      <Footer />
    </div>
  );
}
