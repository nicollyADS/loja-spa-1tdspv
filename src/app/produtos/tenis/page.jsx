import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Tenis() {
  return (
    <div>
        <h1>Tênis</h1>
        <div>
            <p>Nike air force branco</p>
            <figure>
              <Image src="/air-force-branco.jfif" alt="produtos" width={320} height={320}></Image>
            </figure>
            <p><Link href="/">Voltar</Link></p>
        </div>
    </div>
  )
}
