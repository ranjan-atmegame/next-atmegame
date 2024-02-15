"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ToasterMessage() {
  const [localStorageEnabled, setLocalStorageEnabled] = useState(true);

  useEffect(() => {
    try {
      localStorage.getItem("TEST");
    } catch (error) {
      setLocalStorageEnabled(false);
    }
  }, []);

  return (
    <>
      {!localStorageEnabled ? (
        <div>
          <p className="errorModal">
            Local storage is disabled. Please enable it for the best experience.
          </p>
        </div>
      ) : null}
    </>
  );
}
