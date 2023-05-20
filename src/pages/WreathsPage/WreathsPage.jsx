import MainHeader from '../../components/MainHeader/MainHeader'
import s from './WreathsPage.module.scss'
import IMG from '../../images/servicesImages/Group-46.png'

const WreathsPage = () => {
  return (
    <>
      <MainHeader />
      <div className={`container ${s.wreathsContainer}`}>
        <div className={s.wreathsdDescriptionContainer}>
          
          <h1 className={s.wreathsPageTitle}>Вінок із живих квітів</h1>
          <img className={s.freshFlowers} src={IMG} alt="Вінок із живих квітів" />
          <p className={s.wreathsPageDescription}>Традиція покладати живі квіти та вінки з них на похороні бере свій початок з часів, коли смерть вважалася не жалобною подією, а святом переходу душі людини у досконаліший небесний світ. Цей культ зберігся і в християнстві, як торжество переходу покійного до Царства Небесного.</p>
          <p className={s.wreathsPageDescription}>Навіть для атеїстів та нерелігійних людей жалобні вінки з живих квітів на похороні – це символ поваги, вічного кохання та поваги до померлого. Квіткові композиції на церемонії прощання виконують і більш практичну функцію – згладити емоційне траурне напруження та зменшити стрес рідних та близьких покійного, які прийшли провести його в останню путь.</p>
          <h2 className={s.wreathsPageTitle}>Вінки, квіткові кошики та траурні букети</h2>
          <p className={s.wreathsPageDescription}>Вибір квіткової композиції, її форма, склад та колірна гама не регламентуються жодними жорсткими правилами та релігійними канонами, принаймні у християнстві. Це виключно особиста справа кожного та його спосіб висловити свою скорботу щодо втрати, безмежну любов і повагу до покійного. Похоронна квіткова композиція може бути у будь-якому вигляді:</p>

          <ul className={s.wreathsPageDescription__list}>
            <li className={s.wreathsPageDescription__description}>вінок із живих квітів;</li>
            <li className={s.wreathsPageDescription__description}>траурний букет;</li>
            <li className={s.wreathsPageDescription__description}>квітковий кошик;</li>
            <li className={s.wreathsPageDescription__description}>надгробна композиція;</li>
            <li className={s.wreathsPageDescription__description}>монограма.</li>
          </ul>

          <p className={s.wreathsPageDescription}>Незважаючи на відсутність будь-яких суворих правил, існують специфічні культурні традиції та символізм, який вкладають у траурну квіткову композицію.</p>
        </div>
      </div>
      
    </>
  );
};



export default WreathsPage;
