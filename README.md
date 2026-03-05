# Bautagebuch Pro

Einfache, lokal laufende Web-App für ein digitales Bautagebuch (ohne Backend/Installation).

## Funktionen

- Anmeldung + Hauptmenü mit Rollen (`Admin`, `Bauleitung`, `Mitarbeiter`)
- Mehrere Baustellen anlegen und per Auswahlfeld aktiv umschalten
- Pflichtschritt: aktive Baustelle speichern, danach werden die Module für diese Baustelle freigeschaltet
- Projektstammdaten (Projektname, Bauleitung, Projekt-Nr.)
- Mehrere Tagesberichte mit Datum
- Wetter und Personal
- Mitarbeiter nach Unternehmen
- Freitext für Arbeiten, Hindernisse und nächste Schritte (formeller Berichtsstil)
- Offene Punkte als Checkliste
- Fotoanhang direkt im Bautagebuch (einfacher Berichts-Upload)
- Eigenes Modul `Fotoordner` mit Ordnern (z. B. `2. OG Wohnung 4`) und Bild-Upload
- Kamera-Button für direkten Handy-Fotoimport (Bautagebuch + Fotoordner)
- Digitales Unterschriftsfeld (Finger/Stift am Handy)
- Interne Notizen pro Bericht (werden nicht gedruckt)
- JSON-Export aller Daten
- Druck/PDF-Export über Browser
- Optionaler Online-Speicher via Supabase (Cloud verbinden, laden, synchronisieren)

## Start

1. Datei `index.html` im Browser öffnen.
2. Konto erstellen oder anmelden.
3. Im Hauptmenü Baustelle auswählen oder über `Neue Baustelle` eine weitere anlegen.
4. Aktive Baustelle speichern.
5. Danach Module nutzen:
   - `Bautagebuch Pro` für Tagesberichte inkl. einfachem Fotoanhang
   - `Fotoordner` für strukturierte Bereichs-/Wohnungsfotos

## Hinweis

Die Daten werden lokal im Browser (`localStorage`) gespeichert.
Auch Benutzerkonten/Anmeldung sind lokal und nur für diese App auf diesem Gerät gedacht.
`Mitarbeiter` ist eingeschränkt (keine Stammdaten-Änderung, kein Löschen, kein JSON-Export).

## Online-Speicher (Supabase)

1. In Supabase eine Tabelle `app_state` anlegen:

```sql
create table if not exists public.app_state (
  workspace_key text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
```

2. Für den schnellen Start: RLS auf dieser Tabelle deaktivieren.
3. In der App im Hauptmenü unter `Online-Speicher (Supabase)` eintragen:
   - Supabase URL
   - Supabase Anon Key
   - Cloud-Projekt-Schlüssel (gleich auf allen Geräten)
4. `Cloud verbinden` klicken und danach `Cloud laden` oder `Jetzt synchronisieren`.

### Ohne jedes Mal URL/Key eingeben

Optional kannst du die Werte einmal in `cloud-config.js` eintragen:

```js
window.BAUTAGEBUCH_CLOUD_CONFIG = {
  supabaseUrl: "https://xxxx.supabase.co",
  supabaseAnonKey: "eyJ...",
  workspaceKey: "bau-team-nord-2026",
  lockCredentials: true,
  autoConnect: true,
};
```

Danach neu deployen:
- Mit `lockCredentials: true` werden die Eingabefelder ausgeblendet.
- Mit `autoConnect: true` verbindet sich die App beim Start automatisch.

## Handy-Nutzung (wie Messenger-Flow)

1. Starte lokal einen kleinen Webserver:

```bash
cd "/Users/alexandrarohrich/Documents/New project"
python3 -m http.server 8080
```

2. Öffne auf dem Handy im gleichen WLAN: `http://<DEINE-PC-IP>:8080`
3. Nutze `Kamera (Handy)`, `Digitale Unterschrift` und die internen Notizen direkt in der App.
