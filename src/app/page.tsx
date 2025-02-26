// import Artist from '@/app/components/Artist';
// import Events from '@/app/components/Events';
// import Footer from '@/app/components/Footer';
import Contra from '@/app/components/Contra';
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
// import Insta from '@/app/components/Insta';
// import Contact from '@/app/components/Contact';
// import Projects from '@/app/components/Projects';
import Us from '@/app/components/Us';

export default function Home() {
  return (
    <main className='relative text-2xl text-red-900 bg-white'>
      <Header />
      <Hero />
      <Contra />
      <Us />
      {/* <Services /> */}
      {/* <Packs /> */}
      {/* <Forms /> */}
      {/* <Depoimentos /> */}
      {/* <Duvidas /> */}
      {/* <Footer /> */}
    </main>
  );
}
