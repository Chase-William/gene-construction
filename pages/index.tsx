import AvatarProfile from '../components/avatar';
import Layout from '../components/layout';
import { Text, Image, Container, Grid } from '@nextui-org/react'
import styles from '../styles/index.module.css'
import Spacer from '../components/spacer';
import ImageText from '../components/image-text';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Container css={{
        margin: 0,
        padding: 0,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Image
          src='gene-construction-logo.png'
          containerCss={{
            height: '70%',
            margin: 'auto'
          }} />
      </Container>

      <ImageText
        src='residential-building-1.jpg'
        title='Our Mission'
        text='Gene Construction provides construction management, general contracting, designing/building, and integrated delivery services on projects small and large for a diverse group of customers.' />

      <Spacer />

      <Container css={{
        minHeight: '400px',
        display: 'flex',
        justifyContent: 'center',
        background: '#b45f0644'
      }}>
        <Text
          h1
          className={styles.avatarTitle}
          css={{
            margin: 'auto'
          }}>Meet the Team</Text>
      </Container>

      <Spacer />

      <Grid.Container
        css={{
          justifyContent: 'center'
        }}>
        <Grid>
          <AvatarProfile src='/profiles/philip.jpg' />
          <Text h4 className={styles.avatarTitle}>Philip Bezas</Text>
          <Text css={{
            textAlign: 'center'
          }}>Chief Executive Officer</Text>
        </Grid>
        <Grid css={{
          marginTop: '50px'
        }}>
          <AvatarProfile src='/profiles/michael.jpg' />
          <Text h4 className={styles.avatarTitle}>Michael Bobbin</Text>
          <Text css={{
            textAlign: 'center'
          }}>Design and Drafting Team Manager</Text>
        </Grid>
        <Grid css={{
          marginTop: '100px'
        }}>
          <AvatarProfile src='?' />
          <Text h4 className={styles.avatarTitle}>Johnathan Freebern</Text>
          <Text css={{
            textAlign: 'center'
          }}>Residential Construction Management</Text>
        </Grid>
        <Grid css={{
          marginTop: '150px'
        }}>
          <AvatarProfile src='/profiles/steven.jpg' />
          <Text h4 className={styles.avatarTitle}>Steven Giallanza</Text>
          <Text css={{
            textAlign: 'center'
          }}>Commercial Construction Management</Text>
        </Grid>
        <Grid css={{
          marginTop: '200px'
        }}>
          <AvatarProfile src='/profiles/chase.jpg' />
          <Text h4 className={styles.avatarTitle}>Chase Roth</Text>
          <Text css={{
            textAlign: 'center'
          }}>Internal Technology Manager</Text>
        </Grid>
      </Grid.Container>

      <Spacer />

      <ImageText
        src='Rochester-NY.jpg'
        title='Where are We?'
        text='Gene Construction is located in Rochester NY servicing experienced land developers with a minimum budget of one million dollars.' />

      <Spacer />

      <Container css={{
        minHeight: '400px',
        display: 'flex',
        justifyContent: 'center',
        background: '#b45f0644'
      }}>
        <Text
          h1
          className={styles.avatarTitle}
          css={{
            margin: 'auto'
          }}>Why Choose Us?</Text>
      </Container>

      <Spacer />

      <ImageText
        src='down-bad-building.jpg'
        title='Customized Approach'
        text='Our customized construction approach gives you better prices while also granting you quality unmatched by our competitors!' />

      <Spacer/>

      <Container css={{
        minHeight: '400px',
        display: 'flex',
        justifyContent: 'center',
        background: '#b45f0644'
      }}>
        <Text
          h1
          className={styles.avatarTitle}
          css={{
            margin: 'auto'
          }}>What are you waiting for!</Text>
      </Container>

      <Spacer/>
      <Text h4 css={{
        textAlign: 'center'
      }}>
        Click &nbsp;
        <Link href='/contracting'>HERE</Link>
        &nbsp;
        to fillout a contracting request to get started!
      </Text>

    </Layout>
  );
}
