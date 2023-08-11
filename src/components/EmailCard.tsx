import { SelectContainer } from './containers'

export const EmailCard: React.FC = () => {
  return (
    <SelectContainer>
      {
        (currentSelect) => (
          <a
            aria-label='tomyemail'
            href='mailto:hdescorcias@gmail.com'
            className={`${currentSelect === 'home' || currentSelect === 'contact' ? 'opacity-100' : ' opacity-20'} flex flex-col justify-center items-center bg-[#4032ff9c] dark:bg-[#7785ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square
            shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out`}
          >
            <svg aria-label='redirectrow' stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' className='absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white dark:text-[#ffffffaa]' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path fill='none' d='M0 0h24v24H0z' /><path d='M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z' /></svg>
            <svg aria-label='emaillogo' stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' className='text-4xl md:text-7xl lg:text-9xl text-white dark:text-[#ffffffaa]' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path fill='none' d='M0 0h24v24H0z' /><path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' /></svg>
          </a>

        )
      }
    </SelectContainer>
  )
}
