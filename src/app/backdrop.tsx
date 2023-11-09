"use client"

import AutoBackdrop, { setAutoHideBackdrop, setAutoShowBackdrop } from '@/layouts/AutoBackdrop';
import React, { useEffect, useState } from 'react'

function Backdrop() {

    const [showBackdrop, setShowBackdrop] = useState(false);

    useEffect(() => {
      setAutoShowBackdrop(() => {
        // set backdrop visible
        setShowBackdrop(true);
      });
      setAutoHideBackdrop(() => {
        // set backdrop invisible
        setShowBackdrop(false);
      });
    }, []);

  return (
    <>
      <AutoBackdrop open={showBackdrop} />
    </>
  )
}

export default Backdrop