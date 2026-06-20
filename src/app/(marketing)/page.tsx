import {
    HeroSection,
    IntegrationMarquee,
    FlowGridSection,
    TerminalSection,
    Footer,
} from '@/components/landing';

export default function MarketingPage() {
    return (
        <main className="bg-black text-white min-h-screen selection:bg-purple-500/30 selection:text-white">
            <HeroSection />
            <IntegrationMarquee />
            <FlowGridSection />
            <TerminalSection />
            <Footer />
        </main>
    );
}