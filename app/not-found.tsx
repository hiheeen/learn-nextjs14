import React from 'react'
import Navigation from '../components/Navigation'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <div>
    <h1>Not Found!</h1>
</div>
  )
}

// TypeScript 타입 시스템을 사용하여 이 컴포넌트는 props가 필요하지 않다는 것을 명시하고 있으며, 타입 검사를 통해 타입 안정성을 보장합니다.
// 추후 Props에 필요한 속성을 정의하면, 이 속성에 맞는 props만 전달할 수 있게 됩니다.
// 이 코드는 현재 props를 받지 않지만, 확장 가능성을 염두에 둔 기본적인 타입 정의가 포함된 상태입니다.