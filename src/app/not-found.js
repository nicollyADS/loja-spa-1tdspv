import Image from 'next/image'
import React from 'react'

export default function NotFound() {
  return (
    <div>
        <h1>OOPS! 404</h1>
        <p>Not Found</p>
        <div>
            <Image src="https://httpstatusdogs.com/img/404.jpg" alt="error404" width={320} height={320}/>
        </div>
    </div>
  )
}
