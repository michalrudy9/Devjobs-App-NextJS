import React from "react";

const ErrorBlock: React.FC<{ message: string; className?: string }> = ({
  message,
  className,
}) => {
  const style: string = `absolute w-[calc(100%-2.5rem)] bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md ${className}`;

  return (
    <div className={style} role="alert">
      <span className="">{message}</span>
    </div>
  );
};

export default ErrorBlock;
