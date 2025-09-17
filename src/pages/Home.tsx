import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <Header />
      <section id="top" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover" src="/hero.mp4" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 px-6 w-full">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-snug tracking-tight">
              AI-Driven Automation
              <br />for Every Operation
            </h1>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
