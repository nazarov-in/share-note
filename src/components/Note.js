import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import env from '../env.json';


const Note = () => {
    let { noteURL } = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');


    useEffect(()=>{
        if(noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({'url': noteURL})
            })
                .then(response => response.json())
                .then(response => {
                    if(response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setErrorClass('hide');
                        setFormClass('hide');
                    } else if (!response.result){
                        setLineClass('hide');
                        setErrorClass('');
                        setFormClass('hide');
                    }
                })
        } else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    },[noteURL]);

    const getNote = (event) => {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('Введите hash');
        } else {
            noteURL = url;
            window.location.href = env.url+'/'+url;
        }
    };

    const serchNote = () => {
        window.location.href = env.url;
    };


    return (
        <div className="note">
            <div className="container">
                <div className={lineClass}>
                    <div className="alert alert-secondary mt-5" role="alert">
                        <h4 className="alert-heading text-secondary">Note: {noteURL}</h4>
                        <p className="mt-3">{noteText}</p>
                        <hr />
                        <div className="mb-0">
                            <p><span className="fw-bold">Внимание!</span> Скопируйте заметку. После показа заметка будет удалена.</p>
                        </div>
                    </div>
                    <div className="text-end">
                        <button onClick={serchNote} className="mt-3 btn btn-warning text-light">Найти новый note</button>
                    </div>
                </div>
                <div className={errorClass}>
                    <div className="alert alert-danger mt-5" role="alert">
                        <p>К сожалению заметка с таким hash не найдена!</p>
                    </div>
                    <div className="text-end">
                        <button onClick={serchNote} className="mt-3 btn btn-warning text-light">Искать другой note</button>
                    </div>
                </div>
                <div className={formClass}>
                    <form onSubmit={getNote} className="mt-5">
                        <label htmlFor="url">Введите hash заметки:</label>
                        <input maxLength="25" className="form-control mt-2" type="text" name="url" id="url"/>
                        <div className="text-end">
                            <button type="submit" className="mt-3 btn btn-warning text-light">Искать note</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Note;
