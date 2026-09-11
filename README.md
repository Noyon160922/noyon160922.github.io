# Personal academic website — Noyon Kumar Sarkar

A four-page static site: **About**, **Research**, **Publications**, **CV & Contact**.
No build step, no framework. Plain HTML + CSS. Edit a file, push, and it's live.

---

## 1. Put it on GitHub Pages

**The repository name matters.** Name it exactly `<your-username>.github.io` and the site
will live at `https://<your-username>.github.io` — no subfolder in the URL.

1. Create a GitHub account if you don't have one. Pick the username carefully: it becomes
   your web address. Something like `noyonsarkar` is good.
2. Go to <https://github.com/new>. Repository name: `noyonsarkar.github.io`
   (substitute your own username). Set it to **Public**. Don't add a README — you have one.
3. On the empty repo page, click **uploading an existing file**.
4. Drag in *everything* from this folder: `index.html`, `research.html`, `publications.html`,
   `cv.html`, and the `assets/` and `files/` folders. Keep the folder structure intact.
5. Click **Commit changes**.
6. Go to **Settings → Pages**. Under "Build and deployment", Source should be
   *Deploy from a branch*, branch `main`, folder `/ (root)`. Save.
7. Wait 1–2 minutes, then open `https://<your-username>.github.io`. Done.

If you prefer the command line:

```bash
cd noyon-site
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

### Updating later

Edit the file on GitHub directly (click the file → pencil icon → commit), or edit locally
and `git push`. Changes appear in under a minute.

---

## 2. Fill in the placeholders

Search the HTML files for `REPLACE` — every spot that needs your input is marked.
The checklist:

| Where | What to do |
|---|---|
| `index.html` | Add your photo. Save it as `assets/img/noyon.jpg` (square, ~600×600px), then swap the `<div class="photo-placeholder">` for the `<img>` tag in the comment right above it. |
| `index.html` | Replace `YOUR-GITHUB-USERNAME` and `YOUR-LINKEDIN` in the link chips. Remove the Google Scholar chip if you don't have a profile yet — or create one, it takes five minutes and makes your papers findable. |
| `research.html` | The three "Current Work" blocks are written from your lab's public research description, not from your actual projects. Replace them with what you are really building: what it is, what you measured, one figure each. Then delete the dashed `todo` box. |
| `research.html` / `cv.html` | Fill in the "Lab & fabrication" skills with the techniques and instruments you actually use. |
| `publications.html` | Add co-author names to each paper (they weren't in your CV). Update the Google Scholar and arXiv links at the top. Delete the "In Preparation" template section until you have something real there. |
| `cv.html` | Add your Gachon advisor's name under the M.S. entry. Confirm the end dates I guessed for your two industry jobs ("2025") — your CV said "Present", but you've moved to Korea. |
| `files/` | Replace `Noyon_Kumar_Sarkar_CV.pdf` whenever you update your CV. Keep the same filename and the download button keeps working. |

### Adding figures

Drop images into `assets/img/` and reference them like this:

```html
<img src="assets/img/actuator.jpg" alt="Soft actuator prototype" style="border-radius:6px;margin:14px 0">
<p class="faint">Fig. 1 — What the reader is looking at.</p>
```

Videos of actuators moving are worth more than photos. Upload to YouTube unlisted and embed,
or use `<video src="assets/img/clip.mp4" controls muted loop style="width:100%"></video>`
for short clips (keep them under ~10 MB — GitHub Pages is not a video host).

---

## 3. Changing the look

Everything visual lives in the `:root` block at the top of `assets/css/style.css`.

- **Accent colour** — change `--accent` (currently deep teal `#0f5c63`). Try `#7c3f2e`
  (brick), `#1e4a8c` (navy), `#4a4458` (aubergine). Change the dark-mode `--accent` too.
- **Fonts** — `--serif` for headings, `--sans` for body. Both loaded from Google Fonts in
  each page's `<head>`; swap the font names in both places.
- **Page width** — `--wrap` (860px). Wider feels more like a blog, narrower more like a paper.

Dark mode follows the visitor's system setting, and the ☾ button in the nav overrides it.

---

## 4. Adding a new page

Copy any existing page, change the `<title>`, the `<h1>`, and move the `class="active"`
to the matching nav link. Then add the new link to the `<div class="nav-links">` block in
**all** pages (there are four copies — they're duplicated on purpose so the site needs no
build step).

Common additions: **Teaching**, **Gallery** (lab photos, actuator videos), **Blog/Notes**,
or **Projects** for code you want to show off.

---

## 5. Custom domain (optional)

Buy a domain (~$12/year), e.g. `noyonsarkar.com`. Then:

1. Create a file named `CNAME` in the repo root containing just your domain, one line, no `https://`.
2. At your registrar, add four `A` records for `@` pointing to `185.199.108.153`,
   `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a `CNAME` record for `www`
   pointing to `<your-username>.github.io`.
3. In **Settings → Pages**, enter the domain and tick **Enforce HTTPS** once it's verified.

---

## 6. Getting found

- Create a **Google Scholar** profile and add your three arXiv papers. This is the single
  highest-value thing on this list for an academic.
- Add an **ORCID** iD (<https://orcid.org>) — free, permanent, and journals will ask for it.
- Put your site URL in your email signature, GitHub bio, LinkedIn, and on your papers.
- Ask your PI to link your page from the ECMS Lab members page. Inbound links from a
  university domain are what get you indexed quickly.

---

## File layout

```
.
├── index.html            About / landing page
├── research.html         Research themes and projects
├── publications.html     Papers with abstracts and DOI links
├── cv.html               Full CV + contact + references
├── README.md             This file
├── assets/
│   ├── css/style.css     All styling — design tokens at the top
│   ├── js/main.js        Theme toggle only
│   └── img/              Your photo and figures go here
└── files/
    └── Noyon_Kumar_Sarkar_CV.pdf
```
