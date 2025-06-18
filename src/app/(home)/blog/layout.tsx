export default function Bloglayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div>
      <h1>Blog Header</h1>
      {children}
    </div>
  );
}
