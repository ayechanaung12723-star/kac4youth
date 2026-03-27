import "../styles/globals.css";

export const metadata = {
  title: "KAC For Youth",
  description: "Build Your Future with AI, Crypto & Online Skills",
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