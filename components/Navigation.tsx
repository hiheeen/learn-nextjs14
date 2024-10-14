"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}
// props라는 매개변수를 받을 것임을 암시. \
// 객체 비구조화 하여 사용하면 props 말고 Props 타입의 객체형식으로 표현 
const Navigation = (props: Props) => {
    const path = usePathname();
  return (
<nav>
    <ul>
        <li><Link href='/'>Home</Link>{path === '/' ? "V" : ""}</li>
        <li><Link href='/about-us'>About Us</Link>{path === '/about-us' ? "V" : ""}</li>
    </ul>
</nav>
  )
}

export default Navigation