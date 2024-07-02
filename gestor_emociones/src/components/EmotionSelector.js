import React, { useState } from "react";
import EmotionButton from "./EmotionButton";
import emotionsData from "../data/emotionsData";
import './EmotionSelector.css'

const EmotionSelector = ({ onSelectEmotion }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleGroupSelection = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div>
      <h2>Selecciona un grupo de emociones:</h2>
      {emotionsData.groups.map((group) => (
        <button className="groupButton" key={group} onClick={() => handleGroupSelection(group)}>
          {group}
        </button>
      ))}

      {selectedGroup && (
        <div>
          <h3>Selecciona una emoción {selectedGroup}:</h3>
          {Object.keys(emotionsData.emotions)
          .filter((emotion) => emotionsData.emotions[emotion].group === selectedGroup)
          .map((emotion) => (
            <EmotionButton
              key={emotion}
              emotion={emotion}
              onSelectEmotion={onSelectEmotion}
            />
            ))}
        </div>
      )}
    </div>
  );
};

export default EmotionSelector;