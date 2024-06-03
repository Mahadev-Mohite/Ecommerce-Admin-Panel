import React from "react";
import "./DeleteModal.css";

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">
        <h3>Delete</h3>
        <p>Are you sure you want to delete?</p>
        <div className="modal-actions">
          <button onClick={onConfirm} className="btn delete-btn">
            Delete
          </button>
          <button onClick={onClose} className="btn cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
