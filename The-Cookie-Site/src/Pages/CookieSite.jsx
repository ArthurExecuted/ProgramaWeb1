import '../main.css'
import CookieCard from '../components/cookieCard.jsx';
import AuthDetails from '../components/AuthDetails';
import { db } from '../firebase'
import { uid } from 'uid';
import { set, ref } from 'firebase/database';
import { useState } from 'react';

export default function CookieSite() {

    const [nameCookie, setNameCookie] = useState('');
    const [locationCookie, setLocationCookie] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');

    const handleNameChange=(e) => {
        setNameCookie(e.target.value)
    }

    const handleLocationChange=(e) => {
        setLocationCookie(e.target.value)
    }

    const handleDescriptionChange=(e) => {
        setDescription(e.target.value)
    }

    const handleLinkChange=(e) => {
        setLink(e.target.value)
    }

    //read

    //write
    const writeToDatabase = () => {
        const uuid = uid();
        set(ref(db, `/${uuid}`), {
            nameCookie,
            locationCookie,
            description,
            link,
            uuid,
        });

        setLink([]);
        setNameCookie([]);
        setLocationCookie([]);
        setDescription([]);
    };

    //update


    //delete


    return (
        <div className='bodyCookieSite'>
            <div className='header'>
                <div className='profile'>
                    <AuthDetails/>
                </div>
            </div>
            <div className='cookiePuter'>
                <input type="text" value={nameCookie} onChange={handleNameChange} placeholder='Name'/>
                <input type="text" value={locationCookie} onChange={handleLocationChange} placeholder='location'/>
                <input type='text' value={description} onChange={handleDescriptionChange} placeholder='description'/>
                <input type='text' value={link} onChange={handleLinkChange} placeholder='link'/>
                <button onClick={writeToDatabase}>Submit</button>
            </div>
            <div className='CookieColumns'>
                <CookieCard />
            </div>
        </div>
    );
}