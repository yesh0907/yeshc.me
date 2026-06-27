# yeshc.dev

Personal site for Yesh Chandiramani, rebuilt with Astro, TypeScript, Tailwind CSS, and Cloudflare Workers Static Assets.

The site is deployed at [yeshc.dev](https://yeshc.dev), with [mysite.yeshc.workers.dev](https://mysite.yeshc.workers.dev) kept as the Workers preview URL.

## Development

```sh
pnpm install
pnpm dev
```

## Validation

```sh
pnpm check
pnpm build
pnpm deploy:dry-run
```

Production deployments run from `main`. Pull requests upload versioned Worker previews. Both workflows require `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repository secrets.
