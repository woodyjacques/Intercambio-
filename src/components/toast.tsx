export function mostrarMensaje(mensaje: string, elemento: HTMLElement | null) {
    if (elemento) {
      elemento.textContent = mensaje;
      elemento.classList.remove("hidden");
      setTimeout(() => {
        elemento.classList.add("hidden");
      }, 4000);
    }
  }
  
  type ModalProps = {
    isVisible: boolean;
    onClose: () => void;
    onConfirm: () => void;
    message: string;
  };
  
  export const Modal: React.FC<ModalProps> = ({
    isVisible,
    onClose,
    onConfirm,
    message,
  }) => {
    if (!isVisible) return null;
  
    return (
      <div className="bg-gray-100 bg-opacity-70 fixed inset-0 flex justify-center items-center z-50">
        <div id="popup-modal" className="relative rounded-lg shadow bg-gradient-to-r from-gray-900 via-black to-gray-900">
          <button
            onClick={onClose}
            type="button"
            className="transition duration-300 transform hover:scale-105 absolute top-3 right-2.5 text-gray-400 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Cerrar modal</span>
          </button>
          <div className="p-6 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-white">{message}</h3>
            <button
              onClick={onConfirm}
              type="button"
              className="transition duration-300 transform hover:scale-105 text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Sí, seguro
            </button>
            <button
              onClick={onClose}
              type="button"
              className="transition duration-300 transform hover:scale-105 text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              No, cancelar
            </button>
          </div>
        </div>
      </div>
    );
  };