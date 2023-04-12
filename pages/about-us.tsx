import Layout from "../components/layout";
import { Text, Image, Container } from '@nextui-org/react'
import Spacer from "../components/spacer";

export default function AboutUs() {
  return (
    <Layout>
      <Container css={{
        maxW: '900px'
      }}>
        <Text h3>How did we Form?</Text>
        <Text>Our company specializes in construction as our team consists primarily of Civil Engineering majors, therefore, we determined that this type of service would be the best way for our group to leverage our skill set.</Text>

        <Spacer />

        <Text h3>Our Company Size</Text>
        <Text>Our company will begin as a medium-sized firm, with multiple areas of focus. This will allow our company to be large enough to cater to a diverse audience with unique needs, but small enough to have a more local focus.</Text>

        <Image src='company-tree.png' containerCss={{
          maxW: '80%'
        }}/>

        <Spacer />

        <Text h3>Our Auidences</Text>
        <Text>Generally, our audience consists of professionals and/or homeowners who are likely to be older adults. However, our projects can be expensive, so clients are likely to have higher socioeconomic status. Additionally, we may also seek to complete projects for businesses or local governments.</Text>

      </Container>
    </Layout>
  )
}