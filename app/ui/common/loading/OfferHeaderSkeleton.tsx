import { useAppSelector } from "@/store/hooks";
import { Skeleton } from "@mui/material";

const OfferHeaderSkeleton = () => {
  const isLightMode = useAppSelector((state) => state.mode.isLight);

  const style: string = `${
    isLightMode ? "bg-white" : "bg-very-dark-blue"
  } mx-5 mb-5 rounded-md flex flex-col md:flex-row items-center px-7 pb-7 md:px-0 md:pb-0 -translate-y-4 md:-translate-y-10 lg:mx-auto lg:w-[45.625rem]`;

  return (
    <div className={style}>
      <div
        className={
          "w-[3.125rem] h-[3.125rem] md:w-[8.75rem] md:h-[8.75rem] rounded-2xl md:rounded-none md:rounded-bl-md flex justify-center items-center translate-y-[-1.7rem] md:translate-y-0"
        }
      >
        <Skeleton
          variant="rounded"
          width="100%"
          height="100%"
          className={`${!isLightMode && "bg-secondary-dark-default"}`}
        />
      </div>
      <div className="md:w-[calc(100%-8.75rem)] text-center md:text-left md:flex md:justify-between md:items-center md:px-10">
        <div className="flex flex-col items-center md:items-start">
          <Skeleton
            variant="rounded"
            width={100}
            height={20}
            className={`${!isLightMode && "bg-secondary-dark-default"} mb-4`}
          />
          <Skeleton
            variant="rounded"
            width={250}
            height={15}
            className={`${!isLightMode && "bg-secondary-dark-default"} mb-4`}
          />
        </div>
        <Skeleton
          variant="rounded"
          width={155}
          height={48}
          className={`${
            !isLightMode && "bg-secondary-dark-default"
          } mx-auto md:mr-0`}
        />
      </div>
    </div>
  );
};

export default OfferHeaderSkeleton;
