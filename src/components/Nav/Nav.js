import logoImage from '../../assets/logo/BrainFlix-logo.svg'
import searchIcon from '../../assets/Icons/search.svg'
import avatar from '../../assets/Images/Mohan-muruge.jpg'
import buttonIcon from '../../assets/Icons/upload.svg'
import './Nav.scss'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
      <>
       <nav className="nav nav--mobi">
          <Link to='/'><img className='nav__logo' src={logoImage} alt='brainflix logo image'/></Link>
           <div className='nav__input-avatar'>
              <div className='nav__input-div'>
                <input placeholder='Search'  className='nav__input'/> 
                <img className='nav__search-icon' src={searchIcon} alt='Search icon'/>
              </div>
              <img className='nav__avatar' src={avatar} alt='User avatar image'/>
           </div>
           <div className='nav__button-div'>
              <button className='nav__button'><Link className='nav__button' to='/video'>UPLOAD</Link></button>
              <img className='nav__button-icon' src={buttonIcon} alt='button icon'/>
           </div>
       </nav>
       <nav className="nav nav--tablet">
          <Link to='/'><img className='nav__logo' src={logoImage} alt='brainflix logo image'/></Link>
           <div className='nav__input-avatar nav__input-avatar--tab'>
              <div className='nav__input-div'>
                  <input placeholder='Search'  className='nav__input nav__input--tab'/> 
                  <img className='nav__search-icon' src={searchIcon} alt='Search icon'/>
              </div>
              <div className='nav__button-div'>
                  <button className='nav__button nav__button--tab'><Link className='nav__button nav__button--tab' to='/video'>UPLOAD</Link></button>
                  <img className='nav__button-icon' src={buttonIcon} alt='button icon'/>
              </div>
              <img className='nav__avatar' src={avatar} alt='User avatar image'/>
           </div>
           
       </nav>
       </>
    );
};

export default Nav;