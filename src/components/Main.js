const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="d-flex mt-5 mb-4 ms-4">
                    <a href="/create" className="btn btn-warning me-4 text-light">Создать note</a>
                    <a href="/note" className="btn btn-warning text-light">Просмотреть note</a>
                </div>

                <p><span className="fw-bold">ShareNote</span> - это отличный инструмент для обмена заметками. Создайте заметку, отправьте ссылку на зметку и ваш друг сможет ее просмотреть. После просмотра заметка будет удалена (или по истечении 15 минут с момента ее создания).</p>
                <p className="my-3">Как сделать заметку?</p>
                <ul className="ms-5">
                    <li>Пройдите по ссылке</li>
                    <li>Вставьте текст и нажмите Create</li>
                    <li>Отправьте сгенерированный адрес другу</li>
                </ul>
                <p className="mt-3">Как прочитать заметку? Перейдите по присланному URL, либо введите адрес руками здесь.</p>
            </div>
        </div>
    );
};

export default Main;
