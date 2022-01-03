export interface IFramework {
  id: number;
  name: string;
  logo: string;
  description: string;
  metaData: {
    theme: {
      bg: string;
      text: string;
    };
  };
}