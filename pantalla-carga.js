(function() {
    // 1. INYECTAR EL CSS (Estilos)
    const style = document.createElement('style');
    style.innerHTML = `
        #pwa-loader {
            position: fixed;
            inset: 0;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            transition: opacity 0.6s ease;
        }
        .loader-layout { text-align: center; font-family: sans-serif; }
        
        .img-mano {
            width: 160px;
            display: block;
            margin: 0 auto;
            animation: floating 2s ease-in-out infinite;
        }
        .img-foco {
            width: 70px;
            margin-bottom: -25px;
            animation: blink 1.5s infinite alternate, floating 2s ease-in-out infinite;
        }
        @keyframes floating {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }
        @keyframes blink {
            from { opacity: 0.5; filter: drop-shadow(0 0 5px yellow); }
            to { opacity: 1; filter: drop-shadow(0 0 15px gold); }
        }
        
        .corazones-box { margin: 10px 0; height: 30px; }
        .heart {
            width: 25px;
            opacity: 0;
            transform: scale(0.5);
            animation: popIn 0.5s forwards;
        }
        .h1 { animation-delay: 0.7s; }
        .h2 { animation-delay: 1.4s; }
        .h3 { animation-delay: 2.1s; }
        @keyframes popIn {
            to { opacity: 1; transform: scale(1); }
        }
        
        .bar-container {
            width: 200px;
            height: 22px;
            border: 3px solid #FFC0CB;
            border-radius: 15px;
            overflow: hidden;
            margin: 0 auto;
            background: #fff;
        }
        .bar-fill {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #ff9aa2, #fdfd96, #b2e2f2, #c5a3ff);
            animation: fillProgress 3s forwards cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fillProgress {
            to { width: 100%; }
        }
    `;
    document.head.appendChild(style);

    // 2. INYECTAR EL HTML (Estructura)
    const loaderHTML = `
    <div id="pwa-loader">
        <div class="loader-layout">
            <img src="1000130854.jpg" class="img-foco">
            <img src="1000130852.jpg" class="img-mano">
            <div class="corazones-box">
                <img src="1000130853.jpg" class="heart h1">
                <img src="1000130853.jpg" class="heart h2">
                <img src="1000130853.jpg" class="heart h3">
            </div>
            <div class="bar-container"><div class="bar-fill"></div></div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('afterbegin', loaderHTML);

    // 3. LÓGICA DE CIERRE (JavaScript)
    window.addEventListener('load', () => {
        // Solo se muestra si está instalada como PWA
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        
        if (isStandalone) {
            setTimeout(() => {
                const loader = document.getElementById('pwa-loader');
                if(loader) {
                    loader.style.opacity = '0';
                    setTimeout(() => loader.remove(), 600);
                }
            }, 3500); // Tiempo suficiente para ver la animación
        } else {
            // Si es navegador, lo borramos de inmediato sin que se vea
            document.getElementById('pwa-loader').style.display = 'none';
        }
    });
})();
