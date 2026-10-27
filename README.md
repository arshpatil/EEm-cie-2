# FDSS survey research microsite

A responsive, static microsite for explaining the supplied survey paper on intelligent financial decision-support systems and consumer purchase planning.

## Run

No build step, package installation, account, or API key is required. Open index.html in a modern browser.

For a local HTTP server, serve this folder with any static-file server. For example, if Python is available, run:

    python -m http.server 8000

Then open http://localhost:8000.

## Edit

- Edit section copy, equations, diagrams, and references in index.html.
- Edit the ten study records and their filter categories in the STUDIES array near the top of app.js.
- Adjust the interactive NPV example and its chart in app.js.
- Change typography, colors, layouts, and responsive breakpoints in styles.css.

## Evidence and scope

The microsite follows the supplied paper’s reference numbering and distinguishes individual-study results from the survey’s synthesis and proposed directions. The four architecture layer names are explicitly marked as an illustrative interpretation because the supplied paper does not name the layers. Reported metrics are attributed to their source study and context; they are not presented as validation of the proposed consumer FDSS.

The interactive NPV calculator uses sample values for explanation only. The site has no backend, does not save inputs, makes no API calls, and is not financial advice.
