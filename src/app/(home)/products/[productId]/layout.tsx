"use Client";
function getError() {
  throw new Error("Error in Layout");
}

export default function ProductLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  getError();
  return (
    <div>
      <h2>Product Details</h2>
      {children}
    </div>
  );
}
