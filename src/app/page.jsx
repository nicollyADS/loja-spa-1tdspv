import Image from "next/image"

export default function Home() {
  return (
    <>
    <h1>HOME</h1>

    <div>
      <figure>
        <Image src="/produtos.avif" alt="produtos" width={320} height={320}></Image>
      </figure>
    </div>
    
    </>
  )
}
