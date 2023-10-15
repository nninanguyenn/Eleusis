import { useEffect, useState } from "react";
import { getDoc } from "firebase/firestore";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import "./Animal.css";

import bearIMG from './Bear.PNG';
import bunnyIMG from './Bunny.PNG';
import foxIMG from './fox.PNG';
import snakeIMG from './snake.PNG';
import birdIMG from './bird.PNG';

const animalImages = {
  bearIMG,
  bunnyIMG,
  foxIMG,
  snakeIMG,
  birdIMG
};

const animalVectors = {
  bear: [0.7035, 0.2009, 0.3014, 0.2009, 0.2009, 0.4018, 0.3014, 0.2009],
  bunny: [0.1037, 0.4148, 0.5184, 0.2074, 0.5184, 0.3111, 0.3111, 0.2074],
  fox: [0.4444, 0.3333, 0.3333, 0.3333, 0.3333, 0.4444, 0.3333, 0.2222],
  snake: [0.57,0.34,0.46,0.23,0.23,0.46,0.34,0.23],
  bird: [0.21,0.31,0.52,0.21,0.41,0.41,0.31,0.21],
};

function dotProduct(userVec, animalVec) {
  let total = 0;
  for (let i = 0; i < userVec.length; i++) {
    total += userVec[i] * animalVec[i];
  }
  return total;
}

const Animal = () => {
  const [moodMap, setMoodMap] = useState({});
  const [moodVec, setMoodVec] = useState([]);
  const [bestAnimal, setBestAnimal] = useState("");

  useEffect(() => {
    const today = new Date().toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const user = auth.currentUser;
    const fetchData = async () => {
      if (user) {
        const playedDateRef = doc(db, "users", user.uid, "PlayedDates", today);
        const docSnap = await getDoc(playedDateRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setMoodMap({
            date: today,
            flags: data.flags,
            userResponse: data.userResponse,
          });
        }
        console.log(moodMap);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (moodMap.flags) {
      const flags = moodMap.flags;
      const tempVec = [
        flags.aggressive,
        flags.anxious,
        flags.calm,
        flags.frustrated,
        flags.happy,
        flags.motivated,
        flags.neutral,
        flags.sad,
      ];
      setMoodVec(tempVec); // Set the moodVec state
      determineBestMatchingAnimal(tempVec); // Pass the moodVec to the function
    }
  }, [moodMap]);

  const determineBestMatchingAnimal = async (moodVec) => {
    const animal = getBestMatchingAnimal(moodVec); // Removed await since this function is now synchronous
    setBestAnimal(animal);
    const user = auth.currentUser;
    const today = new Date().toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const playedDateRef = doc(db, "users", user.uid, "PlayedDates", today);
    await updateDoc(playedDateRef, {
      bestMatchingAnimal: animal
    });
  };

  const getBestMatchingAnimal = (moodVec) => {
    let maxDotProduct = -Infinity;
    let bestAnimal = "";
    for (const [animal, vector] of Object.entries(animalVectors)) {
      const currentDotProduct = dotProduct(moodVec, vector);
      if (currentDotProduct > maxDotProduct) {
        maxDotProduct = currentDotProduct;
        bestAnimal = animal;
      }
    }
    return bestAnimal;
  };

  return (
    <div className="animal-box">
      {bestAnimal && <span>{bestAnimal}</span>}
      {bestAnimal && <img src={animalImages[`${bestAnimal}IMG`]} alt={bestAnimal} className="animalPNG"/>}
    </div>
  );
};

export default Animal;
