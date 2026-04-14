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
import OperationTypes from './components/OperationTypes';
import Simulator from './components/Simulator';
import CustomOrder from './components/CustomOrder';
import CommercialTerms from './components/CommercialTerms';
import Financing from './components/Financing';
import GlobalLogistics from './components/GlobalLogistics';
import MarketComparator from './components/MarketComparator';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import CompanyHistory from './components/CompanyHistory';
import Footer from './components/Footer';
import LiveActivity from './components/LiveActivity';
import SuccessCases from './components/SuccessCases';
import SystemStatus from './components/SystemStatus';
import ClientEducation from './components/ClientEducation';
import StrategicProducts from './components/StrategicProducts';
import TrustIndicators from './components/TrustIndicators';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-slate-50 font-sans selection:bg-rose-500/30">
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <StrategicProducts />
        <Simulator />
        <Financing />
        <GlobalLogistics />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <LiveActivity />
    </div>
  );
}
