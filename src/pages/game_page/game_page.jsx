import { useEffect, useState } from "react";
import "./game_page.css";
import { useNavigate  } from "react-router-dom";

import QuizPopup from "../../components/quiz_popup/QuizPopup";
import backbutton from "../../assets/ga_tilbake.png";

import star_colored from "../../assets/star_colored.png"


import rock1 from "../../assets/rocks/Rock1.png";
import rock2 from "../../assets/rocks/Rock2.png";
import rock3 from "../../assets/rocks/Rock3.png";
import rock4 from "../../assets/rocks/Rock4.png";
import rock5 from "../../assets/rocks/Rock5.png";
import rock6 from "../../assets/rocks/Rock6.png";
import rock7 from "../../assets/rocks/Rock7.png";
import rock8 from "../../assets/rocks/Rock8.png";
import rock9 from "../../assets/rocks/Rock9.png";

import Rock1Flag1 from "../../assets/rocks/flags/Rock1_flag1.png";
import Rock1Flag2 from "../../assets/rocks/flags/Rock1_flag2.png";
import Rock1Flag3 from "../../assets/rocks/flags/Rock1_flag3.png";

import Rock2Flag1 from "../../assets/rocks/flags/Rock2_flag1.png";
import Rock2Flag2 from "../../assets/rocks/flags/Rock2_flag2.png";
import Rock2Flag3 from "../../assets/rocks/flags/Rock2_flag3.png";

import Rock3Flag1 from "../../assets/rocks/flags/Rock3_flag1.png";
import Rock3Flag2 from "../../assets/rocks/flags/Rock3_flag2.png";
import Rock3Flag3 from "../../assets/rocks/flags/Rock3_flag3.png";

import Rock4Flag1 from "../../assets/rocks/flags/Rock4_flag1.png";
import Rock4Flag2 from "../../assets/rocks/flags/Rock4_flag2.png";
import Rock4Flag3 from "../../assets/rocks/flags/Rock4_flag3.png";

import Rock5Flag1 from "../../assets/rocks/flags/Rock5_flag1.png";
import Rock5Flag2 from "../../assets/rocks/flags/Rock5_flag2.png";
import Rock5Flag3 from "../../assets/rocks/flags/Rock5_flag3.png";

import Rock6Flag1 from "../../assets/rocks/flags/Rock6_flag1.png";
import Rock6Flag2 from "../../assets/rocks/flags/Rock6_flag2.png";
import Rock6Flag3 from "../../assets/rocks/flags/Rock6_flag3.png";

import Rock7Flag1 from "../../assets/rocks/flags/Rock7_flag1.png";
import Rock7Flag2 from "../../assets/rocks/flags/Rock7_flag2.png";
import Rock7Flag3 from "../../assets/rocks/flags/Rock7_flag3.png";

import Rock8Flag1 from "../../assets/rocks/flags/Rock8_flag1.png";
import Rock8Flag2 from "../../assets/rocks/flags/Rock8_flag2.png";
import Rock8Flag3 from "../../assets/rocks/flags/Rock8_flag3.png";

import Rock9Flag1 from "../../assets/rocks/flags/Rock9_flag1.png";
import Rock9Flag2 from "../../assets/rocks/flags/Rock9_flag2.png";
import Rock9Flag3 from "../../assets/rocks/flags/Rock9_flag3.png";

export default function GamePage() {
  const [selectedRock, setSelectedRock] = useState(null);

  
  const [quizResults, setQuizResults] = useState(() => {
    const savedResults = localStorage.getItem("quizResults");
    return savedResults ? JSON.parse(savedResults) : {};
  });

    const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("quizResults", JSON.stringify(quizResults));
  }, [quizResults]);

    const rockFlagImages = {
    1: {
        1: Rock1Flag1,
        2: Rock1Flag2,
        3: Rock1Flag3,
    },
    2: {
        1: Rock2Flag1,
        2: Rock2Flag2,
        3: Rock2Flag3,
    },
    3: {
        1: Rock3Flag1,
        2: Rock3Flag2,
        3: Rock3Flag3,
    },
    4: {
        1: Rock4Flag1,
        2: Rock4Flag2,
        3: Rock4Flag3,
    },
    5: {
        1: Rock5Flag1,
        2: Rock5Flag2,
        3: Rock5Flag3,
    },
    6: {
        1: Rock6Flag1,
        2: Rock6Flag2,
        3: Rock6Flag3,
    },
    7: {
        1: Rock7Flag1,
        2: Rock7Flag2,
        3: Rock7Flag3,
    },
    8: {
        1: Rock8Flag1,
        2: Rock8Flag2,
        3: Rock8Flag3,
    },
    9: {
        1: Rock9Flag1,
        2: Rock9Flag2,
        3: Rock9Flag3,
    },
    };

  const openPopup = (rockNumber) => {
    setSelectedRock(rockNumber);
  };

  const closePopup = () => {
    setSelectedRock(null);
  };

  const handleQuizComplete = (rockNumber, score, total) => {
    setQuizResults((prev) => ({
      ...prev,
      [rockNumber]: {
        completed: true,
        score,
        total,
      },
    }));
  };

  const greenFlagCount = Object.values(quizResults).filter(
    (result) => result.completed && result.score === 3
  ).length;


  const defaultRockImages = {
  1: rock1,
  2: rock2,
  3: rock3,
  4: rock4,
  5: rock5,
  6: rock6,
  7: rock7,
  8: rock8,
  9: rock9,
};

    const getRockImage = (rockNumber) => {
  const result = quizResults[rockNumber];

  if (!result?.completed) {
    return defaultRockImages[rockNumber];
  }

  return rockFlagImages[rockNumber]?.[result.score] || defaultRockImages[rockNumber];
};

  return (
    <main>
      <div className="back_star_container">
        <button type="button" onClick={() => navigate("/")}>
          <img src={backbutton} alt="Tilbake" />
        </button>
        <div className="star_container">
          {Array.from({ length: greenFlagCount }).map((_, index) => (
            <img
              key={index}
              src={star_colored}
              alt={`Star ${index + 1}`}
              className="star_img"
            />
          ))}
        </div>
      </div>
      <div className="stone_container">
        <div className="rock1" onClick={() => openPopup(1)}>
          <img className="rock_img" src={getRockImage(1)} alt="Rock 1" />
        </div>

        <div className="rock2" onClick={() => openPopup(2)}>
          <img className="rock_img" src={getRockImage(2)} alt="Rock 2" />
        </div>

        <div className="rock3" onClick={() => openPopup(3)}>
          <img className="rock_img" src={getRockImage(3)} alt="Rock 3" />
        </div>

        <div className="rock4" onClick={() => openPopup(4)}>
          <img className="rock_img" src={getRockImage(4)} alt="Rock 4" />
        </div>

        <div className="rock5" onClick={() => openPopup(5)}>
          <img className="rock_img" src={getRockImage(5)} alt="Rock 5" />
        </div>

        <div className="rock6" onClick={() => openPopup(6)}>
          <img className="rock_img" src={getRockImage(6)} alt="Rock 6" />
        </div>

        <div className="rock7" onClick={() => openPopup(7)}>
          <img className="rock_img" src={getRockImage(7)} alt="Rock 7" />
        </div>

        <div className="rock8" onClick={() => openPopup(8)}>
          <img className="rock_img" src={getRockImage(8)} alt="Rock 8" />
        </div>

        <div className="rock9" onClick={() => openPopup(9)}>
          <img className="rock_img" src={getRockImage(9)} alt="Rock 9" />
        </div>
      </div>

      {selectedRock !== null && (
        <QuizPopup
          rockNumber={selectedRock}
          onClose={closePopup}
          onQuizComplete={handleQuizComplete}
        />
      )}
    </main>
  );
}