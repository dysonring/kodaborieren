# Frank Todo

- [x] Insert Worm instead of ❓
- [x] Fix responsiveness
- [ ] add Button Clicks

```javascript
import axios from "axios";
const BASE_URL = `vikiWillProvideThisSoJustCopyPaste`;

async function doEmote(emote: string) {
  this.isLoading = true;
  const body = { value: emote };
  const { status, data } = await axios.post(BASE_URL, body);
  this.isLoading = flase;
}
```

- [ ] Change Styling

# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
