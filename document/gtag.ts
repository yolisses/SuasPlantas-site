declare global {
    interface Window {
        dataLayer?: any[]
    }
}

export function gtag(...rest:any[]) {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}
