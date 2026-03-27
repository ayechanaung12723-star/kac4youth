import "../styles/globals.css";

export const metadata = {
  title: "KAC For Youth",
  description: "AI, Crypto & Online Skills Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white antialiased">
        {children}
      </body>
    </html>
  );
}