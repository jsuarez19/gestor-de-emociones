import React from "react";
import "./EmotionButton.css";

const EmotionButton = ({ emotion, onSelectEmotion }) => {
  const handleEmotionSelection = () => {
    onSelectEmotion(emotion);
  };

  return (
    <button className="my-button" onClick={handleEmotionSelection}>
      {emotion}
    </button>
  );
};

export default EmotionButton;
