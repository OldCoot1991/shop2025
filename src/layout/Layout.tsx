import Footer from "@/components/footer";
import Header from "@/components/header";

export interface ChilderPtops {
  children : React.ReactNode
}

export const LayoutContainer = ({
  children,
}: ChilderPtops) => {
  return (
    <section className="layout">
      <Header />
      {children}
      <Footer />
    </section>
  );
};
