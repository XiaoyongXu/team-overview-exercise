import React from 'react'
import './header.scss'
import Button from '../Button'

const Header = ({
  style,
  children,
  title,
  backLabel,
  onBack = () => {},
}) => {
  return (
    <div className="header-root" data-testid="header" style={style}>
      {backLabel && onBack && <Button
        style={{
          position: 'absolute',
          left: 20,
          top: 20,
        }}
        label={backLabel}
        onClick={onBack}
      />}
      <div className="header-main">
        <div className="header-title">{title}</div>
        {children}
      </div>
    </div>
  )
}

export default Header
