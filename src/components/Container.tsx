export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mx-auto max-w-7xl px-2">{children}</div>;
}
