import React from "react";
import Sidebar from "../Components/Sidebar";
import "../Styles/LectureNotePreview.css";

function LectureNotePreview() {
  const downloadDocument = (format) => {
    // Assuming you have some content to include in the document
    const content = "Lecture note content here";

    if (format === 'word') {
        // Convert content to Word format and initiate download
        const doc = new Blob([content], { type: 'application/msword' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(doc);
        link.download = 'lecture_note.doc';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else if (format === 'pdf') {
        // Convert content to PDF format and initiate download
        const doc = new Blob([content], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(doc);
        link.download = 'lecture_note.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  };

  return (
    <div>
      <div className="app">
        <div className="content-container">
          <div className="lecture-note">
            <div className="lecture-note-title">Lecture One</div>
            {/* Add content specific to Lecture */}
            <div className="new-div-class">
              {/* Content specific to the new div class */}
            </div>
          </div>
          <div className="download-buttons">
            <button onClick={() => downloadDocument('word')}>
              Download as Word
            </button>
            <button onClick={() => downloadDocument('pdf')}>
              Download as PDF
            </button>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default LectureNotePreview;
