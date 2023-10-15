import React from "react";
import "./ResponseComponent.css";

const ResponseComponent = ({
    isModalOpen,
    setIsModalOpen,
    userResponse,
    setUserResponse,
    handleResponseSubmit
}) => {
    if (!isModalOpen) {
        return null;  // Don't render anything if the modal isn't open
    }

    return (
        <div className="Overlay">
            <div className="Modal">
                <textarea
                    className="responseTextarea"
                    value={userResponse}
                    onChange={(e) => setUserResponse(e.target.value)}
                    placeholder="leave a short journal entry about how you're feeling"
                />
                <button
                    className="responseSubmitButton"
                    onClick={() => {
                        handleResponseSubmit();
                        setIsModalOpen(false);
                    }}
                >
                    submit
                </button>
            </div>
        </div>
    );
};

export default ResponseComponent;