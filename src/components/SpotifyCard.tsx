import Image from 'next/image'
import useSWR from 'swr'
import { LanguageContainer, SelectContainer } from './containers'
import { getRecentlyPlayed, recentlyPlayedUrl } from '@/services/spotify'
import { useRef, useState } from 'react'

export const SpotifyCard: React.FC = () => {
  const { data } = useSWR(recentlyPlayedUrl, getRecentlyPlayed)
  const trackName: string | undefined = data?.name || ''
  const trackPreviewUrl: string | undefined = data?.preview_url || ''
  const trackImg: string = data?.album.images[0]?.url || ''
  const artistName: string | undefined = data?.artists[0]?.name || ''
  const spotifyLink = data?.external_urls.spotify || ''

  return (
    <SelectContainer>
      {
        (currentSelect) => (
          <LanguageContainer>
            {
              (currentLanguage) => (
                <div className={`${currentSelect === 'home' || currentSelect === 'about' ? 'opacity-100' : ' opacity-20'} relative flex flex-col justify-between p-3 md:p-7 lg:p-8 rounded-3xl md:col-span-2 col-span-2 row-span-1 overflow-hidden bg-[#0000008f]`}>
                  <div className='w-min absolute invisible md:visible md:static'>
                    <a href={spotifyLink} target='_blank' rel='noopener noreferrer' className='md:text-4xl text-[#62DBBE] dark:text-[#25ac8c] duration-500 hover:text-[#4cd1b2] dark:hover:text-[#3ca188] ease-in-out' aria-label='Spotify'>
                      <svg
                        aria-label='spotifylogo'
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 16 16'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z' />
                      </svg>
                    </a>
                  </div>
                  <div>
                    <p className='text-[#ffffff] font-bold text-xs lg:text-2xl md:text-xl'>
                      {
                        currentLanguage
                          ? 'Recientemente escuchado'
                          : 'Recently listened'
                      }
                    </p>
                    <div className='flex mb-2 flex-col'>
                      <p />
                      <p className='text-[#ffffff] w-full xl:text-xl lg:text-lg text-xs font-semibold truncate'>{trackName}</p>
                      <p className='text-[#ffffff] w-full xl:text-xl lg:text-lg text-xs truncate'>{artistName}</p>
                    </div>
                    <PlayAudio previewUrl={trackPreviewUrl} />
                  </div>
                  <Image
                    alt='Conversations'
                    priority
                    width={0}
                    height={0}
                    sizes='full'
                    className='absolute w-full h-full top-0 left-0 object-right object-cover -z-10 text-transparent'
                    src={trackImg || '/noise.gif'}
                    placeholder='blur'
                    blurDataURL={trackImg || '/noise.gif'}
                  />
                </div>
              )
            }
          </LanguageContainer>
        )
      }
    </SelectContainer>

  )
}

export const PlayAudio: React.FC<{previewUrl: string | undefined}> = ({ previewUrl }: {previewUrl: string | undefined}) => {
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

  const audioElem = useRef<HTMLAudioElement | null>(null)
  return (

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

  )
}
