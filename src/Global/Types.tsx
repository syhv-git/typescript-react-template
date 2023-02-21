import React from "react";

export type Paths = "/" | "/products" | "/FAQs"
export type Mode = "light" | "dark"

export interface PathTitles {
  title: React.ReactNode,
  to: Paths,
}
