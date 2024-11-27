import { Card } from "@/components/card/Card";
import MeatBall from "@/assets/icons/svg-57.svg";

export default function OrderBook() {
  return (
    <Card
      style={{ gridArea: "orderbook" }}
      header={
        <Card.Header>
          Order Book
          <MeatBall width={16} height={16} color="var(--color-IconNormal)" />
        </Card.Header>
      }
    ></Card>
  );
}
