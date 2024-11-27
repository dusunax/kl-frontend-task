import Header from "@/components/layout/Header";
import PageLayout from "@/components/layout/PageLayout";

export default function Page() {
  return (
    <PageLayout
      header={
        <Header>
          <Header.Logo />
        </Header>
      }
    ></PageLayout>
  );
}
