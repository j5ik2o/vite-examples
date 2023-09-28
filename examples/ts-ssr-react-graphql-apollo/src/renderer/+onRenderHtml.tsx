// https://vite-plugin-ssr.com/onRenderHtml
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import { getDataFromTree } from "@apollo/client/react/ssr";
import App from "./App";
import { PageContextServer } from "./types";
import { makeApolloClient } from "./apollo";

const onRenderHtml = async (pageContext: PageContextServer) => {
  const { Page } = pageContext;
  const apolloClient = makeApolloClient(pageContext.apolloIntialState);

  // See https://www.apollographql.com/docs/react/performance/server-side-rendering/
  const tree = (
    <App apolloClient={apolloClient}>
      <Page />
    </App>
  );
  const pageHtml = await getDataFromTree(tree);
  const apolloIntialState = apolloClient.extract();

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="page-content">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      apolloIntialState,
    },
  };
};

export default onRenderHtml;
