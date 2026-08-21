import { Router, Route, Switch } from "wouter";
import { useLenis } from "./hooks/useLenis";
import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceOverlayPage from "./pages/ServiceOverlayPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/not-found";

function AppInner() {
  useLenis();

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <Router base={base}>
      <Layout>
        <Switch>
          <Route path="/"         component={HomePage}    />
          <Route path="/services/3d-model-overlay" component={ServiceOverlayPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/about"    component={AboutPage}   />
          <Route path="/contact"  component={ContactPage} />
          <Route                  component={NotFound}    />
        </Switch>
      </Layout>
    </Router>
  );
}

export default function App() {
  return <AppInner />;
}
