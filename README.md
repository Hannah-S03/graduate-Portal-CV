# Graduate Hub (neutral copy)

Created by Hannah.

A personalised, browser-only hub for graduates: goals and tasks, weekly goals and updates, a calendar, reflection, quick links, learning, a company hub, meetings and feedback, achievements, an "AI agent" Monday overview, and a Programme team view (`admin.html`).

This is a **neutral copy**. It has no company name, logo or links of its own. Everything you see is **sample content** (a yellow banner says so) for you to replace. The logo is a placeholder (the letters ABC in a circle).

Everything graduates enter is saved **only in their own browser**. There is no server and no login.

## Run it on your computer (Windows)

1. Extract the zip into a new empty folder, and open the folder that contains `index.html`.
2. Click the address bar at the top of File Explorer, type `cmd` and press **Enter**.
3. Type `python -m http.server 8001` and press **Enter**. Leave the window open. (If Python is not found, try `py -m http.server 8001`.)
4. In your browser go to `localhost:8001` and press **Ctrl + F5**.
5. The programme team page is `localhost:8001/admin.html` (it is not in the menu).
6. To stop, click the black window and press **Ctrl + C**.

## What to change (open files in Notepad, save, then press Ctrl + F5)

| File | What it controls |
|---|---|
| `src/config.js` | The hub name, your organisation's name, the footer credit (`creditName`), the name pre-filled on the set-up form (`defaultName`), the logo and icon, the programme dates, the contact email, and the sample-content banner (`usingDummyData`) |
| `src/data/company.js` | Company text and portfolios (blank = not shown) |
| `src/data/links.js` | The fixed Quick links (these are `example.com` samples) |
| `src/data/team.js` | Key contact role cards (names and emails are blank) |
| `src/data/resources.js` | The Key information buttons (add folder addresses) |
| `src/data/placement.js`, `content.js`, `overview.js` | The programme details, objectives, FAQs and skills |
| `src/data/learning.js` | Required training and the courses list |
| `assets/logo-white.svg`, `assets/icon.svg` | The placeholder logo and browser-tab icon |
| `assets/site.css` | Colours and style (the values at the top of the file) |

Plain text inside quotes; keep the commas and brackets. If a page goes blank after an edit, check you have not deleted a quote or a comma.

## Put it in your own GitHub repository

1. On github.com click **+**, then **New repository**. Name it, choose **Private**, leave **Add a README** unticked, and click **Create repository**.
2. Click **uploading an existing file**.
3. Open the folder that contains `index.html`, press **Ctrl + A** to select everything inside it (the files and folders, not the folder itself), and drag it into the GitHub page.
4. Type a short message and click **Commit changes**.

Keep the repository **private** until you have replaced all the sample content. Do not publish another organisation's logo, links, staff details or programme material without their permission.

## Backups

Your data is in the browser, not in these files. On the hub's **My profile**, **My data** has **Download my data**; the programme team page has **Download a backup**. Keep a zip of this folder somewhere safe as well.
