import * as React from "react"
import { Layout } from "../components/Layout"

type Props = {}

const Index: React.FC<Props> = React.memo(({ ...props }: Props) => (
  <>
    <Layout>
      <p>Hello</p>
    </Layout>
  </>
))

export default Index
