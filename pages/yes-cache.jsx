import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Box } from "../components/Box";

const cache = createCache({
  key: "x",
});

export default function Page() {
  return (
    <CacheProvider value={cache}>
      <div>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </CacheProvider>
  );
}
