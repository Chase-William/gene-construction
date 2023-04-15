import Layout from "../components/layout";
import { Text, Image, Container } from '@nextui-org/react'
import Spacer from "../components/spacer";
import ImageText from "../components/image-text";

export default function AboutUs() {
  return (
    <Layout>
      <Container css={{
        marginTop: '20px',
        padding: 0
      }}>
        <ImageText
          src='lunch-on-beam.jpg'
          title='How did we Form?'
          text='We met through our passion of construction and decided as a group we could build something larger than ourselves; a company, may it out live us and carry on the same passion found when we met.' />
      </Container>

      <Container css={{
        maxW: '900px'
      }}>

        <Spacer />

        <Text h3>Our Company Size</Text>
        <Text>Our company will begin as a medium-sized firm, with multiple areas of focus. This will allow our company to be large enough to cater to a diverse audience with unique needs, but small enough to have a more local focus.</Text>

        <Image src='company-tree.png' containerCss={{
          maxW: '80%'
        }} />

      </Container>
    </Layout>
  )
}