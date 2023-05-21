import { Link } from 'react-router-dom';
import freshFlowersWreath from '../../images/servicesImages/Group-46.png'
import artificialWreaths from '../../images/servicesImages/Group-50.png'
import s from './SectionWreaths.module.scss'

const SectionWreath = () => {
  return (
    <section className={s.sectionWreaths}>
        <div className={'container ' + s.wreathsContainer}>
          <div className={s.wreathsdDescriptionContainer}>
              
            <h2 className={s.wreathsPageTitle}>Похоронний вінок чи квіткова композиція?</h2>
            <p className={s.wreathsPageDescription}>Жодних суворих правил і особливо релігійних ритуальних канонів у цій справі немає. Кожен вирішує сам залежно від ситуації, статі, віку та прижиттєвих переваг покійного. Ви можете висловити свої почуття та пошану покійному навіть за допомогою звичайного букета живих квітів. Однак традиція покладати до труни померлого на похороні вінки настільки вкоренилася у культурі нашого народу, що такий атрибут став одним із обов’язкових елементів похоронної церемонії.</p>
            <p className={s.wreathsPageDescription}><span className={s.wreathsPageDescriptionOmega}>Ритуальне бюро «Омега»</span> займається у Києві та Київській області комплексною організацією похорону, у т.ч. та підбором жалобних вінків та квіткових композицій. Наші флористи створюють оригінальні квіткові композиції індивідуально для кожного покійного, враховуючи не лише його стать та вік, а й професійну діяльність, статус та становище у суспільстві.</p>
            <p className={s.wreathsPageDescription}>Крім вінка традиційної форми, ви можете купити на похорон ритуальний букет чи кошик із живими квітами. Це повністю відповідатиме жалобній церемонії, але дещо пом’якшить її сумне забарвлення. Традиція встеляти останній шлях на цвинтар квітами або покривати труну квітковими декоративними композиціями та монограмами спочатку і зародилася, щоб зменшити стрес рідних та близьких у цей сумний та емоційно важкий день.</p>
              
              
              <div className={s.wreathsLinksContainer}>

                <Link className={s.ritualServices__link} to="/freshflowerswreath">
                  <div className={s.wreathsLinks}>
                    <img className={s.freshFlowers} src={freshFlowersWreath} alt="Вінок із живих квітів" />
                    <h2 className={s.wreathsLinksTitle}>Вінок із живих квітів</h2>
                  </div>
                </Link>

                <Link className={s.ritualServices__link} to="/artificialwreaths">
                  <div className={s.wreathsLinks}>
                    <img className={s.freshFlowers} src={artificialWreaths} alt="Вінок із живих квітів" />
                    <h2 className={s.wreathsLinksTitle}>Вінок із штучних квітів</h2>
                  </div>
                </Link>

              </div>
                
            <h2 className={s.wreathsPageTitle}>Які квіти найкращі для похоронного вінка?</h2>
            <p className={s.wreathsPageDescription}>Це питання також жодними правилами, традиціями та християнськими ритуалами не регламентовано. Однак ритуальні похоронні вінки все ж таки можуть бути наповнені особливим символізмом, який виражається через колірну гаму та поєднання тих чи інших кольорів.</p>
            
            <ul className={s.wreathsPageDescription__list}>
              <li className={s.wreathsPageDescription__listItem}>Білі лілії та троянди у поєднанні з фіалками символізують духовну чистоту.</li>
              <li className={s.wreathsPageDescription__listItem}>Червоні гвоздики та троянди – символ страждань та важкого земного життя покійного.</li>
              <li className={s.wreathsPageDescription__listItem}>Хвойні гілки у поєднанні з барвінком виражають вічне кохання до покійного.</li>
              <li className={s.wreathsPageDescription__listItem}>Гілки верби символізують перехід у Царство Небесне.</li>
            </ul>

            
            <p className={s.wreathsPageDescription}>Звідси й пішла традиція покладати вінки з червоних гвоздик на похоронах чоловіків і особливо військових, як символ нелегкої частки солдата та важкої чоловічої праці. Білі квіти використовують у ритуальних похоронних квіткових композиціях для померлих непорочних дівчат та дітей.</p>
          
            <h2 className={s.wreathsPageTitle}>Правила складання похоронного вінка</h2>
            <p className={s.wreathsPageDescription}>Незважаючи на досить вільні традиції та відсутність чітких ритуальних засад, існують деякі правила, що склалися в культурі нашого народу, яких прийнято дотримуватися.</p>
            
            <ul className={s.wreathsPageDescription__list}>
              <li className={s.wreathsPageDescription__listItem}>Не більше п’яти видів квітів в одній жалобній композиції.</li>
              <li className={s.wreathsPageDescription__listItem}>Не можна робити домінуючим чорний колір та поєднувати його з червоним. Така палітра кольору у вінках посилює пригнічення емоційного фону, чого не можна допускати на похороні.</li>
              <li className={s.wreathsPageDescription__listItem}>Насичені глибокі кольори використовують у центрі вінка.</li>
              <li className={s.wreathsPageDescription__listItem}>Ялинові гілки та зелений декор краще вибирати темно-зеленого відтінку.</li>
              <li className={s.wreathsPageDescription__listItem}>Квіти та елементи декору блідих відтінків рожевого, блакитного та лимонного врівноважують насичені кольори.</li>
              <li className={s.wreathsPageDescription__listItem}>Найбільш придатні для похоронного вінка – лілії, гвоздики, троянди та півонії.</li>  
            </ul>

            <p className={s.wreathsPageDescription}>Для людей творчої натури та померлим у поважному віці використовують квіти червоних та темно-рожевих відтінків. Білі та фіолетові відтінки використовують у вінках на похороні молодих жінок.</p>

            <p className={s.wreathsPageDescription}>Флористи похоронного дім «Омега» точно знають усі правила та традиції складання ритуальних вінків. Ви можете купити як окремо вінок на похорон з доставкою по Києву, так і замовити комплексне флористичне оформлення церемонії прощання.</p>
          </div>
        </div>
      </section>
  );
};



export default SectionWreath;