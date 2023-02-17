export type Titles = "Home" | "Products" | "FAQs" | "Contact Us"
export type Paths = "/" | "/products" | "/FAQs"
export type Mode = "light" | "dark"

export interface PathTitles {
  title: Titles,
  to: Paths,
}
