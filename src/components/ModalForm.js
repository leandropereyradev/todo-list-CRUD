import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ModalForm = ({ children, estado, set, titulo = "" }) => {
  return (
    <AnimatePresence>
      {estado && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="modalContainer"
        >
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              scale: 0,
            }}
          >
            <div className="modalBox">
              <div className="modalTitleBox">
                <h1 className="modalTitle">{titulo}</h1>
              </div>
              <div className="modalDoneBox">
                <AiOutlineCloseCircle onClick={set} className="modalDone" />
              </div>
              <div>{children}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalForm;
