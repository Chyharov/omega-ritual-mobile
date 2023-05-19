import { Link } from 'react-router-dom';
import s from '../SectionServicesList/SectionServicesList.module.scss';


const SectionServicesList = () => {
  return (
    <section className={s.SectionServicesList} id='servicesList'>
      <div className="container">
            <div className={s.ritualServices__container}>
                  
            <ul className={s.ritualServices__list}>
                      
                <li className={s.ritualServices__listItem}>
                    <div className={s.ritualServices__border}>
                        <h2 className={s.ritualServices__title}>Вінки</h2>
                            <div className={s.ritualServices__background}>
                                <Link className={s.ritualServices__link} to="/wreaths">Детальніше</Link>
                            </div>
                    </div>
                </li>
                
                <li className={s.ritualServices__listItem}>
                    <div className={s.ritualServices__border}>
                        <h2 className={s.ritualServices__title}>Труни</h2>
                        <div className={s.ritualServices__background}>
                                <Link className={s.ritualServices__link} to="/coffins">Детальніше</Link>
                        </div>
                    </div>
                </li>
                      
                <li className={s.ritualServices__listItem}>
                    <div className={s.ritualServices__border}>
                        <h2 className={s.ritualServices__title}>Хрести</h2>
                        <div className={s.ritualServices__background}>
                                <Link className={s.ritualServices__link} to="/crosses">Детальніше</Link>
                        </div>
                    </div>
                </li>
                      
                <li className={s.ritualServices__listItem}>
                    <div className={s.ritualServices__border}>
                        <h2 className={s.ritualServices__title}>Пам`ятники</h2>
                        <div className={s.ritualServices__background}>
                                <Link className={s.ritualServices__link} to="/monuments">Детальніше</Link>
                        </div>
                    </div>
                </li>
                      
                <li className={s.ritualServices__listItem}>
                    <div className={s.ritualServices__border}>
                        <h2 className={s.ritualServices__title}>Покривала</h2>
                        <div className={s.ritualServices__background}>
                                <Link className={s.ritualServices__link} to="/covered">Детальніше</Link>
                        </div>
                    </div>
                </li>
                      
                <li className={s.ritualServices__listItem}>
                    <div className={s.ritualServices__border}>
                        <h2 className={s.ritualServices__title}>Інша атрибутика</h2>
                        <div className={s.ritualServices__background}>
                                <Link className={s.ritualServices__link} to="/otherattributes">Детальніше</Link>
                        </div>
                    </div>
                </li>      
            </ul>     
        </div>
      </div>
    </section>
  );
};

export default SectionServicesList;
