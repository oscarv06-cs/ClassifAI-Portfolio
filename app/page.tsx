import Image from "next/image";

const demoVideoSrc = "";
const researchPosterHref = "research-poster.pdf";
const researchPosterPreviewSrc = "research-poster-preview.png";
const contactEmail = "oscarvaleriano@ucsb.edu";
const basePath = process.env.GITHUB_PAGES_BASE_PATH ?? "";

const researchers = [
  {
    name: "Leeor Shemesh",
    role: "Undergraduate Student Researcher at the University of California, Santa Barbara",
    photo: "",
    linkedIn: "https://www.linkedin.com/in/leeor-shemesh/",
  },
  {
    name: "Oscar Valeriano",
    role: "Undergraduate Student Researcher at the University of California, Santa Barbara",
    photo: `${basePath}/oscar_valeriano.jpeg`,
    linkedIn: "https://www.linkedin.com/in/ovlr/",
  },
  {
    name: "Rohan Iyer",
    role: "Undergraduate Student Researcher at the University of California, Santa Barbara",
    photo: "",
    linkedIn: "https://www.linkedin.com/in/rohaniyer06/",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top">ClassifAI</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#demo">Demo</a>
          <a href="#poster">Poster</a>
          <a href="#team">Team</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">A RESEARCH PROJECT ON AI CLASSIFICATION</p>
            <h1>Making AI classification easier to understand.</h1>
            <p>
              ClassifAI explores how people experience AI-powered
              classification and how these systems can be made more
              transparent and human-centered.
            </p>
            <a className="button" href="#demo">Watch the demo</a>
          </div>
          <div className="pipeline" aria-label="Screen-time classification pipeline">
            <div className="pipeline-track">
              <article className="pipeline-node">
                <div className="node-visual frame-visual" aria-hidden="true">
                  <svg viewBox="0 0 96 60" fill="none">
                    <rect x="12.5" y="7.5" width="71" height="45" rx="4.5" stroke="currentColor" />
                    <path d="M19 16h58M19 22h58M19 28h25M49 28h28M19 34h58M19 40h40M63 40h14" stroke="currentColor" strokeLinecap="round" />
                    <rect x="17.5" y="13.5" width="61" height="31" rx="1.5" stroke="currentColor" strokeOpacity=".35" />
                  </svg>
                </div>
                <h2>Raw Frame</h2>
                <p>Input</p>
              </article>

              <div className="pipeline-connector" aria-hidden="true" />

              <article className="pipeline-node">
                <div className="node-visual filter-visual" aria-label="Inactivity goes to result; activity continues to intent classification">
                  <span>Inactivity <small>→ Result</small></span>
                  <span>Activity <small>→ Classify</small></span>
                </div>
                <h2>Filter Active Content</h2>
                <p>Model A · 93% accuracy</p>
              </article>

              <div className="pipeline-connector active-connector" aria-label="Activity continues to intent classification" />

              <article className="pipeline-node">
                <div className="node-visual classify-visual" aria-label="Classifies activity as work or entertainment">
                  <span>Work</span>
                  <small>OR</small>
                  <span>Entertainment</span>
                </div>
                <h2>Classify Intent</h2>
                <p>Model B · 86% accuracy</p>
              </article>

              <div className="pipeline-connector" aria-hidden="true" />

              <article className="pipeline-node">
                <div className="node-visual result-visual" aria-label="Possible results: work, entertainment, or neutral">
                  <span>Work</span>
                  <span>Entertainment</span>
                  <span>Neutral</span>
                </div>
                <h2>Work vs. Entertainment</h2>
                <p>Result</p>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section" id="about">
          <div className="section-title">
            <p className="eyebrow">THE PROJECT</p>
            <h2>About ClassifAI</h2>
          </div>
          <div className="section-copy">
            <p>
              AI classification can help organize complex information, but
              categories don’t always capture the full context. ClassifAI
              studies how people understand these systems and their results.
            </p>
            <p>
              Our goal is to explore ways to make classifications clearer,
              communicate uncertainty, and help people make informed decisions.
            </p>
          </div>
        </section>

        <section className="media-section" id="demo">
          <div className="section-title">
            <p className="eyebrow">SEE THE PROJECT</p>
            <h2>Demo</h2>
            <p>A short walkthrough of the project or prototype.</p>
          </div>
          <div className="video-frame">
            {demoVideoSrc ? (
              <video controls preload="metadata" playsInline>
                <source src={demoVideoSrc} type="video/mp4" />
                Your browser does not support the video element.
              </video>
            ) : (
              <div className="video-placeholder">
                <span className="play-icon" aria-hidden="true">▶</span>
                <p>Demo video placeholder</p>
              </div>
            )}
          </div>
          <p className="edit-note">
            Add <code>public/demo-video.mp4</code> and set{" "}
            <code>demoVideoSrc</code> in <code>app/page.tsx</code>.
          </p>
        </section>

        <section className="content-section poster-section" id="poster">
          <div className="section-title">
            <p className="eyebrow">SHAREABLE OVERVIEW</p>
            <h2>Research poster</h2>
            <p>Explore the research question, approach, and findings.</p>
            {researchPosterHref ? (
              <a className="text-link" href={researchPosterHref} target="_blank" rel="noreferrer">
                View the poster <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="poster-coming-soon">Poster coming soon</span>
            )}
          </div>
          {researchPosterHref ? (
            <div className="poster-preview">
              <Image
                src={researchPosterPreviewSrc}
                alt="Full-page preview of the ClassifAI research poster"
                width={5184}
                height={3888}
                loading="eager"
                unoptimized
              />
            </div>
          ) : (
            <div className="poster-placeholder" aria-label="Research poster placeholder">
              <div className="poster-placeholder-inner">
                <span>CLASSIFAI / RESEARCH</span>
                <strong>RESEARCH<br />POSTER</strong>
                <i>Replace this area with your poster.</i>
              </div>
            </div>
          )}
        </section>

        <section className="team-section" id="team">
          <div className="section-title">
            <p className="eyebrow">THE PEOPLE</p>
            <h2>Researchers</h2>
          </div>
          <div className="team-list">
            {researchers.map((researcher, index) => (
              <article className="researcher" key={index}>
                <div className="researcher-photo">
                  {researcher.photo ? (
                    <Image
                      src={researcher.photo}
                      alt={`${researcher.name} portrait`}
                      fill
                      sizes="(max-width: 680px) 100vw, 33vw"
                      className="researcher-image"
                    />
                  ) : (
                    <span aria-hidden="true">PHOTO</span>
                  )}
                </div>
                <div>
                  <h3>{researcher.name}</h3>
                  <p>{researcher.role}</p>
                  <a
                    className="researcher-link"
                    href={researcher.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="edit-note">
            Update the <code>researchers</code> list in <code>app/page.tsx</code>{" "}
            with names and affiliations.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Questions about the research?</h2>
          {contactEmail ? (
            <a className="button" href={`mailto:${contactEmail}`}>Contact the team</a>
          ) : (
            <p className="edit-note">
              Add a project email by setting <code>contactEmail</code> in{" "}
              <code>app/page.tsx</code>.
            </p>
          )}
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#top">ClassifAI</a>
        <span>Research on AI classification.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
