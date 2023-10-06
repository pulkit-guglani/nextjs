import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metaData = {
  title: "promptopia",
  description: "Discover and share AI prompts for ChatGPT",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
