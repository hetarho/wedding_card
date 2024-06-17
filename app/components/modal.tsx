import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface ModalProps {
    imageUrl: string;
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0
             bg-black bg-opacity-50 flex justify-center items-center "

        ><motion.div className='aspect-square w-full overflow-hidden'
            layoutId={imageUrl}
        >
                <motion.img
                    src={imageUrl}
                />
            </motion.div>
        </motion.div>
    );
};

export default Modal;
