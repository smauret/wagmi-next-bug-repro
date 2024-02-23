"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useCallback } from "react";
import { setCookie } from "./lib/actions";

export default function Page() {
  const { status } = useAccount();

  const handleSetCookie = useCallback(async () => {
    await setCookie();
  }, []);

  return (
    <div>
      <ConnectButton />
      <div>{status}</div>
      <button onClick={handleSetCookie}> Set cookie in header</button>
    </div>
  );
}
