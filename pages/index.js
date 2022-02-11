import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://sdk.relicx.ai/relicx-sdk.min.js"
          onload="relicxSDK.init({orgID: '96722432-95dc-466c-8b62-e9e7ad4b276f',appID: 'df69a78c-0f83-4134-811d-fd54b8e51df9'})">
        </script>

      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
