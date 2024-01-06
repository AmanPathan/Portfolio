import './Styles/Navbar.css';
import { Link } from 'react-scroll';
import aman from './Images/image aman.jpg';

const Navbar = ({check,setCheck}) => {

    return (
        <>
            <div className='nav' id='Nav'>
                <div className='logo_img'><img src={aman} className='logo' alt='Aman' /><a href='#' className='linktohome'>Aman<br></br> Pathan</a></div>
                <i class="fa-solid fa-bars bar" onClick={() => {setCheck(!check) }}></i>
                <div className='right_nav'>
                    <ul className='nav-ul'><li className='nav-li' smooth={true} offset={0} duration={200}><Link className='nav-link' to='Hero'>Home</Link></li></ul>
                    <ul className='nav-ul'><li className='nav-li'><Link className='nav-link' to='About' smooth={true} offset={0} duration={500}>About</Link></li></ul>
                    <ul className='nav-ul'><li className='nav-li'><Link className='nav-link' to='Timeline' smooth={true} offset={0} duration={500}>Education</Link></li></ul>
                    <ul className='nav-ul'><li className='nav-li'><Link className='nav-link' to='Skills' smooth={true} offset={0} duration={500}>Skills</Link></li></ul>
                    <ul className='nav-ul'><li className='nav-li'><Link className='nav-link' to='Projects' smooth={true} offset={0} duration={500}>Projects</Link></li></ul>
                    <ul className='nav-ul'><li className='nav-li'><Link className='nav-link' to='Contact' smooth={true} offset={0} duration={500}>Contact</Link></li></ul>
                    {/* <ul className='nav-ul'><li className='nav-li moon'><i className="fa-solid fa-moon"></i></li></ul> */}
                </div>
                <div className={!check?'right_nav_after':'right_nav_after right_nav_open'}>
                {/* <div className='bars_div'><i class="fa-solid fa-xmark bar" onClick={() => {setCheck(!check) }}></i></div> */}
                <ul className='nav-ul nav-ul-after'><li className='nav-li nav-li-after' smooth={true} offset={0} duration={200}><Link className='nav-link nav-link-after' onClick={() => {setCheck(false) }} to='Hero'>Home</Link></li></ul>
                <ul className='nav-ul nav-ul-after'><li className='nav-li nav-li-after'><Link className='nav-link nav-link-after' onClick={() => {setCheck(false) }} to='About' smooth={true} offset={0} duration={500}>About</Link></li></ul>
                <ul className='nav-ul nav-ul-after'><li className='nav-li nav-li-after'><Link className='nav-link nav-link-after' onClick={() => {setCheck(false) }} to='Timeline' smooth={true} offset={0} duration={500}>Education</Link></li></ul>
                <ul className='nav-ul nav-ul-after'><li className='nav-li nav-li-after'><Link className='nav-link nav-link-after' onClick={() => {setCheck(false) }} to='Skills' smooth={true} offset={0} duration={500}>Skills</Link></li></ul>
                <ul className='nav-ul nav-ul-after'><li className='nav-li nav-li-after'><Link className='nav-link nav-link-after' onClick={() => {setCheck(false) }} to='Projects' smooth={true} offset={0} duration={500}>Projects</Link></li></ul>
                <ul className='nav-ul nav-ul-after'><li className='nav-li nav-li-after'><Link className='nav-link nav-link-after' onClick={() => {setCheck(false) }} to='Contact' smooth={true} offset={0} duration={500}>Contact</Link></li></ul>
                {/* <ul className='nav-ul nav-ul-after'><li className='nav-li nav-li-after moon'><i className="fa-solid fa-moon"></i></li></ul> */}
                <div className='after_menu'>
                <ul className='menu-ul'><li className='menu-li'><a href='https://github.com/amanpathan' className='menu-link'><i class="fa-brands fa-github"></i></a></li></ul>
                        <ul className='menu-ul'><li className='menu-li'><a href='https://www.linkedin.com/in/aman-a-pathan/' className='menu-link'><i class="fa-brands fa-linkedin-in"></i></a></li></ul>
                        <ul className='menu-ul'><li className='menu-li'><a href="https://leetcode.com/amanpathan526/" className="menu-link"><svg className="leetcode" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z" /></svg></a></li></ul>
                        <ul className='menu-ul'><li className='menu-li'><a href='https://www.instagram.com/mr.aman.pathan/' className='menu-link'><i class="fa-brands fa-instagram"></i></a></li></ul>
                </div>            
            </div>
            </div>
        </>
    )
}
export default Navbar;
