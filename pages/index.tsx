import AvatarProfile from '../components/avatar';
import Layout from '../components/layout';
import { Text, Image, Container, Grid } from '@nextui-org/react'
import styles from '../styles/index.module.css'
import Spacer from '../components/spacer';

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
          }}/>
      </Container>

      <Container css={{
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
        <Image
          src='residential-building-1.jpg'
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
          <Text h3>Our Mission</Text>
          <Text>Gene Construction will provide construction management, general contracting, design-build, and integrated delivery services on projects small and large for a diverse group of customers.</Text>
        </Container>
      </Container>

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
          <AvatarProfile src='/profiles/chase.jpg' />
          <Text className={styles.avatarTitle}>Michael Bobbin</Text>
        </Grid>
        <Grid>
          <AvatarProfile src='/profiles/chase.jpg' />
          <Text className={styles.avatarTitle}>Philip Bezas</Text>
        </Grid>
        <Grid>
          <AvatarProfile src='/profiles/chase.jpg' />
          <Text className={styles.avatarTitle}>Johnathan Freebern</Text>
        </Grid>
        <Grid>
          <AvatarProfile src='/profiles/chase.jpg' />
          <Text className={styles.avatarTitle}>Steven Giallanza</Text>
        </Grid>
        <Grid>
          <AvatarProfile src='/profiles/chase.jpg' />
          <Text className={styles.avatarTitle}>Chase Roth</Text>
        </Grid>
      </Grid.Container>
    </Layout>
  );
}
