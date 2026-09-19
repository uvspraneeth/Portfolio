# Modern data scientist portfolio

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/uppalavenkatasaipraneeth19-gmailcoms-projects/v0-modern-data-scientist-portfolio)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/S2Xgmlo6Lwt)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/uppalavenkatasaipraneeth19-gmailcoms-projects/v0-modern-data-scientist-portfolio](https://vercel.com/uppalavenkatasaipraneeth19-gmailcoms-projects/v0-modern-data-scientist-portfolio)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/S2Xgmlo6Lwt](https://v0.dev/chat/projects/S2Xgmlo6Lwt)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Publishing Notes

Add a Markdown file to `content/posts/` and it will appear automatically in the portfolio blog. Use this frontmatter at the top of each file:

```md
---
title: "Your post title"
excerpt: "A short summary for the blog index and search previews."
date: "2026-09-19"
tags:
	- Data
	- Machine learning
readTime: "5 min read"
---

Write your article here using Markdown.
```

The filename becomes the URL, for example `content/posts/my-note.md` becomes `/blog/my-note`. The site follows the desktop light/dark preference automatically and updates when the system theme changes.

## Updating Credentials

Edit `lib/credentials.ts` to add certifications or learning items. Set `kind` to either `Certification` or `Learning`; the portfolio will place the item in the matching gallery automatically. Add a verification URL when one is available.

## Updating Images

Put image files in `public/` and update the matching entry in `lib/site-assets.ts`. The profile image is controlled by `siteAssets.profile`; replace `/placeholder-user.jpg` with a path such as `/profile.jpg` and keep the file at `public/profile.jpg`.

Project images are set beside each project in `lib/portfolio-data.ts`. Replace the `image` value with a file path such as `/projects/churn.jpg`, then place that file at `public/projects/churn.jpg`.
