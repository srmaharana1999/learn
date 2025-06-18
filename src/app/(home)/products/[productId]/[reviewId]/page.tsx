// import NotFound from "@/app/not-found";
import { redirect } from "next/navigation";

// Implimentation of nested Dynamic Routing
export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (reviewId > "30") {
    // notFound();
    redirect("/");
  }
  if (reviewId === "20") {
    throw new Error("Invalid Access!| error from page.tsx");
  }
  return (
    <h2>
      Review-{reviewId} of Product-{productId}
    </h2>
  );
}
