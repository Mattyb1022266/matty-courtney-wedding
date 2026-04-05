# Matty & Courtney — Disney World Wedding App 🏰💍

Your complete guide to setting up, going live and making edits.

---

## WHAT'S IN THIS FOLDER

| File | What it does |
|---|---|
| `index.html` | The entire app — all screens, all content, all logic |
| `manifest.json` | Makes it installable as an app on iPhone & Android |
| `service-worker.js` | Lets the app work offline once installed |
| `icon.png` | The app icon that appears on guests' home screens (replace with your own!) |
| `README.md` | This guide |

---

## STEP 1 — PUT IT ON GITHUB

1. Go to **github.com** and sign in
2. Click the **+** button (top right) → **New repository**
3. Name it something like `matty-courtney-wedding`
4. Set it to **Public**
5. Click **Create repository**
6. On the next page, click **uploading an existing file**
7. Drag ALL the files from this folder into the upload box
8. Scroll down and click **Commit changes**

Your files are now on GitHub! ✅

---

## STEP 2 — CONNECT TO NETLIFY (goes live in 2 minutes)

1. Go to **netlify.com** and sign up (free — use your GitHub account to sign in)
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub**
4. Select your `matty-courtney-wedding` repository
5. Leave all settings as default
6. Click **Deploy site**

Netlify will give you a URL like `https://amazing-disney-123.netlify.app` — your app is live! 🎉

**To get a custom domain** (like `mattycourtneydisneyworld.com`):
- Buy a domain on Namecheap or Google Domains (~£10/year)
- In Netlify: Site settings → Domain management → Add custom domain
- Follow the instructions — takes about 10 minutes to set up

---

## STEP 3 — ADDING THE APP ICON

Replace `icon.png` with your own image (512x512 pixels recommended).
A simple pink/rose gold background with your initials works beautifully.
Free tool to create one: **canva.com** — search "App Icon" template.

---

## HOW TO EDIT THE APP AFTER IT'S LIVE

Every edit follows the same simple steps:

1. Go to your repository on **github.com**
2. Click on **index.html**
3. Click the **pencil icon** (✏️) — top right of the file
4. Find the section you want to change (search with Ctrl+F / Cmd+F)
5. Make your edit
6. Click **Commit changes** (green button, bottom of page)
7. Wait ~30 seconds — the live site updates automatically!

---

## WHAT TO EDIT AND WHERE TO FIND IT

Everything editable is marked with **📝 EDIT HERE** in the code.
Here's a cheat sheet:

### Change the couple's names or trip dates
Search for: `hdr-title` — first result is the names
Search for: `hdr-sub` — first result is the trip headline

### Change the countdown date / wedding time
Search for: `WEDDING_DATE`
Change the date and time in: `new Date('2027-04-08T14:00:00')`
Format is: YYYY-MM-DD then T then HH:MM:SS (24-hour clock)

### Change when the secret reveal unlocks
Search for: `REVEAL_DATE`
Change to the date/time you want it to unlock (currently: morning of 7 April)

### Edit your personal message to guests
Search for: `PERSONAL_MESSAGE`
Replace the text between the backtick characters (` `)

### Edit the wedding day schedule
Search for: `DAY_SCHEDULE`
Each line looks like: `{ time: '2:00pm', text: 'Ceremony text here' }`
Add, remove or change lines as needed

### Edit hotel tips
Search for: `SCREEN 2: HOTEL` — all hotel content is below this comment

### Edit Disney tips
Search for: `SCREEN 3: TIPS` — all tips content is below this comment

### Edit transport info
Search for: `SCREEN 4: TRANSPORT` — all transport content is below this comment

### Edit FAQs
Search for: `faq-q` — each FAQ follows the same pattern

---

## WHEN YOU MAKE AN UPDATE — FORCE GUESTS TO GET THE NEW VERSION

If you make a significant change and want to make sure all guests see the new version:

1. Open `service-worker.js` in GitHub
2. Find the line: `const CACHE_NAME = 'wedding-app-v1';`
3. Change `v1` to `v2` (or `v3`, `v4` etc. — just increment it each time)
4. Commit the change

This clears everyone's cached version and forces a fresh download next time they open the app.

---

## SHARING WITH GUESTS

Once your site is live, share the URL with guests however you like:
- In a WhatsApp group message
- On a physical card with the holiday details
- Via email
- As a QR code (free generator: qr-code-generator.com)

**On iPhone:** Guests open the link in Safari → tap the share icon → "Add to Home Screen"
**On Android:** Guests open the link in Chrome → tap the three dots menu → "Add to Home Screen"

The app will then appear on their home screen just like a regular app, with your icon.

---

## NEED HELP?

If anything doesn't work or you want to add new features, just ask Claude!
You can paste any part of the code into a new chat and say "I want to change X to Y".

---

*Built with love for Matty & Courtney's Disney World wedding, April 2027* 🌸
