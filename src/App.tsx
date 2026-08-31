import { useEffect, useState, type ReactNode } from 'react'
import { HEROES as heroes } from './data/heroes'

type Page =
  | 'home'
  | 'world'
  | 'factions'
  | 'relics'
  | 'board-game'
  | 'digital-game'
  | 'dev-diary'
  | 'crowdfunding'
  | 'privacy'
  | 'terms'
  | 'copyright'
  | 'cookies'
  | 'disclaimer'

const X_URL = 'https://x.com/Alexandrgenesis'
const DISCORD_URL = 'https://discord.gg/7MU6vwFbq'
const CONTACT = 'contact@genesisrelics.com'

type Faction = {
  name: string
  image: string
  keyArt: string
  sigil: string
  banner: string
}

const factions: Faction[] = [
  {
    name: 'GUARDIANS',
    image: '/assets/factions/GR-006_Guardians.webp',
    keyArt: '/assets/factions/key-art/GR-120_Guardians_KeyArt.webp',
    sigil: '/assets/factions/GR-100_Guardians_Sigil.webp',
    banner: '/assets/factions/GR-110_Guardians_Banner.webp',
  },
  {
    name: 'VOIDBORN',
    image: '/assets/factions/GR-007_Voidborn.webp',
    keyArt: '/assets/factions/key-art/GR-121_Voidborn_KeyArt.webp',
    sigil: '/assets/factions/GR-101_Voidborn_Sigil.webp',
    banner: '/assets/factions/GR-111_Voidborn_Banner.webp',
  },
  {
    name: 'ARCHITECTS',
    image: '/assets/factions/GR-008_Architects.webp',
    keyArt: '/assets/factions/key-art/GR-122_Architects_KeyArt.webp',
    sigil: '/assets/factions/GR-102_Architects_Sigil.webp',
    banner: '/assets/factions/GR-112_Architects_Banner.webp',
  },
  {
    name: 'ASHEN COVENANT',
    image: '/assets/factions/GR-009_Ashen_Covenant.webp',
    keyArt: '/assets/factions/key-art/GR-123_Ashen_Covenant_KeyArt.webp',
    sigil: '/assets/factions/GR-103_Ashen_Covenant_Sigil.webp',
    banner: '/assets/factions/GR-113_Ashen_Covenant_Banner.webp',
  },
]

const nav: [string, string][] = [
  ['WORLD', '/world'],
  ['FACTIONS', '/factions'],
  ['RELICS', '/relics'],
  ['BOARD GAME', '/board-game'],
  ['DIGITAL GAME', '/digital-game'],
  ['DEV DIARY', '/dev-diary'],
  ['CROWDFUNDING', '/crowdfunding'],
]

const heroImages: Record<string, string> = {
  'GR-010': '/assets/heroes/guardians/GR-010_Aurelion_Vanguard.webp',
  'GR-011': '/assets/heroes/guardians/GR-011_Seraphis_Lightbearer.webp',
  'GR-012': '/assets/heroes/guardians/GR-012_Caelum_Starwarden.webp',
  'GR-013': '/assets/heroes/voidborn/GR-013_Nyx_Abysswalker.webp',
  'GR-014': '/assets/heroes/voidborn/GR-014_The_Rift_Assassin.webp',
  'GR-015': '/assets/heroes/voidborn/GR-015_The_Abyss_Walker.webp',
  'GR-016': '/assets/heroes/architects/GR-016_The_Celestial_Architect.webp',
  'GR-017': '/assets/heroes/architects/GR-017_The_Starforged_Warden.webp',
  'GR-018': '/assets/heroes/architects/GR-018_The_Astral_Seer.webp',
  'GR-019': '/assets/heroes/ashen-covenant/GR-019_The_Ember_Warlord.webp',
  'GR-020': '/assets/heroes/ashen-covenant/GR-020_The_Cinder_Witch.webp',
  'GR-021': '/assets/heroes/ashen-covenant/GR-021_The_Ash_Reaper.webp',
}

function getPage(): Page {
  const p = window.location.pathname.replace(/\/$/, '')
  const value = p.slice(1) as Page
  return value || 'home'
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="/">
          <span className="brand-mark">GR</span>
          <span>GENESIS RELICS</span>
        </a>

        <nav className="desktop-nav">
          {nav.map(([label, url]) => (
            <a key={url} href={url}>
              {label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="/crowdfunding">
          SUPPORT THE GENESIS
        </a>

        <button
          className="menu-button"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          <i />
          <i />
          <i />
        </button>
      </header>

      {open && (
        <div className="mobile-menu">
          {nav.map(([label, url]) => (
            <a key={url} href={url} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}

          <a href="/crowdfunding" onClick={() => setOpen(false)}>
            SUPPORT THE GENESIS
          </a>
        </div>
      )}
    </>
  )
}

function Ornament() {
  return (
    <div className="ornament">
      <span />
      <b>◇</b>
      <span />
    </div>
  )
}

function PageIntro({
  eyebrow,
  title,
  lead,
  image,
}: {
  eyebrow: string
  title: ReactNode
  lead: string
  image?: string
}) {
  return (
    <section className="page-intro">
      {image && <img className="intro-bg" src={image} alt="" />}
      <div className="intro-veil" />
      <div className="intro-content">
        <small>{eyebrow}</small>
        <h1>{title}</h1>
        <Ornament />
        <p>{lead}</p>
      </div>
    </section>
  )
}

function Home() {
  return (
    <main>
      <section className="home-hero">
        <img
          className="hero-bg"
          src="/assets/home/GR-001_Hero_Background.webp"
          alt=""
        />

        <div className="hero-veil" />

        <header className="hero-top">
          <span>A DARK FANTASY UNIVERSE</span>
          <span>THE RELICS REMEMBER.</span>
        </header>

        <div className="hero-layout">
          <div className="hero-copy">
            <small>GENESIS RELICS</small>

            <h1>
              <em>GENESIS</em>
              <br />
              RELICS
            </h1>

            <Ornament />

            <p>
              Ancient Relics choose their Guardians.
              <br />
              Forge your legend in a shattered universe.
            </p>

            <div className="hero-actions">
              <a className="gold-btn" href="/world">
                EXPLORE THE WORLD
              </a>

              <a className="ghost-btn" href="/dev-diary">
                DEV DIARY
              </a>
            </div>
          </div>

          <img
            className="main-relic"
            src="/assets/home/GR-002_Main_Genesis_Relic.png.webp"
            alt="The Genesis Relic"
          />
        </div>

        <img
          className="hero-lockup"
          src="/assets/home/GR-003_Hero_Logo_Composition.webp"
          alt="Genesis Relics"
        />
      </section>

      <section className="home-story section-dark">
        <div className="section-head">
          <small>01 — THE STORY</small>
          <h2>
            A WORLD <em>SHATTERED.</em>
          </h2>
        </div>

        <div className="story-grid">
          <article>
            <img
              src="/assets/story/GR-004_The_Story_Artwork.webp"
              alt="The Story"
              loading="lazy"
            />

            <div className="panel-copy">
              <h3>THE STORY</h3>

              <p>
                A shattered universe, four orders, and relics that outlived
                the world that made them.
              </p>

              <a href="/world">DISCOVER THE WORLD →</a>
            </div>
          </article>

          <article>
            <img
              src="/assets/story/GR-005_The_First_Relic.webp"
              alt="The First Relic"
              loading="lazy"
            />

            <div className="panel-copy">
              <h3>THE FIRST RELIC</h3>

              <p>
                The first relic did not fall. It chose. Its awakening changed
                everything.
              </p>

              <a href="/relics">ENTER THE RELICS →</a>
            </div>
          </article>
        </div>
      </section>

      <section className="home-factions section-dark">
        <div className="section-head centered">
          <small>02 — THE FACTIONS</small>

          <h2>
            FOUR ORDERS.
            <br />
            <em>ONE GENESIS.</em>
          </h2>
        </div>

        <div className="faction-strip">
          {factions.map((faction) => (
            <a
              href="/factions"
              className="faction-tile"
              key={faction.name}
            >
              <img src={faction.image} alt={faction.name} loading="lazy" />

              <div>
                <img src={faction.sigil} alt="" loading="lazy" />
                <h3>{faction.name}</h3>
              </div>
            </a>
          ))}
        </div>

        <a className="text-button" href="/factions">
          DISCOVER ALL FACTIONS →
        </a>
      </section>

      <section className="home-world">
        <img
          src="/assets/world/GR-022_World_Map.webp"
          alt="Genesis Relics world map"
          loading="lazy"
        />

        <div>
          <small>THE WORLD</small>

          <h2>
            THE RELICS
            <br />
            <em>REMEMBER.</em>
          </h2>

          <a className="gold-btn" href="/world">
            EXPLORE THE WORLD
          </a>
        </div>
      </section>

      <section className="home-games section-dark">
        <div className="section-head centered">
          <small>THE EXPERIENCE</small>

          <h2>
            FROM TABLETOP
            <br />
            <em>TO DIGITAL REALM.</em>
          </h2>
        </div>

        <div className="game-cards">
          <a href="/board-game">
            <img
              src="/assets/boardgame/GR-025_Board_Game_Setup.webp"
              alt="Board Game"
              loading="lazy"
            />

            <span>BOARD GAME</span>
            <strong>THE BATTLE TAKES FORM →</strong>
          </a>

          <a href="/digital-game">
            <img
              src="/assets/digital-game/GR-033_Digital_Game_Key_Art.webp"
              alt="Digital Game"
              loading="lazy"
            />

            <span>DIGITAL GAME</span>
            <strong>A LIVING DIGITAL REALM →</strong>
          </a>
        </div>
      </section>

      <section className="home-dev">
        <img
          src="/assets/development/GR-029_Dev_Diary.webp"
          alt="Genesis Relics Dev Diary"
          loading="lazy"
        />

        <div>
          <small>06 — DEV DIARY</small>

          <h2>
            FROM IDEA
            <br />
            <em>TO REALITY.</em>
          </h2>

          <p>
            Follow the development of Genesis Relics — from the first concept
            to the physical game and the wider universe.
          </p>

          <a className="gold-btn" href="/dev-diary">
            OPEN DEV DIARY
          </a>
        </div>
      </section>

      <Community />
    </main>
  )
}

function World() {
  return (
    <main>
      <PageIntro
        eyebrow="01 — THE WORLD"
        title={
          <>
            A WORLD
            <br />
            <em>REMEMBERED.</em>
          </>
        }
        lead="The old world shattered when the Genesis Relics awakened. Four factions now struggle to determine what the relics will become — and what they will remember."
        image="/assets/world/GR-022_World_Map.webp"
      />

      <section className="content-section">
        <div className="image-frame large">
          <img
            src="/assets/world/GR-022_World_Map.webp"
            alt="Genesis Relics world map"
          />
        </div>

        <Ornament />

        <div className="two-column">
          <div>
            <small>THE SHATTERED WORLD</small>

            <h2>
              SEVEN REGIONS.
              <br />
              <em>ONE MEMORY.</em>
            </h2>
          </div>

          <p>
            From the Frozen Crown and the ruins of the Aurelian Empire to the
            Ashen Wastes, Moonless Frontier, Celestial Peaks, Genesis Sanctum
            and Lost Oceans, the world is a collection of places shaped by
            the awakening relics.
          </p>
        </div>

        <div className="image-frame">
          <img
            src="/assets/world/GR-023_Locations.webp"
            alt="World locations"
          />
        </div>
      </section>

      <Community />
    </main>
  )
}

function HeroCard({
  heroId,
}: {
  heroId: string
}) {
  const hero = heroes.find((item) => item.id === heroId)

  if (!hero) {
    return null
  }

  const image = heroImages[hero.id]

  return (
    <article className="hero-detail-card">
      <div className="hero-detail-visual">
        {image ? (
          <img src={image} alt={hero.name} />
        ) : (
          <div className="hero-art-missing">
            <span>{hero.id}</span>
            <strong>ARTWORK IN DEVELOPMENT</strong>
          </div>
        )}

        <div className="hero-id">{hero.id}</div>
      </div>

      <div className="hero-detail-copy">
        <small>{hero.factionName}</small>

        <h3>{hero.name}</h3>

        <p className="hero-title">{hero.title}</p>

        <div className="hero-role">
          <span>ROLE</span>
          <strong>{hero.role}</strong>
        </div>

        <div className="hero-abilities">
          <h4>ABILITIES</h4>

          {hero.abilities.map((ability) => (
            <div className="ability" key={ability.name}>
              <strong>{ability.name}</strong>
              <p>{ability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

function Factions() {
  const factionHeroIds: Record<Faction['name'], string[]> = {
    GUARDIANS: ['GR-010', 'GR-011', 'GR-012'],
    VOIDBORN: ['GR-013', 'GR-014', 'GR-015'],
    ARCHITECTS: ['GR-016', 'GR-017', 'GR-018'],
    'ASHEN COVENANT': ['GR-019', 'GR-020', 'GR-021'],
  }

  return (
    <main>
      <PageIntro
        eyebrow="02 — THE FACTIONS"
        title={
          <>
            FOUR POWERS.
            <br />
            <em>ONE GENESIS.</em>
          </>
        }
        lead="Four canonical factions. Four visions of what the awakened relics mean for a broken world."
        image="/assets/factions/key-art/GR-120_Guardians_KeyArt.webp"
      />

      <section className="content-section factions-page">
        {factions.map((faction) => (
          <article className="faction-detail" key={faction.name}>
            <div className="image-frame">
              <img src={faction.keyArt} alt={faction.name} />
            </div>

            <div className="faction-detail-copy">
              <img className="sigil-big" src={faction.sigil} alt="" />

              <small>FACTION</small>

              <h2>{faction.name}</h2>

              <p>
                {faction.name === 'GUARDIANS' &&
                  'Keepers of order, memory and the ancient relics.'}

                {faction.name === 'VOIDBORN' &&
                  'Those who crossed the boundary between reality and the Void.'}

                {faction.name === 'ARCHITECTS' &&
                  'Shapers of matter, crystal and the hidden laws of creation.'}

                {faction.name === 'ASHEN COVENANT' &&
                  'Forged in fire, sacrifice and the ashes of a fallen age.'}
              </p>

              <img
                className="banner"
                src={faction.banner}
                alt={`${faction.name} banner`}
              />

              <h3>HEROES</h3>

              <div className="hero-grid">
                {(factionHeroIds[faction.name] ?? []).map((heroId) => {
                  const hero = heroes.find((item) => item.id === heroId)

                  if (!hero) {
                    return null
                  }

                  const image = heroImages[hero.id]

                  return (
                    <a
                      className="hero-mini-card"
                      href={`#${hero.id}`}
                      key={hero.id}
                    >
                      {image ? (
                        <img src={image} alt={hero.name} />
                      ) : (
                        <div className="hero-mini-missing">
                          {hero.id}
                        </div>
                      )}

                      <div>
                        <span>{hero.role}</span>
                        <strong>{hero.name}</strong>
                        <small>{hero.title}</small>
                      </div>
                    </a>
                  )
                })}
              </div>

              <div className="hero-details">
                {(factionHeroIds[faction.name] ?? []).map((heroId) => (
                  <div id={heroId} key={heroId}>
                    <HeroCard heroId={heroId} />
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <Community />
    </main>
  )
}

function Relics() {
  return (
    <main>
      <PageIntro
        eyebrow="03 — GENESIS RELICS"
        title={
          <>
            ARTIFACTS OF
            <br />
            <em>THE FIRST AGE.</em>
          </>
        }
        lead="Ancient objects whose origins predate the fall of the old world. Each relic carries a fragment of the Genesis — and a price."
        image="/assets/story/GR-005_The_First_Relic.webp"
      />

      <section className="content-section relic-page">
        <div className="relic-hero">
          <img
            src="/assets/home/GR-002_Main_Genesis_Relic.png.webp"
            alt="Genesis Relic"
          />
        </div>

        <Ornament />

        <div className="two-column">
          <div>
            <small>THE FIRST RELIC</small>

            <h2>
              IT DID NOT FALL.
              <br />
              <em>IT CHOSE.</em>
            </h2>
          </div>

          <p>
            The Genesis Relics are not trophies. They are fragments of a power
            older than the world that broke — objects capable of choosing
            those who carry their memory forward.
          </p>
        </div>

        <div className="image-frame">
          <img
            src="/assets/story/GR-005_The_First_Relic.webp"
            alt="The First Relic"
          />
        </div>
      </section>

      <Community />
    </main>
  )
}

function BoardGame() {
  return (
    <main>
      <PageIntro
        eyebrow="04 — BOARD GAME"
        title={
          <>
            THE BATTLE
            <br />
            <em>TAKES FORM.</em>
          </>
        }
        lead="A physical strategy experience where factions, heroes and relics collide across a world on the edge of awakening."
        image="/assets/boardgame/GR-025_Board_Game_Setup.webp"
      />

      <section className="content-section">
        <div className="three-images">
          <img
            src="/assets/boardgame/GR-024_Board_Game_Box.webp"
            alt="Board Game Box"
          />

          <img
            src="/assets/boardgame/GR-025_Board_Game_Setup.webp"
            alt="Board Game Setup"
          />

          <img
            src="/assets/boardgame/GR-026_Game_Pieces.webp"
            alt="Game Pieces"
          />
        </div>

        <Ornament />

        <div className="two-column">
          <div>
            <small>PHYSICAL EXPERIENCE</small>

            <h2>
              FORGE.
              <br />
              CONQUER.
              <br />
              <em>ASCEND.</em>
            </h2>
          </div>

          <p>
            Command a faction, deploy your heroes, claim relics and fight for
            the future of the shattered world. Genesis Relics is being
            developed as a physical tabletop strategy experience before
            expanding beyond the table.
          </p>
        </div>
      </section>

      <Community />
    </main>
  )
}

function DigitalGame() {
  return (
    <main>
      <PageIntro
        eyebrow="05 — DIGITAL GAME"
        title={
          <>
            A LIVING
            <br />
            <em>DIGITAL REALM.</em>
          </>
        }
        lead="A living universe expanding from tabletop to PC and mobile."
        image="/assets/digital-game/GR-033_Digital_Game_Key_Art.webp"
      />

      <section className="content-section">
        <div className="image-frame cinematic">
          <img
            src="/assets/digital-game/GR-033_Digital_Game_Key_Art.webp"
            alt="Digital Game Key Art"
          />
        </div>

        <div className="digital-gallery">
          <img
            src="/assets/digital-game/GR-034_Gameplay_Scene.webp"
            alt="Gameplay Scene"
          />

          <img
            src="/assets/digital-game/GR-035_Battle_Scene.webp"
            alt="Battle Scene"
          />

          <img
            src="/assets/digital-game/GR-036_Dungeon.webp"
            alt="Dungeon"
          />
        </div>

        <div className="image-frame cinematic">
          <img
            src="/assets/digital-game/GR-037_Genesis_Final_Confrontation.webp"
            alt="Genesis Final Confrontation"
          />
        </div>
      </section>

      <Community />
    </main>
  )
}

function DevDiary() {
  const weeks = Array.from({ length: 12 }, (_, index) => {
    const number = index + 1
    const id = String(37 + number).padStart(3, '0')

    return {
      number,
      image: `/assets/dev-diary/GR-${id}_Dev_Diary_Week_${number}.webp`,
    }
  })

  return (
    <main>
      <PageIntro
        eyebrow="06 — DEV DIARY"
        title={
          <>
            FROM IDEA
            <br />
            <em>TO REALITY.</em>
          </>
        }
        lead="A record of the decisions, prototypes and milestones behind Genesis Relics."
        image="/assets/development/GR-029_Dev_Diary.webp"
      />

      <section className="content-section diary-page">
        <div className="image-frame cinematic">
          <img
            src="/assets/development/GR-029_Dev_Diary.webp"
            alt="Genesis Relics Dev Diary"
          />
        </div>

        <Ornament />

        <div className="diary-note">
          <small>DEVELOPMENT JOURNAL</small>

          <h2>
            BUILDING THE
            <br />
            <em>GENESIS.</em>
          </h2>

          <p>
            The Dev Diary is the development story of Genesis Relics —
            covering the world, factions, physical prototype, playtesting,
            digital direction and the road toward crowdfunding.
          </p>

          <a className="gold-btn" href="/crowdfunding">
            FOLLOW THE CAMPAIGN
          </a>
        </div>

        <div className="diary-grid">
          {weeks.map((week) => (
            <article className="diary-card" key={week.number}>
              <img
                src={week.image}
                alt={`Genesis Relics Dev Diary Week ${week.number}`}
                loading="lazy"
              />

              <div>
                <small>DEV DIARY</small>
                <h3>WEEK {week.number}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Community />
    </main>
  )
}

function Crowdfunding() {
  return (
    <main>
      <PageIntro
        eyebrow="07 — CROWDFUNDING"
        title={
          <>
            HELP BUILD
            <br />
            <em>THE GENESIS.</em>
          </>
        }
        lead="Support the creation of Genesis Relics and become part of the world from its first physical prototype onward."
        image="/assets/development/GR-030_Crowdfunding.webp"
      />

      <section className="content-section campaign-page">
        <div className="image-frame cinematic">
          <img
            src="/assets/development/GR-030_Crowdfunding.webp"
            alt="Genesis Relics crowdfunding"
          />
        </div>

        <Ornament />

        <h2>
          THE NEXT CHAPTER
          <br />
          <em>IS BUILT TOGETHER.</em>
        </h2>

        <p>
          Genesis Relics is being developed step by step: canon, artwork,
          physical prototype, human playtesting, refinement and finally a
          public crowdfunding campaign.
        </p>

        <a className="gold-btn" href={`mailto:${CONTACT}`}>
          CONTACT THE PROJECT
        </a>
      </section>

      <Community />
    </main>
  )
}

function Community() {
  return (
    <section className="community">
      <div className="community-card">
        <span className="brand-mark">GR</span>

        <Ornament />

        <h2>
          JOIN <em>GENESIS.</em>
        </h2>

        <p>Build the world with us.</p>

        <div className="social-row">
          <a
            className="social"
            href={X_URL}
            target="_blank"
            rel="noreferrer"
          >
            𝕏 &nbsp; FOLLOW ON X
          </a>

          <a
            className="social"
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
          >
            DISCORD
          </a>

          <a className="social" href={`mailto:${CONTACT}`}>
            ✉ &nbsp; CONTACT
          </a>
        </div>

        <div className="subscribe">
          <h3>STAY UPDATED</h3>

          <p>
            Subscribe to our newsletter and be the first to know.
          </p>

          <form onSubmit={(event) => event.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
            />

            <button>SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </section>
  )
}

type Legal = {
  type: 'privacy' | 'terms' | 'copyright' | 'cookies' | 'disclaimer'
}

function Legal({ type }: Legal) {
  const legalData: Record<Legal['type'], [string, string]> = {
    privacy: [
      'PRIVACY POLICY',
      'How Genesis Relics handles information submitted through this website.',
    ],
    terms: [
      'TERMS OF USE',
      'Rules governing your use of the Genesis Relics website and its content.',
    ],
    copyright: [
      'COPYRIGHT & IP',
      'Ownership and permitted use of Genesis Relics intellectual property.',
    ],
    cookies: [
      'COOKIE POLICY',
      'Information about cookies and similar technologies used by this website.',
    ],
    disclaimer: [
      'DISCLAIMER',
      'Important information about the website, project plans and third-party services.',
    ],
  }

  const data = legalData[type]

  return (
    <main>
      <PageIntro
        eyebrow="LEGAL"
        title={<>{data[0]}</>}
        lead={data[1]}
      />

      <section className="legal-page">
        <p>
          <strong>Genesis Relics™</strong> is an independent creative
          project. This page provides general website information and is not
          legal advice.
        </p>

        <h2>1. PURPOSE</h2>

        <p>
          This website presents the Genesis Relics universe, artwork, game
          concepts, development information and community channels. Project
          features, release dates, platforms and campaign details may change
          as development progresses.
        </p>

        <h2>2. INTELLECTUAL PROPERTY</h2>

        <p>
          Genesis Relics names, logos, original artwork, characters,
          worldbuilding, written material and other original project content
          are protected to the extent provided by applicable law. Do not
          reproduce, sell, redistribute or claim ownership of project
          materials without permission.
        </p>

        <h2>3. CONTACT</h2>

        <p>
          For questions regarding this website or intellectual property,
          contact <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
        </p>

        <h2>4. UPDATES</h2>

        <p>
          This page may be updated as the project, website infrastructure or
          applicable requirements change.
        </p>
      </section>

      <Community />
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <span className="footer-brand">GENESIS RELICS™</span>
          <p>THE RELICS REMEMBER.</p>
        </div>

        <div className="footer-links">
          <a href="/world">THE WORLD</a>
          <a href="/factions">FACTIONS</a>
          <a href="/relics">RELICS</a>
          <a href="/board-game">BOARD GAME</a>
          <a href="/digital-game">DIGITAL GAME</a>
          <a href="/dev-diary">DEV DIARY</a>
          <a href="/crowdfunding">CROWDFUNDING</a>
        </div>

        <div className="footer-social">
          <a href={X_URL} target="_blank" rel="noreferrer">
            𝕏 X / TWITTER
          </a>

          <a href={DISCORD_URL} target="_blank" rel="noreferrer">
            DISCORD
          </a>

          <a href={`mailto:${CONTACT}`}>
            ✉ CONTACT
          </a>
        </div>
      </div>

      <div className="footer-legal">
        <span>© 2026 GENESIS RELICS. ALL RIGHTS RESERVED.</span>

        <div>
          <a href="/privacy">PRIVACY POLICY</a>
          <a href="/terms">TERMS OF USE</a>
          <a href="/copyright">COPYRIGHT & IP</a>
          <a href="/cookies">COOKIE POLICY</a>
          <a href="/disclaimer">DISCLAIMER</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [page] = useState<Page>(getPage)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let content: ReactNode

  if (page === 'home') content = <Home />
  else if (page === 'world') content = <World />
  else if (page === 'factions') content = <Factions />
  else if (page === 'relics') content = <Relics />
  else if (page === 'board-game') content = <BoardGame />
  else if (page === 'digital-game') content = <DigitalGame />
  else if (page === 'dev-diary') content = <DevDiary />
  else if (page === 'crowdfunding') content = <Crowdfunding />
  else {
    content = (
      <Legal
        type={
          page as
            | 'privacy'
            | 'terms'
            | 'copyright'
            | 'cookies'
            | 'disclaimer'
        }
      />
    )
  }

  return (
    <div className="site">
      <Header />
      {content}
      <Footer />
    </div>
  )
}
