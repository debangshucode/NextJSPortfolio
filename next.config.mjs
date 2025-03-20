import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  trailingSlash: true, // Ensures proper routing for static files
};

export default withSentryConfig(
  nextConfig,
  {
    // Sentry Webpack Plugin options
    silent: true,
    org: "",
    project: "",
  },
  {
    // Sentry Next.js SDK options
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);
