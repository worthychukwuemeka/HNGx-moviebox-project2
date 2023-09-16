import "./globals.css";

export const metadata = {
  title: "Movie Box",
  description: "View organized details on any movie without hasles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
