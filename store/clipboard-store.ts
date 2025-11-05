import { ClipboardType } from "@/lib/types";
import { create } from "zustand";
import { generateShortId } from "@/lib/utils";

type ClipboardStore = {
  clipboards: ClipboardType[];
  allClipboards: ClipboardType[];
  filterType: string;
  searchQuery: string;
  toggleFavorite: (id: string) => void;
  handleFilter: (type: string) => void;
  handleSearch: (query: string) => void;
  handleAddNew: (newitem: Partial<ClipboardType> & { content: string }) => void;
  applyFilters: () => void;
};

export const useClipboardStore = create<ClipboardStore>((set, get) => ({
  allClipboards: [],
  clipboards: [],
  filterType: "all",
  searchQuery: "",

  /** 🔍 Shared filter logic */
  applyFilters: () => {
    const { allClipboards, filterType, searchQuery } = get();

    const filtered = allClipboards.filter((item) => {
      const matchesType =
        filterType === "all"
          ? true
          : filterType === "favorite"
          ? item.isFavorite
          : item.type === filterType;

      const matchesSearch = item.content
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesType && matchesSearch;
    });

    set({ clipboards: filtered });
  },

  /** ➕ Add new clipboard item */
  handleAddNew: (data) => {
    const { allClipboards, applyFilters } = get();

    const exists = allClipboards.some(
      (item) => item.content.trim() === data.content.trim()
    );
    if (exists) return console.log("Duplicate clip");

    const newItem: ClipboardType = {
      id: generateShortId(),
      timestamp: Math.floor(Date.now() / 1000).toString(),
      type: data.type ?? "text",
      isFavorite: data.isFavorite ?? false,
      ...data,
    };

    const updated = [...allClipboards, newItem];
    set({ allClipboards: updated });
    applyFilters(); // auto-refresh visible list
  },

  /** ⭐ Toggle favorite */
  toggleFavorite: (id) => {
    const { allClipboards, applyFilters } = get();

    const updated = allClipboards.map((item) =>
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    );

    set({ allClipboards: updated });
    applyFilters();
  },

  /** 🧩 Filter by type or favorite */
  handleFilter: (type) => {
    set({ filterType: type });
    get().applyFilters();
  },

  /** 🔎 Search */
  handleSearch: (query) => {
    set({ searchQuery: query });
    get().applyFilters();
  },
}));
