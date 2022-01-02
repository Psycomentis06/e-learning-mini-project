import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITheme, IThemeConfig } from './theme.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private $themeSubject: BehaviorSubject<IThemeConfig>;
  readonly _themeObservable: Observable<IThemeConfig>;
  constructor() {
    this.$themeSubject = new BehaviorSubject<IThemeConfig>(
      this.getDefaultTheme()
    );
    this._themeObservable = this.$themeSubject.asObservable();
  }

  getDefaultTheme(): IThemeConfig {
    for (let index = 0; index < environment.theme.presets.length; index++) {
      if (environment.theme.presets[index].id === environment.theme.default)
        return <IThemeConfig>environment.theme.presets[index];
    }
    return {
      default: 'SYSTEM',
      id: 1000,
      theme: {
        className: 'base',
        name: 'base',
      },
    };
  }

  getFromLocal(): IThemeConfig | null {
    let currentTheme: string | null = localStorage.getItem(
      environment.theme.storage_key_name
    );
    if (currentTheme) {
      return <IThemeConfig>JSON.parse(currentTheme);
    }
    return null;
  }

  saveLocal(theme: IThemeConfig): void {
    localStorage.setItem(
      environment.theme.storage_key_name,
      JSON.stringify(theme)
    );
  }

  setTheme(theme: IThemeConfig) {
    this.updateUI(theme, this.getCurrentTheme())
    this.saveLocal(theme);
    this.$themeSubject.next(theme);
  }

  getCurrentTheme(): IThemeConfig {
    return this.$themeSubject.getValue();
  }

  getThemes(): IThemeConfig[] {
    return <IThemeConfig[]>environment.theme.presets;
  }

  updateUI(theme: IThemeConfig, oldTheme: IThemeConfig): void {
    const setDark = () => document.documentElement.classList.add('dark');
    const setLight = () => document.documentElement.classList.remove('dark');
    const setSystem = () => {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      )
        setDark();
      else setLight();
    };
    switch (theme.default) {
      case 'DARK':
        setDark();
        break;
      case 'LIGHT':
        setLight();
        break;

      case 'SYSTEM':
        setSystem();
        break;
      default:
        setSystem();
        break;
    }

    document.documentElement.classList.add(theme.theme.className)
    document.documentElement.classList.remove(oldTheme.theme.className)
  }
}
