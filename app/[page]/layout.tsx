import Footer from "components/layout/footer";
import { Container } from "components/ui";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full">
        <Container className="py-20">{children}</Container>
      </div>
      <Footer />
    </>
  );
}
