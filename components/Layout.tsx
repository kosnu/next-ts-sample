import * as React from "react"
import { Header } from "./Header"

type Props = { Page: any }

export const Layout: React.FC<Props> = React.memo(
  ({ Page, ...props }: Props) => (
    <>
      <div style={layoutStyle} {...props}>
        <Header />
        <Page />
      </div>
    </>
  ),
)

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
}
