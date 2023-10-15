import React, { useEffect, useState } from "react";
import { db, auth } from "./firebase";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import "./Journal.css";
import Graph from "./Graph";
import { useUser } from "./UserContext";

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const playedDatesRef = collection(db, "users", user.uid, "PlayedDates");
        const q = query(playedDatesRef);
        const querySnapshot = await getDocs(q);
        const entriesData = [];
        querySnapshot.forEach((doc) => {
          console.log(doc);
          const date = doc.id;
          const data = doc.data();
          entriesData.push({
            date,
            flags: data.flags,
            userResponse: data.userResponse,
          });
        });
        setEntries(entriesData);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="journal-parent">
    <Graph userId={auth.currentUser.uid} />

    <div className={`journalContainer ${entries.length > 0 ? "active" : ""}`}>
      {entries.map((entry, index) => (
        <div className="journalEntry" key={index}>
          <div className="entryHeader">
            <span>{entry.date}</span>
          </div>
          <div className="entryContent">
            <div className="emotionFlag">
              {JSON.stringify(entry.flags, null, 2)}
            </div>
            <div className="response">{entry.userResponse}</div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Journal;
