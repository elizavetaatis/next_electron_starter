import Image from "next/image";
import Link from "next/link";
import Test from "../components/Test";

export default function HomePage() {
  return (
    <div className="grid grid-col-1 text-2xl w-full text-center">
      <div>
        <Image
          className="ml-auto mr-auto"
          src="/images/logo.png"
          alt="Logo image"
          width={256}
          height={256}
        />
      </div>
      <span>⚡ Electron ⚡</span>
      <span>+</span>
      <span>Next.js</span>
      <span>+</span>
      <span>tailwindcss</span>
      <span>=</span>
      <span>💕 </span>

      <div className="mt-1 h-auto relative w-full flex-wrap flex justify-center gap-10">
        <Link className='h-auto' href="/next">Go to next page</Link>
        <Test />
      </div>
    </div>
  );
}
