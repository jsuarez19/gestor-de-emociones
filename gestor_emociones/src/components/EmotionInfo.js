import React from "react";
import emotionsData from "../data/emotionsData";

const EmotionInfo = ({ selectedEmotion, onGoBack }) => {
  const emotionInfo = emotionsData.emotions[selectedEmotion];

  const handleGoBack = () => {
    // Llamar a la función proporcionada por el padre para regresar
    onGoBack();
  };

  return (
    <div className="container mx-auto" >
        <h2 className="text-center mt-4">Información sobre la emoción {selectedEmotion} {emotionInfo.emoji}:</h2>
        <p><strong>Impulso de acción:</strong> {emotionInfo.impulso_accion}</p>
        <p><strong>Cuándo está justificada:</strong> {emotionInfo.si_justificada}</p>
        <p><strong>Cuándo no está justificada:</strong> {emotionInfo.no_justificada}</p>
        <p><strong>Qué hacer cuando está justificada:</strong> {emotionInfo.acciones_si_justificada}</p>
        <p><strong>Qué hacer cuando no está justificada:</strong> {emotionInfo.acciones_no_justificada}</p>
      <button className="my-button" onClick={handleGoBack}>Volver</button>
    </div>
  );
};

export default EmotionInfo;