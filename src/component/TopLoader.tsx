"use client";
import NProgress from "nprogress";
import { useEffect } from "react";
export default function TopLoader() {
  useEffect(() => {
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, 400);
    return () => {
      NProgress.done();
    };
  }, []);
  return null;
}
