import Main from "/public/components/Main"
import Navbar from "/public/components/Navbar"
import Hero from "/public/components/Hero"
import Subhero from "/public/components/Subhero"
import Config from "/public/components/Config"

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Subhero />
            <Main />
            <Config />
        </>
    )
}