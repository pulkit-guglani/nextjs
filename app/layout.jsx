import Nav from "@components/Nav";
import "@styles/globals.css";

export const metaData = {
  title: "promptopia",
  description: "Discover and share AI prompts for ChatGPT",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
