import { Container, Avatar } from "@nextui-org/react";

export default function AvatarProfile({ 
  src
}: {
  src: string
}) {
  return (
    <Container>
      <Avatar 
        squared 
        bordered
        color='primary'
        src={src}
        css={{
          minWidth: '150px',
          minHeight: '150px'
        }}/>
    </Container>
  )
}