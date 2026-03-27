# Quick Start Guide

## Project Overview
A beautiful, fully-functional vanilla JavaScript wedding website for Abraham Ada & Esther Kemi's wedding on May 23, 2026.

## Pages Available
- **Home** (`index.html`) - Main landing page with countdown timer
- **Our Story** (`our-story.html`) - Couple's love story with expandable sections
- **Wedding Details** (`details.html`) - Event times, locations, RSVP information
- **Gallery** (`gallery.html`) - Photo gallery with lightbox viewer
- **Gifting** (`gifting.html`) - Gift options and bank transfer details
- **Accommodations** (`accommodations.html`) - Hotel listings and booking info
- **FAQ** (`faq.html`) - Frequently asked questions with accordion menu
- **Contact** (`contact.html`) - Contact coordinators and send messages

## Key Features

### Interactive Elements
- **Mobile-Responsive Navigation** - Hamburger menu that works on all devices
- **Countdown Timer** - Displays days, hours, minutes, seconds to the wedding
- **FAQ Accordion** - Click questions to expand/collapse answers
- **Hotel Filter** - Filter accommodations by price range (Luxury/Mid-Range/Budget)
- **Image Lightbox** - Click gallery images to view full-size with close button
- **Form Validation** - RSVP and contact forms with error checking

### Accessibility Features
- Keyboard navigation support (Tab to navigate, Escape to close modals)
- ARIA labels and attributes for screen readers
- Semantic HTML structure
- High contrast colors for readability
- Alt text on all images

### Security Features
- Input sanitization to prevent XSS attacks
- Form validation for data quality
- No inline JavaScript (all events use proper event listeners)
- Safe error message handling

## How to Customize

### Change Wedding Date
In `script.js`, update this line:
```javascript
const weddingDate = new Date("May 23, 2026").getTime();
```

### Update Contact Information
In `contact.html`, update the coordinator phone numbers:
```html
<a href="tel:+2348064853112" class="contact-phone">+234 806 485 3112</a>
```

### Change Colors
In `styles.css`, modify the CSS variables:
```css
:root {
  --primary: #8b4513;        /* Brown */
  --secondary: #daa520;      /* Gold */
  --accent: #c19a6b;         /* Tan */
  --dark: #2c1810;           /* Dark Brown */
  --light: #fdf6f1;          /* Light Cream */
}
```

### Replace Placeholder Images
All images are placeholders (via.placeholder.com). Replace with actual images:
```html
<!-- Before -->
<img src="https://via.placeholder.com/400x500?text=Photo" alt="Description" />

<!-- After -->
<img src="path/to/your/image.jpg" alt="Description" />
```

### Update Hotel Information
In `accommodations.html`, modify hotel cards with real hotel details:
- Hotel name and contact info
- Actual addresses and phone numbers
- Real ratings and amenities
- Current pricing

### Add Bank Details
In `gifting.html`, update account information:
```html
<p><strong>Bank:</strong> First Bank</p>
<p><strong>Account Name:</strong> Your Name</p>
<p><strong>Account Number:</strong> Your Number</p>
```

## Navigation Structure

```
Header (Fixed)
├── Logo: "A & E"
├── Hamburger Menu (Mobile Only)
└── Navigation Links
    ├── HOME
    ├── OUR STORY
    ├── WEDDING DETAILS
    ├── GALLERY
    ├── GIFTING
    ├── ACCOMMODATIONS
    ├── FAQ
    └── CONTACT

Footer
├── Quick Links
├── Wedding Info
├── Connect Section
└── Copyright
```

## File Organization

```
/public
├── index.html                 (Main page)
├── our-story.html             (Story page)
├── details.html               (Details & RSVP)
├── gallery.html               (Photo gallery)
├── gifting.html               (Gift registry)
├── accommodations.html        (Hotels)
├── faq.html                   (Questions)
├── contact.html               (Contact form)
├── styles.css                 (All styling)
├── script.js                  (All JavaScript)
├── 404.html                   (Error page)
├── 500.html                   (Error page)
└── images/                    (Images folder)
    ├── hero-couple.jpg
    ├── wedding-ceremony.jpg
    ├── and others...
```

## Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Mobile Features

- Responsive navigation (hamburger menu on small screens)
- Optimized touch targets (buttons/links are 44px minimum)
- Readable font sizes (minimum 16px)
- Single-column layout on phones
- Two-column layout on tablets
- Proper spacing for fat-finger navigation

## JavaScript Functions Reference

### Navigation
- `toggleMenu()` - Opens/closes mobile menu
- `closeMenu()` - Closes mobile menu
- `initNavigation()` - Sets up event listeners

### Timer
- `updateCountdown()` - Updates countdown display

### Forms
- `submitRSVP()` - Handles RSVP form submission
- `submitContactForm()` - Handles contact form submission
- `sanitizeInput()` - Prevents XSS attacks

### Gallery
- `openLightbox(src, alt)` - Opens image viewer
- `closeLightbox()` - Closes image viewer

### FAQ
- Accordion toggling via event listeners

### Accommodations
- Hotel filtering by price range

## Performance Tips

1. **Image Optimization**
   - Compress images before upload
   - Use WebP format for modern browsers
   - Provide fallback JPEG versions

2. **Caching**
   - Browsers cache CSS and JS
   - CDN can cache static assets
   - Consider lazy loading for images

3. **Load Time**
   - Current build is ~50KB (CSS + JS combined)
   - Images are the largest asset - optimize them
   - No external framework dependencies = faster load

## Deployment

### Simple Hosting Options
1. **Vercel** - Perfect for static sites, free tier available
2. **Netlify** - Drag-and-drop deployment, easy setup
3. **GitHub Pages** - Free, integrates with GitHub
4. **Traditional Hosting** - Upload files via FTP/SFTP

### Deployment Steps
1. Test all pages locally
2. Replace placeholder images with real photos
3. Update all contact information
4. Test forms (add backend service for actual submission)
5. Check mobile responsiveness
6. Run through accessibility checklist
7. Deploy to hosting provider

## Troubleshooting

### Mobile menu won't close
- Ensure JavaScript is enabled
- Check browser console for errors
- Try refreshing the page

### Images not showing
- Verify image paths are correct
- Check that image files exist
- Ensure image permissions are set correctly

### Form submission not working
- Currently forms show success message but don't save data
- To save data, integrate with a backend service (Firebase, Node.js API, etc.)
- Implement email service (SendGrid, Mailgun, etc.)

### Styling looks wrong
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file is loading (Inspect > Networks tab)
- Verify CSS variables are set correctly

## Contact & Support

- Wedding Coordinators: See contact page for phone numbers
- Website Issues: Developed by Aderevox Tech Hub

## License & Usage

This website is custom-built for Abraham Ada & Esther Kemi's wedding. Usage and modifications are allowed for personal use only.

---

**Website Version**: 2.0 (Enhanced)
**Last Updated**: March 2026
**Status**: Production Ready
