import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mb-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        aspernatur magni voluptas minima, culpa at nesciunt dolore, laboriosam
        harum, est porro corrupti quibusdam fugiat vero eos possimus aliquam
        neque numquam?
      </div>
      <div className="min-h-[70vh] relative flex items-center">
        <div className="custom-background absolute inset-0 h-full overflow-hidden"></div>
        <div className="relative z-10 w-3/4 mx-auto text-2xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
          maiores molestiae possimus nisi! Veritatis iste nihil similique
          distinctio ut labore cupiditate! Illo, eaque maiores voluptatem minima
          quaerat ex quod vel? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Alias quasi recusandae, possimus impedit tenetur
          eaque expedita fugiat, dignissimos debitis doloribus quo nostrum
          perspiciatis deserunt! Voluptatum nesciunt ab illo dicta ipsa.
        </div>
      </div>
    </>
  );
}
