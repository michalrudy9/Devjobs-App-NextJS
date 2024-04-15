import { Skeleton } from "@mui/material";
import { useAppSelector } from "@/store/hooks";

const JobOfferSkeletonItem = () => {
  const isLightMode = useAppSelector((state) => state.mode.isLight);

  const style: string = `${
    isLightMode ? "bg-white text-black" : "bg-very-dark-blue text-white"
  } rounded-md px-8 pb-8 mt-14 md:h-[18rem] text-left`;

  return (
    <div className={style}>
      <Skeleton
        variant="rounded"
        animation="wave"
        width={50}
        height={50}
        className="translate-y-[-1.7rem]"
      />
      <div className="h-[calc(100%-3.5rem)] flex flex-col justify-between gap-y-8">
        <div className="flex flex-col gap-y-5">
          <div className="flex gap-x-2 items-center text-gray">
            <Skeleton
              variant="rounded"
              animation="wave"
              width={80}
              height={15}
            />
            .
            <Skeleton
              variant="rounded"
              animation="wave"
              width={100}
              height={15}
            />
          </div>
          <Skeleton
            variant="rounded"
            animation="wave"
            width={260}
            height={20}
          />
          <Skeleton variant="rounded" animation="wave" width={90} height={15} />
        </div>
        <Skeleton variant="rounded" animation="wave" width={180} height={15} />
      </div>
    </div>
  );
};

export default JobOfferSkeletonItem;
