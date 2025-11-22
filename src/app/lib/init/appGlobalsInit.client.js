/*
    This file takes the data generated from getAppGlobal.server.js and initalizes the FrontEnd Client (store)
*/
"use client";

import { useEffect } from "react";
import { useAppStore } from "@/app/lib/stores/useAppStore";

export default function AppGlobalsInit({ globals }) {
  const setGlobals = useAppStore((state) => state.setGlobals);

  useEffect(() => {
    // setTimeout(() => {
    //   setGlobals(globals);
    // }, 5000);
    setGlobals(globals);
  }, []); // ✅ only run once on mount

  return null;
}
