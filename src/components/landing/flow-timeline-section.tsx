import {
    Badge,
    Container,
    Section,
    Typography,
} from '@/components/ui';

const steps = [
    {
        number: '01',
        title: 'Agent requests spend',
        body:
            'An agent proposes a purchase with item details, merchant context, and price.',
    },
    {
        number: '02',
        title: 'Policy + LLM review',
        body:
            'The backend evaluates the request against limits and asks an LLM for approval reasoning.',
    },
    {
        number: '03',
        title: 'On-chain authorization',
        body:
            'If approved, the agent submits a contract transaction on Monad testnet.',
    },
    {
        number: '04',
        title: 'Mock card charge',
        body:
            'A fake processor returns a realistic charge confirmation with transaction metadata.',
    },
    {
        number: '05',
        title: 'Audit log updates',
        body:
            'The decision, reasoning, tx hash, and charge result become a dashboard-ready record.',
    },
] as const;

export function FlowTimelineSection() {
    return (
        <Section
            id="architecture"
            className="overflow-hidden"
        >
            <Container>
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <div className="lg:sticky lg:top-28">
                        <Badge>PAYMENT FLOW</Badge>

                        <Typography
                            as="h2"
                            variant="h2"
                            className="mt-6"
                        >
                            From agent intent to auditable payment.
                        </Typography>

                        <Typography
                            variant="body-lg"
                            className="mt-5"
                        >
                            The landing experience mirrors the actual project
                            architecture: decisioning, chain execution, mock
                            payment confirmation, and transparent logs.
                        </Typography>
                    </div>

                    <div className="relative">
                        <div className="absolute left-5 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:block" />

                        <div className="space-y-4">
                            {steps.map((step) => (
                                <div
                                    key={step.number}
                                    className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.07] md:ml-12"
                                >
                                    <div className="mb-4 flex items-center gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold text-primary shadow-[0_0_30px_rgba(200,191,255,0.2)] md:absolute md:-left-[4.25rem]">
                                            {step.number}
                                        </div>

                                        <Typography
                                            as="h3"
                                            variant="h3"
                                        >
                                            {step.title}
                                        </Typography>
                                    </div>

                                    <Typography>
                                        {step.body}
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
