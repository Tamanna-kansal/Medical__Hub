import { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';
import Store from '../../pages/Store';
import './Header.css';


const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctors', display: 'Find a Doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' },
  { path: '/store', display: 'Medical Store' },
  { path: '/blog', display: 'Blog' }

];

const Header = ({ isLoggedIn, username }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  return (
    <header className='header ' ref={headerRef}>
      <div className="container">
        <div className=' incon flex items-center justify-between'>
          {/* logo */}
          <div className='wow flex text-lg font-bold '>
            <img src="data:image/jpeg;base64,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" alt="" style={{ height: '80px', width: '80px' }} />

          </div>

          {/* menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    activeClassName="text-primaryColor text-[16px] leading-7 font-[600]"
                    className="text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right */}
          <div className='flex items-center gap-4'>
            {isLoggedIn ? (
              <div>
                <span className="text-primaryColor font-medium">{username}</span>
                <Link to="/">
                  <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8kVrRKvn48kDPt79Je7wZIuT6nUSr3l5DQ&s" className='w-full rounded-full' alt="" />
                  </figure>
                </Link>
              </div>
            ) : (
              <>
                {username ? (
                  <div>
                    <span className="text-primaryColor font-medium">{username}</span>
                    <Link to="/">
                      <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                        <img src={userImg} className='w-full rounded-full' alt="" />
                      </figure>
                    </Link>
                  </div>
                ) : (
                  <Link to='/register'>
                    <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Sign Up</button>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

