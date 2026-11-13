import { useEffect, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import portrait from './assets/adnan.jpeg'
import campusPreview from './assets/digital-campus.jpg'
import medinovaPreview from './assets/medinova-product.webp'
import akuLogo from './assets/aku-logo.png'
import akuLogoLight from './assets/aku-logo-light.png'
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

function SocialIcon({ type }) {
  if (type === 'github') {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57A12.01 12.01 0 0 0 12 .5Z" />
      </svg>
    )
  }

  if (type === 'linkedin') {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
      </svg>
    )
  }

  if (type === 'gmail') {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#4285F4" d="M2 5.2V20a2 2 0 0 0 2 2h3V10L2 5.2Z" />
        <path fill="#34A853" d="M17 22h3a2 2 0 0 0 2-2V5.2L17 10v12Z" />
        <path fill="#FBBC04" d="M17 5.2V10l5-3.9V4a2 2 0 0 0-3.2-1.6L17 5.2Z" />
        <path fill="#EA4335" d="M2 4v2.1L7 10V5.2L4.2 2.4A2 2 0 0 0 2 4Z" />
        <path fill="#C5221F" d="m7 10 5 4 5-4V5.2l-5 4-5-4V10Z" />
      </svg>
    )
  }

  return (
    <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M12.04 0C5.42 0 .04 5.37.04 11.99c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.63a11.96 11.96 0 0 0 5.84 1.51h.01c6.62 0 12-5.38 12-12 0-3.21-1.25-6.23-3.52-8.5A11.92 11.92 0 0 0 12.04 0Zm0 21.84h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.68.96.98-3.59-.24-.37a9.88 9.88 0 0 1-1.52-5.26c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.89 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.06 2.88 1.21 3.08c.15.2 2.09 3.2 5.07 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
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
            <a className="brand header-brand" href="#home" aria-label="Adnan K Umraj, home" data-cursor="Home">
              <img src={akuLogo} alt="" />
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
        </main>

        <footer className="site-footer section-shell">
          <div className="footer-panel">
            <div className="footer-main">
              <div className="footer-intro">
                <a className="brand footer-brand" href="#home" aria-label="Adnan K Umraj, back to top" data-cursor="Top">
                  <img src={akuLogoLight} alt="" />
                </a>
                <p className="footer-tagline">
                  Thoughtful websites.<br />
                  Digital experiences that connect.
                </p>
                <a className="footer-availability" href="mailto:umrajs123@gmail.com" data-cursor="Email">
                  <span className="footer-availability-dot" />
                  Available for select projects
                </a>
              </div>

              <div className="footer-column">
                <p className="footer-label">EXPLORE</p>
                <nav className="footer-navigation" aria-label="Footer navigation">
                  <a href="#about" data-cursor="About">About</a>
                  <a href="#projects" data-cursor="Work">Selected work</a>
                  <a href="#approach" data-cursor="Approach">My approach</a>
                  <a href="#faq" data-cursor="FAQs">FAQs</a>
                  <a href="#contact" data-cursor="Contact">Contact</a>
                </nav>
              </div>

              <div className="footer-column footer-connect">
                <p className="footer-label">LET&apos;S CONNECT</p>
                <div className="footer-socials">
                  <a className="footer-social-link" href="https://github.com/umrajs123" target="_blank" rel="noopener noreferrer" data-cursor="Visit">
                    <SocialIcon type="github" />
                    <span>GitHub</span>
                    <ArrowIcon diagonal />
                  </a>
                  <a className="footer-social-link" href="https://www.linkedin.com/in/iamumraj" target="_blank" rel="noopener noreferrer" data-cursor="Visit">
                    <SocialIcon type="linkedin" />
                    <span>LinkedIn</span>
                    <ArrowIcon diagonal />
                  </a>
                  <a className="footer-social-link" href="mailto:umrajs123@gmail.com" data-cursor="Email">
                    <SocialIcon type="gmail" />
                    <span>Gmail</span>
                    <ArrowIcon diagonal />
                  </a>
                  <a className="footer-social-link" href="https://wa.me/923433946559" target="_blank" rel="noopener noreferrer" data-cursor="Chat">
                    <SocialIcon type="whatsapp" />
                    <span>WhatsApp</span>
                    <ArrowIcon diagonal />
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} Adnan K Umraj. All rights reserved.</span>
              <span className="footer-location"><span aria-hidden="true">✳</span> Based in Pakistan · Working everywhere</span>
              <a className="footer-back-to-top" href="#home" data-cursor="Top">
                Back to top <span aria-hidden="true">↑</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App

