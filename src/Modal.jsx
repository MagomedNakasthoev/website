    import React, { useState } from "react";

    function Modal() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
        <button onClick={openModal}>Открыть модальное окно</button>
        {showModal && (
            <div className="modal">
            <div className="modal-body">
                <h2>Модальное окно</h2>
                <p>Содержимое модального окна</p>
                <button onClick={closeModal}>Закрыть</button>
            </div>
            </div>
        )}
        </>
    );
    }

    export default Modal; 
