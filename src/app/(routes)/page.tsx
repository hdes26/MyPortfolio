'use client'
import {
  AgeCard, EmailCard, EnglishCard, ExperienceCard, GithubCard, InstagramCard,
  LanguageCard, LinkedinCard, MapCard, MeCard, ProjectCard, SkillsCard, SpotifyCard, ThemeCard, TimeCard
} from '@/components'
import { Navbar } from '@/components/Navbar'
export default function HomePage () {
  return (
    <>
      <Navbar />
      <section id='about-me' className='grid grid-cols-3 h-max gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20 z-10'>
        <MeCard />
        <LanguageCard />
        <ThemeCard />
        <AgeCard />
        <LinkedinCard />
        <ProjectCard />
        <GithubCard />
        <SkillsCard />
        <ExperienceCard />
        <SpotifyCard />
        <MapCard />
        <EmailCard />
        <InstagramCard />
        <TimeCard />
        <EnglishCard />
      </section>
    </>
  )
}
