import {
    HeroSection,
    MissingLayerSection,
    FlowTimelineSection,
    ControlPlaneSection,
    SecuritySection,
    BuiltOnMonadSection,
    CTASection,
    Footer,
} from '@/components/landing';

export default function MarketingPage() {
    return (
        <>
            <HeroSection />
            <MissingLayerSection />
            <FlowTimelineSection />
            <ControlPlaneSection />
            <SecuritySection />
            <BuiltOnMonadSection />
            <CTASection />
            <Footer />
        </>
    );
}