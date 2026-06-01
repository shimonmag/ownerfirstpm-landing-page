# OwnerFirstPM Netlify Landing Page

Static landing page built from the provided Figma direction for Netlify deployment.

## Files

- `index.html` - main landing page with Google Tag Manager and Netlify form
- `thank-you.html` - form success page at `/thank-you`
- `style.css` - responsive visual system and layout
- `script.js` - click tracking-ready `dataLayer` events and smooth scrolling
- `assets/` - fonts, logos, favicon, and optimized local imagery
- `netlify.toml` - Netlify publish settings and `/thank-you` route handling

## Netlify Forms

The lead form uses Netlify Forms with:

- `name="ownerfirstpm-contact"`
- `method="POST"`
- `data-netlify="true"`
- `action="/thank-you"`

Hidden CRM fields are included:

- `lead_source = OwnerFirstPM Website`
- `pipeline_stage = New Lead`
- `status = Prospect`

## Tracking IDs

The following click targets are ready for GTM triggers:

- `#phone-click`
- `#email-click`
- `#schedule-call-button`
- `#main-form-submit-button`

`script.js` also pushes matching events to `window.dataLayer`.

## Deploy to Netlify

1. Upload this folder to a Git repository, or drag the folder into Netlify's manual deploy area.
2. Set the publish directory to the project root.
3. No build command is required.
4. After deploy, submit a test form and confirm the submission appears under Netlify Forms.

## Local Preview

Open `index.html` directly in a browser, or run any static server from this folder.
