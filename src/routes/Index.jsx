import React from "react";
import { motion } from "framer-motion";


export default function Index() {


  return (
    <div className="flex flex-col p-12 lg:px-56 lg:py-44">
      <div className="pb-8">
        <motion.p
          className="text-emerald-500 font-mono lg:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Salut, je m'appelle
        </motion.p>
      </div>
      <div>
        <motion.p
          className="font-sans text-3xl text-name-color font-bold pb-8 lg:text-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Faten Ikram SAYEH.
        </motion.p>
        <motion.p
          className="font-sans text-2xl lg:text-5xl text-name-color/75 font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Je suis médecin généraliste
        </motion.p>
      </div>
      <motion.div
        className="py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <p className="pb-2 font-mono">
          Actuellement en master de santé publique en informatique bio-médicale à l'Université Sorbonne Paris Nord
        </p>
      </motion.div>
    </div>
  );
}
