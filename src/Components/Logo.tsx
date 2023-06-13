import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function Logo({}: Props) {
  return (
<>

<Link href="/">
      <div className="w-32 h-32 lg:w-[15rem] lg:h-[15rem] left-0 top-0 fixed z-10">
            <Image priority src="https://i.ibb.co/cF4f3Tn/logo.png" layout="fill" objectFit="cover" alt="logo"/>
      </div>
      </Link>

      </>
        )
    }