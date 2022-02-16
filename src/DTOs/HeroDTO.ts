export interface HeroDTO {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  description: string;
}