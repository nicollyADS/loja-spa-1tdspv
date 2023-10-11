import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
    <h1>HOME</h1>

    <div>
      <ul>
        <li><Link href="/produtos/calca">Calca</Link></li>
        <li><Link href="/produtos/camiseta">Camiseta</Link></li>
        <li><Link href="/produtos/tenis">Tenis</Link></li>
      </ul>

      <figure>
        <Image src="/produtos.avif" alt="produtos" width={320} height={320}></Image>
      </figure>
      
    </div>
    
    </>
  )
}
