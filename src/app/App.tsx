import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {ClassNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={ClassNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={'/'}>
                <div>Main</div>
            </Link>
            <Link to={'/about'}>
                <div>About Us</div>
            </Link>
            <AppRouter/>


        </div>
    );
};

export default App;