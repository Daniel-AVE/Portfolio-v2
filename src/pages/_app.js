import RootLayout from "../app/layout";

export const App = ({ Component, pageProps }) => {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    );
};

export default App;