import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		projects: [
			{
				test: {
					include: ["test/node/**/*.{test,spec}.{ts,tsx}", "**/*.node.{test,spec}.{ts,tsx}"],
					name: "node",
					environment: "node",
					setupFiles: "./test/setup.node.ts",
				},
			},
			{
				test: {
					include: ["test/browser/**/*.{test,spec}.{ts,tsx}", "**/*.browser.{test,spec}.{ts,tsx}"],
					name: "browser",
					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: "chromium" }],
					},
					setupFiles: "./test/setup.browser.ts",
				},
			},
		],
		coverage: {
			enabled: true,
			provider: "v8",
			reporter: ["json", "html", "json-summary"],
			include: ["src/**/*.{ts,tsx}"],
			exclude: ["**/*.{test,spec}.{ts,tsx}"],
		},
	},
	resolve: {
		alias: {
			"@": `${__dirname}/src`,
		},
	},
});
