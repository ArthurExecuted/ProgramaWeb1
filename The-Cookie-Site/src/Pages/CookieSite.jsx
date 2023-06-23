import '../main.css'
import CookieCard from '../components/cookieCard.jsx';
import AuthDetails from '../components/AuthDetails';

export default function CookieSite() {

    return (
        <div className='bodyCookieSite'>
            <div className='header'>
                <div className='profile'>
                    <AuthDetails/>
                </div>
                <div className='searchBar'>
                    <img src='/img/Vector_search_icon.svg.png' id='searchIcon'/>
                    <input type='text' id='searchBar' placeholder='Qual cookie você quer buscar?'/>
                </div>
            </div>
            <div className='CookieColumns'>
                <CookieCard />
            </div>
        </div>
    );
}