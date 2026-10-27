# Agent tool design project site

One static page. Plain HTML, CSS, and JavaScript. No dependencies or build step.

Preview from this directory:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/.

Publish the contents of this folder at `https://mateig.github.io/agent-tool-design/`.
All asset and download links are relative, so the site works under that subpath.

- `downloads/paper.pdf`: the final paper.
- `downloads/companion_video.mp4`: a 75-second video covering all five tasks.
- `downloads/code.zip`: simulation, experiment code, Panda assets, and selected designs.
- `downloads/data.zip`: five-task trial data, summaries, scoring protocol, and scope record.
- `downloads/results.json`: machine-readable results.
- `assets/videos/`: 15 rollout videos (five tasks × three models) and poster images.
- `downloads/video-provenance.json`: recorded trial identities, outcome verification, and playback speeds for the videos.

GitHub Pages: in Settings → Pages, choose Deploy from a branch, main, and / (root).

The gallery includes failed door attempts from Sol and Opus. The Opus door example is an additional attempt with a 32,000-token response budget and low reasoning effort. It is stored separately from the original benchmark and does not change the paper’s rates. See video-provenance.json for source records and outcomes.

The video table uses three model rows and five task columns. The navigation links to the paper and code archive.
