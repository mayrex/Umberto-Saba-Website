document.addEventListener("DOMContentLoaded", () => {
    const btnStart = document.getElementById("btn-start");
    const container = document.getElementById("convai-wrapper");
    const loading = document.getElementById("convai-loading");
    const content = document.getElementById("convai-content");
    const btnFullscreen = document.getElementById("btn-fullscreen");
    const btnReset = document.getElementById("btn-reset");
    const experienceIdInput = document.getElementById("experience-id-input");

    // UX per fare focus/blur sull'input text
    experienceIdInput.addEventListener("focus", () => {
        experienceIdInput.style.borderColor = "#cb9b51";
    });
    experienceIdInput.addEventListener("blur", () => {
        experienceIdInput.style.borderColor = "rgba(203, 155, 81, 0.3)";
    });

    let isExperienceRunning = false;

    // Inizializza l'esperienza
    btnStart.addEventListener("click", () => {
        if (!isExperienceRunning) {
            const userExpId = experienceIdInput.value.trim();
            if (!userExpId) {
                alert("Per favore, inserisci un Experience ID valido per continuare.");
                experienceIdInput.focus();
                return;
            }
            startExperience(userExpId);
        }
    });

    // Reset dell'esperienza
    btnReset.addEventListener("click", () => {
        if (confirm("Vuoi terminare la conversazione corrente e riavviare l'avatar?")) {
            resetExperience();
        }
    });

    // Fullscreen support
    btnFullscreen.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            container.requestFullscreen().catch(err => {
                alert(`Errore nell'attivazione dello schermo intero: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });

    // Funzione principale che lancia l'embed
    function startExperience(expId) {
        btnStart.style.display = "none";
        experienceIdInput.disabled = true; // blocca l'input durante l'esecuzione
        experienceIdInput.style.opacity = "0.5";
        loading.style.display = "flex";
        
        // Pulisce eventuali contenuti vecchi
        content.innerHTML = "";
        
        try {
            // Inizializza il client Convai ufficiale tramite PixelStreamCore.PixelStreamClient
            const client = new PixelStreamCore.PixelStreamClient({
                expId: expId,
                container: content
            });
            
            // Il contenitore è pronto e nascondiamo il loader
            loading.style.display = "none";
            
            // Mostriamo i controlli aggiuntivi
            btnFullscreen.style.display = "inline-block";
            btnReset.style.display = "inline-block";
            
            isExperienceRunning = true;
        } catch (error) {
            loading.style.display = "none";
            alert("Errore durante l'inizializzazione dell'Avatar Convai. Verifica che l'ID sia corretto. Errore: " + error.message);
            resetExperience();
        }
    }

    function resetExperience() {
        // Pulisce l'HTML
        content.innerHTML = "";
        
        // Riporta lo stato iniziale dell'input e dei bottoni
        experienceIdInput.disabled = false;
        experienceIdInput.style.opacity = "1";
        experienceIdInput.value = ""; // Opzionale: pulisce l'input field
        
        btnStart.style.display = "inline-block";
        btnStart.textContent = "Avvia Conversazione";
        btnFullscreen.style.display = "none";
        btnReset.style.display = "none";
        
        isExperienceRunning = false;
    }
});
