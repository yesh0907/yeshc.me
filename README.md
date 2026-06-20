# yeshc.me

Personal site for Yesh Chandiramani, rebuilt with Astro, TypeScript, Tailwind CSS, and Cloudflare Workers Static Assets.

The site is deployed at [mysite.yeshc.workers.dev](https://mysite.yeshc.workers.dev).

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
