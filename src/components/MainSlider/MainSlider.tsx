import { FC, useState } from 'react';
import api from '../../api';

interface IMainSliderProps {

}

const MainSlider: FC<IMainSliderProps> = () => {

  let slides = api.getMainPageAnime()
  let [active, setActive] = useState(3)

  return <section className='h-[100dvh] overflow-hidden relative'>
    <ul className='w-full h-full'>
      {
        slides.map(({ _id, name, description, image }, index) => (
          <li key={_id} 
            className={`absolute inset-0 after:content-[""] after:w-full after:h-full after:absolute after:left-0 after:bottom-0 after:bg-gradient-to-t after:from-white after:from-1% after:to-transparent opacity-0 ${active === index && 'opacity-100'}`}>
            <img className='w-full h-full object-cover -z-10' src={image} alt={name} />
            <div className='absolute left-[10%] top-[20%] w-full max-w-[80%] z-20'>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          </li>
        ))
      }
    </ul>
    <div>
      
    </div>
  </section>;
};

export default MainSlider;