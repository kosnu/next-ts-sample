import * as React from "react"
import Link from "next/link"

const linkStyle = {
  marginRight: 15,
}
type Props = {}

export const Header: React.FC<Props> = React.memo(({ ...props }: Props) => (
  <div {...props}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
))
