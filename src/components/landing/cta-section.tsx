import {
    Button,
    Container,
    Section,
    Typography,
} from '@/components/ui';

export function CTASection() {
    return (
        <Section
            id="docs"
            className="overflow-hidden pb-16 pt-8"
        >
            <Container>
                <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-white/[0.05] p-8 text-center shadow-[0_0_80px_rgba(145,126,255,0.18)] backdrop-blur-md md:p-14">
                    <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-3xl" />

                    <div className="relative">
                        <Typography
                            as="h2"
                            variant="h2"
                        >
                            Ready to issue your first agent card?
                        </Typography>

                        <Typography
                            variant="body-lg"
                            className="mx-auto mt-5 max-w-2xl"
                        >
                            Launch the dashboard, create an agent, configure
                            spending limits, and watch every decision become a
                            traceable payment event.
                        </Typography>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                            <Button>
                                Launch Dashboard
                            </Button>

                            <Button variant="secondary">
                                Read Integration Notes
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
