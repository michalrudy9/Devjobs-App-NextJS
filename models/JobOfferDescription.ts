export interface JobOfferDescription {
  id: number;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
}
