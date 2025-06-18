export default async function Lectures({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  //   console.log(slug);
  if (slug?.length == 1) {
    return <h2>Sub-Lectures-{slug[0]}</h2>;
  }
  if (slug?.length == 2) {
    return <h2>Reviews-{slug[1]}</h2>;
  }
  return <h1>Lectures</h1>;
}
