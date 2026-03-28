# Wedding Website - Abraham Ada & Esther Kemi

A beautiful and simple vanilla HTML/CSS/JavaScript wedding website made for Abraham and Kemi (Adakemi2026).

## Project Structure

```
wedding-website/
├──                  # All website files (HTML, CSS, JS, images)
│   ├── index.html         # Home page
│   ├── our-story.html     # Couple's story
│   ├── details.html       # Wedding details
│   ├── gallery.html       # Photo gallery
│   ├── gifting.html       # Gift registry
│   ├── accommodations.html # Hotel information
│   ├── faq.html          # Frequently asked questions
│   ├── contact.html      # Contact form
│   ├── 404.html          # 404 error page
│   ├── styles.css        # Main stylesheet
│   ├── script.js         # Main JavaScript
│   └── images/           # All images (photos, graphics)
├── vercel.json           # Vercel deployment configuration
└── README.md            # This file
```

## Local Development

### Requirements
- Python 3.6+ (for local server)

### Setup

1. Clone or download the project
2. Navigate to project directory:
   ```bash
   cd wedding-website
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```
   Or with npm:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:3000`

## Making Changes

All editable files are in the root directory:
- **HTML files**: Edit page content and structure
- **styles.css**: Edit website styling
- **script.js**: Edit JavaScript functionality
- **images/**: Add or replace images (JPG, PNG etc)

Changes take effect when you refresh the browser (no rebuild needed).

## Deployment

### To Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect and deploy the static site
3. Configuration is in `vercel.json`

### Production Build
```bash
pnpm start
```
This runs on `http://localhost:8000`

## Features

✓ Responsive design (mobile, tablet, desktop)
✓ Gallery with lightbox viewer
✓ RSVP form
✓ Contact form
✓ FAQ accordion
✓ Countdown timer
✓ 404 error page
✓ Security headers configured

## Technologies

- HTML5
- CSS3 (with responsive design)
- Vanilla JavaScript (no frameworks)
- Images: PNG format

## Notes

- This is a pure vanilla HTML/CSS/JavaScript project
- No build tools required for development
- All styling is in a single CSS file for simplicity
- JavaScript uses vanilla DOM manipulation
- You would need Python 3.6+ to run locally because it runs on the server.

## Support

For questions or issues, send a main at adescographics2023@gmail.com.
