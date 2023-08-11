import { useRef } from 'react'
import { AudioContainer } from '../containers/AudioContainer'

interface PlayAudioProps {
  previewUrl: string | undefined;
}

export const PlayAudio: React.FC<PlayAudioProps> = ({ previewUrl }) => {
  const audioElem = useRef<HTMLAudioElement | null>(null)
  return (
    <AudioContainer audioElem={audioElem}>
      {
        (play, handlePlayAudio, handleAudioEnded) => (
          <>
            <div id='audiovisual' onClick={handlePlayAudio} className='flex h-5 w-min justify-center items-center cursor-pointer mt-1'>
              <div className=' text-white text-xl'>
                <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                  <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z' />
                </svg>
              </div>
              <div className={`h-1/2 mt-0 mr-1 pt-0 pr-1 bg-white rounded-2xl ${play ? 'animate-shrink shrink' : ''}`} />
              <div className={`h-1/2 mt-0 mr-1 pt-0 pr-1 bg-white rounded-2xl ${play ? 'animate-shrinkAlternative shrinkAlternative' : ''}`} />
              <div className={`h-1/2 mt-0 mr-1 pt-0 pr-1 bg-white rounded-2xl ${play ? 'animate-shrink shrink' : ''}`} />
              <div className={`h-1/2 mt-0 mr-1 pt-0 pr-1 bg-white rounded-2xl ${play ? 'animate-shrink shrink' : ''}`} />
              <div className={`h-1/2 mt-0 mr-1 pt-0 pr-1 bg-white rounded-2xl ${play ? 'animate-shrinkAlternative shrinkAlternative' : ''}`} />
              <div className={`h-1/2 mt-0 mr-1 pt-0 pr-1 bg-white rounded-2xl ${play ? 'animate-shrink shrink' : ''}`} />
              <div className={`h-1/2 mt-0 mr-1 pt-0 pr-1 bg-white rounded-2xl ${play ? 'animate-shrink shrink' : ''}`} />
              <div className={`h-1/2 mt-0 mr-1 pt-0 pr-1 bg-white rounded-2xl ${play ? 'animate-shrink shrink' : ''}`} />
              <div className={`h-1/2 mt-0 mr-1 pt-0 pr-1 bg-white rounded-2xl ${play ? 'animate-shrinkAlternative shrinkAlternative' : ''}`} />
              <audio src={previewUrl} id='music' ref={audioElem} onEnded={handleAudioEnded} />
            </div>
          </>
        )
      }
    </AudioContainer>

  )
}
