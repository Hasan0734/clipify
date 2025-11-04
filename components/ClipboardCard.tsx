"use client";
import React, { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { File, FileText, Link2, Star, Image, Check, Copy } from "lucide-react";
import { Button } from "./ui/button";

type ClipType = "text" | "image" | "link";

type DataTypes = {
  id: string;
  type: ClipType;
  content: string;
  timestamp: string;
  isFavorite: boolean;
};

const typeIcons = {
  text: FileText,
  image: Image,
  link: Link2,
} as const;

const ClipboardCard = ({ data }: { data: DataTypes }) => {
  const [isFavorite, setIsFavorite] = useState(true);
  const Icon = typeIcons[data.type];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // onCopy(id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="@container/card rounded-md p-3 gap-0 w-full">
      <CardHeader className="p-0">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium capitalize">{data.type}</span>
          </div>

          <button
            // onClick={() => onToggleFavorite(id)}
            className="p-1 rounded-lg hover:bg-accent/50 transition-colors"
          >
            <Star
              className={`w-5 h-5 transition-colors ${
                isFavorite
                  ? "fill-primary text-primary"
                  : "text-muted-foreground"
              }`}
            />
          </button>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <p className="text-gray-400 text-base select-all">
          {data.content}
        </p>
      </CardContent>

      <CardFooter className="flex-col items-start gap-1.5 text-sm border-t pt-2!">
        <div className="flex items-center justify-between w-full text-sm">
          <p className="text-muted-foreground">2 hours ago</p>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleCopy}
            className="gap-2 hover:bg-primary/10"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3" />
                <span className="text-xs">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span className="text-xs">Copy</span>
              </>
            )}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ClipboardCard;
