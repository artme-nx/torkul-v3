import { SiteHeader } from "@/components/site-header";
import { RevealInit } from "@/components/reveal-init";

const IMG = {
  hero: "https://images.unsplash.com/photo-1564936281403-f92f66f89ee0",
  ovenFlame: "https://images.unsplash.com/photo-1646656352194-7db15ee021bf",
  pizzaBoard: "https://images.unsplash.com/photo-1579751626657-72bc17010498",
  pizzaFlame: "https://images.unsplash.com/photo-1622880833523-7cf1c0bd4296",
  pizzaAction: "https://images.unsplash.com/photo-1607018244619-dab6235709dd",
  seafoodTop: "https://images.unsplash.com/photo-1578935149228-66b184c83e69",
  seafoodSpaghetti: "https://images.unsplash.com/photo-1569494315581-abddb8d41cfe",
  calamari: "https://images.unsplash.com/photo-1682264895449-f75b342cbab6",
  octopus: "https://images.unsplash.com/photo-1626232441076-a2a5ada2256a",
  octopusWine: "https://images.unsplash.com/photo-1535980156496-87fc2cfcb832",
  stew: "https://images.unsplash.com/photo-1608500219063-e5164085cd6f",
  wineGlass: "https://images.unsplash.com/photo-1767969217506-b28edac04107",
  coastHarbor: "https://images.unsplash.com/photo-1621848064467-3a701f6cb036",
};

function img(url: string, w: number, q = 80) {
  return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
}

const MENU = [
  {
    cat: "Za početak",
    image: IMG.calamari,
    dishes: [
      { name: "Lignje s pomfritom", desc: "Panirani kolutići lignji, hrskavi izvana i sočni iznutra, uz domaći umak i kriška limuna." },
      { name: "Domaći pršut i sir", desc: "Pršut i ovčji sir iz zaleđa, s maslinama i toplim kruhom." },
      { name: "Salata s tunom i inćunima", desc: "Miješana salata, tuna, inćuni i kapari, začinjeno maslinovim uljem." },
    ],
  },
  {
    cat: "Iz peći na drva",
    image: IMG.pizzaBoard,
    dishes: [
      { name: "Pizza Margherita", desc: "Rajčica, mozzarella i svježi bosiljak, pečena brzo na visokoj vatri." },
      { name: "Pizza Torkul", desc: "Naša kućna specijalnost — pršut, gljive, rukola i pahuljice parmezana." },
      { name: "Pizza Diavola", desc: "Pikantna kulen salama, chili papričice i mozzarella, za one koji vole jače." },
      { name: "Pizza Quattro Stagioni", desc: "Šunka, gljive, artičoke i masline — četiri godišnja doba na jednom tijestu." },
    ],
  },
  {
    cat: "Tjestenine i rižoti",
    image: IMG.seafoodTop,
    dishes: [
      { name: "Špageti s plodovima mora", desc: "Kozice, dagnje i lignje u laganom umaku od rajčice i bijelog vina." },
      { name: "Lazanje", desc: "Domaće lazanje s mesnim umakom i bešamelom, zapečene do zlatne korice." },
      { name: "Crni rižot od sipe", desc: "Kremast, taman od sipine tinte, s mrvicom svježeg parmezana." },
    ],
  },
  {
    cat: "S mora i gradela",
    image: IMG.octopus,
    dishes: [
      { name: "Riba dana s gradela", desc: "Svježi ulov dana, jednostavno pripremljen na žaru, uz blitvu i krumpir." },
      { name: "Hobotnica ispod peke", desc: "Sočna hobotnica pečena polako s krumpirom, maslinovim uljem i ružmarinom." },
      { name: "Pašticada s domaćim njokima", desc: "Govedina dugo kuhana u vinu i začinima — obiteljski recept, gostima najdraži." },
    ],
  },
  {
    cat: "Za kraj",
    image: IMG.wineGlass,
    dishes: [
      { name: "Palačinke s čokoladom ili pekmezom", desc: "Domaće, tanke, poslužene tople." },
      { name: "Sladoled", desc: "Kuglice po izboru, za male i velike goste." },
      { name: "Kolač dana", desc: "Mijenja se prema raspoloženju kuhinje — pitajte konobara što je danas na redu." },
    ],
  },
];

const GALLERY = [
  { src: IMG.pizzaFlame, alt: "Pizza s tikvicama i bosiljkom u peći na drva", tall: true },
  { src: IMG.ovenFlame, alt: "Plamen u peći na drva" },
  { src: IMG.octopusWine, alt: "Hobotnica s gradela i čaša crnog vina na terasi", wide: true },
  { src: IMG.stew, alt: "Pašticada u zdjeli, uz čašu vina i svijeću" },
  { src: IMG.coastHarbor, alt: "Mali brodovi u dalmatinskoj luci, nekoliko koraka od konobe", wide: true },
  { src: IMG.wineGlass, alt: "Čaša rosea na drvenom stolu" },
  { src: IMG.seafoodSpaghetti, alt: "Špageti s plodovima mora" },
];

export default function Home() {
  return (
    <>
      <RevealInit />
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            id="heroImg"
            src={img(IMG.hero, 1900)}
            alt="Pizza se peče u vrelom plamenu peći na drva u Torkulu"
            className="h-full w-full object-cover scale-[1.14] will-change-transform"
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-vignette)" }} />
          <div className="absolute inset-0" style={{ background: "var(--hero-glow)" }} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
          <span className="text-label reveal block mb-5" style={{ color: "var(--ember)" }}>
            Pizzeria &amp; Konoba · Sveti Filip i Jakov
          </span>
          <h1
            className="font-display reveal max-w-[17ch]"
            style={{ fontSize: "var(--hero-title-size)", lineHeight: "var(--hero-title-leading)", color: "var(--background)" }}
          >
            Iz peći na drva, s <em className="italic" style={{ color: "var(--ember)" }}>osmijehom</em> za stolom.
          </h1>
          <p className="reveal mt-6 max-w-[46ch] text-[1.05rem]" style={{ color: "rgba(251,243,230,0.82)" }}>
            Obiteljska pizzeria i konoba na dva koraka od mora — velike porcije, poštene cijene i terasa koja se puni od podneva do ponoći.
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--ember)", color: "var(--background)" }}
            >
              Rezerviraj stol
            </a>
            <a
              href="#jelovnik"
              className="border-b pb-1 text-[0.9rem] transition-colors hover:text-[var(--ember)]"
              style={{ borderColor: "rgba(251,243,230,0.35)", color: "var(--background)" }}
            >
              Pogledaj jelovnik →
            </a>
          </div>
        </div>
      </section>

      {/* STATS / SOCIAL PROOF */}
      <div className="border-b" style={{ background: "var(--card)", borderColor: "var(--surface-line)" }}>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-14 px-6 py-8 text-center">
          <div>
            <div className="font-display text-4xl" data-count="4.3" data-dec="1" style={{ color: "var(--foreground)" }}>
              4.3
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>★ Google ocjena</div>
          </div>
          <div>
            <div className="font-display text-4xl" data-count="670" data-suffix="+" style={{ color: "var(--foreground)" }}>
              670+
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Recenzija</div>
          </div>
          <div>
            <div className="font-display text-4xl" style={{ color: "var(--foreground)" }}>#5</div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Od 14 restorana u mjestu</div>
          </div>
        </div>
      </div>

      {/* MANIFESTO */}
      <section id="vatra" className="py-28 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-label reveal block mb-6" style={{ color: "var(--ember)" }}>Naša peć</span>
          <p className="font-display reveal text-[clamp(1.6rem,3.2vw,2.5rem)] leading-snug" style={{ color: "var(--foreground)" }}>
            U srcu Svetog Filipa i Jakova pečemo pizzu onako kako se oduvijek peče — polako, na drva, uz šalu i{" "}
            <em className="italic" style={{ color: "var(--ember)" }}>pun tanjur za svakoga.</em>
          </p>
        </div>
      </section>

      {/* MENU */}
      <section id="jelovnik" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-16 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--ember)" }}>Jelovnik</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              S peći, mora i <em className="italic" style={{ color: "var(--ember)" }}>gradela</em>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {MENU.map((group, i) => (
              <div
                key={group.cat}
                className={`reveal grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
                style={{ background: "var(--card)" }}
              >
                <div className="min-h-[280px] md:min-h-[360px] overflow-hidden">
                  <img src={img(group.image, 900)} alt={group.cat} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center p-9 md:p-12">
                  <div className="text-label mb-4" style={{ color: "var(--ember)" }}>{group.cat}</div>
                  <div className="flex flex-col">
                    {group.dishes.map((d) => (
                      <div key={d.name} className="border-b py-4 last:border-none" style={{ borderColor: "var(--surface-line)" }}>
                        <div className="font-display text-xl" style={{ color: "var(--foreground)" }}>{d.name}</div>
                        <div className="mt-1 text-[0.92rem]" style={{ color: "var(--muted-foreground)" }}>{d.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 text-center text-sm" style={{ color: "var(--muted-foreground)" }}>
            Jelovnik prati svježinu dana — ulov mijenja ponudu ribe i plodova mora. Za veće grupe molimo najavu unaprijed.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section id="prica" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="reveal h-[420px] md:h-[540px] overflow-hidden rounded-2xl">
            <img src={img(IMG.pizzaAction, 1000)} alt="Pizza ulazi u peć na drva na drvenoj lopati" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="text-label reveal block mb-5" style={{ color: "var(--ember)" }}>Naša priča</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-6" style={{ color: "var(--foreground)" }}>
              Mjesto gdje se <em className="italic" style={{ color: "var(--ember)" }}>ne žuri</em>
            </h2>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Torkul je mala obiteljska pizzeria u srcu Svetog Filipa i Jakova — mjesto gdje se peć na drva ne gasi od podneva do ponoći. Tijesto se mijesi ručno, svaki dan iznova, a pizza izlazi vruća, hrskava i velika onoliko koliko apetit nalaže.
            </p>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Konobari se šale i kad je terasa puna, gosti se vraćaju zbog pašticade i hobotnice ispod peke, a more je udaljeno tek nekoliko koraka niz ulicu. Ovdje se ne traži rezervacija tjednima unaprijed — dovoljno je sjesti, naručiti i pustiti da večer potraje.
            </p>
            <p className="reveal font-display italic text-lg" style={{ color: "var(--ember)" }}>
              — ekipa Torkula, Sveti Filip i Jakov
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galerija" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-14 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--ember)" }}>Galerija</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              Trenuci uz <em className="italic" style={{ color: "var(--ember)" }}>vatru i more</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className={`reveal overflow-hidden rounded-xl ${g.tall ? "row-span-2 h-[220px] md:h-full" : "h-[220px]"} ${
                  g.wide ? "col-span-2" : ""
                }`}
              >
                <img src={img(g.src, 700)} alt={g.alt} className="h-full w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="kontakt" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 overflow-hidden rounded-2xl md:grid-cols-2" style={{ background: "var(--background)" }}>
          <div className="p-9 md:p-14">
            <span className="text-label reveal block mb-5" style={{ color: "var(--ember)" }}>Posjetite nas</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-8" style={{ color: "var(--foreground)" }}>
              Tu smo, uz <em className="italic" style={{ color: "var(--ember)" }}>more</em>
            </h2>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--ember)" }}>Adresa</div>
              <p style={{ color: "var(--muted-foreground)" }}>Ul. kralja Petra Krešimira IV 130, 23207 Sveti Filip i Jakov</p>
            </div>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--ember)" }}>Rezervacije</div>
              <p style={{ color: "var(--muted-foreground)" }}>Stol rezervirajte pozivom ili mailom.</p>
              <a href="tel:+385913323811" className="font-display text-2xl mt-1 inline-block" style={{ color: "var(--ember)" }}>
                +385 91 332 3811
              </a>
              <p className="mt-1">
                <a href="mailto:torkulfj@gmail.com" className="hover:text-[var(--ember)]" style={{ color: "var(--muted-foreground)" }}>
                  torkulfj@gmail.com
                </a>
              </p>
            </div>

            <div className="reveal mb-8">
              <div className="text-label mb-2" style={{ color: "var(--ember)" }}>Radno vrijeme</div>
              <div className="flex justify-between max-w-[280px] border-b border-dotted py-1.5" style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}>
                <span>Svaki dan</span><span>12:00 – 23:00</span>
              </div>
            </div>

            <a
              href="tel:+385913323811"
              className="reveal inline-block rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium"
              style={{ background: "var(--ember)", color: "var(--background)" }}
            >
              Rezerviraj stol
            </a>
          </div>
          <div className="reveal min-h-[360px]">
            <iframe
              src="https://maps.google.com/maps?q=Torkul+Sveti+Filip+i+Jakov&output=embed"
              loading="lazy"
              title="Torkul — Sveti Filip i Jakov"
              className="h-full w-full min-h-[360px] border-0"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-9" style={{ background: "var(--ember-dim, #4A2013)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-3">
            <div>
              <div className="font-display text-2xl mb-4" style={{ color: "var(--background)" }}>
                Tork<span style={{ color: "var(--ember)" }}>u</span>l
              </div>
              <p className="max-w-[34ch] text-sm" style={{ color: "rgba(251,243,230,0.7)" }}>
                Obiteljska pizzeria i konoba u Svetom Filipu i Jakovu. Pizza iz peći na drva, plodovi mora i terasa na dva koraka od mora.
              </p>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--ember)" }}>Izbornik</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "rgba(251,243,230,0.7)" }}>
                <a href="#jelovnik" className="hover:text-[var(--ember)]">Jelovnik</a>
                <a href="#prica" className="hover:text-[var(--ember)]">Naša priča</a>
                <a href="#galerija" className="hover:text-[var(--ember)]">Galerija</a>
                <a href="#kontakt" className="hover:text-[var(--ember)]">Kontakt</a>
              </div>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--ember)" }}>Kontakt</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "rgba(251,243,230,0.7)" }}>
                <a href="tel:+385913323811" className="font-display text-lg" style={{ color: "var(--background)" }}>+385 91 332 3811</a>
                <a href="mailto:torkulfj@gmail.com" className="hover:text-[var(--ember)]">torkulfj@gmail.com</a>
                <p>Ul. kralja Petra Krešimira IV 130, Sveti Filip i Jakov</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between gap-3 border-t pt-6 text-xs"
            style={{ borderColor: "rgba(251,243,230,0.16)", color: "rgba(251,243,230,0.6)" }}
          >
            <span>© 2026 Torkul · Sveti Filip i Jakov</span>
            <span>4.3 ★ Google · 670+ recenzija</span>
          </div>
        </div>
      </footer>
    </>
  );
}
