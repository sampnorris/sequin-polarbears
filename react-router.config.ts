import type { Config } from "@react-router/dev/config";

// Pure static site generation: no runtime server, every listed route is
// pre-rendered to static HTML at build time into build/client/.
export default {
  ssr: false,
  prerender: ["/"],
} satisfies Config;
