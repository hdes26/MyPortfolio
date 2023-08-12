interface MeCardContentProps {
    currentLanguage: boolean;
}
export const MeCardContent: React.FC<MeCardContentProps> = ({
  currentLanguage
}) => {
  return (
    <div className='h-full md:w-8/12 absolute top-0 left-0 p-4 md:p-8 flex flex-col justify-start  md:justify-end'>
      <h1 className='text-3xl md:text-xl lg:text-5xl font-bold text-white mb-4 md:mb-5'>
        {currentLanguage ? '👋 Hola, Soy Hernan' : "👋 Hi, I'm Hernan"}
      </h1>
      <p className='text-md md:text-lg lg:text-2xl text-white'>
        {currentLanguage
          ? 'Soy un desarrollador full stack con experiencia en React, Express, Nest. Soy bueno en HTML y CSS, así como en Typescript. Me encanta aprender cosas nuevas y experimentar con nuevas tecnologías. Tengo buen ojo para los detalles y siempre pongo todo de mí en mi trabajo.'
          : "I am a full stack developer with experience in React, Express, Nest. I'm good at HTML and CSS, as well as Typescript. I love learning new things and experimenting with new technologies. I have a good eye for details and I always put my all into my work."}
      </p>
    </div>
  )
}
