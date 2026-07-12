import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = () => [{ title: "Anna Wilson" }];

const POSTS = [
  { src: "/instagram/post-1.webp", rotate: -3, left: "6%", top: "20%" },
  { src: "/instagram/post-2.webp", rotate: 2, left: "37.5%", top: "20%" },
  { src: "/instagram/post-3.webp", rotate: -1.5, left: "69%", top: "20%" },
];

type Sticker = {
  src: string;
  w: number;
  r: number;
  pos: React.CSSProperties;
};

const HERO_STICKERS: Sticker[] = [
  { src: "/stickers/starsticker3.webp", w: 96, r: -18, pos: { left: "3%", top: "10%" } },
  { src: "/stickers/sparkle.webp", w: 140, r: 8, pos: { left: "42%", top: "4%" } },
  { src: "/stickers/heart.webp", w: 72, r: 12, pos: { right: "23%", top: "6%" } },
  { src: "/stickers/lips.webp", w: 56, r: -16, pos: { left: "54%", bottom: "6%" } },
  { src: "/stickers/starsticker6.webp", w: 60, r: 22, pos: { right: "4%", bottom: "26%" } },
  { src: "/stickers/exclaim.webp", w: 50, r: -8, pos: { left: "8%", top: "34%" } },
  { src: "/stickers/yinyang.webp", w: 60, r: 16, pos: { right: "16%", bottom: "6%" } },
  { src: "/stickers/ghost.webp", w: 70, r: -10, pos: { left: "1.5%", bottom: "20%" } },
];

const IG_STICKERS: Sticker[] = [
  { src: "/stickers/starsticker1.webp", w: 84, r: 14, pos: { left: "2%", top: "12%" } },
  { src: "/stickers/smiley.webp", w: 70, r: -12, pos: { right: "4%", top: "18%" } },
  { src: "/stickers/sweet.webp", w: 88, r: 10, pos: { left: "46%", bottom: "6%" } },
  { src: "/stickers/sparkle.webp", w: 130, r: -6, pos: { right: "10%", bottom: "10%" } },
];

function Doodle({ src, w, r, pos }: Sticker) {
  return (
    <span
      className="doodle"
      style={{ ...pos, "--w": `${w}px`, "--r": `${r}deg` } as React.CSSProperties}
    >
      <img src={src} alt="" loading="lazy" />
    </span>
  );
}

export default function Home() {
  return (
    <main className="home">
      <div className="marquee" aria-label="Handmade in Naarm, Melbourne, Australia">
        <div className="marquee__track" aria-hidden="true">
          <span className="marquee__item">
            Handmade in Naarm, Australia <span className="marquee__sep">✨</span> Handmade
            in Melbourne, Australia <span className="marquee__sep">✨</span>
          </span>
          <span className="marquee__item">
            Handmade in Naarm, Australia <span className="marquee__sep">✨</span> Handmade
            in Melbourne, Australia <span className="marquee__sep">✨</span>
          </span>
          <span className="marquee__item">
            Handmade in Naarm, Australia <span className="marquee__sep">✨</span> Handmade
            in Melbourne, Australia <span className="marquee__sep">✨</span>
          </span>
          <span className="marquee__item">
            Handmade in Naarm, Australia <span className="marquee__sep">✨</span> Handmade
            in Melbourne, Australia <span className="marquee__sep">✨</span>
          </span>
        </div>
      </div>

      <nav className="nav" aria-label="Primary">
        <div className="nav__skin torn-b" aria-hidden="true">
          <div className="rim" />
          <div className="paper" />
        </div>
        <ul className="nav__group nav__group--left">
          <li>
            <a className="nav__link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              Shop
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              Customs
            </a>
          </li>
        </ul>

        <a className="nav__brand" href="#" aria-label="Sequin Polarbears home">
          <span className="nav__brand-main">SEQUIN</span>
          <span className="nav__brand-sub">polarbears</span>
        </a>

        <ul className="nav__group nav__group--right">
          <li>
            <a className="nav__link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              Portfolio
            </a>
          </li>
          <li>
            <button className="nav__search" type="button" aria-label="Search">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="6.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                />
                <line
                  x1="15.5"
                  y1="15.5"
                  x2="21"
                  y2="21"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>

      <section className="home__hero">
        <img className="home__rip" src="/smiley-top.webp" alt="" />
        <div className="decor" aria-hidden="true">
          {HERO_STICKERS.map((s, i) => (
            <Doodle key={i} {...s} />
          ))}
        </div>
        <div className="home__container">
          <div className="home__core">
            <img className="home__title-art" src="/title-ripped.webp" alt="Sequin Polarbears" />

            <div className="home__note">
              <p>
                Custom made just for you, one of a kind pieces designed for your
                vision. Handcrafted with premium attention to detail. Stand out,
                stay zesty.
              </p>
            </div>
          </div>

          <div className="home__scatter">
            <div className="home__sticker-wrap">
              <img className="home__sticker" src="/sticker.webp" alt="" />
              <div className="home__cut">
                <span className="home__cut-text">
                  turning dreams
                  <br />
                  into designs &lt;3
                </span>
              </div>
            </div>

            <div className="home__photos">
              <a
                className="home__photo home__photo--brenda"
                href="https://www.instagram.com/sequinpolarbears/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/photo-brenda.webp" alt="Brenda Bressed, Drag Race Down Under" loading="lazy" />
              </a>
              <a
                className="home__photo home__photo--opal"
                href="https://www.instagram.com/sequinpolarbears/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/photo-opal.webp" alt="Opal photobooth strip" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home__image">
        <div className="home__scrap">
          <img className="home__rip" src="/smiley-bottom.webp" alt="" />
          <div className="decor" aria-hidden="true">
            {IG_STICKERS.map((s, i) => (
              <Doodle key={i} {...s} />
            ))}
          </div>
          <div className="ig__row">
            {POSTS.map((post) => (
              <a
                key={post.src}
                className="ig__card"
                href="https://www.instagram.com/sequinpolarbears/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ rotate: `${post.rotate}deg` } as React.CSSProperties}
              >
                <img className="ig__img" src={post.src} alt="Instagram post" loading="lazy" />
              </a>
            ))}
          </div>
          <img className="home__rip home__rip--bleed" src="/smiley-2-top.webp" alt="" />
        </div>
      </section>
      <section className="home__next">
        <img className="home__rip" src="/smiley-2-bottom.webp" alt="" />
      </section>
    </main>
  );
}