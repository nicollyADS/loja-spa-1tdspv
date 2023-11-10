import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Calca({props}) {
  return (
    <div>
        <h1>Calça</h1>
        <div>
            <p>calça cargo</p>
            <p><Link href="/">Voltar</Link></p>
            <figure>
              <Image src="/cargo-preta.jpeg" alt="produtos" width={320} height={320}></Image>
            </figure>
        </div>
    </div>
  )
}
