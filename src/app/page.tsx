import {
  Button,
  Container,
  GlassCard,
  Section,
  Typography,
} from '@/components/ui';

export default function HomePage() {
  return (
    <Section>
      <Container>
        <GlassCard className="p-10">
          <Typography variant="display">
            MOVISA
          </Typography>

          <Typography
            variant="body-lg"
            className="mt-4"
          >
            Give AI Agents Real Spending Power
          </Typography>

          <div className="mt-8">
            <Button>
              Launch App
            </Button>
          </div>
        </GlassCard>
      </Container>
    </Section>
  );
}