# The Recipe Remixr

<img width="567" height="747" alt="AA" src="https://github.com/user-attachments/assets/f35d331f-0013-429c-bb23-4bc958608018" />


https://misoprettystacks.github.io/Recipe-Remixxer/

A static GitHub Pages app that lets you type random leftovers from your fridge and generates recipe ideas that minimize food waste.

## Files

- `index.html` — app structure
- `styles.css` — mobile-first UI design
- `app.js` — recipe matching logic, randomizer, saved recipes, and history
- `manifest.webmanifest` — basic installable web-app metadata

## Run locally

Open `index.html` in your browser.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files in this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/root`, then save.
6. GitHub will give you a public app link after it deploys.

## Notes

This version runs entirely in the browser with no backend and no API keys. Saved recipes and search history are stored in local browser storage.
