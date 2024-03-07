import React from 'react';
import '../Styles/UploadVideoDone.css';

const UploadVideoDone = () => {
    return (
        <div className="form">
            <h2>ADD LECTURE RECORDING NAME</h2>
            <label>
                What is the title or topic of the lecture?
                <input type="text" placeholder="WRITE ANSWER" />
            </label>
            <label>
                Is there any other information or special instructions you would like to provide regarding the lecture?
                <input type="text" placeholder="WRITE ANSWER" />
            </label>
            <label>
                What is the file format of the uploaded recording (e.g., MP3, MP4, WAV)?
            </label>
            <div className="options">
                <button>YES</button>
                <button>NO</button>
            </div>
            <button className="save-button">SAVE</button>
        </div>
    );
}

export default UploadVideoDone;