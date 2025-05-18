import Link from "next/link"

export default function Impressum() {
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
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white" }}>Impressum</h1>
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
            Angaben gemäß § 5 TMG
          </h2>
          <p style={{ color: "white", fontSize: "1.125rem", lineHeight: "1.75" }}>
            Avanti Restaurant
            <br />
            Inh. A. Kalmaz
            <br />
            Bremer Straße 41
            <br />
            26789 Leer
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
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "white" }}>Kontakt</h2>
          <p style={{ color: "white", fontSize: "1.125rem", lineHeight: "1.75" }}>
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
            Umsatzsteuer-ID
          </h2>
          <p style={{ color: "white", fontSize: "1.125rem", lineHeight: "1.75" }}>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            60/121/05685
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
            Haftung für Inhalte
          </h2>
          <p style={{ color: "white", fontSize: "1.125rem", lineHeight: "1.75" }}>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p style={{ color: "white", fontSize: "1.125rem", lineHeight: "1.75", marginTop: "1rem" }}>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
            bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
            konkreten Rechtsverletzung möglich.
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
            Stand: März 2025
          </p>
        </div>
      </div>
    </div>
  )
}
