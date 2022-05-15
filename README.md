# me

[![Netlify Status](https://api.netlify.com/api/v1/badges/8b0cb723-ac99-49cf-b081-fc494be3b410/deploy-status)](https://app.netlify.com/sites/mariehmai/deploys)

[Personal website](https://mariehmai.me) built with [Hugo](https://gohugo.io/).

## Development

Serves the website locally.

```sh
cd <workspace>/me
hugo server -D
```

> **Note**: `-D` (`--buildDrafts`) includes the content marked as draft. [See](https://gohugo.io/getting-started/usage/#test-installation) for complete list of flags.

## Deployment

This site is hosted on [Netlify](https://app.netlify.com/) and deployed using the `hugo` command, rendering the site into the `public/` folder.

> **Note**: Running `hugo` does not remove generated files before building, so the `public/` folder should be remove before executing the command.
