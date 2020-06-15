import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "incomplete", id: 2 },
    { title: "sangria wine", id: 3 },
  ]);
  const addSong = () => {
    setSongs([...songs, { title: "new song", id: uuidv1() }]);
  };
  return (
    <div className='song - list'>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
};

export default SongList;
