// Photo, nom, titre, accroche courte, CTA.

export default function Hero() {
  return (
    <section className="hero">
      <img src="src/assets/photoflo.jpg" alt="Photo de profil" className="hero-photo" />
      <h1>Florian Helg</h1>
      <p className="hero-title">Développeur web fullstack</p>
      <p className="hero-desc">
        Bienvenue sur mon portfolio. Je conçois des applications web modernes, du frontend au backend.
      </p>
      <div className="hero-actions">
        <a href="/projects" className="btn-primary">Voir mes projets</a>
        <a href="/contact" className="btn-secondary">Me contacter</a>
      </div>
    </section>
  )
}