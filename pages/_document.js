import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline, Container, Text } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }

  render() {
    return (
      <Html lang="en" className=''>
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <div className='wrapper'>
            <Main />
          </div>
          <footer>
            <Container css={{
              textAlign: 'center'
            }}>
              <Text>Copyright &copy; Gene Construction 2023</Text>
            </Container>
          </footer>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;