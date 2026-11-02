YOUR MOTORCYCLE REVIEW SITE

Files
- index.html           Home page (search, filter tabs, review cards)
- style.css            All colours, fonts and layout
- reviews.js           The list of bikes shown on the home page
- script.js            Makes the search and tabs work (you don't need to edit this)
- review-template.html Copy this for each new review
- reviews/             Put your finished review pages here
- images/              Put your own photos here

Preview on your Mac
Double-click index.html. It opens in your browser. After editing, save and refresh.

Replace the placeholders
Search each file for square brackets, like [SITE NAME], [YOUR NAME], [PRICE]. Replace them with your real details.

Add a new review
1. Copy review-template.html into the "reviews" folder and rename it, e.g. pulsar-ns200.html
2. Fill in every [BRACKETED] item and add your photos to the "images" folder
3. In reviews.js, find that bike (or copy a block to add a new one), update rating, price and verdict, and change done:false to done:true
4. Save, refresh, and the card now links to your review

Publish
Upload this whole folder to GitHub, then connect it to Cloudflare Pages (build settings empty).
