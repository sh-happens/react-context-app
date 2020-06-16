import React, { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "incomplete", id: 2 },
    { title: "sangria wine", id: 3 },
  ]);
  const [age, setAge] = useState(20);

  useEffect(() => {
    console.log(songs);
  }, [songs]);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuidv1() }]);
  };

  return (
    <div className='song - list'>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </div>
  );
};

export default SongList;
