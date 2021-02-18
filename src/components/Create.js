import React from 'react';
import { useState } from 'react';
import env from '../env';


const Create = () => {
    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('');
    const refClearText = React.createRef();

    const sendData = (obj) => {
        setLineClass('');
        setFormClass('hide');

        fetch(env.urlBackend, {
            method : 'POST',
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body : JSON.stringify(obj),
        })
            .then(response => response.json())
            .then(response => {
                if (response.result) setUrl(env.url+'/'+response.url);
            })
    };

    const loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Введите текст');
            return false;
        }
        sendData({'note' : note});
    };

    const addNewNote = () => {
        setLineClass('hide');
        setFormClass('');
        refClearText.current.value = '';
    };


    return (
        <div className="create">
            <div className="container">
                <div className="mt-5">
                    <form onSubmit={loadDataFromForm} className={formClass}>
                        <label htmlFor="note">Введите заметку:</label>
                        <textarea maxLength="1000" name="note" id="note" ref={refClearText} placeholder="Test note system..." className="form-control mt-2"></textarea>
                        <p><span className="fw-bold">Внимание!</span> максимальная длина заметки 1000 символов.</p>
                        <div className="text-end">
                            <button type="submit" className="mt-3 btn btn-warning text-light">Создать</button>
                        </div>
                    </form>
                </div>
                <div className={lineClass}>
                    <div className="alert alert-warning" role="alert">{url}</div>
                    <p>Скопируйте URL и передайте адресату. Внимание! Посмотреть заметку можно один раз!</p>
                    <div className="text-end">
                        <button onClick={addNewNote} className="mt-3 btn btn-warning text-light" >Создать новую заметку</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;
