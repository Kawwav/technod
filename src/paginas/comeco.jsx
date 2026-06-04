import { useEffect, useRef, useState } from 'react'
import './comeco.css'

function Comeco() {
  const imgRef = useRef(null)
  const [navState, setNavState] = useState('hamburger') // 'hamburger' | 'expanded' | 'hidden'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.55}px)`
      }

      // No mobile, o nav só abre via clique — scroll não ativa
      if (window.innerWidth <= 768) return

      const sobreEl = document.getElementById('sobre')
      if (!sobreEl) return

      const sobreTop = sobreEl.getBoundingClientRect().top
      const sobreBottom = sobreEl.getBoundingClientRect().bottom

      if (sobreTop > window.innerHeight * 0.5) {
        setNavState('hamburger')
      } else if (sobreTop <= window.innerHeight * 0.5 && sobreBottom > 0) {
        setNavState('expanded')
      } else {
        setNavState('expanded')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleCloseMenu = () => setMobileMenuOpen(false)
    window.addEventListener('closeNavMenu', handleCloseMenu)
    return () => window.removeEventListener('closeNavMenu', handleCloseMenu)
  }, [])

  // Fecha o menu mobile ao clicar em um link
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false)
  }

  // No mobile o nav expande ao clicar; no desktop expande pelo scroll
  const handleTriggerClick = () => {
    const mobile = window.innerWidth <= 768
    if (mobile) {
      setMobileMenuOpen(prev => !prev)
    }
  }

  const isExpanded = navState === 'expanded' || mobileMenuOpen
  const isHidden   = navState === 'hidden'

  return (
    <section id="comeco">
      <div className="comeco-bg" ref={imgRef} />

      {/* Nav trigger: hamburger → retângulo (desktop) / tela cheia (mobile) */}
      <div
        className={`comeco-nav-trigger${isExpanded ? ' expanded' : ''}${isHidden ? ' hidden' : ''}`}
        role="navigation"
        aria-label="Menu principal"
        onClick={handleTriggerClick}
      >
        <div className="trigger-inner">
          {/* Barras do hamburger / X no mobile */}
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />

          {/* Logo que aparece quando expandido */}
          <a
            href="#comeco"
            className="nav-logo"
            aria-label="TechnoD"
            onClick={e => e.stopPropagation()}
          >
            <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="18" width="6" height="14" fill="#378add"/>
              <rect x="12" y="10" width="6" height="22" fill="#378add" opacity="0.85"/>
              <rect x="20" y="4" width="6" height="28" fill="#378add" opacity="0.7"/>
              <rect x="28" y="14" width="4" height="18" fill="#378add" opacity="0.55"/>
            </svg>
            <span className="nav-logo-text">TechnoD</span>
          </a>

          {/* Links */}
          <div className="nav-links" onClick={e => e.stopPropagation()}>
            <button className="nav-close-btn" onClick={handleTriggerClick} aria-label="Fechar menu">✕</button>
            <a href="#comeco"    onClick={handleNavLinkClick}>Home</a>
            <a href="#sobre"     onClick={handleNavLinkClick}>Sobre Nós</a>
            <a href="#servicos"  onClick={handleNavLinkClick}>Serviços</a>
            <a href="#contato"   onClick={handleNavLinkClick}>Contato</a>
          </div>
        </div>
      </div>

      <div className="comeco-content">
        <h1 className="comeco-title">
          TECHNO<span className="destaque">D</span>
        </h1>
        <p className="comeco-sub">
          SOLUÇÕES IN<span className="destaque">D</span>USTRIAIS
        </p>
      </div>
    </section>
  )
}

export default Comeco