import {
    Badge,
    Card,
    Container,
    Section,
    Typography,
} from '@/components/ui';

const safeguards = [
    'Owner-controlled spend caps',
    'Daily and preset limit checks',
    'LLM reasoning retained per payment',
    'On-chain transaction hash tracking',
    'Mock processor receipts for demos',
    'Readable audit trail for operators',
] as const;

const auditRows = [
    {
        merchant: 'Cursor',
        amount: '$20.00',
        status: 'Approved',
    },
    {
        merchant: 'GPU Cloud',
        amount: '$96.40',
        status: 'Pending',
    },
    {
        merchant: 'Unknown vendor',
        amount: '$410.00',
        status: 'Blocked',
    },
] as const;

export function SecuritySection() {
    return (
        <Section
            id="security"
            className="overflow-hidden border-y border-white/5 bg-surface/50"
        >
            <Container>
                <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
                    <Card className="order-2 border-primary/15 bg-white/[0.04] backdrop-blur-md lg:order-1">
                        <div className="flex items-center justify-between border-b border-white/10 pb-5">
                            <div>
                                <Typography variant="label">
                                    Audit stream
                                </Typography>

                                <Typography
                                    as="h3"
                                    variant="h3"
                                    className="mt-2"
                                >
                                    Decision log
                                </Typography>
                            </div>

                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                Live
                            </span>
                        </div>

                        <div className="mt-4 divide-y divide-white/10">
                            {auditRows.map((row) => (
                                <div
                                    key={row.merchant}
                                    className="grid grid-cols-[1fr_auto_auto] items-center gap-4 py-4 text-sm"
                                >
                                    <span>{row.merchant}</span>
                                    <span className="font-mono text-onSurfaceVariant">
                                        {row.amount}
                                    </span>
                                    <span
                                        className={
                                            row.status === 'Approved'
                                                ? 'text-primary'
                                                : row.status === 'Pending'
                                                  ? 'text-tertiary'
                                                  : 'text-error'
                                        }
                                    >
                                        {row.status}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4 font-mono text-xs text-onSurfaceVariant">
                            {'{'}
                            <br />
                            &nbsp;&nbsp;&quot;reasoning&quot;:
                            &quot;Within limit and merchant approved&quot;,
                            <br />
                            &nbsp;&nbsp;&quot;txHash&quot;:
                            &quot;0x8a3...f21&quot;
                            <br />
                            {'}'}
                        </div>
                    </Card>

                    <div className="order-1 lg:order-2">
                        <Badge>SAFE AUTONOMY</Badge>

                        <Typography
                            as="h2"
                            variant="h2"
                            className="mt-6"
                        >
                            Autonomy with a paper trail.
                        </Typography>

                        <Typography
                            variant="body-lg"
                            className="mt-5"
                        >
                            Movisa treats every agent purchase as a governed
                            event. The chain handles enforceable approvals,
                            while the app layer explains why each decision was
                            made.
                        </Typography>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {safeguards.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-onSurfaceVariant"
                                >
                                    <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_rgba(200,191,255,0.8)]" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
