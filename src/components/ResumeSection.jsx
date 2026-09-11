import React from 'react';

const DRIVE_PREVIEW_URL = 'https://drive.google.com/file/d/1ctlkmC-Avitro_8aHohQ-a01ndh4VCpE/preview';
const RESUME_FILE_URL = '/A_BRAHMA_VAMSI_FINAL.pdf';

const ResumeSection = () => {
  return (
    <div className="resume">
      <div className="resume__toolbar">
        <div className="resume__info">
          <span className="resume__badge">RESUME</span>
          <span className="resume__filename">Brahma_Vamsi_Resume.pdf</span>
        </div>
        <div className="resume__actions">
          <a
            href={RESUME_FILE_URL}
            download="Brahma_Vamsi_Resume.pdf"
            className="resume__btn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download
          </a>
          <a
            href="https://drive.google.com/file/d/1ctlkmC-Avitro_8aHohQ-a01ndh4VCpE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="resume__btn resume__btn--primary"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Open in Drive ↗
          </a>
        </div>
      </div>

      <div className="resume__frame-wrapper">
        <iframe
          src={DRIVE_PREVIEW_URL}
          title="Brahma Vamsi Resume Preview"
          className="resume__frame"
          allow="autoplay"
        />
      </div>
    </div>
  );
};

export default ResumeSection;
