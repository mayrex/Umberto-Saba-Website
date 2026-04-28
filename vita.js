const sabaLifeData = {
    parigi: {
        icon: "🇫🇷",
        title: "Parigi: La prima fuga",
        years: "1938 - 1939",
        description: "Con l'entrata in vigore delle leggi razziali nazifasciste, Saba (figlio di madre ebrea) è costretto ad abbandonare precipitosamente la sua amata Trieste e l'adorata libreria. Si rifugia brevemente a Parigi, iniziando un doloroso periodo di sradicamento e solitudine."
    },
    trieste: {
        icon: "🌊",
        title: "Trieste: Le Origini e la Libreria",
        years: "1883 - 1938",
        description: "Nato col nome di Umberto Poli, subisce l'abbandono del padre ancor prima di nascere, venendo accudito dall'affettuosa balia Peppa Sabaz (da cui prenderà il nome). A Trieste sposerà Lina e aprirà una leggendaria libreria antiquaria, cantuccio sicuro ma turbato da nevrosi."
    },
    firenze: {
        icon: "⚜️",
        title: "Firenze: Il nascondiglio salvifico",
        years: "1943 - 1945",
        description: "Durante l'occupazione nazista, si rifugia a Firenze. Sfugge miracolosamente ai rastrellamenti nazifascisti cambiando casa ben 11 volte! Sopravvive in condizioni durissime solo grazie all'aiuto concreto di grandi amici coraggiosi come Eugenio Montale e Carlo Levi."
    },
    roma: {
        icon: "🏛️",
        title: "Roma: L'esilio instabile",
        years: "1939 - 1943",
        description: "Dall'estero torna in Italia, stabilendosi segretamente a Roma sotto falso nome con l'aiuto dell'amico Ungaretti e di altri intellettuali. Cerca protezione e anonimato nella Capitale, ma l'ombra delle deportazioni lo costringerà presto a fuggire verso Nord."
    },
    gorizia: {
        icon: "🍂",
        title: "Gorizia: Il triste epilogo",
        years: "Estate 1957",
        description: "Rientrato stanco e mutilato nell'animo dai traumi della guerra e affranto per la perdita dell'amata moglie Lina, Saba passa gli ultimi duri anni in clinica. Si spegne silenziosamente a Gorizia ad agosto del 1957, affidandoci la grande raccolta 'Canzoniere'."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const pins = document.querySelectorAll('.map-pin');
    const titleEl = document.getElementById('info-title');
    const yearsEl = document.getElementById('info-years');
    const descEl = document.getElementById('info-desc');
    const iconEl = document.querySelector('.info-icon');
    const panel = document.querySelector('.map-info-panel');

    pins.forEach(pin => {
        pin.addEventListener('click', () => {
            // Remove active classes
            pins.forEach(p => p.classList.remove('active-pin'));
            
            // Add active class to clicked
            pin.classList.add('active-pin');

            const cityId = pin.getAttribute('data-city');
            const data = sabaLifeData[cityId];

            if (data) {
                // Animation logic
                panel.style.transform = 'scale(0.95)';
                panel.style.opacity = '0.5';
                
                setTimeout(() => {
                    titleEl.textContent = data.title;
                    yearsEl.textContent = data.years;
                    descEl.textContent = data.description;
                    iconEl.textContent = data.icon;

                    panel.style.transform = 'scale(1)';
                    panel.style.opacity = '1';
                }, 200);
            }
        });
    });
});
