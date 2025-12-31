import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

interface Props {
  disable?: boolean;
}

const SearchInput = ({ disable }: Props) => {
  return (
    <div className="w-full flex items-center gap-2">
      <div className="relative w-full">
        <SearchIcon className="absolute  left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input
          className="pl-8"
          placeholder="Search Products"
          disabled={disable}
        />
      </div>
    </div>
  );
};

export default SearchInput;
