import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ children, handleClose, isSalesModal }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid ",
          lineHeight: "1.5",
          borderColor: isSalesModal ? "#ff4500" : "#555",
        }}
      >
        {children}
        <button
          onClick={handleClose}
          className={isSalesModal ? "sales-btn" : ""}
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
}
