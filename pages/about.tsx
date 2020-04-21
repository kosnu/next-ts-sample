import * as React from "react"
import { Layout } from "../components/Layout"

type Props = {}

const About: React.FC<Props> = React.memo(({ ...props }: Props) => (
  <>
    <Layout {...props}>
      <p>This is the about page</p>
    </Layout>
  </>
))

export default About
