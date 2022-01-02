export interface ITheme {
    name: string;
  className: string;
  accentColor: string;
  secondaryColor: string
}

export interface IThemeConfig {
  id: number;
  default: 'LIGHT' | 'DARK' | 'SYSTEM';
  theme: ITheme;
}