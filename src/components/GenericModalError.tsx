import React from "react";

interface GenericModalErrorProps {
  errorMessage: string;
  onClose: () => void;
}

const GenericModalError: React.FC<GenericModalErrorProps> = ({
  errorMessage,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
        <h2 className="text-lg font-semibold text-red-600">Error</h2>
        <p className="mt-4 text-gray-600">{errorMessage}</p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Understood
        </button>
      </div>
    </div>
  );
};

export default GenericModalError;
