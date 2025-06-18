"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h3>Error:-{error.message}</h3>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
