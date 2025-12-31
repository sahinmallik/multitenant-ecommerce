import React from "react";
import SearchInput from "./SearchInput";

interface SearchFilterProps {
  data: any;
}

const SearchFilters = (data: SearchFilterProps) => {
  return (
    <div className="flex flex-col gap-4 w-full px-4 py-8 lg:px-12">
      <SearchInput />
      {JSON.stringify(data, null, 2)}
    </div>
  );
};

export default SearchFilters;
