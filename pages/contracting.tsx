import { Button, Container, Input, Text, Textarea } from "@nextui-org/react";
import Layout from "../components/layout";

export default function Contracting() {
  return (
    <Layout>
      <Container css={{
        marginTop: '50px'
      }}>
        <Container css={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Container css={{
            margin: 0,
            padding: 0,
            maxW: '250px'
          }}>
            <Text h4>First Name</Text>
            <Input placeholder="Joe" />
            <Text h4 css={{
              marginTop: '20px'
            }}>Last Name</Text>
            <Input placeholder="Shmo" />
            <Text h4 css={{
              marginTop: '20px'
            }}>Email</Text>
            <Input placeholder="joeshmo@gmail.com" />
          </Container>
          <Container css={{
            margin: 0,
            padding: 0,
            maxW: '200px'
          }}>
            <Text h4>Description</Text>
            <Textarea
              placeholder="Provide a short description here."
              rows={10}
              css={{
                margin: '0 0 auto 0'
              }} />
          </Container>
        </Container>
        <Button auto css={{
          margin: '20px auto'
        }}>Submit
        </Button>
      </Container>

    </Layout>
  )
}