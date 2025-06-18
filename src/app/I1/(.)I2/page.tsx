import Link from "next/link";

export default function I2intercepted() {
  return (
    <div>
      I2 Intercepted - At save level (.) <Link href="/I1">I1</Link>
    </div>
  );
}
