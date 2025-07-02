<<<<<<< HEAD
// import Contra from '@/app/components/Contra';
import Footer from '@/app/components/Footer';
import Forms from '@/app/components/Forms';
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Packs from '@/app/components/Packs';
import Services from '@/app/components/Services';
import Us from '@/app/components/Us';
import WhatsApp from '@/app/components/WhatsApp';
=======
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
// import Insta from '@/components/Insta';
import Projects from '@/components/Projects';
import Santos from '@/components/Santos';
import Serie from '@/components/Serie';
import Us from '@/components/Us';
>>>>>>> b84a9f9 (novas mudanças)

export default function Home() {
  return (
    <main className='relative text-2xl text-red-900 bg-white'>
      <Header />
      <Hero />
      {/* <Contra /> */}
      <Us />
<<<<<<< HEAD
      <Services />
      <Packs />
      <Forms />
      {/* <Depoimentos /> */}
      {/* <Duvidas /> */}
=======
      <Santos />
      <Serie />
      <Projects />
      {/* <Insta /> */}
      <Contact />
>>>>>>> b84a9f9 (novas mudanças)
      <Footer />
      <WhatsApp />
    </main>
  );
}
