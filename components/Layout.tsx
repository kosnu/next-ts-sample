import * as React from "react"
import { Header } from "./Header"

type Props = { children: any }

export const Layout: React.FC<Props> = React.memo(
  ({ children, ...props }: Props) => (
    <>
      <div style={layoutStyle} {...props}>
        <Header />
        {children}
      </div>
    </>
  ),
)

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
}
