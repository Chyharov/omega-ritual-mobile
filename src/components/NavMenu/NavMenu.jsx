import s from './NavMenu.module.scss'

const NavMenu = ({items, active, setActive}) => {


  return (
    <div className={`${s.menu} ${active ? s.active : ''}`} onClick={() => setActive(false)}>
        <div className={s.menu__content} onClick={e => e.stopPropagation()}>
            <ul>
                {items.map(item => <li>
                    <a href={item.href}>{item.value}</a>
                </li>)}
            </ul>
        </div>
      </div>

  );
}

export default NavMenu;