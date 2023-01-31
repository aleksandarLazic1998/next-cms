import { wrapper } from "@/src/store/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import "@/styles/globals.css";
import { Layout } from "@/src/components/Layout/Layout";

const App = ({ Component, ...rest }: Omit<AppProps, "pageProps">) => {
	const { store, props } = wrapper.useWrappedStore(rest);
	return (
		<Provider store={store}>
			<Layout>
				<Component {...props.pageProps} />
			</Layout>
		</Provider>
	);
};

export default App;
