import Link from "next/link";

export default function I1() {
  return (
    <div>
      I1 <Link href="/I1/I2">I2</Link> | <Link href="/I4">I3</Link>
    </div>
  );
}
