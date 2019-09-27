import React from 'react'
import classNames from 'classnames'

export default function Badge(props) {
  const { children, variant } = props

  return (
    <div className={classNames('flex justify-center items-center text-sm py-1 px-4 rounded-lg width-auto', variant === 'positive' && 'bg-green-200 text-green-700', variant === 'negative' && 'bg-red-200 text-red-700')}>
      {children}
    </div>
  )
}
