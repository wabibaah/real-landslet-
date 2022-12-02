import { createContext, useState, useContext } from "react";

const ModalContext = createContext();
const ModalOpenContext = createContext();
const ModalCloseContext = createContext();

export function useModalContext() {
  return useContext(ModalContext);
}

export function useModalOpenContext() {
  return useContext(ModalOpenContext);
}
export function useModalCloseContext() {
  return useContext(ModalCloseContext);
}

export function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
  return (
    <ModalContext.Provider value={showModal}>
      <ModalOpenContext.Provider value={openModal}>
        <ModalCloseContext.Provider value={closeModal}>{children}</ModalCloseContext.Provider>
      </ModalOpenContext.Provider>
    </ModalContext.Provider>
  );
}
