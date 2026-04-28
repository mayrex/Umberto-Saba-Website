# 📚 Sito Web: Umberto Saba — Documentazione Completa

> Progetto didattico dedicato alla vita, alle opere e alla poetica di Umberto Saba, con integrazione di intelligenza artificiale interattiva.

---

## Indice

1. [Panoramica del Progetto](#panoramica-del-progetto)
2. [Lato Letterario — Chi è Umberto Saba](#lato-letterario--chi-è-umberto-saba)
3. [Contenuto delle Pagine](#contenuto-delle-pagine)
4. [Lato Informatico — Architettura Tecnica](#lato-informatico--architettura-tecnica)
5. [Struttura dei File](#struttura-dei-file)
6. [Design System](#design-system)
7. [Funzionalità Interattive](#funzionalità-interattive)
8. [Avatar AI (Convai)](#avatar-ai-convai)
9. [Responsive Design](#responsive-design)
10. [Avvio Locale](#avvio-locale)
11. [Deploy su Altervista](#deploy-su-altervista)

---

## Panoramica del Progetto

Questo sito è un tributo didattico completo ad **Umberto Saba** (Trieste, 1883 — Gorizia, 1957), uno dei più importanti poeti italiani del Novecento. È stato progettato con tre obiettivi:

- **Informare** con contenuti accurati su vita, opere, poetica, temi e importanza letteraria
- **Coinvolgere** attraverso interfacce interattive (mappa della vita, avatar AI)
- **Stupire visivamente** con un design premium in stile *glassmorphism* scuro

Il progetto è interamente **statico** (HTML + CSS + JavaScript Vanilla), senza framework, senza Node.js, senza database — compatibile con qualsiasi hosting gratuito come Altervista o GitHub Pages.

---

## Lato Letterario — Chi è Umberto Saba

### Biografia Essenziale

Umberto Saba, pseudonimo di **Umberto Poli**, nacque a Trieste nel **1883** da una madre ebrea ortodossa (Felicita) e da un padre che abbandonò la famiglia prima ancora della nascita del figlio. Questo trauma originario — la scissione tra la **«madre mesta»** biologica e la **«madre lieta»** (la balia slovena Peppa Sabaz, da cui prese il nome) — attraversa e informa tutta la sua produzione poetica.

Cresciuto come autodidatta appassionato di Leopardi e Petrarca, si stabilì definitivamente a Trieste dove gestì per decenni una celebre **libreria antiquaria** e sposò Carolina Woelfler (Lina). Tormentato da una persistente nevrosi, fu tra i primissimi intellettuali italiani ad intraprendere la **psicoanalisi freudiana**.

Durante la Seconda Guerra Mondiale, a causa delle **leggi razziali** fasciste, fu costretto alla fuga: si nascose successivamente a Parigi, Roma e Firenze grazie all'aiuto di amici come Ungaretti, Montale e Carlo Levi. Si spense silenziosamente a **Gorizia nel 1957**.

### Le Opere Principali

| Opera | Anno | Descrizione |
|-------|------|-------------|
| **Il Canzoniere** | 1921–1961 | Opera monumentale, più volte riveduta. Autobiografia psicologica in versi che segue l'intera vita del poeta. |
| **Scorciatoie e raccontini** | 1946 | Aforismi pungenti su politica, psicoanalisi e società. |
| **Storia e cronistoria del Canzoniere** | 1948 | Saba commenta in terza persona le proprie poesie, offrendo una guida critica unica. |
| **Ernesto** | 1975 (postumo) | Romanzo incompiuto in dialetto triestino sul risveglio sessuale di un adolescente. |

### La Poetica: La «Poesia Onesta»

Saba si oppone radicalmente alle correnti dominanti del suo tempo (D'Annunzio, Futurismo, Ermetismo) scegliendo la strada della **«Poesia Onesta»**: dire la verità in maniera piana e chiara, senza artifici retorici, usando le parole comuni di tutti i giorni. Prende come modello etico Alessandro Manzoni e recupera la tradizione metrica italiana (endecasillabo, settenario, rime).

Paradossalmente, questa apparente semplicità nasconde una profondità enorme: Pier Paolo Pasolini lo definì **«il più difficile dei poeti contemporanei»**. La psicoanalisi è il suo strumento privilegiato di indagine interiore; la poesia ha per lui una **funzione terapeutica e civile**.

### I Temi Principali

- **L'io frammentato**: conflitto irrisolto tra le due madri (mesta/lieta), fonte di nevrosi e motore creativo
- **La «Calda Vita»**: salvezza interiore nell'immergersi nella folla degli umili e dimenticati
- **Il dolore universale**: il belato di una capra diventa emblema del dolore cosmico di tutti gli esseri
- **La simbologia animale**: gli animali custodiscono le virtù pure che l'uomo ha smarrito
- **Trieste come personaggio**: la città dalla «scontrosa grazia» è specchio dell'anima del poeta

### Trieste nella Poesia

Trieste non è un semplice sfondo nei versi di Saba: è un **secondo protagonista**. La descrive come dotata di una «scontrosa grazia», simile a un ragazzaccio dagli occhi azzurri. La *Città vecchia* — con le sue bettole, i marinai, le prostitute, i vecchi — è il luogo dove il pensiero del poeta «si fa più puro dove più turpe è la via» e dove riconosce la presenza del Divino negli ultimi.

---

## Contenuto delle Pagine

| Pagina | Tema | Tipo di Layout |
|--------|------|---------------|
| `index.html` | Homepage introduttiva | Hero fullscreen + 2 card 3D |
| `vita.html` | Biografia interattiva | Mappa a costellazione con pin cliccabili |
| `opere.html` | Le opere letterarie | Griglia 4 card fluttuanti 3D |
| `poetica.html` | Filosofia poetica | Sezioni vetrate + griglia 4 card |
| `temi.html` | Temi principali | Griglia 4 card fluttuanti 3D |
| `trieste.html` | Trieste nella poesia | Foto hero + sezione vetrata + blockquote |
| `importanza.html` | Importanza storica | Sezione vetrata + griglia 4 card |
| `poesie.html` | Testi poetici | Layout testo con poesie annotate |
| `avatar.html` | Simulatore AI | Layout split-screen glassmorphism |

---

## Lato Informatico — Architettura Tecnica

### Stack Tecnologico

```
HTML5 + CSS3 Vanilla + JavaScript Vanilla
Nessun framework, nessuna dipendenza NPM
```

| Tecnologia | Utilizzo |
|------------|----------|
| **HTML5 semantico** | Struttura delle pagine, SEO, accessibilità |
| **CSS3 Vanilla** | Design system completo, animazioni, responsive |
| **JavaScript Vanilla** | Interattività: mappa vita, hamburger menu, avatar |
| **Google Fonts** | Inter (testo) + Playfair Display (titoli) |
| **SVG inline** | Linee della costellazione sulla mappa vita |
| **Convai (link pubblico)** | Simulatore AI del poeta via popup |

### Caratteristiche Architetturali

- **Zero dipendenze esterne** (no jQuery, no React, no npm)
- **CSS condiviso** tramite un unico `style.css` con design system centralizzato
- **Script modulari**: `vita.js` (mappa), `avatar.js` (AI), `nav.js` (hamburger)
- **Compatibile con hosting statici**: Altervista, GitHub Pages, Netlify, Vercel
- **SEO-ready**: title tag, meta description, semantic HTML su ogni pagina

---

## Struttura dei File

```
Umberto Saba Website/
│
├── index.html              # Homepage
├── vita.html               # Mappa interattiva della vita
├── opere.html              # Le opere letterarie
├── poetica.html            # La poetica sabiana
├── temi.html               # I temi principali
├── trieste.html            # Trieste nella poesia
├── importanza.html         # Importanza letteraria
├── poesie.html             # Testi delle poesie
├── avatar.html             # Simulatore AI (Convai)
│
├── style.css               # Design system completo (unico foglio)
├── vita.js                 # Logica mappa interattiva + DB biografico
├── avatar.js               # Link pubblico Convai + apertura popup
├── nav.js                  # Hamburger menu mobile (iniettato dinamicamente)
│
├── readme.md               # Questa documentazione
│
├── public/                 # Asset statici
│   ├── sabaIcon.png        # Logo circolare del poeta (favicon + header)
│   ├── trieste_cityscape.png # Foto Trieste generata con AI
│   ├── Immagine sfondo.png # Sfondo homepage
│   └── ...                 # Altre immagini delle sezioni
│
└── Saba/                   # Fonti letterarie originali (PDF + testo)
    ├── saba.pdf            # Fonte principale
    ├── la capra.pdf        # Analisi della poesia La capra
    ├── a mia moglie.pdf    # Analisi di A mia moglie
    ├── città vecchia.pdf   # Analisi di Città vecchia
    ├── trieste.pdf         # Analisi di Trieste
    ├── la poesia onesta.pdf # Appunti sulla poetica
    └── extracted_text.txt  # Testo estratto da tutti i PDF
```

---

## Design System

### Palette Colori

```css
--bg-color:    #0b0f19   /* Blu notte profondo — sfondo principale */
--accent:      #cb9b51   /* Oro antico — colore di accento primario */
--accent-hover:#e5b973   /* Oro più chiaro — hover interazioni */
--text-main:   #e2e8f0   /* Bianco caldo — testo principale */
--text-muted:  #94a3b8   /* Grigio cenere — testo secondario */
--glass-border:rgba(255,255,255,0.08) /* Bordo vetro */
```

### Tipografia

- **Titoli**: `Playfair Display` (serif, Google Fonts) — eleganza letteraria
- **Testo**: `Inter` (sans-serif, Google Fonts) — leggibilità moderna

### Componenti CSS Riutilizzabili

| Classe | Descrizione |
|--------|-------------|
| `.floating-3d-card` | Card con effetto hover tridimensionale (translateY + rotateX/Y) |
| `.grid-3d-layout` | CSS Grid con `perspective: 1000px` per profondità 3D |
| `.hero-glass-pedestal` | Pannello vetrato satinato (glassmorphism) |
| `.blockquote-glow` | Citazione con bordo sinistro dorato e grande virgoletta decorativa |
| `.map-pin` | Punto interattivo della mappa con animazione ping radar |
| `.animate-fade-in` | Fade-in con `animation-delay` scalare per effetto a cascata |

### Animazioni

| Nome | Effetto | Usata in |
|------|---------|---------|
| `drawLine` | Disegna progressivamente le linee SVG | Mappa vita |
| `ping` | Pulsazione radar sul pin attivo | Mappa vita |
| `pulseGlow` | Battito luminoso verde | Dot stato avatar |
| `slowPan` | Pan lento sull'immagine sfondo | Homepage |
| `floatAvatar` | Oscillazione verticale | Sezione avatar |

---

## Funzionalità Interattive

### 🗺️ Mappa Interattiva della Vita (`vita.html` + `vita.js`)

La pagina Vita sostituisce il classico muro di testo con una **mappa a costellazione astratta**:

- **5 nodi cliccabili** posizionati geograficamente: Trieste, Parigi, Roma, Firenze, Gorizia
- Una **linea SVG animata** collega i nodi nell'ordine cronologico della vita del poeta
- Al click su ogni nodo, il pannello destro si aggiorna dinamicamente (titolo, anni, descrizione) con una transizione di dissolvenza
- Il database dei testi biografici è contenuto in `vita.js` nell'oggetto `sabaLifeData`

Per aggiungere o modificare una città, edita l'oggetto in `vita.js`:
```js
const sabaLifeData = {
    trieste: {
        icon: "🌊",
        title: "Trieste: Le Origini",
        years: "1883 - 1938",
        description: "..."
    },
    // ...
};
```

### 🍔 Hamburger Menu Mobile (`nav.js`)

Il file `nav.js` è iniettato come ultimo script del `<body>` in tutte le pagine. Al caricamento, **crea dinamicamente** un pulsante hamburger e lo aggiunge in fondo all'`<header>`. Il CSS lo posiziona a destra tramite `order: 3` e `margin-left: auto` sul logo.

Non è necessario modificare i file HTML per cambiare il comportamento: tutto è gestito in `nav.js`.

---

## Avatar AI (Convai)

### Architettura

Il simulatore AI del poeta usa il **link pubblico di Convai** — nessuna API Key esposta lato client, nessun SDK da installare. L'utente viene reindirizzato alla piattaforma Convai che gestisce autonomamente autenticazione, microfono e rendering 3D del personaggio.

```js
// avatar.js
const CONVAI_URL = 'https://x.convai.com/?xpid=7e797974-aff2-4d51-b4e7-91ac9e9f208c&type=public';
```

### Come funziona

1. L'utente clicca **«Avvia la Conversazione»** su `avatar.html`
2. `avatar.js` apre il link Convai in una **nuova tab del browser**
3. Convai gestisce tutto: autenticazione, modello 3D, sintesi vocale, riconoscimento vocale

### Per modificare l'avatar

1. Accedi a [Convai Studio](https://convai.com)
2. Crea o modifica il tuo personaggio
3. Copia il link pubblico generato
4. Aggiorna la costante `CONVAI_URL` in `avatar.js`

> [!NOTE]
> L'avatar è configurato con la personalità di Umberto Saba: parla in prima persona, conosce la sua vita, le sue poesie e la sua poetica. La gestione dell'accesso degli utenti è completamente delegata a Convai.

---

## Responsive Design

Il sito supporta **tre breakpoint**:

| Breakpoint | Target | Principali adattamenti |
|------------|--------|----------------------|
| `≤ 1024px` | Tablet | Nav compatta, griglie 2 colonne |
| `≤ 768px` | Mobile | Hamburger menu, griglie 1 colonna, layout colonnari |
| `≤ 480px` | Small mobile | Ulteriore riduzione tipografia e spacing |

Su mobile:
- La barra di navigazione diventa un **menu a tendina** glassmorphic attivato dall'hamburger ≡
- Il logo circolare rimane **a sinistra**, l'hamburger **a destra**
- La mappa vita si impila (mappa sopra, info panel sotto)
- Il layout split-screen dell'avatar si converte in colonna
- Le griglie 3D passano a colonna singola

---

## Avvio Locale

Non è richiesta nessuna installazione. Per vedere il sito sul proprio computer:

1. Apri la cartella del progetto
2. Fai doppio clic su `index.html` — si aprirà nel browser predefinito
3. Naviga liberamente tra le sezioni

> [!NOTE]
> Se hai bisogno di testare funzionalità audio/microfono dell'Avatar in locale, i browser bloccano queste API su protocollo `file://`. Installa l'estensione **Live Server** su VS Code e clicca su _Go Live_ per avviare un server locale su `http://localhost`.

---

## Deploy su Altervista

Il sito è **pronto per il deploy** su Altervista (o qualsiasi hosting statico):

1. **Raccogli i file**: tutti i `.html`, `style.css`, `vita.js`, `avatar.js`, `nav.js`, e la cartella `public/` con le immagini
2. **Accedi ad Altervista**: pannello → Gestione File
3. **Svuota la root**: elimina eventuali `index.php` o `index.html` di default
4. **Carica il sito**: trascina tutti i file. Assicurati che `index.html` sia nella cartella principale (non in una sottocartella)
5. **Visita il dominio**: accedi a `tuosito.altervista.org` — la homepage apparirà subito

> [!IMPORTANT]
> La cartella `Saba/` con i PDF sorgenti **non è necessaria** per il sito online: contiene solo i materiali di ricerca originali. Non è necessario caricarla.

> [!TIP]
> Per ottenere la migliore esperienza su mobile, verifica che ogni pagina HTML contenga nel `<head>` il meta tag viewport (già presente): `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

---

## Crediti

- **Contenuti letterari**: estratti e rielaborati da fonti didattiche (testi in `Saba/`)
- **Design e sviluppo**: progettato con AI (Antigravity / Google DeepMind)
- **Avatar AI**: powered by [Convai](https://convai.com)
- **Fotografia Trieste**: immagine generata con AI (Imagen)
- **Font**: [Google Fonts](https://fonts.google.com) — Inter + Playfair Display

---

*Realizzato per scopi didattici — © 2026 Umberto Saba Tribute*