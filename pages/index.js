import Head from "next/head"
import { SettingsProvider } from "../context/SettingsContext"
import AnimatedBackground from "../components/AnimatedBackground"
import Controls from "../components/Controls"
import Output from "../components/Output"

export default function Home() {
  return (
    <>
      <Head>
        <title>Animated Gradient Background Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SettingsProvider>
        <AnimatedBackground>
          <header className="header">
            <h1 className="title">
              Animated Gradient Background Generator
            </h1>
          </header>

          <main className="container">
            <Controls />
            <Output />
          </main>

          <footer className="footer">
            <p>
              Based on a <a href="https://codepen.io/P1N2O/pen/pyBNzX">CodePen</a> by Manuel Pinto
            </p>
          </footer>
        </AnimatedBackground>
      </SettingsProvider>
    </>
  )
}
