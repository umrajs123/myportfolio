import { useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import portrait from './assets/adnan.jpeg'
import campusPreview from './assets/digital-campus.jpg'
import medinovaPreview from './assets/medinova-product.webp'
import './App.css'

const projectUrl = 'https://www.site.digitalcampuspro.com/'

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined

    const cursor = cursorRef.current
    document.documentElement.classList.add('has-custom-cursor')

    function handlePointerMove(event) {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`
      cursor.classList.add('is-visible')

      const target = event.target instanceof Element
        ? event.target.closest('[data-cursor]')
        : null
      const label = target?.getAttribute('data-cursor') || ''

      cursor.textContent = label
      cursor.classList.toggle('is-active', Boolean(label))
    }

    function hideCursor() {
      cursor.classList.remove('is-visible')
    }

    document.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('blur', hideCursor)

    return () => {
      document.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('blur', hideCursor)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [])

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 750, easing: 'ease-out-cubic', once: true, offset: 70 })
  }, [])

  return (
    <>
      <CustomCursor />
      <div className="site-shell">
        <a className="skip-link" href="#main">Skip to content</a>

        <header className="site-header">
          <nav className="header-inner" aria-label="Main navigation">
            <a className="brand" href="#home" aria-label="Adnan K Umraj, home" data-cursor="Home">
              AK<span>.</span>
            </a>
            <div className="nav-links">
              <a href="#home" data-cursor="Home">Home</a>
              <a href="#about" data-cursor="About">About</a>
              <a href="#skills" data-cursor="Skills">Skills</a>
              <a href="#projects" data-cursor="Work">Work</a>
              <a href="#approach" data-cursor="Approach">Approach</a>
              <a href="#faq" data-cursor="FAQs">FAQs</a>
              <a href="#contact" data-cursor="Contact">Contact</a>
            </div>
            <a className="availability" href="mailto:umrajs123@gmail.com" data-cursor="Email">
              <span className="availability-dot" />
              <span>Available for projects</span>
            </a>
          </nav>
        </header>

        <main id="main">
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> WEB DEVELOPER <span className="eyebrow-separator">/</span> DIGITAL CRAFT</p>
            <h1>
              I build
              <br />
              <span className="headline-accent">websites</span>
              <br />
              that work for <em>you.</em>
            </h1>
            <p className="hero-intro">
              Hello, I&apos;m Adnan K Umraj. I create thoughtful, responsive websites
              that turn good ideas into memorable online experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects" data-cursor="Explore">
                Explore my work <ArrowIcon />
              </a>
              <a className="text-link" href="mailto:umrajs123@gmail.com" data-cursor="Say hello">
                Let&apos;s talk <ArrowIcon diagonal />
              </a>
            </div>
            <div className="hero-socials" aria-label="Social profiles">
              <span>FIND ME ON</span>
              <a href="https://github.com/umrajs123" target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-cursor="Visit">
                GitHub <ArrowIcon diagonal />
              </a>
              <a href="https://www.linkedin.com/in/iamumraj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-cursor="Visit">
                LinkedIn <ArrowIcon diagonal />
              </a>
            </div>
          </div>

          <div className="hero-visual" data-aos="fade-left">
            <div className="portrait-glow" />
            <div className="portrait-frame">
              <img src={portrait} alt="Portrait of Adnan K Umraj" className="portrait-image" />
              <div className="portrait-caption">
                <span className="caption-mark">AK</span>
                <span><strong>Adnan K Umraj</strong><small>Web developer</small></span>
                <span className="caption-star" aria-hidden="true">✳</span>
              </div>
            </div>
            <div className="orbit-sticker" aria-label="Design, build, deliver">
              <svg viewBox="0 0 120 120" aria-hidden="true">
                <defs>
                  <path id="sticker-circle" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" />
                </defs>
                <text>
                  <textPath href="#sticker-circle">DESIGN · BUILD · DELIVER · </textPath>
                </text>
              </svg>
              <span>✳</span>
            </div>
            <span className="visual-note">BASED IN PAKISTAN · WORKING EVERYWHERE</span>
          </div>
        </section>

        <div className="marquee" aria-label="Thoughtful design, purposeful code">
          <div className="marquee-track" aria-hidden="true">
            {Array.from({ length: 4 }, (_, index) => (
              <span key={index}>THOUGHTFUL DESIGN <i>✳</i> PURPOSEFUL CODE <i>✳</i> DIGITAL EXPERIENCES <i>✳</i></span>
            ))}
          </div>
        </div>

        <section className="about section-shell section-space" id="about" data-aos="fade-up">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME</p>
            <h2>Good design draws you in.<br /><em>Great code</em> makes you stay.</h2>
          </div>
          <div className="about-details">
            <p className="about-lead">
              I enjoy bringing ideas to life on the web—balancing clear design,
              smooth interactions, and reliable front-end code.
            </p>
            <p className="about-body">
              My work is built with modern tools like React, Vite, and Tailwind CSS.
              I care about the details that make a site feel considered, accessible,
              and easy to use on every screen.
            </p>
            <div className="skill-list" id="skills" aria-label="Tools and focus areas">
              <span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>React</span>
              <span>PHP</span><span>Laravel</span><span>Bootstrap</span><span>Tailwind CSS</span>
              <span>MySQL</span><span>Git</span><span>WordPress</span><span>Responsive Design</span>
            </div>
          </div>
        </section>

        <section className="projects section-shell section-space" id="projects" data-aos="fade-up">
          <div className="projects-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK</p>
              <h2>Made with <em>purpose.</em></h2>
            </div>
            <span className="project-count">02 / SELECTED PROJECTS</span>
          </div>

          <article className="project-card">
            <div className="project-copy">
              <div className="project-meta"><span>01</span><span>EDUCATION · WEB EXPERIENCE</span></div>
              <div>
                <p className="project-kicker">FEATURED WEBSITE</p>
                <h3>Swat College<br />of Pharmaceutical<br />Sciences</h3>
                <p className="project-description">
                  Explore a campus experience shaped by scientific curiosity,
                  practical learning, and a commitment to care. At SCPS, students
                  go beyond textbooks to develop the skills and confidence needed
                  to serve their communities.
                </p>
              </div>
              <div className="project-bottom">
                <div className="project-tags"><span>Website</span><span>Education</span></div>
                <a className="project-link" href={projectUrl} target="_blank" rel="noopener noreferrer" data-cursor="View">
                  Visit live site <ArrowIcon diagonal />
                </a>
              </div>
            </div>
            <a className="project-image-link" href={projectUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit Digital Campus Pro website" data-cursor="Open">
              <img src={campusPreview} alt="Students gathered on the Swat College of Pharmaceutical Sciences campus" className="project-image" />
              <span className="image-location">SWAT COLLEGE OF PHARMACEUTICAL SCIENCES</span>
              <span className="image-arrow"><ArrowIcon diagonal /></span>
            </a>
          </article>
          <article className="project-card project-card-reverse project-card-medinova">
            <div className="project-copy">
              <div className="project-meta"><span>02</span><span>HEALTHCARE · E-COMMERCE</span></div>
              <div>
                <p className="project-kicker">SKIN HEALTH, REIMAGINED</p>
                <h3>Medi Nova</h3>
                <p className="project-description">
                  Discover science-backed skincare, hair care, and supplements.
                  Medi Nova brings innovative pharmaceutical solutions for
                  healthy, glowing skin.
                </p>
              </div>
              <div className="project-bottom">
                <div className="project-tags"><span>E-commerce</span><span>Skin health</span></div>
                <a className="project-link" href="https://medinova.pk/" target="_blank" rel="noopener noreferrer" data-cursor="View">
                  Visit live site <ArrowIcon diagonal />
                </a>
              </div>
            </div>
            <a className="project-image-link" href="https://medinova.pk/" target="_blank" rel="noopener noreferrer" aria-label="Visit Medi Nova website" data-cursor="Open">
              <img src={medinovaPreview} alt="Medi Nova Bio One Vitamin C serum" className="project-image" />
              <span className="image-location">MEDI NOVA · SKIN HEALTH</span>
              <span className="image-arrow"><ArrowIcon diagonal /></span>
            </a>
          </article>
          <p className="more-work-note"><span>✳</span> More projects are on the way.</p>
        </section>

        <section className="approach section-shell section-space" id="approach" data-aos="fade-up">
          <div className="approach-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> THE APPROACH</p>
            <h2>Small details.<br /><em>Big difference.</em></h2>
          </div>
          <div className="approach-list">
            <article className="approach-item">
              <span className="approach-number">01</span>
              <div><h3>Start with people</h3><p>Understand the audience and make every interaction feel clear and natural.</p></div>
              <span className="approach-symbol" aria-hidden="true">↗</span>
            </article>
            <article className="approach-item">
              <span className="approach-number">02</span>
              <div><h3>Design with intent</h3><p>Use a focused visual system so the important things stand out.</p></div>
              <span className="approach-symbol" aria-hidden="true">✳</span>
            </article>
            <article className="approach-item">
              <span className="approach-number">03</span>
              <div><h3>Build for every screen</h3><p>Turn the details into a responsive experience that feels great to use.</p></div>
              <span className="approach-symbol" aria-hidden="true">↗</span>
            </article>
          </div>
        </section>

        <section className="faq section-shell section-space" id="faq" data-aos="fade-up">
          <div className="faq-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> A FEW ANSWERS</p>
            <h2>Good questions.<br /><em>Clear answers.</em></h2>
            <p className="faq-intro">Curious about working together? Here are a few helpful details.</p>
          </div>
          <div className="faq-list">
            <details className="faq-item" open>
              <summary>
                <span className="faq-number">01</span>
                <span>What kind of websites do you build?</span>
                <span className="faq-toggle" aria-hidden="true">+</span>
              </summary>
              <p>I build responsive websites and digital experiences, including portfolios, business websites, and online stores.</p>
            </details>
            <details className="faq-item">
              <summary>
                <span className="faq-number">02</span>
                <span>Which technologies do you work with?</span>
                <span className="faq-toggle" aria-hidden="true">+</span>
              </summary>
              <p>My toolkit includes HTML, CSS, JavaScript, React, PHP, Laravel, Bootstrap, Tailwind CSS, and MySQL.</p>
            </details>
            <details className="faq-item">
              <summary>
                <span className="faq-number">03</span>
                <span>Will my website work well on mobile?</span>
                <span className="faq-toggle" aria-hidden="true">+</span>
              </summary>
              <p>Yes. I build responsive layouts so pages adapt to phones, tablets, and larger screens.</p>
            </details>
            <details className="faq-item">
              <summary>
                <span className="faq-number">04</span>
                <span>How can I get started?</span>
                <span className="faq-toggle" aria-hidden="true">+</span>
              </summary>
              <p><a href="mailto:umrajs123@gmail.com">Send me an email</a> with a little about your project, what you need, and your timeline. We can take it from there.</p>
            </details>
          </div>
        </section>

        <section className="contact section-shell" id="contact" data-aos="fade-up">
          <div className="contact-topline"><span>HAVE A GOOD IDEA?</span><span>LET&apos;S MAKE IT REAL <i>✳</i></span></div>
          <h2>Let&apos;s make<br /><em>something matter.</em></h2>
          <div className="contact-bottom">
            <p>Have a project in mind or just want to say hello? My inbox is open.</p>
            <a className="button button-light" href="mailto:umrajs123@gmail.com" data-cursor="Email me">
              Start a conversation <ArrowIcon diagonal />
            </a>
          </div>
        </section>
        </main>

        <footer className="site-footer section-shell">
          <a className="brand footer-brand" href="#home" data-cursor="Top">AK<span>.</span></a>
          <p>Designed with intent. Built with care.</p>
          <div className="footer-links">
            <a href="https://github.com/umrajs123" target="_blank" rel="noopener noreferrer" data-cursor="Visit">GitHub</a>
            <a href="https://www.linkedin.com/in/iamumraj" target="_blank" rel="noopener noreferrer" data-cursor="Visit">LinkedIn</a>
            <span>© {new Date().getFullYear()} Adnan K Umraj</span>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App

