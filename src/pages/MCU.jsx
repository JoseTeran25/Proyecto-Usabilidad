import Niveles from "../componentes/Niveles";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Fondo from "../assets/Fondo.jpeg";
import IconRegresar from "../componentes/Iconos/IconRegresar";
import FondoPasto3 from "../assets/Fondo-Pasto3.png";
import PersonajeRojo from "../assets/personjae-rojo.png";
import OpcionRespuesta from "../componentes/OpcionRespuesta";
import ConfirmacionPopup from "../componentes/ConfirmacionPopup";
import Dracula from "../assets/personaje-dracula.png"

function MCU() {

    const location = useLocation();
    const { nombreJuego } = location.state || {};
    const [nivelActual, setNivelActual] = useState(0);
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(null);
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
    const [mostrarPopup, setMostrarPopup] = useState(false); // Estado para mostrar el popup

    const handleClicNivel = (nivel) => {
        setNivelActual(nivel);
        setRespuestaCorrecta(null);
        setOpcionSeleccionada(null);
    };

    const handleRespuesta = (opcion) => {
        const esCorrecta = opcion === "C";
        setRespuestaCorrecta(esCorrecta);
        setOpcionSeleccionada(opcion);
    };

    const handleRegresar = () => {
        setMostrarPopup(true); // Muestra el popup al hacer clic en regresar
    };

    const confirmarRegresar = () => {
        setMostrarPopup(false);
        handleClicNivel(0); // Regresa a los niveles
    };

    const cancelarRegresar = () => {
        setMostrarPopup(false); // Cierra el popup sin hacer cambios
    };


    return (
        <div>
            {nivelActual === 0 && (
                <Niveles nombreJuego={nombreJuego} onClick={handleClicNivel} />
            )}
            {nivelActual === 1 && (
                <div className="relative w-full h-screen flex justify-center">
                    <img
                        src={Fondo}
                        alt="Fondo del nivel 1"
                        className="bg-cover bg-center bg-no-repeat w-full h-full absolute top-0 left-0"
                    />
                    <img
                        src={FondoPasto3}
                        alt="Fondo de pasto en la parte inferior"
                        className="bg-cover bg-center bg-no-repeat w-full h-[250px] absolute bottom-0 left-0 z-10"
                    />
                    <img
                        src={Dracula}
                        alt="Fondo de pasto en la parte inferior"
                        className={`w-[250px] h-[250px] absolute bottom-[23vh] left-[25vw] z-20 transition-transform duration-700 ${respuestaCorrecta !== null ? "opacity-0 : opacity-100" : ""
                        }`}
                        tabIndex="0"
                    />
                    <img
                        src={PersonajeRojo}
                        alt="Personaje rojo deslizándose en la escena"
                        className={`w-[200px] h-[200px] absolute bottom-[23vh] left-[45vw] z-20 transition-transform duration-700 ${respuestaCorrecta !== null ? "transform translate-x-[-20vw]" : ""
                        }`}
                        tabIndex="0"
                    />

                    <button
                        tabIndex={0}
                        aria-label="Regresar a niveles"
                        className="absolute top-5 left-5 flex items-center justify-center bg-[#FFDD33] rounded-full p-3 shadow-normal cursor-pointer"
                        onClick={handleRegresar} // Muestra el popup al hacer clic
                    >
                        <IconRegresar width={20} height={20} className="cursor-pointer" color="black"/>
                    </button>

                    <div className="relative z-10 mx-20 mt-14 font-aldrich flex flex-col items-center">
                        {respuestaCorrecta === null && (
                            <>
                                <p className="text-5xl font-bold mb-4" aria-live="polite" tabIndex={0}>NIVEL 1</p>
                                <p className="text-3xl text-left" aria-live="polite" tabIndex={0}>
                                    Ayuda a Agent47 a escapar contestando la pregunta. Un objeto gira
                                    en una trayectoria circular con un radio de 2 metros a una velocidad
                                    angular de 5 rad/s. ¿Cuál es la velocidad tangencial del objeto?
                                </p>
                                <div
                                    className="flex justify-between items-center fixed bottom-0 p-4 w-full"
                                    tabIndex={0}
                                    aria-label="Opciones de respuesta"
                                >
                                    <div className="w-1/2 p-2">
                                        <OpcionRespuesta
                                            opcion="A"
                                            descripcion="5 m/s"
                                            color="bg-[#28A745]"
                                            esCorrecta={false}
                                            onClick={() => handleRespuesta("A")}
                                        />
                                    </div>
                                    <div className="w-1/2 p-2">
                                        <OpcionRespuesta
                                            opcion="B"
                                            descripcion="2.5 m/s"
                                            color="bg-[#28A745]"
                                            esCorrecta={false}
                                            onClick={() => handleRespuesta("B")}
                                        />
                                    </div>
                                    <div className="w-1/2 p-2">
                                        <OpcionRespuesta
                                            opcion="C"
                                            descripcion="10 m/s"
                                            color="bg-[#28A745]"
                                            esCorrecta={true}
                                            onClick={() => handleRespuesta("C")}
                                        />
                                    </div>
                                    <div className="w-1/2 p-2">
                                        <OpcionRespuesta
                                            opcion="D"
                                            descripcion="1 m/s"
                                            color="bg-[#28A745]"
                                            esCorrecta={false}
                                            onClick={() => handleRespuesta("D")}
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                        {respuestaCorrecta !== null && (
                            <>
                                <p className="text-5xl font-bold mb-4" aria-live="polite">NIVEL 1</p>
                                <OpcionRespuesta

                                    opcion={opcionSeleccionada}
                                    descripcion={
                                        opcionSeleccionada === "A" ? "5 m/s"
                                            : opcionSeleccionada === "B" ? "10 m/s"
                                                : opcionSeleccionada === "C" ? "2.5 m/s"
                                                    : "1 m/s"
                                    }
                                    color={respuestaCorrecta ? "bg-[#28A745]" : "bg-[#CA0303]"}
                                    esCorrecta={respuestaCorrecta}
                                />
                                <div
                                    tabIndex="0"
                                    className={`rounded-xl bg-[#D9D9D9] p-8 shadow-normal w-[800px] text-2xl transition-transform duration-700 ${respuestaCorrecta !== null ? "transform translate-x-[20vw]" : ""
                                    }`}
                                    aria-live="polite"
                                >
                                    {respuestaCorrecta
                                        ? "¡Felicidades! Gracias a tu cálculo rápido, Agent 47 escapó del fantasma. Repasemos la solución: La velocidad tangencial (v) se calcula usando la fórmula: v=ω×r\n" +
                                        "donde \n" +
                                        "𝜔\n" +
                                        "ω es la velocidad angular y \n" +
                                        "𝑟\n" +
                                        "r es el radio.\n" +
                                        "𝑣\n" +
                                        "=\n" +
                                        "5\n" +
                                        "\n" +
                                        "rad/s\n" +
                                        "×\n" +
                                        "2\n" +
                                        "\n" +
                                        "m\n" +
                                        "=\n" +
                                        "10\n" +
                                        "\n" +
                                        "m/s\n" +
                                        "v=5rad/s×2m=10m/s"
                                        : "Lo siento, estuviste mal en esta ocasión y Agent 47 no logró escapar. Pero no te preocupes, aquí está la solución correcta: La velocidad tangencial (v) se calcula usando la fórmula:\n" +
                                        "𝑣\n" +
                                        "=\n" +
                                        "𝜔\n" +
                                        "×\n" +
                                        "𝑟\n" +
                                        "v=ω×r\n" +
                                        "donde \n" +
                                        "𝜔\n" +
                                        "ω es la velocidad angular y \n" +
                                        "𝑟\n" +
                                        "r es el radio.\n" +
                                        "𝑣\n" +
                                        "=\n" +
                                        "5\n" +
                                        "\n" +
                                        "rad/s\n" +
                                        "×\n" +
                                        "2\n" +
                                        "\n" +
                                        "m\n" +
                                        "=\n" +
                                        "10\n" +
                                        "\n" +
                                        "m/s\n" +
                                        "v=5rad/s×2m=10m/s. ¿Quiere volver a intentarlo?"
                                    }
                                </div>
                                <button
                                    role="button"
                                    tabIndex={0}
                                    aria-label={respuestaCorrecta ? "Pasar al siguiente nivel" : "Intentar nuevamente"}
                                    className="bg-[#FFDD33] p-3 rounded-lg font-aldrich text-2xl my-5"
                                    onClick={() => respuestaCorrecta ? handleClicNivel(0) : handleClicNivel(1)}
                                >
                                    {respuestaCorrecta ? "Siguiente" : "Volver a intentar"}
                                </button>
                            </>
                        )}
                    </div>

                    <ConfirmacionPopup
                        mostrar={mostrarPopup}
                        onConfirmar={confirmarRegresar}
                        onCancelar={cancelarRegresar}
                    />
                </div>


            )}
            {nivelActual === 2 && (
                <div>Hola 2</div>
            )}
        </div>
    );
}

export default MCU;
