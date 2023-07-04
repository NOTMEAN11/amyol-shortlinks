"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

interface IProps {
  children: React.ReactNode;
}

function AuthProvider({ children }: IProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
export default AuthProvider;
