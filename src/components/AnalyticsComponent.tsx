"use client"

import React, { useEffect } from 'react';
import CookieHelper from './../helpers/CookieHelper'
import { usePathname } from 'next/navigation';


export interface AnalyticsComponentProps {
  pathname: string;
}

export function AnalyticsComponent() {
  const pathname = usePathname();
  
  const analyticEndPoint = process.env.NEXT_PUBLIC_APP_ANALYTIC_ENDPOINT || '';
  const enterRequestEndPoint = process.env.NEXT_PUBLIC_APP_ENTER_REQUEST_ENDPOINT || '';
  const updateRequestEndPoint = process.env.NEXT_PUBLIC_APP_UPDATE_REQUEST_ENDPOINT || '';

  const seconds = 60;
  let requestId: string | null = null;
  const cookieHelper = CookieHelper();

  const onLoad = async () => {
    if (process.env.VITE_REACT_APP_ENVIRONMENT == 'DEVELOPMENT')
      deleteCookie('trackId');

    const trackIdFromCookies = cookieHelper.getCookie('trackId');
    if (trackIdFromCookies === null) {
      const currentURL = window.location.href;
      const operatingSystem = getOS();
      const dataAnalytic = await getDataAnalytic(currentURL, operatingSystem);
      
      if (!dataAnalytic) {
        console.error("Analytic aborted.");
        return;
      }
      const trackId = dataAnalytic.trackId;
      setCookie('trackId', trackId, 365);
      requestId = dataAnalytic.requestId;
    } else {
      const result = await sendEnterRequest();
      requestId = result;
    }

    const miliseconds = seconds * 1000;
    setInterval(sendUpdateRequest, miliseconds);
  };

  const sendEnterRequest = async () => {
    const currentURL = window.location.href;
    const trackId = cookieHelper.getCookie('trackId');
    const request = {
      URL: currentURL,
      TrackId: trackId,
    };

    try {
      const response = await fetch(enterRequestEndPoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getOS = () => {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  };

  const sendUpdateRequest = async () => {
    const currentURL = window.location.href;
    const request = {
      URL: currentURL,
      RequestId: requestId,
    };

    try {
      const response = await fetch(updateRequestEndPoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (response.ok) {
        console.log('update request sent successfully');
      } else {
        console.error('Failed to send update request');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const trackIdFromCookies = cookieHelper.getCookie('trackId');
    if (trackIdFromCookies) {
      sendEnterRequest();
      return;
    }
    onLoad();
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('beforeunload', sendUpdateRequest);
  }, []);

  function setCookie(nome: string, valor: any, diasParaExpirar: number) {
        var data = new Date();
        data.setTime(data.getTime() + (diasParaExpirar * 24 * 60 * 60 * 1000));
        var expires = "expires=" + data.toUTCString();
        document.cookie = nome + "=" + valor + "; " + expires;
    }

    function deleteCookie(name: string) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  

    async function getDataAnalytic(url: string, operatingSystem: string | null) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "URL": url,
        "operatingSystem": operatingSystem
        });

        var requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        try {
            const response = await fetch(analyticEndPoint, requestOptions);
            const result = await response.json();
            return result;
        } catch (error) {
            console.log('error', error);
            return null;
        }
    }

  return (<></>);
};

export default AnalyticsComponent;
