import { motion } from "framer-motion";
import Image from "next/image";
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

  function onClickLeftArrow() {
    if (selectedIdx > 0) {
      setSelectedIdx((prev) => prev - 1);
    }
  }
  function onClickRightArrow() {
    if (selectedIdx < 8) {
      setSelectedIdx((prev) => prev + 1);
    }
  }
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
      <div
        className="absolute left-2"
        onClick={(e) => {
          e.stopPropagation();
          onClickLeftArrow();
        }}
      >
        <FormkitLeft />
      </div>
      <div
        className="absolute right-2"
        onClick={(e) => {
          e.stopPropagation();
          onClickRightArrow();
        }}
      >
        <FormkitRight />
      </div>
    </motion.div>
  );
};

export default Modal;

const FormkitRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="4em"
    height="4em"
    viewBox="0 0 7 16"
  >
    <path
      fill="#F0F0F0"
      d="M1.5 13a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71L5.3 7.99L1.15 3.85c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l4.49 4.51c.2.2.2.51 0 .71l-4.5 4.49c-.1.1-.23.15-.35.15Z"
    ></path>
  </svg>
);

const FormkitLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="4em"
    height="4em"
    viewBox="0 0 7 16"
  >
    <path
      fill="#F0F0F0"
      d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0c.2.2.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
    ></path>
  </svg>
);
