import React from 'react'

export default function ResetBtn(props) {
  const {
    children,
    onClick
  } = props

  return (
    <button
      className="flex bg-pink-500 hover:bg-pink-600 text-pink-100 py-3 px-5 mx-auto mt-6 rounded focus:outline-none focus:shadow-outline"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
