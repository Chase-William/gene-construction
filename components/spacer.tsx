import { Card, Spacer } from "@nextui-org/react";
import { useTheme } from '@nextui-org/react';

export default function RAWRSpacer() {
  const { theme } = useTheme();

  return (
    <Card 
      style={{ color: theme.colors.primary.value }} 
      css={{ maxHeight: '5px', margin: '10px 0' }}>
      <Card.Body>
        <Spacer y={1} />
      </Card.Body>
    </Card>
  )
}