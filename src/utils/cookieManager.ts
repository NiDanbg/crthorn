interface CookieOptions {
  expires?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
}

class CookieManager {
  private static instance: CookieManager;
  private cookieConsent: boolean = false;

  private constructor() {
    this.cookieConsent = localStorage.getItem('cookieConsent') === 'accepted';
  }

  public static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager();
    }
    return CookieManager.instance;
  }

  public setCookie(name: string, value: string, options: CookieOptions = {}): void {
    if (!this.cookieConsent) {
      console.warn('Cookie consent not given. Cookie not set.');
      return;
    }

    const defaultOptions: CookieOptions = {
      path: '/',
      secure: true,
      sameSite: 'Strict',
    };

    const cookieOptions = { ...defaultOptions, ...options };
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (cookieOptions.expires) {
      const date = new Date();
      date.setTime(date.getTime() + cookieOptions.expires * 1000);
      cookieString += `; expires=${date.toUTCString()}`;
    }

    if (cookieOptions.path) cookieString += `; path=${cookieOptions.path}`;
    if (cookieOptions.domain) cookieString += `; domain=${cookieOptions.domain}`;
    if (cookieOptions.secure) cookieString += '; secure';
    if (cookieOptions.sameSite) cookieString += `; samesite=${cookieOptions.sameSite}`;

    document.cookie = cookieString;
  }

  public getCookie(name: string): string | null {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

  public deleteCookie(name: string, path: string = '/'): void {
    this.setCookie(name, '', { expires: -1, path });
  }

  public setConsent(consent: boolean): void {
    this.cookieConsent = consent;
    localStorage.setItem('cookieConsent', consent ? 'accepted' : 'declined');
  }

  public hasConsent(): boolean {
    return this.cookieConsent;
  }

  public clearAllCookies(): void {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const name = cookie.trim().split('=')[0];
      this.deleteCookie(name);
    }
  }
}

export default CookieManager; 