import { useEffect } from 'react';

export function NotificationTags() {
  const scriptString = `window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
  OneSignal.init({
    appId: "0f624dd8-04a5-473b-b2ed-6afb3d72c6be",
  });
});`;

  useEffect(() => {
    importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');
  }, []);

  return (
    <>
      <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async="" />
      <script>{scriptString}</script>
    </>
  );
}
