import {
    Badge,
    Card,
    Container,
    Section,
    Typography,
} from '@/components/ui';

const monadPoints = [
    {
        title: 'Fast testnet iteration',
        body:
            'Ideal for hackathon demos where smart contract approvals and UI feedback need to feel instant.',
    },
    {
        title: 'Agent-native payments',
        body:
            'Spending requests can become contract calls, giving agents programmable permissions instead of raw private-key access.',
    },
    {
        title: 'Composable money layer',
        body:
            'The same approval primitive can feed dashboards, card simulations, alerts, and future merchant integrations.',
    },
] as const;

export function BuiltOnMonadSection() {
    return (
        <Section
            id="developers"
            className="overflow-hidden"
        >
            <Container>
                <div className="rounded-[2rem] border border-primary/15 bg-gradient-to-br from-primary/10 via-white/[0.04] to-secondaryContainer/20 p-6 backdrop-blur-md md:p-10">
                    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                        <div>
                            <Badge>BUILT ON MONAD</Badge>

                            <Typography
                                as="h2"
                                variant="h2"
                                className="mt-6"
                            >
                                Smart-contract enforced spending for agent
                                commerce.
                            </Typography>

                            <Typography
                                variant="body-lg"
                                className="mt-5"
                            >
                                Movisa is positioned as a Monad testnet payment
                                control layer: Solidity limits, a backend agent
                                decision loop, and card-like confirmations for
                                a complete demo flow.
                            </Typography>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                            {monadPoints.map((point) => (
                                <Card
                                    key={point.title}
                                    className="border-white/10 bg-black/20"
                                >
                                    <Typography
                                        as="h3"
                                        variant="h3"
                                    >
                                        {point.title}
                                    </Typography>

                                    <Typography className="mt-3">
                                        {point.body}
                                    </Typography>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
