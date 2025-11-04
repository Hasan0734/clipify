"use client";
import React from "react";
import ClipboardCard from "./ClipboardCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const mockClipboardItems = [
  {
    id: "1",
    type: "text" as const,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    timestamp: "2 hours ago",
    isFavorite: true,
  },
  {
    id: "2",
    type: "link" as const,
    content: "https://www.example.com/amazing-article-about-productivity",
    timestamp: "5 hours ago",
    isFavorite: false,
  },
  {
    id: "3",
    type: "image" as const,
    content: "screenshot_2024.png",
    timestamp: "Yesterday",
    isFavorite: true,
  },
  {
    id: "4",
    type: "text" as const,
    content:
      "Remember to buy: eggs, milk, bread, coffee, and fruits from the grocery store tomorrow morning.",
    timestamp: "Yesterday",
    isFavorite: false,
  },
  {
    id: "5",
    type: "link" as const,
    content: "https://github.com/awesome-project/repository",
    timestamp: "2 days ago",
    isFavorite: false,
  },
  {
    id: "6",
    type: "text" as const,
    content:
      "Meeting notes: Discussed Q4 goals, new product launch timeline, and team expansion plans.",
    timestamp: "3 days ago",
    isFavorite: true,
  },
  {
    id: "7",
    type: "image" as const,
    content: "design_mockup.png",
    timestamp: "3 days ago",
    isFavorite: false,
  },
  {
    id: "8",
    type: "link" as const,
    content: "https://docs.example.com/api/reference",
    timestamp: "1 week ago",
    isFavorite: false,
  },
];

const Clipboards = () => {
  return (
    <div className="px-4 lg:px-6">
      <h2 className=" mb-4">3 items</h2>

      <ResponsiveMasonry  columnsCountBreakPoints={{ 350: 1, 750: 2, 1250: 3, 1600: 4 }}
      
      >
        <Masonry columnsCount={4} gutter={"3.5rem"}   >
          {mockClipboardItems.map((item) => (
            <ClipboardCard key={item.id} data={item} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {/* <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 items-start">
        {mockClipboardItems.map((item) => (
          <ClipboardCard key={item.id} data={item} />
        ))}
      </div> */}
    </div>
  );
};

export default Clipboards;
