"use client";
export default function Errorlayout({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div>
          <h1>Something Went Wrong!!!</h1>
          <h2>Error shown from Global{error.message}</h2>
          <button onClick={reset}>Reset</button>
        </div>
      </body>
    </html>
  );
}
