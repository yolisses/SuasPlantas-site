declare global {
    interface Window {
        OneSignal: any;
    }
  }

export const { OneSignal } = window;
