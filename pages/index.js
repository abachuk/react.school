import { Component } from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import Footer from '../components/footer'
import styled from 'styled-components'

const Title = styled.h3`
  color: red;
  font-size: 50px;
  text-align: center;
`

const Subtitle = styled.h5`
  text-align: center;
`

export default class extends Component {
  static async getInitialProps () {
    return {}
  }

  render () {
    return (
      <main>
        <Head>
          <Title>React and JavaScript training in NYC</Title>
        </Head>

        <section>
          <Subtitle>🦄 Stay tuned for some good stuff near you 🔥</Subtitle>
        </section>
        <Footer />
      </main>
    )
  }
}
