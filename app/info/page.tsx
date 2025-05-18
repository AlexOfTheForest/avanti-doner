import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Code, Mail } from "lucide-react"

export const metadata = {
  title: "Info - Avanti Restaurant Leer",
  description: "Informationen über das Avanti Restaurant in Leer und den Website-Entwickler Alexej Sz.",
  openGraph: {
    title: "Info - Avanti Restaurant Leer",
    description: "Informationen über das Avanti Restaurant in Leer und den Website-Entwickler Alexej Sz.",
  },
}

export default function Info() {
  return (
    <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.5rem 1rem",
            backgroundColor: "#333",
            color: "white",
            borderRadius: "0.375rem",
            textDecoration: "none",
            marginBottom: "2rem",
          }}
        >
          ← Zurück zur Startseite
        </Link>

        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", marginBottom: "1rem" }}>
            <div style={{ width: "2rem", height: "0.25rem", backgroundColor: "#22c55e" }}></div>
            <div style={{ width: "2rem", height: "0.25rem", backgroundColor: "white" }}></div>
            <div style={{ width: "2rem", height: "0.25rem", backgroundColor: "#ef4444" }}></div>
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white" }}>Info</h1>
        </div>

        <div
          style={{
            marginBottom: "2rem",
            backgroundColor: "#333",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            borderLeft: "4px solid #ef4444",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem", color: "white" }}>
            Website-Entwickler
          </h2>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
            {/* Alex Profilbild */}
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "9999px",
                backgroundColor: "#222",
                overflow: "hidden",
                flexShrink: 0,
                border: "3px solid #ef4444",
              }}
            >
              <Image
                src="/images/alexej-profile.jpeg"
                alt="Alexej Sz. - Web-Entwickler aus Leer"
                width={120}
                height={120}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1rem", color: "white" }}>
                Alexej Sz.
              </h3>

              <div style={{ display: "flex", alignItems: "center", marginBottom: "0.75rem" }}>
                <MapPin size={18} style={{ marginRight: "0.75rem", color: "#ef4444" }} aria-hidden="true" />
                <span style={{ color: "white" }}>Aus Leer</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", marginBottom: "0.75rem" }}>
                <Phone size={18} style={{ marginRight: "0.75rem", color: "#22c55e" }} aria-hidden="true" />
                <span style={{ color: "white" }}>+49 1520 6280878</span>
              </div>


              <div style={{ display: "flex", alignItems: "center" }}>
                <Code size={18} style={{ marginRight: "0.75rem", color: "#a855f7" }} aria-hidden="true" />
                <span style={{ color: "white" }}>Entwickler</span>
              </div>
            </div>
          </div>

          <p
            style={{
              color: "white",
              fontSize: "1.125rem",
              lineHeight: "1.75",
              marginTop: "1.5rem",
              borderTop: "1px solid #444",
              paddingTop: "1.5rem",
            }}
          >
            Diese Website wurde mit Next.js erstellt, einem modernen React-Framework, das Geschwindigkeit und
            Benutzerfreundlichkeit in den Vordergrund stellt. Das Design wurde speziell für Avanti Restaurant
            entwickelt, um die Atmosphäre und Qualität des Restaurants widerzuspiegeln.
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "white",
              fontSize: "0.875rem",
              display: "inline-block",
              padding: "0.5rem 1rem",
              backgroundColor: "#333",
              borderRadius: "9999px",
            }}
          >
            © {new Date().getFullYear()} - Alle Rechte vorbehalten
          </p>
        </div>
      </div>
    </div>
  )
}
