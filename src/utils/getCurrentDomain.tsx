import { headers } from "next/headers";

export default function getCurrentDomain() {
  const domain = headers().get("host");
  const protocol = headers().get("x-forwarded-proto");

  return `${protocol}://${domain}`;
}
