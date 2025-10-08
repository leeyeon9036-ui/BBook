import Hero from '../Hero';

export default function HeroExample() {
  return <Hero onBookNowClick={() => console.log('Book now clicked')} />;
}
