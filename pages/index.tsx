import * as React from "react"
import { Layout } from "../components/Layout"

type Props = {}

const Index: React.FC<Props> = React.memo(({ ...props }: Props) => (
  <>
    <p>Hello</p>
  </>
))

export default Layout(Index)
