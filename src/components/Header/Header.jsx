import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img 
                src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0" 
                alt="" 
            />

            <div className={classes.loginBlock}>
                { props.isAuth ? <h4>{props.login}</h4> : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;