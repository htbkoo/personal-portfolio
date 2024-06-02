import { type ReactNode } from "react";

export default interface ContactMetadata {
    href: string;
    img:
        | {
              src: string;
              alt: string;
          }
        | {
              node: ReactNode;
              alt: string;
          };
}
