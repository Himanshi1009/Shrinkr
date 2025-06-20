import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className='grid grid-cols-2 h-[50vh]'>
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-4xl font-bold "> 
          Shrinkr — Simplify Your Links
          
          </p>
          <p className="px-56 text-center">
            The best URL shortner in the market!
            Shorten long, messy URLs into clean, shareable links with Shrinkr.
            Whether you're sharing on social media, in emails, or anywhere online, Shrinkr helps make your links look neat and trackable.
            Fast, reliable, and completely free — start shortening your URLs in seconds!
          </p>
          <div className='flex gap-3 justify-start'>
          <Link href="/shorten"><button className='bg-purple-500 shadow-lg p-3 text-white rounded-lg font-bold py-1'>Try Now!</button></Link>
        </div>
        </div>
        <div className="justify-start relative flex">
          <Image src={"/vector.jpeg"} className="mix-blend-darken" fill={true} alt="vector image"/>         
          </div>

      </section>
    </main>
  );
}
