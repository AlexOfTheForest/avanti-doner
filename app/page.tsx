import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail, ChevronRight, Calendar, Facebook, Instagram } from "lucide-react"
import { ReviewCarousel } from "@/components/review-carousel"
import { Logo } from "@/components/logo"
import { MenuCategories } from "@/components/menu-categories"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ScrollObserver } from "@/components/scroll-observer"
import Script from "next/script"

export const metadata = {
  title: "Pizzeria Avanti Leer - Pizza, Döner & türkische Spezialitäten",
  description:
    "Genießen Sie authentische türkische und italienische Küche im Avanti Restaurant in Leer. Pizza, Döner, Pasta und mehr - auch mit Lieferservice.",
  keywords: "Avanti Restaurant, Pizza Leer, Döner Leer, Lieferservice, türkische Küche, italienische Küche",
}

export default function Home() {
  return (
    <>
      <Script id="restaurant-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Avanti Restaurant",
            "image": "https://avanti-restaurant-leer.de/logo.png",
            "url": "https://avanti-restaurant-leer.de",
            "telephone": "049197682000",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Bremer Straße 41",
              "addressLocality": "Leer",
              "postalCode": "26789",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 53.2394,
              "longitude": 7.4546
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
                "opens": "11:30",
                "closes": "22:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Friday",
                "opens": "11:00",
                "closes": "22:30"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "12:00",
                "closes": "22:30"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "12:00",
                "closes": "22:00"
              }
            ],
            "servesCuisine": ["Turkish", "Italian"],
            "priceRange": "€€",
            "menu": "https://avanti-restaurant-leer.de/#menu"
          }
        `}
      </Script>

      <div className="flex min-h-screen flex-col bg-black text-white">
        {/* SmoothScroll Komponente für sanfte Scroll-Animationen */}
        <SmoothScroll />

        {/* ScrollObserver für Animations- und Navigationseffekte */}
        <ScrollObserver />

        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-zinc-800 bg-black/95 backdrop-blur">
          <div className="container flex h-24 items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <Logo />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm font-medium uppercase hover:text-green-500 transition-colors">
                Home
              </a>
              <a href="#specials" className="text-sm font-medium uppercase hover:text-green-500 transition-colors">
                Angebote
              </a>
              <a href="#menu" className="text-sm font-medium uppercase hover:text-green-500 transition-colors">
                Speisekarte
              </a>
              <a href="#contact" className="text-sm font-medium uppercase hover:text-green-500 transition-colors">
                Kontakt
              </a>
            </nav>
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:049197682000" className="text-sm hover:text-green-500 transition-colors">
                0491 - 97 68 20 00
              </a>
            </div>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section id="home" className="relative">
            <div className="h-[600px] w-full relative">
              <div className="absolute inset-0 bg-black/40 z-10" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
              <Image
                src="/images/avanti-storefront.png"
                alt="Pizzeria Avanti Außenansicht bei Nacht"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="container text-center text-white">
                  <div className="inline-flex items-center mb-6">
                    <div className="w-12 h-1 bg-green-600"></div>
                    <div className="w-12 h-1 bg-white"></div>
                    <div className="w-12 h-1 bg-red-600"></div>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 flex flex-col items-center">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className="text-white">Pizzeria</span>
                      <div
                        className="relative w-40 h-20 md:w-56 md:h-28 flex items-end"
                        style={{ marginBottom: "-8px" }}
                      >
                        <Image src="/images/avanti-text-logo.png" alt="Avanti Logo" fill className="object-contain" />
                      </div>
                    </div>
                  </h1>
                  <p className="text-xl md:text-2xl mb-8">Pizza • Döner • Pasta • Türkische Spezialitäten</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a href="tel:049197682000">
                      <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                        Jetzt bestellen <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href="#menu">
                      <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                        Speisekarte
                      </Button>
                    </a>
                  </div>
                  <div className="mt-8 inline-block rounded-full bg-red-600/20 px-4 py-2 text-sm">
                    Lieferung ab 20 € frei Haus • Umgebung auf Anfrage!
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Google Reviews Section */}
          <section className="py-12 bg-zinc-800">
            <div className="container">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Was unsere Kunden sagen</h2>
                <div className="flex items-center justify-center mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-lg font-bold">4.8/5</span>
                </div>
                <p className="text-zinc-300 mb-2">Basierend auf 279 Google-Bewertungen</p>
                <a
                  href="https://g.co/kgs/PwwuPLD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-500 hover:text-green-400"
                >
                  Alle Bewertungen ansehen
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="max-w-md mx-auto">
                <ReviewCarousel />
              </div>
            </div>
          </section>

          {/* Special Offers Section */}
          <section id="specials" className="py-16 bg-zinc-900">
            <div className="container">
              <div className="text-center mb-12">
                <div className="inline-flex items-center mb-4">
                  <div className="w-8 h-1 bg-green-600"></div>
                  <div className="w-8 h-1 bg-white"></div>
                  <div className="w-8 h-1 bg-red-600"></div>
                </div>
                <h2 className="text-3xl font-bold mb-4">Unsere Wochenangebote</h2>
                <p className="text-white max-w-2xl mx-auto">
                  Besuchen Sie uns an unseren Spezial-Tagen und profitieren Sie von besonderen Angeboten
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-zinc-800 rounded-xl p-6 border-l-4 border-green-600 relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-green-600/10"></div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-green-600 rounded-full p-3">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Dienstag: "Nudeltag"</h3>
                  </div>
                  <p className="text-zinc-300 mb-4">Alle Nudelgerichte 1 € günstiger!</p>
                  <p className="text-zinc-300 text-sm">
                    Genießen Sie unsere leckeren Pasta-Kreationen zu einem besonders günstigen Preis.
                  </p>
                </div>
                <div className="bg-zinc-800 rounded-xl p-6 border-l-4 border-red-600 relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-red-600/10"></div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-red-600 rounded-full p-3">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Mittwoch: "Pizzatag"</h3>
                  </div>
                  <p className="text-zinc-300 mb-4">Jede Pizza (28 cm) 1 € günstiger!</p>
                  <p className="text-zinc-300 text-sm">
                    Probieren Sie unsere köstlichen Pizzen mit frischen Zutaten zu einem Sonderpreis.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Menu Categories Section */}
          <section id="menu" className="py-16">
            <div className="container">
              <div className="text-center mb-12">
                <div className="inline-flex items-center mb-4">
                  <div className="w-8 h-1 bg-green-600"></div>
                  <div className="w-8 h-1 bg-white"></div>
                  <div className="w-8 h-1 bg-red-600"></div>
                </div>
                <h2 className="text-3xl font-bold mb-4">Unsere Speisekarte</h2>
                <p className="text-white max-w-2xl mx-auto">
                  Entdecken Sie unsere vielfältige Auswahl an Gerichten - von Pizza und Döner bis hin zu türkischen
                  Spezialitäten
                </p>
              </div>
              <MenuCategories />
            </div>
          </section>

          {/* Popular Dishes Section */}
          <section className="py-16 bg-zinc-900">
            <div className="container">
              <div className="text-center mb-12">
                <div className="inline-flex items-center mb-4">
                  <div className="w-8 h-1 bg-green-600"></div>
                  <div className="w-8 h-1 bg-white"></div>
                  <div className="w-8 h-1 bg-red-600"></div>
                </div>
                <h2 className="text-3xl font-bold mb-4">Beliebte Gerichte</h2>
                <p className="text-white max-w-2xl mx-auto">Unsere Kunden lieben diese Gerichte besonders</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "24. Kebab Teller",
                    price: "10,00 €",
                    description: "Mit Hackfleisch vom Drehspieß, Pommes Frites, gemischter Salat und Tzatziki",
                    color: "border-green-600",
                    image: "/images/tellergerichte.png",
                  },
                  {
                    name: "31. Pizza Salami",
                    price: "6,00 € / 8,00 € / 17,50 €",
                    description: "Mit Tomatensauce, Käse, Salami und Oregano",
                    color: "border-white",
                    image: "/images/pizza.png",
                  },
                  {
                    name: "85. Kebab Rollo",
                    price: "9,50 €",
                    description:
                      "Mit Hackfleisch vom Drehspieß, Käse, Eisbergsalat, Gurken, Tomaten, Zwiebeln und Tomatensauce",
                    color: "border-red-600",
                    image: "/images/rollo.png",
                  },
                  {
                    name: "105. Kebab überbacken",
                    price: "9,00 €",
                    description: "Mit Hackfleisch vom Drehspieß, Champignons, Sauce Hollandaise und 1 Fladenbrot",
                    color: "border-green-600",
                    image: "/images/aufläufe.png",
                  },
                  {
                    name: "43. Manhattan",
                    price: "7,00 € / 9,50 € / 22,00 €",
                    description:
                      "mit Tomatensauce, Käse, Hackfleisch vom Drehspieß, Sauce Hollandaise, Chesterkäse und Oregano",
                    color: "border-white",
                    image: "/images/pizzaspecial.png",
                  },
                  {
                    name: "140. Rigatoni Napoli",
                    price: "9,00 €",
                    description: "Mit Tomatensauce",
                    color: "border-red-600",
                    image: "/images/nudelgerichte.png",
                  },
                ].map((item, index) => (
                  <Card key={index} className={`overflow-hidden bg-zinc-800 border-t-4 ${item.color}`}>
                    <div className="h-48 relative bg-zinc-700">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover opacity-70"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg px-4 text-center">{item.name}</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-bold text-white">{item.name}</h3>
                        <span className="font-bold text-red-500">{item.price}</span>
                      </div>
                      <p className="text-zinc-300">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16">
            <div className="container">
              <div className="text-center mb-12">
                <div className="inline-flex items-center mb-4">
                  <div className="w-8 h-1 bg-green-600"></div>
                  <div className="w-8 h-1 bg-white"></div>
                  <div className="w-8 h-1 bg-red-600"></div>
                </div>
                <h2 className="text-3xl font-bold mb-4">Kontakt & Öffnungszeiten</h2>
                <p className="text-white max-w-2xl mx-auto">Besuchen Sie uns oder bestellen Sie bequem nach Hause</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600/20">
                      <MapPin className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Adresse</h3>
                      <p className="text-zinc-300">
                        Bremer Straße 41
                        <br />
                        26789 Leer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Telefon</h3>
                      <p className="text-zinc-300">0491 - 97 68 20 00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600/20">
                      <Clock className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Öffnungszeiten</h3>
                      <div className="grid grid-cols-2 gap-2 text-zinc-300">
                        <div>Montag:</div>
                        <div>Geschlossen</div>
                        <div>Di. - Do.:</div>
                        <div>11:30 - 22:00 Uhr</div>
                        <div>Freitag:</div>
                        <div>11:00 - 22:30 Uhr</div>
                        <div>Samstag:</div>
                        <div>12:00 - 22:30 Uhr</div>
                        <div>Sonntag:</div>
                        <div>12:00 - 22:00 Uhr</div>
                      </div>
                      <p className="mt-2 text-sm text-red-500">Auch an Feiertagen geöffnet!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600/20">
                      <Mail className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Lieferzeiten</h3>
                      <p className="text-zinc-300">Letzte Lieferannahme jeweils 30 Minuten vor Ladenschluss</p>
                    </div>
                  </div>
                </div>
                <div className="h-[400px] relative rounded-xl overflow-hidden">
                  <a
                    href="https://maps.google.com/maps?q=Avanti+Leer+Bremer+Straße+41"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <Image
                      src="/map-location.png"
                      alt="Standort von Avanti Restaurant in Leer"
                      fill
                      className="object-cover"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-zinc-800 py-8 bg-zinc-900">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center">
                <div className="relative w-32 h-16">
                  <Image src="/images/avanti-logo-oval.png" alt="Avanti Logo" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end gap-3">
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.instagram.com/pizzeria_avanti_leer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-red-500 transition-colors"
                    aria-label="Folge uns auf Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/15Vg3qvr5b/?mibextid=wwXlfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-blue-500 transition-colors"
                    aria-label="Folge uns auf Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
                <div className="text-center md:text-right text-sm text-zinc-300">
                  <p>© {new Date().getFullYear()} Avanti Restaurant. Alle Rechte vorbehalten.</p>
                  <p>Bremer Straße 41, 26789 Leer</p>
                  <div className="mt-2 flex items-center justify-center md:justify-end gap-4">
                    <Link href="/impressum" className="text-zinc-400 hover:text-white transition-colors">
                      Impressum
                    </Link>
                    <Link href="/datenschutz" className="text-zinc-400 hover:text-white transition-colors">
                      Datenschutz
                    </Link>
                    <Link href="/info" className="text-zinc-400 hover:text-white transition-colors">
                      Info
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
