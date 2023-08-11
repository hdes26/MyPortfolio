interface ProjectCardContentProps {
    currentLanguage: boolean;
}
export const ProjectCardContent: React.FC<ProjectCardContentProps> = ({ currentLanguage }) => {
  return (
    <div className='w-full h-full absolute top-0 left-0 text-white p-4 md:p-8 z-10 pointer-events-none'>
      <h2 className='font-bold text-md md:text-xl lg:text-4xl'>
        {
         currentLanguage
           ? 'Proyectos y pruebas'
           : 'Projects and tests'
        }
      </h2>
      <p className='font-base text-xs md:text-2xl lg:text-2xl md:w-4/5 lg:w-5/6 lg:mt-4'>
        {
          currentLanguage
            ? 'Aquí puedes encontrar algunos de mis proyectos, pruebas o experimentos.'
            : 'Here you can find some of my projects, tests or experiments.'
        }
      </p>
    </div>
  )
}
