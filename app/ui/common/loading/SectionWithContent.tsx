import React from "react";
import { Skeleton } from "@mui/material";

const SectionWithContent: React.FC<{ isLightMode: boolean }> = ({
  isLightMode,
}) => {
  const skeletonItems = Array(4)
    .fill(1)
    .map((n, i) => n + i);

  return (
    <>
      <div className="mt-16 mb-10">
        <Skeleton
          variant="text"
          width={190}
          height={30}
          className={`${!isLightMode && "bg-secondary-dark-default"}`}
        />
      </div>
      <div className="mt-10">
        {skeletonItems.map((index: number) => (
          <Skeleton
            key={index}
            variant="text"
            height={20}
            className={`${!isLightMode && "bg-secondary-dark-default"} w-full`}
          />
        ))}
      </div>
      <div className="my-8">
        {skeletonItems.map((index: number) => (
          <div key={index} className="flex items-center gap-x-8 mb-3">
            <Skeleton
              variant="circular"
              width={8}
              height={8}
              className={`${!isLightMode && "bg-secondary-dark-default"}`}
            />
            <Skeleton
              variant="text"
              width={220}
              height={20}
              className={`${!isLightMode && "bg-secondary-dark-default"}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWithContent;
