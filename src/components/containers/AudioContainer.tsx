import { useState } from 'react'

interface AudioProps {
    audioElem:React.RefObject<HTMLAudioElement | null>,
    children: (
      play: boolean,
      handlePlayAudio: () => void,
      handleAudioEnded: () => void
    ) => React.ReactNode;
  }

export const AudioContainer: React.FC<AudioProps> = ({ children, audioElem }) => {
  const [play, setPlay] = useState(false)
  const handlePlayAudio = () => {
    if (audioElem.current) {
      play ? audioElem.current.pause() : audioElem.current.play()
      setPlay(!play)
    }
  }
  const handleAudioEnded = () => {
    setPlay(false)
  }

  return <>{children(play, handlePlayAudio, handleAudioEnded)}</>
}
