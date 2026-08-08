export type LayerPosition =
  | "top"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "bottom";

export interface EcosystemLayer {
  id: string;

  title: string;

  shortTitle: string;

  description: string;

  businessValue: string;

  technologies: string[];

  position: LayerPosition;
}