<!--
Realty25_Pricing_Carrd_Embed.html
============================================================
Version : 1.12
Date    : 2026-05-24
Author  : Alik Levin / Realty 25 AZ

Anchor       : #pricing (set Carrd Section ID to "pricing")
Linked from  : carrd-nav.html "Pricing" menu item

Style : Matches Realty25_FAQ_Carrd_Embed_v1.7.html and
        Realty25_AgentReferral_Carrd_Embed_v1.1.html canonical
        (legacy palette: #0C1628 navy, #E8C96A bright gold,
        #c5a050 accent gold, #e8dfc0 cream body, Open Sans).
        When FAQ and Agent Referrals rebrand to v2, rebrand
        this section together as a set.

Scope : Visual revamp + Request modal (split architecture).
        Modal HTML + CSS inline; JS hosted on GitHub Pages
        (r25sandbox.github.io/rentcomps/pricing-modal.js)
        and referenced via <script src> with ?vNN cache-bust.
        v1.9 inline-JS version was over Carrd parser
        threshold (SyntaxError). Same split pattern as RIC
        and EEC calcs.

Changelog (most recent 5; full history in git)
------------------------------------------------------------
v1.12 2026-05-24  PROD cutover. Cache-bust ?v02 -> ?v03 on
                  embed <script src>. Pairs with pricing-
                  modal.js v1.2 (ENDPOINT swapped to prod
                  Worker rentalcomp-proxy /inspection-request).
                  Embed itself otherwise unchanged from v1.11.
v1.11 2026-05-24  Pricing-modal JS relocated to new dedicated
                  `pricing` GitHub repo (was rentcomps repo).
                  <script src> URL updated. Cache-bust ?v01
                  -> ?v02. Pairs with pricing-modal.js v1.1
                  (wired to DEV Worker endpoint).
v1.10 2026-05-23  Carrd parser fix: split modal JS to GitHub
                  Pages. v1.9 inline-script version hit the
                  Carrd parser threshold (SyntaxError). Modal
                  JS externalized; HTML and CSS stay inline.
                  Embed size: 12K -> ~9K.
v1.9  2026-05-23  Request modal added (PCI + MoveOut). Centered
                  modal with First/Last name + Email + Phone.
                  Title is dynamic. Submit was placeholder.
v1.8  2026-05-23  RentalComp App copy: "searches" -> "properties"
                  across all three tiers + the expiration line.
============================================================
-->

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
#r25-pricing *{box-sizing:border-box;margin:0;padding:0}
#r25-pricing{
font-family:'Open Sans',-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
background:#0C1628;
color:#c8d4e0;
font-size:15px;
max-width:720px;
margin:0 auto;
padding:8px 20px 52px;
}
#r25-pricing .block{
padding:32px 0;
}
#r25-pricing .block + .block{
border-top:1px solid #c5a050;
}
#r25-pricing .block:first-of-type{padding-top:20px}
#r25-pricing h2{
color:#E8C96A;
font-weight:700;
font-size:22px;
line-height:1.3;
margin-bottom:18px;
font-family:'Open Sans',-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
}
#r25-pricing ul{
list-style:none;
padding:0;
margin:0;
}
#r25-pricing li{
position:relative;
padding-left:22px;
margin-bottom:14px;
color:#e8dfc0;
font-size:15px;
line-height:1.7;
}
#r25-pricing li:last-child{margin-bottom:0}
#r25-pricing li::before{
content:'';
position:absolute;
left:4px;
top:11px;
width:7px;
height:7px;
border-radius:50%;
background:#c5a050;
}
#r25-pricing .amt{
font-weight:700;
color:#E8C96A;
}
#r25-pricing .neg{
font-weight:700;
color:#E8C96A;
}
#r25-pricing .actions{
display:block;
margin-top:8px;
}
#r25-pricing a.sample{
color:#E8C96A;
text-decoration:underline;
text-underline-offset:2px;
}
#r25-pricing a.sample:hover{
color:#fff;
}
#r25-pricing .actions a.sample{
margin-right:14px;
}
#r25-pricing a.req-pill{
display:inline-block;
background:#E8C96A;
color:#0C1628;
font-weight:700;
font-size:12px;
padding:3px 10px;
border-radius:5px;
text-decoration:none;
letter-spacing:.02em;
vertical-align:1px;
font-family:'Open Sans',-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
transition:background .15s;
}
#r25-pricing a.req-pill:hover{
background:#fff;
}
/* ---- Inspection Request Modal ---- */
#r25ir-overlay{
display:none;
position:fixed;
top:0;left:0;right:0;bottom:0;
background:rgba(0,0,0,0.7);
z-index:9999;
align-items:flex-start;
justify-content:center;
overflow-y:auto;
padding:40px 16px;
backdrop-filter:blur(3px);
}
#r25ir-overlay.r25ir-open{display:flex;}
#r25ir-card{
background:#162236;
border-radius:16px;
padding:32px 28px 28px;
max-width:380px;
width:100%;
position:relative;
box-shadow:0 12px 50px rgba(0,0,0,0.5);
font-family:'Open Sans',-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
}
#r25ir-close{
position:absolute;
top:10px;right:14px;
background:none;
border:none;
font-size:22px;
color:rgba(255,255,255,0.5);
cursor:pointer;
line-height:1;
padding:4px 8px;
font-family:inherit;
}
#r25ir-close:hover{color:#fff;}
.r25ir-title{
font-size:18px;
font-weight:700;
color:#E8C96A;
margin-bottom:6px;
line-height:1.3;
text-align:center;
}
.r25ir-sub{
font-size:12px;
color:#6b6660;
margin-bottom:20px;
line-height:1.6;
text-align:center;
}
.r25ir-row{display:flex;gap:8px;}
.r25ir-input{
width:100%;
padding:10px 14px;
border:1px solid #2a3a50;
border-radius:9px;
background:#0d1b2e;
color:#e5e0d8;
font-size:13px;
margin-bottom:10px;
outline:none;
font-family:inherit;
box-sizing:border-box;
}
.r25ir-input:focus{border-color:#E8C96A;}
.r25ir-input::placeholder{color:#6b7a90;}
.r25ir-btn{
width:100%;
padding:11px;
background:#E8C96A;
color:#0C1628;
border:none;
border-radius:9px;
font-size:13px;
font-weight:700;
cursor:pointer;
font-family:inherit;
margin-top:6px;
letter-spacing:.02em;
}
.r25ir-btn:hover{background:#fff;}
.r25ir-btn:disabled{background:#3a4a60;color:#6b7a90;cursor:not-allowed;}
.r25ir-msg{
font-size:12px;
margin-top:12px;
min-height:18px;
text-align:center;
line-height:1.5;
}
</style>

<div id="r25-pricing">

<!-- Block 1: Property Management -->
<div class="block">
<h2>Property management</h2>
<ul>
<li><span class="amt">$125</span>/door flat fee. <span class="amt">$0</span> when vacant.</li>
<li>Placement: <span class="amt">4.5%</span> of gross rent.</li>
<li>Lease renewal: <span class="amt">$250</span>.</li>
<li><span class="amt">$0</span> markup on repairs/maintenance costs.</li>
<li>Site visit: <span class="amt">$125</span> first hour. <span class="amt">$75</span> any additional hour.</li>
<li>No long-term contracts &mdash; cancel anytime, no penalties.</li>
</ul>
</div>

<!-- Block 2: Standalone Offerings -->
<div class="block">
<h2>Standalone offerings</h2>
<ul>
<li>Property Condition Inspection <span class="amt">$125</span>.<span class="actions"><a class="sample" href="https://prcllc.atlassian.net/wiki/external/ZjAyZjNiMGZkYjMzNGQ5MDhiNzk2NWI5ZDM0NzcxNjU" target="_blank" rel="noopener">Sample</a><a class="req-pill" href="#" data-r25ir-type="PCI">Request &rarr;</a></span></li>
<li>Move Out Inspection <span class="amt">$125</span>.<span class="actions"><a class="sample" href="https://prcllc.atlassian.net/wiki/external/M2ZiZTIyMGE3OWVjNDQwNzgxMWU1YmNiYzk3YWJiZGI" target="_blank" rel="noopener">Sample</a><a class="req-pill" href="#" data-r25ir-type="MoveOut">Request &rarr;</a></span></li>
<li>Placement w/o PMA: <span class="amt">6%</span> of gross rent.</li>
</ul>
</div>

<!-- Block 3: RentalComp App -->
<div class="block">
<h2>RentalComp App</h2>
<ul>
<li><strong style="color:#E8C96A;">Trial</strong> &mdash; <span class="amt">FREE</span> &middot; 3 properties &middot; 7 days &middot; lifetime cap</li>
<li><strong style="color:#E8C96A;">Consult</strong> &mdash; <span class="amt">$10</span> &middot; 10 properties &middot; 30 days</li>
<li><strong style="color:#E8C96A;">Investor</strong> &mdash; <span class="amt">$25</span> &middot; 50 properties &middot; 90 days</li>
<li>Unused properties expire at end of window.</li>
<li>Payment: Zelle &middot; Bitcoin &middot; CashApp.</li>
<li>No subscriptions. No auto-renewal.</li>
</ul>
</div>

</div>

<div id="r25ir-overlay" role="dialog" aria-modal="true" aria-labelledby="r25ir-title">
<div id="r25ir-card">
<button id="r25ir-close" type="button" aria-label="Close">X</button>
<div class="r25ir-title" id="r25ir-title">Request Inspection</div>
<div class="r25ir-sub">Share your details and I&#39;ll be in touch within 24 hours.</div>
<div id="r25ir-form">
<div class="r25ir-row">
<input class="r25ir-input" type="text" id="r25ir-first" placeholder="First name" autocomplete="given-name" maxlength="100">
<input class="r25ir-input" type="text" id="r25ir-last" placeholder="Last name" autocomplete="family-name" maxlength="100">
</div>
<input class="r25ir-input" type="email" id="r25ir-email" placeholder="your@email.com" autocomplete="email" maxlength="200">
<input class="r25ir-input" type="tel" id="r25ir-phone" placeholder="Phone (optional)" autocomplete="tel" maxlength="50">
<button class="r25ir-btn" id="r25ir-submit" type="button">Submit Request</button>
<div class="r25ir-msg" id="r25ir-msg"></div>
</div>
</div>
</div>

<script src="https://r25sandbox.github.io/pricing/pricing-modal.js?v03"></script>
