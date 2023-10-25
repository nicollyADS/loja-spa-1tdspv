import { Libre_Barcode_128 } from 'next/font/google';
import React from 'react'
import Image from 'next/image';

export default async function userPages() {

  const response = await fetch("http://localhost:3000/api/git-users");
  const users =  await response.json();

    
  return (
    <div>
      <h1>User pages</h1>

      <div>
        <ul className='card-User' >
          {
            users.map((user) => (
              <li key={user.id}>
                <figure>
                  <Image 
                    src={user.avatar_url}
                    alt='Avatar github'
                    width={50}
                    height={50}/>
                  <figcaption>{user.login}</figcaption>
                </figure>
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}
