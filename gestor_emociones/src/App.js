import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import EmotionSelector from "./components/EmotionSelector";
import EmotionInfo from "./components/EmotionInfo";

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const handleSelectEmotion = (emotion) => {
    setSelectedEmotion(emotion);
  };

  const handleGoBack = () => {
    // Función para "Volver". Aquí puedes restablecer el estado según sea necesario.
    setSelectedEmotion(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Conoce tus emociones</h1>
      </header>
      {!selectedEmotion ? (
        <EmotionSelector onSelectEmotion={handleSelectEmotion} />
      ) : (
        <EmotionInfo selectedEmotion={selectedEmotion} onGoBack={handleGoBack}/>
      )}
    </div>
  );
}

export default App;
