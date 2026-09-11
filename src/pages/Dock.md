# Dock. by Nitytec.

> A lightweight, 100% local Chrome companion that keeps your critical tabs in front of you, expands text snippets instantly, and sends prompts to AI in one click.

---

## The Problems Dock Solves

### 1. Tab-Switching Fatigue (Companions)

- **The Problem:** You’re writing an email, responding to a customer ticket in Zendesk, or drafting notes in Google Docs, and you constantly have to flip back and forth between tabs to check a canned response sheet, reference documentation, or watch a tutorial. Every tab switch breaks your focus.
- **The Solution:** Click the pin icon (**`⊞`**) on any open tab or enter any URL. Dock launches a dedicated, persistent companion window alongside your active workflow with 100% native authentication for Gmail, Twitter, Slack, Google Docs, and all web apps. You can open multiple companions simultaneously, bring them to front, toggle full screen, or resize them with zero restrictions.

### 2. Repetitive Typing (Snippets)

- **The Problem:** You’re typing the same greetings, replies, email templates, code blocks, or customer answers dozens of times a day.
- **The Solution:** Save snippets with a `do/` shortcut (e.g., `do/reply`, `do/links`, `do/meet`). Type `do/reply` in any text box, search field, or rich document editor — it expands to your saved content immediately. No need to press Enter or Space.

### 3. AI Copy-Paste Friction (AI Prompts)

- **The Problem:** Sending text or an image to ChatGPT, Claude, or Gemini requires opening the AI tab, pasting the text, typing your prompt, and hitting submit.
- **The Solution:** Highlight any text or right-click any image on any webpage -> select **Dock** -> pick your AI target. Dock attaches your saved prompt instructions, opens the AI model, pastes the content, and auto-submits.

---

## Core Principles

- **100% Local & Private:** All snippets, prompts, and companion states are stored exclusively on your device using Chrome's local storage. No tracking, no external servers, no cloud sync.
- **Zero Confirmation Friction:** Actions execute immediately. Pinning a tab or saving a snippet requires a single click.
- **Non-Intrusive Design:** Built with high-contrast monochrome typography (Bodoni Moda & Plus Jakarta Sans) inspired by Nitytec editorial design.

---

## Features Summary

| Feature                | Shortcut / Trigger           | Description                                                                                                                                                      |
| :--------------------- | :--------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Dock Companions**    | Popup → `⊞` Pin / URL Launch | Launches dedicated persistent companion windows for any tab or URL. 100% native auth for Gmail, Twitter, Slack, Docs, with full screen and multi-window support. |
| **Instant Snippets**   | `do/shortcut_name`           | Auto-replaces typed shortcut with your expanded canned text across all web inputs and rich editors.                                                              |
| **AI Action Dispatch** | Right-Click Context Menu     | Sends highlighted text or images with custom prompt instructions directly to ChatGPT, Claude, or Gemini.                                                         |

---

## Installation & Development

```bash
# 1. Install dependencies
pnpm install

# 2. Build production bundle
pnpm turbo build --force

# 3. Load in Chrome
# Open chrome://extensions -> Enable Developer Mode -> Click "Load unpacked" -> Select the `dist/` directory.
```

---

## License

MIT © [Nitytec](https://nitytec.app)
