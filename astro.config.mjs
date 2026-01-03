// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
const isVercel = process.env.VERCEL === '1' || process.env.VERCEL === 'true';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

const githubRepo = process.env.GITHUB_REPOSITORY;
const [githubOwner, githubRepoName] = githubRepo ? githubRepo.split('/') : [undefined, undefined];

const defaultSite =
  isVercel && process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : isGitHubActions && githubOwner && githubRepoName
      ? `https://${githubOwner}.github.io/${githubRepoName}`
      : 'https://dennisklappe.github.io';

const site = process.env.ASTRO_SITE ?? defaultSite;

const defaultBase = isGitHubActions && githubRepoName ? `/${githubRepoName}` : '/';
const allowEnvBaseOnVercel = process.env.ASTRO_BASE_ALLOW_VERCEL === '1';
const base =
  isVercel && !allowEnvBaseOnVercel ? '/' : (process.env.ASTRO_BASE ?? (isGitHubActions ? defaultBase : '/'));

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
      langs: [],
      wrap: true,
    },
  },
});
