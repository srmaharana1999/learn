// Client Component Structure
"use client";
import { use } from "react";

export default function News({
  params,
  searchParams,
}: {
  params: Promise<{ newsId: string }>;
  searchParams: Promise<{ cat: string; date: string }>;
}) {
  const { newsId } = use(params);
  const { cat, date } = use(searchParams);

  return (
    <>
      <h2>News-{newsId}</h2>
      <div>
        <p>Category-{cat}</p>
        <p>Date-{date}</p>
      </div>
    </>
  );
}

// Server Component Structure
// export default async function News({
//   params,
//   searchParams,
// }: {
//   params: Promise<{ newsId: string }>;
//   searchParams: Promise<{ cat: string; date: string }>;
// }) {
//   const { newsId } = await params;
//   const { cat, date } = await searchParams;
//   console.log(cat, date);

//   return (
//     <>
//       <h2>News-{newsId}</h2>
//       <div>
//         <p>Category-{cat}</p>
//         <p>Date-{date}</p>
//       </div>
//     </>
//   );
// }
