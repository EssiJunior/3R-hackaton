// components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm }:{ isOpen?: boolean, onClose?: () => void, onConfirm?: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="z-100  inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Confirmer votre choix</h2>
        <p className="mb-4 text-gray-800">Êtes-vous sûr de vouloir continuer ?</p>
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2  rounded mr-2"
            onClick={onConfirm}
          >
            Confirmer
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            onClick={onClose}
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;