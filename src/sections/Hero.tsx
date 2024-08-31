import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import Link from 'next/link';


export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip bg-black">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-20"
          style={{
            backgroundImage: `url(${grainImage.src})`
          }}
        />
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />

        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-8 text-blue-300 animate-twinkle" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-5 text-purple-300 animate-twinkle" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-white animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-indigo-300 animate-twinkle" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-yellow-300 animate-glow" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
          <StarIcon className="size-8 text-orange-300 animate-glow" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-white animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-14 text-cyan-300 animate-twinkle" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-white animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-pink-300 animate-glow" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-78} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-23 text-green-400-300 animate-glow" />
        </HeroOrbit>
        {/* Additional Sparkles and Stars */}
        <HeroOrbit size={460} rotation={35} shouldOrbit orbitDuration="50s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-6 text-red-300 animate-twinkle" />
        </HeroOrbit>
        <HeroOrbit size={480} rotation={-50} shouldOrbit orbitDuration="52s" shouldSpin spinDuration="5s">
          <SparkleIcon className="size-7 text-yellow-400 animate-twinkle" />
        </HeroOrbit>
        <HeroOrbit size={540} rotation={120} shouldOrbit orbitDuration="54s">
          <div className="size-3 rounded-full bg-white animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={600} rotation={-90} shouldOrbit orbitDuration="56s" shouldSpin spinDuration="4s">
          <StarIcon className="size-14 text-green-300 animate-glow" />
        </HeroOrbit>
        <HeroOrbit size={630} rotation={70} shouldOrbit orbitDuration="58s">
          <SparkleIcon className="size-12 text-blue-500 animate-twinkle" />
        </HeroOrbit>
        <HeroOrbit size={880} rotation={-130} shouldOrbit orbitDuration="60s" shouldSpin spinDuration="5s">
          <StarIcon className="size-10 text-purple-400 animate-glow" />
        </HeroOrbit>

         {/* Add here 4-5  Sparkles and Stars */}
          {/* Additional Sparkles and Stars */}
        <HeroOrbit size={900} rotation={60} shouldOrbit orbitDuration="62s" shouldSpin spinDuration="4s">
          <SparkleIcon className="size-11 text-teal-300 animate-twinkle" />
        </HeroOrbit>
        <HeroOrbit size={940} rotation={-110} shouldOrbit orbitDuration="64s" shouldSpin spinDuration="5s">
          <StarIcon className="size-18 text-orange-500 animate-glow" />
        </HeroOrbit>
        <HeroOrbit size={960} rotation={150} shouldOrbit orbitDuration="66s">
          <div className="size-3 rounded-full bg-white animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={980} rotation={-45} shouldOrbit orbitDuration="68s" shouldSpin spinDuration="4s">
          <SparkleIcon className="size-9 text-violet-400 animate-twinkle" />
        </HeroOrbit>
        <HeroOrbit size={1000} rotation={20} shouldOrbit orbitDuration="70s" shouldSpin spinDuration="5s">
          <StarIcon className="size-22 text-cyan-300 animate-glow" />
        </HeroOrbit>
      </div>

      <div className="container">
  <div className="flex flex-col items-center">
  <div className="relative z-10 p-1">
  <Image
    src={memojiImage}
    className="w-[100px] h-[100px] object-cover"
    alt="Person peeking from behind laptop"
  />
</div>

    <div className="relative z-10 bg-gray-900 border border-gray-700 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
      <div className="bg-gradient-to-r from-blue-500 to-emerald-300 size-2.5 rounded-full relative">
        <div className="bg-gradient-to-r from-blue-500 to-emerald-300 absolute inset-0 rounded-full animate-ping-large" />
      </div>
      <div className="text-sm font-medium text-gray-300">Available for new Projects</div>
    </div>
  </div>
  <div className="max-w-lg mx-auto relative z-10">
  <div className="rounded-xl p-4">
    <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide text-white">Amit Masram</h1>
    <p className="mt-4 text-center text-gray-400 md:text-lg">
      An Engineer who builds Apps for Mobile and Web.
    </p>
  </div>
</div>
<div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
  <Link href="#projects" className="relative z-10 inline-flex items-center gap-2 border border-gray-700 px-6 h-12 rounded-xl text-gray-300 bg-black bg-opacity-80 animated-button hover:bg-gray-800">
    <span className="font-semibold">Explore My Work</span>
    <ArrowDown className="size-4" />
  </Link>
  <Link href="#contact" className="relative z-10 inline-flex items-center gap-2 border border-blue-500 bg-gradient-to-r from-blue-500 to-emerald-300 text-black/90 h-12 px-6 rounded-xl animated-button hover:bg-blue-600">
    <span>👋</span>
    <span className="font-semibold">Let&apos;s Connect</span>
  </Link>
</div>
</div>
    </div>
  );
};
