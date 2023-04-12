import { Navbar, Button, Link, Text, Container, Table, Row, Image } from "@nextui-org/react";
import { NextRouter, useRouter } from "next/router";

const INDEX_PATHNAME = '/'

export default function Nav() {
  const router = useRouter()

  return (
    <>
      <Navbar isCompact variant="sticky">
        <Navbar.Brand>
          <Link
            href={INDEX_PATHNAME}
            underline
            color={"text"}
            css={{
              fontSize: '$2xl',
              fontWeight: '$bold',
              marginRight: '5px',
              marginLeft: '6px'
            }}>
            Gene Construction
          </Link>
          <Navbar.Content>
            <Navbar.Link href="operations" variant="highlight-rounded">Operations</Navbar.Link>
            <Navbar.Link href="contracting" variant="highlight-rounded">Contracting</Navbar.Link>
            <Navbar.Link href="about-us" variant="highlight-rounded">About Us</Navbar.Link>
          </Navbar.Content>
        </Navbar.Brand>
      </Navbar>
    </>
  )
}