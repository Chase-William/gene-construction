import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/components/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Nav from './nav';
import { Container, Text } from '@nextui-org/react';

export default function Layout({ children }) {
  return (
    <Container css={{
      margin: 0,
      padding: 0,
      height: '100%'
    }}>
      <Nav />
      <div>
        {children}
      </div>      
    </Container>
  );
}
