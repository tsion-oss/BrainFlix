import logoImage from '/Users/zion/Documents/Brainstation/Dev/brainflix/src/assets/logo/BrainFlix-logo.svg'
import searchIcon from '/Users/zion/Documents/Brainstation/Dev/brainflix/src/assets/Icons/search.svg'
import avatar from '/Users/zion/Documents/Brainstation/Dev/brainflix/src/assets/Images/Mohan-muruge.jpg'
import buttonIcon from '/Users/zion/Documents/Brainstation/Dev/brainflix/src/assets/Icons/upload.svg'
import './Nav.scss'

const Nav = () => {
    return (
      <>
       <nav className="nav nav--mobi">
          <img className='nav__logo' src={logoImage} alt='brainflix logo image'/>
           <div className='nav__input-avatar'>
              <div className='nav__input-div'>
                <input placeholder='Search'  className='nav__input'/> 
                <img className='nav__search-icon' src={searchIcon} alt='Search icon'/>
              </div>
              <img className='nav__avatar' src={avatar} alt='User avatar image'/>
           </div>
           <div className='nav__button-div'>
              <button className='nav__button'>UPLOAD</button>
              <img className='nav__button-icon' src={buttonIcon} alt='button icon'/>
           </div>
       </nav>
       <nav className="nav nav--tablet">
          <img className='nav__logo' src={logoImage} alt='brainflix logo image'/>
           <div className='nav__input-avatar nav__input-avatar--tab'>
              <div className='nav__input-div'>
                  <input placeholder='Search'  className='nav__input nav__input--tab'/> 
                  <img className='nav__search-icon' src={searchIcon} alt='Search icon'/>
              </div>
              <div className='nav__button-div'>
                  <button className='nav__button nav__button--tab'>UPLOAD</button>
                  <img className='nav__button-icon' src={buttonIcon} alt='button icon'/>
              </div>
              <img className='nav__avatar' src={avatar} alt='User avatar image'/>
           </div>
           
       </nav>
       </>
    );
};

export default Nav;