import { LandingNavbar } from '@/components/landing/navbar';

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <LandingNavbar />
            {children}
        </>
    );
}