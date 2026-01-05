import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LegalNotice = lazy(() => import("./pages/legal/LegalNotice"));
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const CookiesPolicy = lazy(() => import("./pages/legal/CookiesPolicy"));
import CookieBanner from "@/components/common/CookieBanner";

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gracias" element={<ThankYou />} />
            <Route path="/aviso-legal" element={<LegalNotice />} />
            <Route path="/privacidad" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
