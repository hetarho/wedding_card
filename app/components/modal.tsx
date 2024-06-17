import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface ModalProps {
    imageIdx: number;
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageIdx, isOpen, onClose }) => {
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [url, setUrl] = useState(`/imgs/${0}.jpeg`);

    useEffect(() => {
        setSelectedIdx(imageIdx)
    }, [imageIdx])

    useEffect(() => {
        setUrl(`/imgs/${selectedIdx}.jpeg`);
    }, [selectedIdx])

    function onClickLeftArrow() {
        if (selectedIdx > 0) {
            setSelectedIdx(prev => prev - 1)
        }
    }
    function onClickRightArrow() {
        if (selectedIdx < 8) {
            setSelectedIdx(prev => prev + 1)
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

        ><motion.div className='aspect-square w-full overflow-hidden'
            layoutId={`/imgs/${imageIdx}.jpeg`}
        >
                <motion.img
                    src={url}
                />
            </motion.div>
            <div className='absolute left-5' onClick={(e) => {
                e.stopPropagation();
                onClickLeftArrow()
            }}>
                <Image alt='' src={'/icons/left-arrow.png'} width={50} height={50}></Image>
            </div>
            <div className='absolute right-5' onClick={(e) => {
                e.stopPropagation();
                onClickRightArrow();
            }}>
                <Image alt='' src={'/icons/right-arrow.png'} width={50} height={50}></Image>
            </div>
        </motion.div>
    );
};

export default Modal;
