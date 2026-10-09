import { useState } from "react";
import { Switch, Route, Link } from "wouter";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";

import VirtualTourPage from "./pages/360VirtualTourPage";
import DroneSurveyPage from "./pages/DroneSurveyPage";

import ModelOverlayPage from "./pages/3D Model Overlay Page";
import ModellingPage from "./pages/3D Modelling Page";
import ConstructionMonitoringPage from "./pages/Construction Monitoring Page";
import GISMappingPage from "./pages/GIS Mapping Page";
import LandSurveyPage from "./pages/Land Survey Page";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[99999] bg-[#07111F]/95 backdrop-blur-xl border-b border-white/10"
      style={{ minHeight: "72px" }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">

        {/* LOGO */}
        <Link href="/">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={closeMenu}
          >
            <div className="w-9 h-9 rounded-lg overflow-hidden border border-cyan-400/30">
              <img
                src="/images/aeroview360-logo.png"
                alt="Aeroview360"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-white font-bold text-lg">
              Aeroview<span className="text-[#22D3EE]">360</span>
            </div>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-2">

          <Link href="/">
            <div className="px-4 py-2 text-sm font-medium text-white hover:text-[#22D3EE] cursor-pointer transition-colors">
              Home
            </div>
          </Link>

          <Link href="/about">
            <div className="px-4 py-2 text-sm font-medium text-white hover:text-[#22D3EE] cursor-pointer transition-colors">
              About
            </div>
          </Link>

          <Link href="/services">
            <div className="px-4 py-2 text-sm font-medium text-white hover:text-[#22D3EE] cursor-pointer transition-colors">
              Services
            </div>
          </Link>

          <Link href="/projects">
            <div className="px-4 py-2 text-sm font-medium text-white hover:text-[#22D3EE] cursor-pointer transition-colors">
              Projects
            </div>
          </Link>

          <Link href="/contact">
            <div className="px-4 py-2 text-sm font-medium text-white hover:text-[#22D3EE] cursor-pointer transition-colors">
              Contact
            </div>
          </Link>

          <Link href="/contact">
            <div className="ml-3 px-5 py-2.5 rounded-full bg-[#22D3EE] text-[#06111F] text-sm font-bold cursor-pointer hover:bg-[#38BDF8] transition-colors">
              Get Quote →
            </div>
          </Link>

        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg border border-white/10 text-white hover:text-[#22D3EE] hover:border-cyan-400/40 transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="block w-6 h-0.5 bg-white rounded-full"></span>
              <span className="block w-6 h-0.5 bg-white rounded-full"></span>
              <span className="block w-6 h-0.5 bg-white rounded-full"></span>
            </div>
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#07111F] shadow-2xl">
          <nav className="px-5 py-4 flex flex-col gap-1">

            <Link href="/">
              <div
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-white font-medium hover:bg-white/5 hover:text-[#22D3EE] cursor-pointer transition-colors"
              >
                Home
              </div>
            </Link>

            <Link href="/about">
              <div
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-white font-medium hover:bg-white/5 hover:text-[#22D3EE] cursor-pointer transition-colors"
              >
                About
              </div>
            </Link>

            <Link href="/services">
              <div
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-white font-medium hover:bg-white/5 hover:text-[#22D3EE] cursor-pointer transition-colors"
              >
                Services
              </div>
            </Link>

            <Link href="/projects">
              <div
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-white font-medium hover:bg-white/5 hover:text-[#22D3EE] cursor-pointer transition-colors"
              >
                Projects
              </div>
            </Link>

            <Link href="/contact">
              <div
                onClick={closeMenu}
                className="px-4 py-3 rounded-lg text-white font-medium hover:bg-white/5 hover:text-[#22D3EE] cursor-pointer transition-colors"
              >
                Contact
              </div>
            </Link>

            <Link href="/contact">
              <div
                onClick={closeMenu}
                className="mt-2 px-5 py-3 rounded-full bg-[#22D3EE] text-[#06111F] text-sm font-bold text-center cursor-pointer hover:bg-[#38BDF8] transition-colors"
              >
                Get Quote →
              </div>
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background">

      {/* NAVBAR */}
      <NavigationBar />

      {/* PAGE CONTENT */}
      <div className="pt-[72px]">
        <Switch>

          {/* HOME */}
          <Route path="/" component={HomePage} />

          {/* ABOUT — ORIGINAL PAGE */}
          <Route path="/about" component={AboutPage} />

          {/* SERVICES */}
          <Route path="/services" component={ServicesPage} />

          {/* PROJECTS — ORIGINAL PAGE */}
          <Route path="/projects" component={ProjectsPage} />

          {/* CONTACT */}
          <Route path="/contact" component={ContactPage} />

          {/* 360° VIRTUAL TOUR */}
          <Route
            path="/services/360-virtual-tour"
            component={VirtualTourPage}
          />

          {/* DRONE SURVEY */}
          <Route
            path="/services/drone-survey"
            component={DroneSurveyPage}
          />

          {/* 3D MODEL OVERLAY */}
          <Route
            path="/services/3d-model-overlay"
            component={ModelOverlayPage}
          />

          {/* 3D MODELLING */}
          <Route
            path="/services/3d-modelling"
            component={ModellingPage}
          />

          {/* CONSTRUCTION MONITORING */}
          <Route
            path="/services/construction-monitoring"
            component={ConstructionMonitoringPage}
          />

          {/* GIS MAPPING */}
          <Route
            path="/services/gis-mapping"
            component={GISMappingPage}
          />

          {/* LAND SURVEY */}
          <Route
            path="/services/land-survey"
            component={LandSurveyPage}
          />

          {/* 404 */}
          <Route>
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-5xl font-bold mb-4 text-white">
                  404
                </h1>

                <p className="text-gray-500">
                  Page not found
                </p>
              </div>
            </div>
          </Route>

        </Switch>
      </div>

    </div>
  );
}

export default App;