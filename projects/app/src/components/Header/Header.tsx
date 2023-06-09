import React from "react"

interface HeaderProps extends React.PropsWithChildren {}

export const Header: React.FC<HeaderProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}
