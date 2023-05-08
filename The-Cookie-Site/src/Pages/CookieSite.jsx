import '../main.css'
import CookieCard from '../components/cookieCard.jsx';

export default function CookieSite() {
    return (
        <div className='bodyCookieSite'>
            <div className='header'>
                <div className='profile'>
                    <img className='pfpPic' src='../public/img/sammy.jpg'/>
                </div>
                <div className='searchBar'>

                    <input type='text' id='searchBar' placeholder='Qual cookie você quer buscar?'/>
                </div>
            </div>
            <div className='CookieColumns'>
                <CookieCard /><CookieCard /><CookieCard /><CookieCard /><CookieCard /><CookieCard /><CookieCard /><CookieCard /><CookieCard /><CookieCard /><CookieCard /><CookieCard /><CookieCard /><CookieCard /><CookieCard />
            </div>
        </div>
    );
}