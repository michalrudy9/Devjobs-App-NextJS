import { useAppSelector } from "@/store/hooks";
import { Skeleton } from "@mui/material";
import SectionWithContent from "@/app/ui/common/loading/SectionWithContent";

const OfferMainSkeleton = () => {
  const isLightMode = useAppSelector((state) => state.mode.isLight);

  const skeletonItems = Array(4)
    .fill(1)
    .map((n, i) => n + i);

  const style: string = `${
    isLightMode ? "bg-white" : "bg-very-dark-blue"
  }  m-5 font-light text-dark-grey rounded-md p-5 pt-9 lg:mx-auto lg:p-12 lg:w-[45.625rem]`;

  return (
    <div className={style}>
      <div className="flex flex-col md:flex-row gap-y-16 md:gap-y-0 justify-between md:items-center">
        <div className="flex flex-col gap-y-2">
          <div className="flex">
            <Skeleton
              variant="text"
              width={80}
              height={25}
              className={`${!isLightMode && "bg-secondary-dark-default"} mr-1`}
            />
            .
            <Skeleton
              variant="text"
              width={90}
              height={25}
              className={`${!isLightMode && "bg-secondary-dark-default"} ms-1`}
            />
          </div>
          <Skeleton
            variant="text"
            width={350}
            height={40}
            className={`${!isLightMode && "bg-secondary-dark-default"}`}
          />
          <Skeleton
            variant="rounded"
            width={100}
            height={15}
            className={`${!isLightMode && "bg-secondary-dark-default"}`}
          />
        </div>
        <Skeleton
          variant="rounded"
          height={48}
          className={`${
            !isLightMode && "bg-secondary-dark-default"
          } w-full md:w-[9rem]`}
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
      <SectionWithContent isLightMode={isLightMode} />
      <SectionWithContent isLightMode={isLightMode} />
    </div>
  );
};

export default OfferMainSkeleton;
