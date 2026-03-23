import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Poster from '@/components/Poster/Poster'
import About from '@/components/About/About'
import Tracks from '@/components/Tracks/Tracks'
import Schedule from '@/components/Schedule/Schedule'
import Register from '@/components/Register/Register'
import Rules from '@/components/Rules/Rules'
import Sponsors from '@/components/Sponsors/Sponsors'
import Team from '@/components/Team/Team'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Poster />
            <About />
            <Schedule />
            <Register />
            <Rules />
            <Team />
            <Contact />
            <Footer />
        </main>
    )
}
