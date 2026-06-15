---
name: project-context
description: Core context about this project. Read at the start of every session before doing anything else.
---

# Project: Yuval's guitarist site

**Owner**: Yuval
**Goal**: Personal PR site for me as a fingerstyle guitarist. Will later add a tab store at /tabs.

## Stack (decided, don't suggest alternatives)
- Astro + Tailwind CSS
- Deploy target: Cloudflare Pages
- Hebrew-first, RTL primary

## Reserved routes
- `/tabs` — future store. Don't put anything else there.

## Hard constraints
- RTL must be correct everywhere. `dir="rtl"` on `<html>`. Use `unicode-bidi: isolate` for inline English (song titles, names).
- High contrast text (WCAG AA minimum).
- No heavy page builders, minimal client-side JS.
- Mobile-first.

## Design direction
- Editorial-warm
- Fonts: Frank Ruhl Libre (headings), Assistant (body), both Google Fonts
- Warm off-white background, muted earth-tone accent, high contrast text

## Process
- Always write a plan before writing code on any task larger than a single file.
- Show me the plan, wait for approval, then code.
- Use clearly-labeled placeholders for missing content (photos, videos, bio text).
