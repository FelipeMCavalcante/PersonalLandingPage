import Forms from '@/app/components/Forms';
import Services from '@/app/components/Services';
// import Footer from '@/app/components/Footer';
import Contra from '@/app/components/Contra';
import Depoimentos from '@/app/components/Depoimentos';
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Packs from '@/app/components/Packs';
// import Projects from '@/app/components/Projects';
import Us from '@/app/components/Us';

export default function Home() {
  return (
    <main className='relative text-2xl text-red-900 bg-white'>
      <Header />
      <Hero />
      <Contra />
      <Us />
      <Services />
      <Packs />
      <Forms />
      <Depoimentos />
      {/* <Duvidas /> */}
      {/* <Footer /> */}
    </main>
  );
}
