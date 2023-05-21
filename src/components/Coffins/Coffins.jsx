import s from './Coffins.module.scss'

const Coffins = () => {
    
  const CoffinsPictureList = [
        { id: 1, src: require('../../images/coffins/DSC_3257-1024x680.jpg'), alt: 'Зображення 1' },
        { id: 2, src: require('../../images/coffins/DSC_3258.jpg'), alt: 'Зображення 2' },
        { id: 3, src: require('../../images/coffins/DSC_3264.jpg'), alt: 'Зображення 3' },
        { id: 4, src: require('../../images/coffins/DSC_3273.jpg'), alt: 'Зображення 4' },
        { id: 5, src: require('../../images/coffins/DSC_3282.jpg'), alt: 'Зображення 5' },
        { id: 6, src: require('../../images/coffins/DSC_3283.jpg'), alt: 'Зображення 6' },
        { id: 7, src: require('../../images/coffins/DSC_3292.jpg'), alt: 'Зображення 7' },
        { id: 8, src: require('../../images/coffins/DSC_3295.jpg'), alt: 'Зображення 8' },
        { id: 9, src: require('../../images/coffins/DSC_3301.jpg'), alt: 'Зображення 9' },
        { id: 10, src: require('../../images/coffins/DSC_3304.jpg'), alt: 'Зображення 10' },
        { id: 11, src: require('../../images/coffins/DSC_3310.jpg'), alt: 'Зображення 11' },
        { id: 12, src: require('../../images/coffins/DSC_3312.jpg'), alt: 'Зображення 12' },
        { id: 13, src: require('../../images/coffins/DSC_3323.jpg'), alt: 'Зображення 13' },
        { id: 14, src: require('../../images/coffins/DSC_3328.jpg'), alt: 'Зображення 14' },
        { id: 15, src: require('../../images/coffins/DSC_3332.jpg'), alt: 'Зображення 15' },
        { id: 16, src: require('../../images/coffins/DSC_3334.jpg'), alt: 'Зображення 16' },
        { id: 17, src: require('../../images/coffins/DSC_3336.jpg'), alt: 'Зображення 17' },
        { id: 18, src: require('../../images/coffins/DSC_3338.jpg'), alt: 'Зображення 18' },
        { id: 19, src: require('../../images/coffins/DSC_3340.jpg'), alt: 'Зображення 19' },
        { id: 20, src: require('../../images/coffins/DSC_3341.jpg'), alt: 'Зображення 20' },
        { id: 22, src: require('../../images/coffins/DSC_3342.jpg'), alt: 'Зображення 22' },
        { id: 23, src: require('../../images/coffins/DSC_3345.jpg'), alt: 'Зображення 23' },
        { id: 24, src: require('../../images/coffins/DSC_3349.jpg'), alt: 'Зображення 24' },
        { id: 25, src: require('../../images/coffins/DSC_3352.jpg'), alt: 'Зображення 25' },
        { id: 26, src: require('../../images/coffins/DSC_3406.jpg'), alt: 'Зображення 26' },
        { id: 27, src: require('../../images/coffins/DSC_3409.jpg'), alt: 'Зображення 27' },
        { id: 28, src: require('../../images/coffins/DSC_3422.jpg'), alt: 'Зображення 28' },
        { id: 29, src: require('../../images/coffins/dsc_3353-kopiya0.jpg'), alt: 'Зображення 29' },
        
];

    return (

        <section className={s.sectionCoffinsWreaths}>
          <div className={'container ' + s.coffinsContainer}>
            <div className={s.coffinsDescriptionContainer}>
              <p className={s.coffins__description}>Похоронний дім «Омега» – це власне виробництво ритуальних трун, які виготовляються із якісної міцної деревини з використанням декоративних оббивних тканин вітчизняного та європейського виробництва. Ми не спекулюємо на горі, тому ціни на всі наші труни, включаючи бюджетні варіанти та елітні двокришкові саркофаги, одні з найдоступніших у Києві.</p>
                <h2 className={s.coffins__title}>Від економ-класу до елітних саркофагів із дорогих порід дерева.</h2>
                <p className={s.coffins__description}>Труна – це обов’язковий ритуальний атрибут поховання в більшості культур та релігій світу. На відміну від ісламу, де прийнято надавати тіло землі в тканинах та багатих килимах, або індуїзму, де покійного кремують у поховальному савані, у християнстві померлих ховають у дерев’яних трунах із багатим декоративним оздобленням. Урочисті шати покійного, атласні, оксамитові та шовкові тканини внутрішньої та зовнішньої оббивки – все це символ останніх почестей, наданих покійному в його останньому шляху.</p>    
                <h2 className={s.coffins__title}>Елітні дерев’яні труни та саркофаги</h2>                  
                <p className={s.coffins__description}>Спосіб життя та навколишні людини предмети демонструють його статус і становище у суспільстві. Елітні автомобілі та нерухомість, дорогі предмети гардеробу та аксесуари – все це характерні атрибути високої статусності. Похорон – це проводи померлої людини в останній шлях, а значить, це остання можливість віддати їй всю повноту почестей відповідно до її прижиттєвого статусу.</p>

                <p className={s.coffins__description}>Елітна труна з цінних порід дерева ручної роботи з ідеальним опрацюванням найдрібніших деталей декору та фурнітури, бездоганним поліруванням та лакуванням – це демонстрація не просто статусності покійного, а й безмежної поваги до його близьких рідних, друзів та колег.</p>
                
                <p className={s.coffins__description}><span className={s.coffins_listSpan}>Похоронний дім «Омега»</span> – це понад 25 видів елітних дерев’яних трун власного виробництва. Завдяки відсутності посередників та власної майстерні ми пропонуємо ціни від виробника без зайвих націнок. Це може бути як стандартна дерев’яна лакована труна з елітних порід дерева з цільною кришкою, так і двокришковий саркофаг. Верхня кришка дозволяє відкрити на похороні обличчя та руки покійного, залишивши нижню частину прихованої тіла.</p>
                
                <p className={s.coffins__description}>Ціна елітної лакованої дерев’яної труни або двокришкового саркофага залежить від породи дерева, глибини ручного опрацювання декору, якості лакофарбових матеріалів, оббивних тканин та фурнітури.</p>
                
                <ul className={s.coffins__list}>
                    <li className={s.coffins__listItem}>Для елітної внутрішньої оббивки та зовнішнього текстильного декору ми використовуємо Італійські тканини найвищої якості.</li>
                    <li className={s.coffins__listItem}>Тільки високоміцна престижна фурнітура, включаючи ручки та замки з дорогих металів.</li>
                    <li className={s.coffins__listItem}>Покриття дерева тільки найкращим лаком у кілька шарів, що робить поверхню ідеально рівною та з багатим блиском.</li>
                </ul>
                
                <p className={s.coffins__description}>Кожна така труна робиться майстрами кілька днів, через що її вартість виходить порівняно високою. При цьому ми не женемося за надприбутком і пропонуємо чесні ціни, які повністю відображають всю повноту копіткої багатоденної праці майстрів і елітних матеріалів, що використовуються.</p>

                <h2 className={s.coffins__title}>Елітні труни</h2>
                <p className={s.coffins__description}>Матеріал: дерев’яна заготовка покрита лаком</p>
                    
                <ul className={s.coffins__pictureList}>
                    {CoffinsPictureList.map((image) => (
                    <li className={s.coffins__pictureListItem} key={image.id}>
                        <img className={s.coffinsictureList__img} src={image.src} alt={image.alt} />
                    </li>
                    ))}
                </ul>
            </div>
          </div>
        </section>
    );
  };

export default Coffins;