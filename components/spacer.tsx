import { Card, Container } from "@nextui-org/react";
import { useTheme } from '@nextui-org/react';

export default function Spacer() {
  const { theme } = useTheme();

  return (
    <Container
    css={{
      margin: 0,
      padding: 0,
      height: '100px'
    }}>
      <></>
    </Container>
  )
}