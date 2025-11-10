import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AryanJaiswalImg from '../assets/images/AryanJaiswal.jpg'
import AvinashSharmaImg from '../assets/images/AvinashSharma.jpg'
import SatyamKumarImg from '../assets/images/SatyamKumar.jpeg'
import AyushPrakashImg from '../assets/images/AyushPrakash.jpeg'
import AaradhyaWaooImg from '../assets/images/AaradhyaWaoo.JPG'
import SohamGhoshImg from '../assets/images/SohamGhosh.JPG'
import PrinceYadavImg from '../assets/images/PrinceYadav.jpeg'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const generatePlaceholder = (name, bg = '0f172a') =>
  `https://placehold.co/600x800/${bg}/ffffff?text=${encodeURIComponent(name)}&font=jetbrains`

const teamMembers = [
  {
    name: 'Aryan Jaiswal',
    role: 'Head',
    focus: 'Leads club direction, mentors product squads, and architects end-to-end builds.',
    tags: ['Leadership', 'iOS Dev', 'Web Development', 'Android Development', 'Backend Development'],
    image: AryanJaiswalImg,
  },
  {
    name: 'Avinash Sharma',
    role: 'Co-Head',
    focus: 'Runs tech ops, leads flagship workshops, and keeps every project milestone on track.',
    tags: ['Leadership', 'iOS Dev', 'Android Development', 'DSA'],
    image: AvinashSharmaImg,
  },
  {
    name: 'Satyam Kumar',
    role: 'Co-Head',
    focus: 'Guides technical direction, scales data initiatives, and mentors builders in every stack.',
    tags: ['AI/ML', 'Python', 'MLOps', 'Web Development', 'Backend Development'],
    image: SatyamKumarImg,
  },
  {
    name: 'Prince Yadav',
    role: 'ML Lead',
    focus: 'Leads ML initiatives, mentors model deployment, and drives AI experiments.',
    tags: ['AI/ML', 'Python', 'TensorFlow'],
    image: PrinceYadavImg,
  },
  {
    name: 'Ayush Prakash Tiwari',
    role: 'Web Development Lead',
    focus: 'Designs web development projects, and mentors builders in every stack.',
    tags: ['Web Development', 'Backend Development', 'UI/UX Design'],
    image: AyushPrakashImg,
  },
  {
    name: 'Aaradhya Waoo',
    role: 'Web Development Lead',
    focus: 'Designs web development projects, and mentors builders in every stack.',
    tags: ['Web Development', 'Backend Development', 'UI/UX Design'],
    image: AaradhyaWaooImg,
  },
  {
    name: 'Soham Ghosh',
    role: 'DSA/CP Lead',
    focus: 'Designs DSA/CP programs, and mentors builders in algorithms and data structures.',
    tags: ['DSA', 'CP', 'App Development', 'C and C++'],
    image: SohamGhoshImg,
  },
  {
    name: 'Ayaan Khan',
    role: 'DSA/CP Lead',
    focus: 'Designs DSA/CP programs, and mentors builders in algorithms and data structures.',
    tags: ['DSA', 'CP', 'App Development', 'C and C++'],
    image: generatePlaceholder('Ayaan Khan', '0f172a'),
  },
  {
    name: 'Shashank Dev',
    role: 'UI/UX Lead',
    focus: 'Designs UI/UX projects, and mentors in Designing',
    tags: ['Growth', 'Next.js', 'Automation'],
    image: generatePlaceholder('Shashank Dev', '020617'),
  },
  
]

const TeamCard = ({ member, variant = 'default' }) => {
  const { name, role, focus, tags, image } = member

  const sizeClasses =
    variant === 'head'
      ? 'w-full max-w-[230px] sm:max-w-[260px]'
      : variant === 'co'
        ? 'w-full max-w-[200px] sm:max-w-[220px]'
        : 'w-full max-w-[180px] sm:max-w-[200px]'

  const paddingX = 'px-3'
  const paddingY = 'pt-3'

  return (
    <article
      className={`team-card group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] flex flex-col items-stretch transition-transform duration-300 hover:-translate-y-2 ${sizeClasses}`}
    >
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
        <div className='absolute -top-16 -right-10 h-36 w-36 rounded-full bg-white/10 blur-3xl group-hover:bg-white/20 transition-colors duration-300' />
      </div>
      <figure
        className='relative mx-auto mt-3 w-full aspect-square rounded-[16px] border border-white/10 bg-white/[0.04] flex items-center justify-center overflow-hidden'
      >
        <img
          src={image}
          alt={name}
          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]'
          loading='lazy'
        />
      </figure>
      <div className={`relative space-y-1.5 ${paddingX} ${paddingY}`}>
        <h3 className='font-heading text-xs lg:text-sm uppercase'>{name}</h3>
        <p className='text-[9px] uppercase tracking-[0.18em] text-white/50'>{role}</p>
      </div>
      <p className={`relative ${paddingX} text-[9px] text-white/70 leading-relaxed`}>{focus}</p>
      <div className={`relative flex flex-wrap gap-1 ${paddingX} pb-2 pt-2 mt-auto`}>
        {tags.map((tag) => (
          <span
            key={tag}
            className='rounded-full border border-white/20 px-2 py-[2px] text-[8px] uppercase tracking-[0.14em] text-white/60'
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

const Team = () => {
  const teamRef = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 75%',
        },
      })

      tl.from('.team-heading', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
        .from(
          '.team-summary',
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .from(
          '.team-card',
          {
            y: 80,
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '-=0.2'
        )
    },
    { scope: teamRef }
  )

  return (
    <section ref={teamRef} className='bg-black text-white py-24 lg:py-32'>
      <div className='main-container space-y-14'>
        <div className='flex flex-col lg:flex-row lg:items-end gap-8 justify-between team-intro'>
          <div className='max-w-3xl space-y-5 team-heading'>
            <p className='text-sm uppercase tracking-[0.4em] text-white/50'>Core Team</p>
            <h2 className='font-heading text-4xl md:text-6xl lg:text-[5vw] font-semibold leading-[1.05]'>
              The builders who keep Code Conquerors shipping.
            </h2>
          </div>
          <p className='max-w-lg text-base lg:text-lg text-white/70 team-summary'>
            Our leadership crew steers every sprint, pairs members across domains, and makes sure
            every idea finds a roadmap. Meet the people sparking experiments, shaping curriculum,
            and supporting contributors daily.
          </p>
        </div>

        <div className='space-y-10 lg:space-y-12 team-grid'>
          <div className='flex justify-center'>
            <TeamCard member={teamMembers[0]} variant='head' />
          </div>

          <div className='grid gap-5 lg:gap-6 md:grid-cols-2 justify-items-center'>
            {teamMembers.slice(1, 3).map((member) => (
              <TeamCard key={member.name} member={member} variant='co' />
            ))}
          </div>

          <div className='grid gap-5 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 justify-items-center'>
            {teamMembers.slice(3).map((member) => (
              <TeamCard key={member.name} member={member} variant='lead' />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team

