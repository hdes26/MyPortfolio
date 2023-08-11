import Image from 'next/image'
import { PlayAudio } from './ui/PlayAudio'
import { useGetRecentlyPlayedQuery } from '@/redux/services/spotifyApi'
import { LanguageContainer, SelectContainer } from './containers'

export const SpotifyCard: React.FC = () => {
  const { data, isFetching, isLoading } = useGetRecentlyPlayedQuery(null)
  const trackName: string | undefined = data?.items[0]?.track?.name || ''
  const trackPreviewUrl: string | undefined = data?.items[0]?.track?.preview_url || ''
  const trackImg: string = data?.items[0]?.track?.album?.images[0]?.url || ''
  const artistName: string | undefined = data?.items[0]?.track?.artists[0]?.name || ''
  const spotifyLink = data?.items[0]?.track?.external_urls.spotify || ''

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
                {
                  (isFetching || isLoading)
                    ? <Image alt='Conversations' priority width={0} height={0} sizes='full' className='absolute w-full h-full top-0 left-0 object-right object-cover -z-10 text-transparent' src='/noise.gif' placeholder='blur' blurDataURL='/noise.gif' />
                    : <Image alt='Conversations' priority width={0} height={0} sizes='full' className='absolute w-full h-full top-0 left-0 object-right object-cover -z-10 text-transparent' src={trackImg} placeholder='blur' blurDataURL={trackImg} />
                }
              </div>
            )
          }
          </LanguageContainer>
        )
      }
    </SelectContainer>

  )
}
