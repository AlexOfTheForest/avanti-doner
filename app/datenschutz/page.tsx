import Link from "next/link"

export default function Datenschutz() {
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
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white" }}>Datenschutzerklärung</h1>
        </div>

        <div
          style={{
            marginBottom: "2rem",
            backgroundColor: "#333",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            borderLeft: "4px solid #22c55e",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "white" }}>
            1. Datenschutz auf einen Blick
          </h2>
          <h3 style={{ fontSize: "1.25rem", fontWeight: "500", marginBottom: "0.5rem", color: "white" }}>
            Allgemeine Hinweise
          </h3>
          <p style={{ color: "white", fontSize: "1.125rem", lineHeight: "1.75" }}>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
            identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter
            diesem Text aufgeführten Datenschutzerklärung.
          </p>
        </div>

        <div
          style={{
            marginBottom: "2rem",
            backgroundColor: "#333",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            borderLeft: "4px solid white",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "white" }}>
            2. Verantwortlicher
          </h2>
          <p style={{ color: "white", fontSize: "1.125rem", lineHeight: "1.75" }}>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p style={{ color: "white", fontSize: "1.125rem", lineHeight: "1.75", marginTop: "1rem" }}>
            Avanti Restaurant
            <br />
            Inh. A. Kalmaz
            <br />
            Bremer Straße 41
            <br />
            26789 Leer
          </p>
          <p style={{ color: "white", fontSize: "1.125rem", lineHeight: "1.75", marginTop: "1rem" }}>
            Telefon: 0491 - 97 68 20 00
            <br />
            E-Mail: kalmazahmet@gmail.com
          </p>
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
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "white" }}>
            3. Datenerfassung auf unserer Website
          </h2>
          <h3 style={{ fontSize: "1.25rem", fontWeight: "500", marginBottom: "0.5rem", color: "white" }}>Cookies</h3>
          <p style={{ color: "white", fontSize: "1.125rem", lineHeight: "1.75" }}>
            Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen
            Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und
            sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr
            Browser speichert.
          </p>
          <p style={{ color: "white", fontSize: "1.125rem", lineHeight: "1.75", marginTop: "1rem" }}>
            Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres
            Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen.
            Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
          </p>
        </div>

        <div
          style={{
            marginBottom: "2rem",
            backgroundColor: "#333",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            borderLeft: "4px solid #22c55e",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "white" }}>
            4. Rechte der betroffenen Person
          </h2>
          <p style={{ color: "white", fontSize: "1.125rem", lineHeight: "1.75" }}>Sie haben das Recht:</p>
          <ul style={{ listStyleType: "disc", paddingLeft: "2rem", marginTop: "0.5rem" }}>
            <li style={{ color: "white", fontSize: "1.125rem", lineHeight: "1.75" }}>
              gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;
            </li>
            <li style={{ color: "white", fontSize: "1.125rem", lineHeight: "1.75" }}>
              gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns
              gespeicherten personenbezogenen Daten zu verlangen;
            </li>
            <li style={{ color: "white", fontSize: "1.125rem", lineHeight: "1.75" }}>
              gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;
            </li>
          </ul>
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
            Stand: März 2025
          </p>
        </div>
      </div>
    </div>
  )
}
