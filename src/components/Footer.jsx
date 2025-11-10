import React from 'react'

const Footer = () => {
  const footerColumns = [
    {
      title: 'Activities',
      items: ['Coding Workshops', 'Project Collaborations', 'Hackathons', 'Tech Talks'],
    },
    {
      title: 'Focus Areas',
      items: ['AI / ML', 'Web & App Dev', 'UI / UX', 'Blockchain', "Data Science", "DSA / CP"],
    }
  ]

  return (
    <>
      <footer className="main-container text-white py-16 lg:py-24">
        <div className='rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 lg:p-12 flex flex-col gap-12'>
          <div className='grid lg:grid-cols-[1.1fr_1fr] gap-10'>
            <div className='space-y-5'>
              <p className='text-sm uppercase tracking-[0.4em] text-white/50'>Code Conquerors</p>
              <h2 className='font-heading text-3xl lg:text-5xl font-semibold leading-tight'>
                Building projects, solving problems, and shipping code together.
              </h2>
              <p className='text-base lg:text-lg text-white/70 max-w-xl'>
                We’re a developer collective obsessed with hands-on learning and real-world impact.
                Join live build nights, collaborate on open projects, and sharpen your craft alongside
                makers who love to experiment.
              </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8'>
              {footerColumns.map(({ title, items }) => (
                <div key={title}>
                  <h5 className='text-sm uppercase tracking-[0.3em] text-white/50 mb-4'>{title}</h5>
                  <ul className='space-y-2 text-base lg:text-lg'>
                    {items.map((item) => (
                      <li key={item} className='text-white/80'>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-t border-white/10 pt-8'>
            <div>
              <p className='text-sm uppercase tracking-[0.3em] text-white/50 mb-2'>Stay in sync</p>
              <a href="mailto:codeconquerors7@gmail.com" className='font-heading text-xl lg:text-2xl underline-offset-4 hover:underline'>
                codeconquerors7@gmail.com
              </a>
            </div>
            <div className='flex flex-wrap gap-3 text-sm lg:text-base uppercase tracking-[0.2em] text-white/60'>
              <span className='rounded-full border border-white/20 px-4 py-2'>Build</span>
              <span className='rounded-full border border-white/20 px-4 py-2'>Learn</span>
              <span className='rounded-full border border-white/20 px-4 py-2'>Collaborate</span>
            </div>
          </div>
        </div>
      </footer>

      <div className='main-container text-white/50 text-xs lg:text-sm uppercase tracking-[0.3em] pb-12'>
        © {new Date().getFullYear()} Code Conquerors · Crafted by developers for developers
      </div>
    </>
  )
}

export default Footer