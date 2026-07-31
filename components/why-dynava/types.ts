import { ElementType } from "react";

export interface Principle {
  id: number;
  title: string;
  description: string;
  icon: ElementType;
}

export interface Quote {
  text: string;
  author?: string;
}