import Link from 'next/link';
import { socialLinks } from '../utils/dataBase';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import Button from '../components/Button';
import Image from 'next/image';

function HeroSection() {
  const renderSocialIcons = () =>
    socialLinks.map(({ href, icon, label }) => (
      <Link
        key={label}
        href={href}
        aria-label={label}
        target="_blank"
        className="text-black transition hover:text-orange-500 duration-300"
      >
        {icon}
      </Link>
    ));

  const paraText = `I’m a passionate UI/UX designer with a focus on creating
          beautiful, intuitive, and user-friendly digital experiences.
          Let&apos;s craft impactful designs that not only look great
          but also deliver seamless user interactions.`;

  return (
    <section
      id="home"
      className="grid max-w-6xl gap-4 mx-auto my-6 md:my-12 md:grid-cols-2"
    >
      <div className="self-center  justify-self-center">
        <TextGenerateEffect
          className="text-base font-semibold md:text-xl"
          duration={2}
          filter={false}
          words="Hi, I am"
        />
        <TextGenerateEffect
          className="text-orange-400 md:text-xl"
          duration={2}
          filter={false}
          words="Jenny James"
        />
        <TextGenerateEffect
          className="text-3xl font-extrabold md:text-5xl"
          duration={2}
          filter={false}
          words="UI & Ux"
        />
        <TextGenerateEffect
          className="ml-[5.4rem] md:ml-[8.5rem] mb-4 text-3xl font-extrabold md:text-5xl"
          duration={2}
          filter={false}
          words="Designer"
        />
        <TextGenerateEffect
          className="mb-4 text-black/60"
          duration={1}
          filter={false}
          words={paraText}
        />
        <p className="mb-4 text-black/60"></p>
        <Button className="text-white bg-orange-400 hover:bg-orange-600">
          Hire Me
        </Button>

        <div className="flex items-center gap-4 mt-4 md:hidden">
          {renderSocialIcons()}
        </div>
      </div>

      <div className="flex-col items-center self-center gap-2 md:flex justify-self-center">
        <Image
          src="/img-3.png"
          alt="my-image"
          height={500}
          width={500}
          quality={100}
        />
        <div className="items-center hidden gap-4 md:flex">
          {renderSocialIcons()}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
