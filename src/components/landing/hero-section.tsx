import {
    Badge,
    Button,
    Container,
    Section,
    Typography,
} from '@/components/ui';

import { HeroBackground } from './hero-background';
import { HeroCard } from './hero-card';

export function HeroSection() {
    return (
        <Section className="relative min-h-screen overflow-hidden pt-32">
            <HeroBackground />

            <Container>
                <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
                    <div>
                        <Badge>
                            LIVE ON MONAD TESTNET
                        </Badge>

                        <Typography
                            variant="display"
                            className="mt-8"
                        >
                            Give AI Agents
                            <br />
                            Real Spending Power
                        </Typography>

                        <Typography
                            variant="body-lg"
                            className="mt-6 max-w-xl"
                        >
                            The autonomous banking layer for the AI economy.
                            Issue programmable virtual cards, fund agent
                            wallets, and oversee machine commerce with
                            institutional-grade controls.
                        </Typography>

                        <div className="mt-10 flex gap-4">
                            <Button>
                                Launch App
                            </Button>

                            <Button variant="secondary">
                                View Architecture
                            </Button>
                        </div>
                    </div>

                    <HeroCard />
                </div>
            </Container>
        </Section>
    );
}