import {
    Badge,
    Card,
    Container,
    Section,
    Typography,
} from '@/components/ui';

const controls = [
    {
        label: 'Daily cap',
        value: '$100',
        detail: '$45 used today',
        width: '45%',
    },
    {
        label: 'Monthly cap',
        value: '$2,500',
        detail: '$820 used this month',
        width: '33%',
    },
    {
        label: 'Single purchase',
        value: '$250',
        detail: 'Hard stop per request',
        width: '62%',
    },
] as const;

export function ControlPlaneSection() {
    return (
        <Section className="overflow-hidden bg-gradient-to-b from-background via-surface/70 to-background">
            <Container>
                <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                    <div>
                        <Badge>CONTROL PLANE</Badge>

                        <Typography
                            as="h2"
                            variant="h2"
                            className="mt-6"
                        >
                            Give every agent a wallet, a card, and a rulebook.
                        </Typography>

                        <Typography
                            variant="body-lg"
                            className="mt-5"
                        >
                            Movisa is shaped for agent operators: fund a Monad
                            testnet wallet, assign a virtual card, set spend
                            limits, and review each autonomous payment after it
                            happens.
                        </Typography>

                        <div className="mt-8 grid gap-3 sm:grid-cols-3">
                            {['USDC balance', 'Webhook URL', 'Card last4'].map(
                                (item) => (
                                    <div
                                        key={item}
                                        className="rounded-2xl border border-primary/10 bg-primary/5 p-4"
                                    >
                                        <Typography
                                            variant="label"
                                            className="text-primary"
                                        >
                                            {item}
                                        </Typography>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>

                    <Card className="relative overflow-hidden border-primary/15 bg-white/[0.05] p-0 backdrop-blur-md">
                        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
                        <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-secondaryContainer/30 blur-3xl" />

                        <div className="relative p-6 md:p-8">
                            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                                <div>
                                    <Typography variant="label">
                                        Agent profile
                                    </Typography>

                                    <Typography
                                        as="h3"
                                        variant="h3"
                                        className="mt-2"
                                    >
                                        Trading Bot Alpha
                                    </Typography>
                                </div>

                                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                                    Active
                                </span>
                            </div>

                            <div className="mt-6 space-y-5">
                                {controls.map((control) => (
                                    <div key={control.label}>
                                        <div className="mb-2 flex items-end justify-between gap-4">
                                            <div>
                                                <Typography variant="label">
                                                    {control.label}
                                                </Typography>

                                                <p className="mt-1 text-sm text-onSurfaceVariant">
                                                    {control.detail}
                                                </p>
                                            </div>

                                            <p className="text-xl font-bold text-onSurface">
                                                {control.value}
                                            </p>
                                        </div>

                                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                                            <div
                                                className="h-full rounded-full bg-gradient-to-r from-primary to-primaryContainer"
                                                style={{
                                                    width: control.width,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <Typography variant="label">
                                        Latest decision
                                    </Typography>

                                    <span className="text-xs text-primary">
                                        Monad testnet tx queued
                                    </span>
                                </div>

                                <p className="mt-3 text-sm text-onSurfaceVariant">
                                    Approved $12.80 AI research subscription
                                    because merchant category matched policy and
                                    daily spend remained under cap.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </Container>
        </Section>
    );
}
