import { useEffect, useState } from "react";
import { getDoc } from "firebase/firestore";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import "./Animal.css";

const animalVectors = {
  bear: [0.7035, 0.2009, 0.3014, 0.2009, 0.2009, 0.4018, 0.3014, 0.2009],
  bunny: [0.1037, 0.4148, 0.5184, 0.2074, 0.5184, 0.3111, 0.3111, 0.2074],
  fox: [0.4444, 0.3333, 0.3333, 0.3333, 0.3333, 0.4444, 0.3333, 0.2222],
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
      console.log(flags);
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
      determineBestMatchingAnimal();
    }
  }, [moodMap]);

  const determineBestMatchingAnimal = async () => {
    const animal = await getBestMatchingAnimal();
    setBestAnimal(animal);
    };

  const getBestMatchingAnimal = async () => {
    let maxDotProduct = -Infinity;
    let bestAnimal = "";
    const user = auth.currentUser;
    const today = new Date().toLocaleDateString("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

    for (const [animal, vector] of Object.entries(animalVectors)) {
      const currentDotProduct = dotProduct(moodVec, vector);
      if (currentDotProduct > maxDotProduct) {
        maxDotProduct = currentDotProduct;
        bestAnimal = animal;
      }
    }
        const playedDateRef = doc(db, "users", user.uid, "PlayedDates", today);
        await updateDoc(playedDateRef, {
        bestMatchingAnimal: bestAnimal
    });

    return bestAnimal;
  };

  return (
    <div className="animal-box">
      {moodVec && <span>{getBestMatchingAnimal()}</span>}
    </div>
  );
};

export default Animal;
