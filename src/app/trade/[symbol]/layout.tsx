import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import PageLayout from "@/components/layout/PageLayout";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <PageLayout
      header={
        <Header>
          <Header.Logo />
        </Header>
      }
    >
      {children}
    </PageLayout>
  );
}
