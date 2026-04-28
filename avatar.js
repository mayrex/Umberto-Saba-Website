document.addEventListener('DOMContentLoaded', () => {
    const btnStart = document.getElementById('btn-start-chat');

    btnStart.addEventListener('click', () => {
        const url = "https://x.convai.com/?xpid=7e797974-aff2-4d51-b4e7-91ac9e9f208c&type=public";

        if (url.startsWith('http')) {
            const popupWidth = 1000;
            const popupHeight = 800;
            const left = (screen.width - popupWidth) / 2;
            const top = (screen.height - popupHeight) / 2;
            
            const features = `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no,location=no`;
            
            // Apriamo il Chatbot
            window.open(url, "AIChatbotSession", features);

            // Feedback UI
            const originalText = btnStart.innerHTML;
            btnStart.innerHTML = `<span class="btn-icon">✅</span> Chat Aperta!`;
            btnStart.style.background = "linear-gradient(135deg, #4caf50, #2e7d32)";
            
            setTimeout(() => {
                btnStart.innerHTML = originalText;
                btnStart.style.background = ""; // ripristina css default
            }, 3000);
            
        } else {
            alert("⚠️ L'URL deve iniziare con http:// o https://");
            inputLink.focus();
        }
    });

    // Supporto per il tasto invio
    inputLink.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            btnStart.click();
        }
    });
});
