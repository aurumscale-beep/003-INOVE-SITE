import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";


const GITHUB_PAGES_BASE = "/003-PRAGLY-SITE";
const HOME_PATH = window.location.pathname.startsWith(GITHUB_PAGES_BASE) ? `${GITHUB_PAGES_BASE}/` : "/";

function Router() {
  return (
    <Switch>
      <Route path={HOME_PATH} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* GitHub Pages serves this SPA below /003-PRAGLY-SITE/; fall back to the home for that prefix. */}
      <Route component={Home} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
