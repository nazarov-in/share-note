import React from "react";

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div  className="mt-5">
                    <p><span className="fw-bold">ShareNote</span> - это бесплатный инструмент для обмена заметками, который выделяет уникальный hash (ключ) для вашей заметки и позволяет иметь к ней доступ по ссылке. Не требуется регистрация и вход. ShareNote обладает функцией автоматического удаления заметки (через 15 минут) после ее прочтения.</p>
                </div>
                <div  className="mt-2">
                    <p><span className="fw-bold">Простой интерфейс </span>с красиво оформленным минималистичным интерфейсом, который поможет вам сосредоточиться на том что нужно написать.</p>
                </div>
                <div  className="mt-2">
                    <p><span className="fw-bold">Совместимость с браузерами. </span>ShareNote поддерживает современные веб-браузеры, включая Google Chrome, Mozilla Firefox, Safari, Opera, Edge, Internet Explorer и браузер Steam. Для использования приложения необходимо включить JavaScript.</p>
                </div>
            </div>
        </div>
    );
};

export default About;