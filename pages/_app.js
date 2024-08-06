import '../styles/globals.css';
import '../styles/index.module.css'; // 引入其他样式

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
