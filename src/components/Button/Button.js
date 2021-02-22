import React from 'react'
import './button.scss'

const Button = (props) => {
  const {
    label,
    className,
    style,
    onClick,
    children,
    disabled,
  } = props
  return (
    <button
      type="button"
      data-testid="button"
      style={style}
      onClick={onClick}
      className={className || 'btn-icon'}
      disabled={disabled}
    >
      {label}
      {children}
    </button>
  )
}

export default Button
