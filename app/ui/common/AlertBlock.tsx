import React from "react";
import { motion } from "framer-motion";
import { Alert } from "@mui/material";

const AlertBlock: React.FC<{
  severity: "error" | "info" | "success" | "warning";
  className?: string;
  children?: React.ReactNode;
}> = ({ severity, className, children }) => {
  return (
    <motion.span
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
    >
      <Alert severity={severity} className={className}>
        {children}
      </Alert>
    </motion.span>
  );
};

export default AlertBlock;
