import { Container, Image, Text } from "@nextui-org/react";

export default function ImageText({
  src,
  title,
  text
}) {
  return (
    <Container css={{
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
      <Image
        src={src}
        containerCss={{
          margin: 0,
          padding: 0,
          maxW: '45%'
        }} />
      <Container css={{
        maxW: '45%',
        padding: 0,
        margin: 'auto 0',
      }}>
        <Text h3>{title}</Text>
        <Text>{text}</Text>
      </Container>
    </Container>
  )
}