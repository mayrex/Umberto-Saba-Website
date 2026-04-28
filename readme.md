# Sito Web Umberto Saba con Avatar Convai

Benvenuto! Questo progetto è un sito web dedicato alla vita, opere e poetica di Umberto Saba, interamente scritto in HTML/CSS/JS (Vanilla). 
All'interno del sito è presente una sezione speciale per interagire con l'IA tramite un Avatar integrato.

## Struttura del Progetto

Il progetto non richiede l'installazione di librerie Node.js o React per funzionare, il che lo rende **perfetto per Altervista**, GitHub Pages, Aruba o qualsiasi Hosting condiviso Standard.

- `index.html`: La homepage con l'invito a parlare con l'AI.
- `avatar.html`: La pagina dedicata che ospita l'esperienza Convai / ElevenLabs.
- `avatar.js`: File di logica dove è presente la configurazione dell'Avatar.
- `style.css`: L'unico foglio di stile contenente tutta la veste grafica del sito.
- `vita.html`, `opere.html` (etc..): Tutte le sezioni tematiche del sito.

---

## 1. Avvio Locale (Sul tuo Computer)

Per testare e vedere il sito sul tuo computer:
1. Doppio cliccate sul file `index.html` per aprirlo col browser (Chrome/Edge/Safari).
2. Potrai navigare liberamente. 

> [!NOTE] 
> Se vedi errori quando apri l'Avatar e vuoi sperimentare con audio e microfono in locale, i browser bloccano queste funzioni su protocollo `file://`. Devi avviare un server locale. Se usi VS Code, installa l'estensione **Live Server** e clicca su "Go Live".

---

## 2. Configurazione dell'Avatar (Convai)

Al momento il progetto è impostato con un Experience ID "fittizio" come da te richiesto. 
Quando sarai pronto a collegare la vera intelligenza artificiale di Convai:

1. Apri il file `avatar.js` con blocco note o VS Code.
2. Nelle prime righe troverai:
   ```js
   const CONVAI_CONFIG = {
       experienceId: "IL_TUO_EXPERIENCE_ID_QUI",
       ...
   }
   ```
3. Sostituisci `"IL_TUO_EXPERIENCE_ID_QUI"` con l'Experience ID o il link generato da Convai Avatar Studio.
4. Più in basso, nella funzione `startExperience()`, puoi sostituire l'attuale snippet/Iframe provvisorio con lo snippet ufficiale (`<convai-web-component>`) che Convai ti ha fornito. 

---

## 3. Guida al Deploy (Pubblicazione) su Altervista

Hai menzionato di voler caricare su internet la piattaforma usando Altervista. Grazie all'architettura semplice usata, questo passo è velocissimo:

1. **Prepara i File:** Raduna tutti i file (`.html`, `.css`, `.js`, cartella `public` con le immagini) e, se Altervista tel o permette, comprimili in un singolo `.zip`.
2. **Accedi ad Altervista:** Vai sul pannello di controllo del tuo sito Altervista (pannello Gestione File).
3. **Elimina File di Default:** Se presenti, cancella la pagina `index.php` o `index.html` di default di Altervista, in modo che la root (cartella principale) sia vuota.
4. **Carica il tuo Sito:** Trascina i tuoi file (o estrai l'archivio zip) all'interno dello spazio Altervista. Assicurati che `index.html` sia al livello principale e non dentro una sottocartella.
5. **Visita il tuo Dominio:** Vai al tuo indirizzo (es. `nometuosito.altervista.org`). Vedrai subito la tua homepage e potrai recarti nella pagina dell'Avatar liberamente.
6. **Whitelist Dominio in Convai:** Non dimenticare di andare nel tuo pannello "*Convai Studio*" e aggiungere l'indirizzo live del tuo sito Altervista (e.g. `tuosito.altervista.org`) tra i domini autorizzati (CORS/Whitelist) per assicurarti che l'avatar possa caricare le chiamate API dal tuo spazio web.

Sei pronto per il pubblico!