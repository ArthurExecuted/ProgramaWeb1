import '../main.css'
import { db } from '../firebase'
import { ref, onValue, remove } from 'firebase/database';
import { useState, useEffect } from 'react';

export default function cookieCard() {

    const [tudo, setTudo] = useState([]);

    //read
    useEffect(() => {
        onValue(ref(db), snapshot => {
            setTudo([]);
            const data = snapshot.val();
            if (data !== null){
                Object.values(data).map((tudo) => {
                    setTudo(oldArray => [...oldArray, tudo])
                })
            }
        })
    }, [])

    //delete
    const handleDelete = (tudo) => {
        remove(ref(db, `/${tudo.uuid}`));
    }

    return (
        <>
        {tudo.map((tudo) => (
            <div className='cookieCard'>
                <div id='textBg'/>
                <div id='text'>
                    <h2 id='TitleCookie'>{tudo.nameCookie}</h2><br/>
                    <p id='locationCookie'>{tudo.locationCookie}</p><br/>
                    <p id='descriptionCookie'>{tudo.description}</p><br/>
                    <a id='linkCookie' href={tudo.link} >{tudo.nameCookie}</a>
                    <button id='deleteBtn' onClick={() => handleDelete(tudo)}>delete</button>
                </div>
            </div>
        ))}
        </>
    );
}