export const DownloadErrorNotification: React.FC<{ onClose: () => void }> = ({ onClose }) => (
    <div className="gallery-modal-download-error">
        <button className="gallery-modal-download-error-close" onClick={onClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
        <p>
            Oops, something went wrong and the photo refused to download 📷 Try again, and if it&apos;s still being
            stubborn — ping the organizers on Telegram:{" "}
            <a href="https://t.me/JulieVolkova" target="_blank" rel="noreferrer">
                @JulieVolkova
            </a>{" "}
            or{" "}
            <a href="https://t.me/delanalex" target="_blank" rel="noreferrer">
                @delanalex
            </a>
            , or{" "}
            <a href="https://github.com/tbilisi-js/community-site/issues/new" target="_blank" rel="noreferrer">
                open an issue
            </a>{" "}
            in our repo 🐛
        </p>
    </div>
);
