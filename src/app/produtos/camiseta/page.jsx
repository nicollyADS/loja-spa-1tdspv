import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Camiseta() {
  return (
    <div>
        <h1>Camiseta</h1>
        <div>
            <p>Camiseta Nike Feminina</p>
            <p><Link href="/">Voltar</Link></p>
            <figure>
              <Image src="/camiseta.jfif" alt="camiseta nike feminina" width={320} height={320}></Image>
            </figure>
        </div>
    </div>
  )
}
