import { Providers } from "./providers";
import { headers } from "next/headers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Providers cookie={headers().get("cookie") ?? ""}>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
