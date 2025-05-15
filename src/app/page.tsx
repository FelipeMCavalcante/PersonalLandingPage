// import Contra from '@/app/components/Contra';
import Footer from '@/app/components/Footer';
import Forms from '@/app/components/Forms';
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Packs from '@/app/components/Packs';
import Services from '@/app/components/Services';
import Us from '@/app/components/Us';
import WhatsApp from '@/app/components/WhatsApp';

export default function Home() {
  return (
    <main className='relative text-2xl text-red-900 bg-white'>
      <Header />
      <Hero />
      {/* <Contra /> */}
      <Us />
      <Services />
      <Packs />
      <Forms />
      {/* <Depoimentos /> */}
      {/* <Duvidas /> */}
      <Footer />
      <WhatsApp />
    </main>
  );
}
