import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface ModalProps {
  imageIdx: number;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageIdx, isOpen, onClose }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [url, setUrl] = useState(`/imgs/${0}.jpeg`);

  useEffect(() => {
    setSelectedIdx(imageIdx);
  }, [imageIdx]);

  useEffect(() => {
    setUrl(`/imgs/${selectedIdx}.jpeg`);
  }, [selectedIdx]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0
             bg-black bg-opacity-50 flex justify-center items-center "
    >
      <motion.div
        className="aspect-square w-full overflow-hidden"
        layoutId={`/imgs/${imageIdx}.jpeg`}
      >
        <motion.img src={url} />
      </motion.div>
    </motion.div>
  );
};

export default Modal;
