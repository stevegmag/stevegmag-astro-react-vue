import { defineConfig } from 'astro/config';

import icon from "astro-icon";

import react from '@astrojs/react';
import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [react(), vue()],
});
