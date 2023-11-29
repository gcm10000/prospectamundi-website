"use client"

import React from 'react';
import { setRoute } from '@/services/redirectService';
import { useRouter } from 'next/navigation';


function RedirectComponent() {
    const router = useRouter();
    setRoute(router);

  return (
    <></>
  )
}

export default RedirectComponent;
