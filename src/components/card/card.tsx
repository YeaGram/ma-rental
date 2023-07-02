import Image from "next/image";

interface CardProps {
  title: string;
  imgurl: string;
  children?: React.ReactNode;
}

export default function Card({ title, imgurl, children }: CardProps) {
  return (
    <figure className="relative flex flex-col">
      <div className="flex-1 ">
        <div className="relative z-10 aspect-square">
          <Image
            title={title}
            className="object-contain relative w-full hover:-translate-y-4  transition-all"
            src={imgurl}
            alt={title}
            fill
          />
        </div>
        <figcaption className="mt-3 font-bold">{title}</figcaption>
      </div>
      {children}
    </figure>
  );
}
