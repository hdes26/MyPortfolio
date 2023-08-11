import '@/styles/components/mapCard.css'
import Image from 'next/image'
import { SelectContainer, ThemeContainer } from './containers'

export const MapCard: React.FC = () => {
  return (
    <SelectContainer>
      {
        (currentSelect) => (
          <ThemeContainer>
            {(currentTheme) => (
              <a
                href='https://maps.apple.com/?address=Barranquilla' target='_blank'
                className={`${currentSelect === 'home' || currentSelect === 'about' ? 'opacity-100' : ' opacity-20'} hover:animate-swing relative aspect-square top-0 left-0 flex flex-col justify-center items-center rounded-3xl overflow-hidden col-span-2 row-span-2 md:row-span-1 md:col-span-1 hover:scale-[103%] transition duration-500 ease-in-out shadow-sm cursor-pointer`}
              >
                <Image
                  src={currentTheme ? '/map-day.png' : '/map-night.png'}
                  priority
                  sizes='full'
                  fill
                  alt='map'
                  className='absolute w-full h-full object-cover object-center top-0 left-0 -z-10'
                  placeholder='blur'
                  blurDataURL={currentTheme ? '/map-day.png' : '/map-night.png'}
                />
                <div className='flex w-full h-min justify-center p-4 md:p-8'>
                  <div className='bg-white/10 backdrop-blur-lg backdrop-saturate-150 backdrop-filter rounded-full p-4 border-4 w-min'>
                    <div className='relative h-24 w-24 transform-none'>
                      <span className='box-border block overflow-hidden w-auto h-auto bg-none opacity-100 border-0 m-0 p-0 absolute top-0 left-0 bottom-0 right-0'>
                        <Image
                          src='/me.png'
                          priority
                          fill
                          sizes='full'
                          alt='mecircle'
                          className='absolute top-0 left-0 bottom-0 right-0 box-border p-0 border-0 rounded-full m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full'
                          placeholder='blur'
                          blurDataURL='/me.png'
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className='absolute bottom-0 right-0 flex w-auto h-auto rounded-tl-2xl text-xs md:text-sm xl:text-base dark:bg-white/20 bg-white/40 backdrop-blur-xl backdrop-saturate-150'>
                  <div className='flex font-bold items-center justify-between space-x-1 px-2 py-1 pl-2 transition text-gray-500 dark:text-white'>
                    <div>Barranquilla, Colombia</div>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='w-6 h-6'
                    >
                      <path fillRule='evenodd' d='M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z' clipRule='evenodd' />
                    </svg>
                  </div>
                </div>
              </a>
            )}
          </ThemeContainer>
        )
      }
    </SelectContainer>
  )
}
