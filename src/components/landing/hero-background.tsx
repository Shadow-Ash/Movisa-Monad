export function HeroBackground() {
    return (
        <>
            <div className="absolute inset-0 bg-background" />

            <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(131,110,249,0.12),transparent_60%)]" />
        </>
    );
}