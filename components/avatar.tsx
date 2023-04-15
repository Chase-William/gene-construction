import { Container, Avatar } from "@nextui-org/react";

export default function AvatarProfile({ 
  src
}: {
  src: string
}) {
  return (
    <Container css={{
      display: 'flex',
      justifyContent: 'center'
    }}>
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