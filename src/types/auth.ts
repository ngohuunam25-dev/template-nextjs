import { ExpectAny } from "./common";

export type CredentialsAuhorizeType = Record<"email" | "password", string> & {
  [key: string]: ExpectAny;
};
