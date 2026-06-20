import {
    HeroSection,
    IntegrationMarquee,
    ProcessFlow,
    TerminalSection,
    Footer,
} from '@/components/landing';

export default function MarketingPage() {
    return (
        <main className="bg-black text-white min-h-screen selection:bg-purple-500/30 selection:text-white">
            <HeroSection />
            <IntegrationMarquee />
            <ProcessFlow />
            <TerminalSection />
            <Footer />
        </main>
    );
}