# yeshc.me

Personal site for Yesh Chandiramani, rebuilt with Astro, TypeScript, Tailwind CSS, and Cloudflare Workers Static Assets.

The v2 site is deployed at [yeshc.me/v2](https://yeshc.me/v2), leaving the current root site untouched.

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
