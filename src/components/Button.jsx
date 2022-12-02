import { useModalOpenContext } from "../context/ModalContext";

const Button = () => {
  const openModal = useModalOpenContext();
  return (
    <div className="flex flex-col justify-center space-y-3">
      <button
        onClick={openModal}
        className="bg-teal-400 hover:bg-teal-500 text-white  px-6 py-2 border-2 border-[#abc235] rounded-lg"
      >
        Shedule a consultation
      </button>
    </div>
  );
};

export default Button;
