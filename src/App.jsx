import { BrowserRouter, Routes } from "react-router-dom";
import { renderRoutes, routes } from "./routes";
import { useState, useRef } from "react";
import './App.css';
import Musica from "./assets/musica.mp3";

function App() {
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    const toggleMute = () => {
        setIsMuted(!isMuted);
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
        }
    };

    return (
        <div>
            {/* Audio Global */}
            <audio ref={audioRef} autoPlay loop>
                <source src={Musica} type="audio/mpeg" />
                Tu navegador no soporta el elemento de audio.
            </audio>

            {/* Botón de Mute Global */}
            <button
                onClick={toggleMute}
                className="fixed top-5 right-5 bg-white p-2 rounded-full z-50"
                aria-label={isMuted ? "Activar sonido" : "Silenciar sonido"}
            >
                {isMuted ? "Unmute" : "Mute"}
            </button>

            {/* Enrutador */}
            <BrowserRouter>
                <Routes>
                    {renderRoutes(routes)}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
