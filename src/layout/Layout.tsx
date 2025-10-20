export interface ChilderPtops {
  children : React.ReactNode
}

export const LayoutContainer = ({
  children,
}: ChilderPtops) => {
  return (
    <section className="layout">
      {children}
    </section>
  );
};
