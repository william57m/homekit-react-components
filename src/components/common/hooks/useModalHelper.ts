import { useState } from 'react';


type UseModalHelperProps = () => { showModal: boolean, openModal: () => void, closeModal: () => void };

export const useModalHelper: UseModalHelperProps = () => {
  const [showModal, setShowModal] = useState(false);
  
  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  return { showModal, openModal, closeModal };
};
