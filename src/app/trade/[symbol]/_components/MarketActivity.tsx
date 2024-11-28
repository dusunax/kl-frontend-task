import { Card } from "@/components/card/Card";

export default function MarketActivity() {
  return (
    <Card
      style={{ gridArea: "marketActivity" }}
      header={<Card.Header>Top Movers</Card.Header>}
    ></Card>
  );
}
