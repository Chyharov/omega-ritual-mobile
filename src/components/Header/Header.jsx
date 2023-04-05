import { useState } from 'react';
import s from '../Header/Header.module.scss';
import Logo from '../Logo/Logo';
import NavMenu from 'components/NavMenu/NavMenu';


const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [{value: "Головна", href: "/"}, {value: "Послуги", href: "/servise"}, {value: "Магазин", href: "/shop"}]

  return (
    <header>
      <div className={s.header__container}>
        <Logo />
        

        <nav>
          <div className={s.burger__btn} onClick={() => setMenuActive(!menuActive)} >
          <svg viewBox=" 1 1 28 28" height={35} width={40}>
            <path d="M4 24h24v-2.666h-24v2.666zM4 17.334h24v-2.667h-24v2.667zM4 8v2.666h24v-2.666h-24z"></path>
          </svg>
          </div>
          
        </nav>
      </div>
      <NavMenu active={menuActive} setActive={setMenuActive} items={items}/>
    </header>
  );
};

export default Header;

<svg viewBox=" 1 1 28 28" height={35} width={40}>
            <path d="M4 24h24v-2.666h-24v2.666zM4 17.334h24v-2.667h-24v2.667zM4 8v2.666h24v-2.666h-24z"></path>
          </svg>
