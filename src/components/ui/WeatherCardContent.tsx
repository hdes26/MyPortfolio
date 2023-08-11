interface WeatherCardContentProps {
    isDay: boolean;
}
export const WeatherCardContent: React.FC<WeatherCardContentProps> = ({
  isDay
}) => {
  return (
    <div className='absolute right-0 top-0 flex z-0 items-center w-full h-full overflow-hidden justify-end pr-5'>
      <div
        className={`${isDay
        ? 'TimeCard_hot'
        : 'TimeCard_night'} relative z-50 w-20 h-20 md:w-56 md:h-56 right-5`} style={{ borderRadius: '40%' }}
      >
        <span
          className={`${isDay
          ? 'TimeCard_sun animate-pulse pulse'
          : 'TimeCard_moon'} absolute left-2/3 rounded-full w-10 h-10 md:w-24 md:h-24`} style={{ top: '-10%' }}
        />
        {
        !isDay &&
          <>
            <span className='TimeCard_spot1__SaOIN' />
            <span className='TimeCard_spot2__Cq_4z' />
            <ul><li /><li /><li /><li /><li /></ul>
          </>
      }
      </div>
    </div>
  )
}
