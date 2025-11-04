"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="px-4 lg:px-6 mx-auto">
      <div className="relative ">
        <Search className="absolute z-30 left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search your clipboard history..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="min-w-xl max-w-full pl-12 pr-4 py-6 rounded-md text-base bg-white/70 backdrop-blur-md border-white/30 shadow-md focus:shadow-lg transition-all duration-300 placeholder:text-muted-foreground/60"
        />
      </div>
    </div>
  );
};

export default SearchBar;
