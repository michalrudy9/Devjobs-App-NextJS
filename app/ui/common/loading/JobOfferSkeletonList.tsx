import JobOfferSkeletonItem from "@/app/ui/common/loading/JobOfferSkeletonItem";

const JobOfferSkeletonList = () => {
  const skeletonItems = Array(20)
    .fill(1)
    .map((n, i) => n + i);

  return (
    <ul className="flex flex-wrap md:gap-x-4">
      {skeletonItems.map((index: number) => (
        <li
          key={index}
          className="w-full md:w-[calc(50%-.5rem)] lg:w-[calc(33%-.5rem)] xl:w-[calc(25%-.8rem)]"
        >
          <JobOfferSkeletonItem />
        </li>
      ))}
    </ul>
  );
};

export default JobOfferSkeletonList;
