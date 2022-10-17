import { FilterLabel } from "./FilterLabel";

interface FilterListProps {
}

export const FilterList = ({}: FilterListProps) => {
  return (
    <>
      <aside className="w-80 border-gray-300 pr-8">
        <FilterLabel/>
      </aside>
    </>
  );
}