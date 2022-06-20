import { useEffect, useRef, useState } from "react";
import * as Tone from "tone";

export default function useSounds() {
  const mySampler = useRef(null);
  const [isC4Played, isC4PlayedChange] = useState(false);
  const [isD4Played, isD4PlayedChange] = useState(false);
  const [isF4Played, isF4PlayedChange] = useState(false);
  const [isA4Played, isA4PlayedChange] = useState(false);

  useEffect(() => {
    const sampler = new Tone.Sampler({
      urls: {
        "C4": "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        "A4": "A4.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();

    Tone.loaded().then(() => {
      mySampler.current = sampler;
    })
  });
  function handleKeyDown({ key }) {
    switch(key) {
      case "a":
        isC4PlayedChange(true);
        window.setTimeout(()=> {
          isC4PlayedChange(false)
        }, 300);
        soundPlay("C4");
        break;
      case "z":
        isD4PlayedChange(true);
        window.setTimeout(()=> {
          isD4PlayedChange(false)
        }, 300);
        soundPlay("D#4");
        break;
      case "e":
        isF4PlayedChange(true);
        window.setTimeout(()=> {
          isF4PlayedChange(false)
        }, 300);
        soundPlay("F#4");
        break;
      case "r":
        isA4PlayedChange(true);
        window.setTimeout(()=> {
          isA4PlayedChange(false)
        }, 300);
        soundPlay("A4");
        break;
      default: 
      break;
    };
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function soundPlay(note) {
    mySampler.current.triggerAttackRelease ([note], 4)
  };
  const buttonsList = [
  {soundPlay: () => soundPlay("C4"), isPlayed: isC4Played,},
  {soundPlay: () => soundPlay("D#4"), isPlayed: isD4Played,},
  {soundPlay: () => soundPlay("F#4"), isPlayed: isF4Played,},
  {soundPlay: () => soundPlay("A4"), isPlayed: isA4Played,},
];

  return {buttonsList};
};