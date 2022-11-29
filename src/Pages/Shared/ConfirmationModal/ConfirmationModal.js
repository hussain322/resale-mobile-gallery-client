import React from "react";

const ConfirmationModal = ({
  title,
  message,
  closeModal,
  modalData,
  successDelete,
  successButtonName,
}) => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successDelete(modalData)}
              htmlFor="my-modal"
              className="btn"
            >
              {successButtonName}
            </label>
            <label
              onClick={closeModal}
              htmlFor="my-modal"
              className="btn btn-outline"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
