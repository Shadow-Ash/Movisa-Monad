import {
    Badge,
    Card,
    Container,
    Section,
    Typography,
} from '@/components/ui';

const features = [
    {
        label: 'Programmable spending',
        title: 'Owner-set limits before any money moves',
        body:
            'Define daily, monthly, and per-purchase caps so an agent can act autonomously without getting unlimited wallet access.',
    },
    {
        label: 'AI approval loop',
        title: 'LLM reasoning captured with every decision',
        body:
            'Movisa is designed around an agent reviewing merchant, item, price, and policy context before approving a spend request.',
    },
    {
        label: 'Card-like settlement',
        title: 'Virtual card UX over on-chain controls',
        body:
            'A mock card processor turns approved on-chain activity into familiar charge confirmations, receipts, and audit events.',
    },
] as const;

export function MissingLayerSection() {
    return (
        <Section
            id="features"
            className="overflow-hidden border-y border-white/5 bg-surface/40"
        >
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <Badge>THE MISSING PAYMENT LAYER</Badge>

                    <Typography
                        as="h2"
                        variant="h2"
                        className="mt-6"
                    >
                        AI agents can decide.
                        <br />
                        Movisa lets them pay safely.
                    </Typography>

                    <Typography
                        variant="body-lg"
                        className="mt-5"
                    >
                        Most agent stacks stop at recommendations. Movisa adds
                        the controlled spending layer: wallets, virtual cards,
                        policy gates, on-chain approvals, and readable logs.
                    </Typography>
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-3">
                    {features.map((feature) => (
                        <Card
                            key={feature.title}
                            className="group border-primary/10 bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.07]"
                        >
                            <Typography
                                variant="label"
                                className="text-primary"
                            >
                                {feature.label}
                            </Typography>

                            <Typography
                                as="h3"
                                variant="h3"
                                className="mt-5"
                            >
                                {feature.title}
                            </Typography>

                            <Typography className="mt-4">
                                {feature.body}
                            </Typography>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
