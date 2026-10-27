/* Local interactions for the research microsite. No data is stored or sent. */

const STUDIES = [
  {
    ref: 1, year: "2026", author: "Ruyi Zhang", title: "Fuzzy decision support for financial planning",
    fullTitle: "Fuzzy decision support system for financial planning and management",
    methods: ["fuzzy-ahp"], applications: ["financial-planning"], evidenceTypes: ["quantitative-benchmark"], roles: ["forecasting-risk", "preferences"],
    evidenceLabel: "Corporate-data benchmark",
    summary: "A fuzzy decision-support system for corporate financial planning, using AHP weighting and adaptive defuzzification.",
    methodText: "Fuzzy decision-support system; AHP rule weighting; adaptive defuzzification parameter β. ARIMA, SVM, and Random Forest are listed as comparators.",
    context: "48 corporate datasets from manufacturing, finance, and services, covering 2016–2022.",
    metrics: "The survey reports 88.2% crisis-warning accuracy, 5.6% false-positive rate, 6.5% monthly funding-gap rate, 15.6% tax-cost reduction, and 87.0% prediction accuracy. The baseline comparator for the 5.6% rate is inconsistent within the supplied survey; see the source note below.",
    relevance: "Candidate support for linguistic uncertainty, budget control, and qualitative constraints. The reported evaluation is corporate financial planning, not a consumer purchase trial.",
    finding: "The survey presents this work as evidence that fuzzy sets and hierarchical weighting can express uncertainty in financial-planning tasks.",
  },
  {
    ref: 2, year: "2025", author: "Lu Lu, J. Liu & G. Dong", title: "Algorithm-driven financial decision support",
    fullTitle: "Research on algorithm-driven intelligent financial decision support system",
    methods: ["machine-learning"], applications: ["financial-planning"], evidenceTypes: ["quantitative-benchmark"], roles: ["forecasting-risk"],
    evidenceLabel: "Model benchmark",
    summary: "An ensemble financial system pairing attention-augmented LSTM forecasting with XGBoost risk estimation and SHAP explanation.",
    methodText: "Self-adaptive attention with LSTM; tuned XGBoost; ensemble voting; SHAP values for interpretation.",
    context: "Corporate financial statements, market feeds, and credit profiles, as summarized by the survey.",
    metrics: "The survey’s comparison matrix attributes 92.3% risk-warning accuracy, 88.7% cash-flow accuracy, 89.1% investment accuracy, throughput near 10,000 records/second, a decision-cycle change from 7.5 to 1.2 days, and a 75% reduction in human-resource costs to this study.",
    relevance: "The survey maps this study to consumer cash-flow forecasting, risk modeling, and explainability. Its reported metrics belong to the cited study and its data context, not to the proposed consumer FDSS.",
    finding: "A technical financial-modeling study, not a validation of the survey’s complete consumer-facing framework.",
  },
  {
    ref: 3, year: "2025", author: "Rinku S. Dixit, S. L. Choudhary & N. Govil", title: "AI purchase adoption through UTAUT 2",
    fullTitle: "Analyzing the impact of artificial intelligence on the online purchase decision-making process through the lens of the UTAUT 2 model",
    methods: ["behavior-models"], applications: ["consumer-adoption"], evidenceTypes: ["consumer-survey"], roles: ["preferences"],
    evidenceLabel: "Consumer survey",
    summary: "A consumer-adoption study extending UTAUT 2 with personal innovativeness and examining trust in AI-driven shopping recommendations.",
    methodText: "Structural Equation Modelling and Partial Least Squares SEM using UTAUT 2, extended with Personal Innovativeness.",
    context: "Survey of 220 active online shoppers in Delhi-NCR, India, September–December 2023.",
    metrics: "The survey reports R² = 0.751 for Usage Behavior and 0.705 for Behavioral Intention; Behavioral Intention → Usage Behavior = 0.803; Trust in AI → Behavioral Intention = 0.306; Effort Expectancy → Behavioral Intention = 0.012 (not significant); SRMR = 0.07.",
    relevance: "Directly informs consumer adoption and trust considerations, but studies online-purchase adoption rather than household financial planning outcomes.",
    finding: "Trust in AI was the strongest reported driver of intention among the constructs discussed in the survey summary.",
  },
  {
    ref: 4, year: "2025", author: "Thanassis Tiropanis et al.", title: "DESERE: decentralized search and recommendation",
    fullTitle: "DESERE: The 2nd Workshop on Decentralised Search and Recommendation",
    methods: ["privacy-search", "recommendation", "data-integration"], applications: ["decentralized-systems"], evidenceTypes: ["workshop"], roles: ["privacy", "recommendation-fusion"],
    evidenceLabel: "Workshop / agenda",
    summary: "A workshop paper outlining research themes in decentralized recommendation, privacy-preserving retrieval, and user-controlled data.",
    methodText: "Workshop agenda: decentralized search and recommendation, federated learning, semantic interoperability, data-access control, and consent management.",
    context: "Research themes and proposed evaluation directions for decentralized Web infrastructure and personal online datastores.",
    metrics: "The survey describes a workshop proposal; it reports no new empirical performance metric.",
    relevance: "Motivates privacy-aware, consent-based, user-controlled data access as a design consideration. It does not demonstrate those properties in a consumer FDSS.",
    finding: "A research agenda rather than a tested financial-planning system.",
  },
  {
    ref: 5, year: "2023", author: "Shuqing Liu et al.", title: "UXBIV: business-intelligence visualization experience",
    fullTitle: "UXBIV: An evaluation framework for business intelligence visualization",
    methods: ["visualization"], applications: ["business-visualization"], evidenceTypes: ["user-study"], roles: ["visual-ux"],
    evidenceLabel: "Visualization user study",
    summary: "A framework for assessing attractiveness, decision-making experience, and interactivity in business-intelligence visualization.",
    methodText: "UXBIV dimensions; repeated-measures evaluation; the survey also lists SUPR-Q and NASA-TLX as secondary/control measures.",
    context: "A US shopping-mall data case study with 44 valid participants, as summarized by the paper.",
    metrics: "The survey reports N = 44, p < 0.001 for the highlighted comparison, and correlations ranging from r = −0.010 to 0.924. It says the highest-complexity interface was rated significantly better on workload measures and decision consistency/quality.",
    relevance: "Informs visual hierarchy, interaction, perceived control, and decision quality. The study is a visualization evaluation, not a consumer-finance outcome trial.",
    finding: "Useful UX evidence to consider alongside the survey’s warning that interface complexity can also raise cognitive load.",
  },
  {
    ref: 6, year: "2022", author: "Hafiz M. Shakeel et al.", title: "Survey of data-visualization tools",
    fullTitle: "A comprehensive state-of-the-art survey on data visualization tools: Research developments, challenges and future domain specific visualization framework",
    methods: ["visualization"], applications: ["visualization-tools"], evidenceTypes: ["literature-survey"], roles: ["visual-ux"],
    evidenceLabel: "Literature survey",
    summary: "A broad review of visualization tools and approaches, including approximate, recommendation-based, and progressive visual analysis.",
    methodText: "Survey of tool ecosystems and optimization approaches including sample+seek, Pangloss, VizSmith, progressive pyramid sampling, and visualization libraries.",
    context: "The paper reviews 70 visualization-tool studies across data-handling, mining, decision-making, big-data, privacy, statistics, and application topics.",
    metrics: "A literature review rather than a single model benchmark; the survey summarizes tool categories and visualization approaches rather than one comparable consumer-finance performance score.",
    relevance: "Provides methods for responsive visual analysis. The survey’s synthesis identifies a gap: speed and scale do not by themselves account for a consumer’s cognitive load.",
    finding: "A tool and methods review, not an evaluation of a consumer purchase planner.",
  },
  {
    ref: 7, year: "2020", author: "Hui Wang, Z. Le & X. Gong", title: "Recommendation with heterogeneous features",
    fullTitle: "Recommendation system based on heterogeneous feature: A survey",
    methods: ["recommendation", "machine-learning"], applications: ["product-recommendation"], evidenceTypes: ["literature-survey"], roles: ["recommendation-fusion"],
    evidenceLabel: "Recommendation survey",
    summary: "A survey of recommendation systems that combine graph, text, behavioral, and spatiotemporal feature families.",
    methodText: "Heterogeneous recommenders including GCN, GAT, GAE, KGAT, text models, sentiment methods, and spatiotemporal features.",
    context: "Datasets discussed include MovieLens, DBpedia, Epinions, Ciao, Weibo, and Twitter.",
    metrics: "The survey standardizes evaluation measures such as MAE, RMSE, Precision, Recall, F1, AUC, Hit Ratio, and Coverage; it does not report one shared consumer-finance result.",
    relevance: "Motivates combining budgets with price, review, and financing signals. The reviewed recommendation datasets are not household financial records.",
    finding: "A heterogeneous-feature recommendation survey, not a consumer financial recommendation trial.",
  },
  {
    ref: 8, year: "2017", author: "Quoc Duy Vo et al.", title: "Next-generation business intelligence and analytics",
    fullTitle: "Next generation business intelligence and analytics: A survey",
    methods: ["bi-architecture", "machine-learning"], applications: ["business-intelligence"], evidenceTypes: ["literature-survey"], roles: ["recommendation-fusion", "forecasting-risk"],
    evidenceLabel: "Technical survey",
    summary: "A survey of BI architecture expanding from historical warehousing toward operational, situational, and self-service analytics.",
    methodText: "Next-generation BI framework; machine learning, fuzzy logic, neural networks, multiple-kernel learning, and tensor-decomposition integration.",
    context: "Business and healthcare applications, including high-volume Web streams and ICU monitoring, as summarized in the survey.",
    metrics: "The supplied paper cites an ICU false-alarm reduction of up to 92% among applications discussed by this BI survey. This is not a consumer-finance metric.",
    relevance: "Informs the proposed data-acquisition and integration pipeline. Evidence comes from BI and application domains, not from a consumer FDSS trial.",
    finding: "An architectural and analytics survey, published in 2017.",
  },
  {
    ref: 9, year: "2017", author: "Jiaying Liu et al.", title: "Scholarly data visualization and integration",
    fullTitle: "A survey of scholarly data visualization",
    methods: ["data-integration", "visualization"], applications: ["scholarly-data"], evidenceTypes: ["comparative-review"], roles: ["recommendation-fusion", "visual-ux"],
    evidenceLabel: "Systems comparison",
    summary: "A review of scholarly metadata extraction and tools for integrating and visualizing academic networks.",
    methodText: "CRF-based extraction, ParsCit, FLUX-CiM, co-citation and bibliographic coupling; review of network-visualization platforms.",
    context: "Large scholarly datasets including DBLP (382 MB), APS (1.2 GB), MAG (29.8 GB), and ORC (7 GB), as stated in the survey matrix.",
    metrics: "The reviewed systems are compared by memory footprint, database compatibility, and network-integration capacity; no consumer finance metric is reported.",
    relevance: "Offers an analogy for heterogeneous information integration. Scholarly metadata and financial planning are distinct application settings.",
    finding: "A scholarly-data survey, not a household decision-support study.",
  },
  {
    ref: 10, year: "2015", author: "Artur Lugmayr", title: "Financial-market visualization",
    fullTitle: "Survey of financial market visualization utilizing interactive media technology",
    methods: ["visualization"], applications: ["business-visualization"], evidenceTypes: ["literature-survey"], roles: ["visual-ux", "recommendation-fusion"],
    evidenceLabel: "Technical survey",
    summary: "A survey organizing financial-market visualization around human factors, data views, visual techniques, interaction, and evaluation.",
    methodText: "Visualization framework; interactive media; sentiment analysis and the LUGO indicator are discussed.",
    context: "Financial news, stock-tick data, social media, and crowdfunding data.",
    metrics: "A technical survey of visualization approaches, not a single comparative consumer-planning benchmark.",
    relevance: "Provides context for visual analytics and unstructured financial signals. It predates many of the consumer-facing methods discussed elsewhere.",
    finding: "A financial-visualization survey from 2015; it is not one of ten recent consumer trials.",
  },
];

const METHOD_LABELS = {
  "machine-learning": "Machine learning",
  "fuzzy-ahp": "Fuzzy systems & AHP",
  "behavior-models": "Consumer behavior models",
  "recommendation": "Recommender systems",
  "visualization": "Visualization & UX",
  "bi-architecture": "BI architecture",
  "data-integration": "Data integration",
  "privacy-search": "Privacy & decentralized search",
};
const APPLICATION_LABELS = {
  "financial-planning": "Financial planning & risk",
  "consumer-adoption": "Consumer adoption",
  "product-recommendation": "Product recommendations",
  "business-visualization": "Business / financial visualization",
  "business-intelligence": "Business intelligence",
  "visualization-tools": "Visualization tools",
  "scholarly-data": "Scholarly data",
  "decentralized-systems": "Decentralized information systems",
};
const EVIDENCE_LABELS = {
  "quantitative-benchmark": "Quantitative benchmark",
  "consumer-survey": "Consumer survey",
  "user-study": "UX / visualization user study",
  "literature-survey": "Literature or technical survey",
  "comparative-review": "Comparative systems review",
  "workshop": "Workshop / research agenda",
};
const ROLE_LABELS = {
  "forecasting-risk": "Forecasting & risk",
  "preferences": "Preferences & behavior",
  "recommendation-fusion": "Recommendation & data fusion",
  "visual-ux": "Visualization & UX",
  "privacy": "Privacy & data access",
};

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, function (character) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
  });
}

function labelsFor(values, labels) {
  return values.map(function (value) { return labels[value] || value; }).join("; ");
}

function detailItem(label, value) {
  return "<div><dt>" + escapeHTML(label) + "</dt><dd>" + escapeHTML(value) + "</dd></div>";
}

function renderStudyCard(study) {
  const detailRows =
    detailItem("Study context", study.context) +
    detailItem("Methods", study.methodText) +
    detailItem("Application", labelsFor(study.applications, APPLICATION_LABELS)) +
    detailItem("Evidence type", labelsFor(study.evidenceTypes, EVIDENCE_LABELS)) +
    detailItem("Reported evidence", study.metrics) +
    detailItem("Proposed FDSS role", labelsFor(study.roles, ROLE_LABELS)) +
    detailItem("Proposed FDSS relevance", study.relevance);
  return "<details class='study-card'>" +
    "<summary><span class='study-ref'>[" + study.ref + "]</span><span class='study-title-block'><strong>" + escapeHTML(study.title) + "</strong><small>" + escapeHTML(study.author) + " · " + study.year + "</small></span><span class='study-evidence-tag'>" + escapeHTML(study.evidenceLabel) + "</span></summary>" +
    "<div class='study-detail'><p>" + escapeHTML(study.summary) + "</p><dl class='study-detail-grid'>" + detailRows + "</dl><a class='study-citation' href='#ref-" + study.ref + "'>Reference [" + study.ref + "] ↓</a></div></details>";
}

function renderDesktopRow(study) {
  const intro = "<details class='matrix-study'><summary>[" + study.ref + "] " + escapeHTML(study.author) + " (" + study.year + ")</summary><p>" +
    escapeHTML(study.fullTitle) + ". " + escapeHTML(study.finding) + " <a href='#ref-" + study.ref + "'>Reference [" + study.ref + "]</a></p></details>";
  return "<tr><td>" + intro + "</td><td>" + escapeHTML(study.methodText) + "</td><td>" + escapeHTML(study.context) + "</td><td>" + escapeHTML(study.metrics) + "</td><td>" + escapeHTML(study.relevance) + "</td></tr>";
}

function renderMobileRow(study) {
  const rows =
    detailItem("Methods", study.methodText) +
    detailItem("Application", labelsFor(study.applications, APPLICATION_LABELS)) +
    detailItem("Dataset / scenario", study.context) +
    detailItem("Reported metrics or evidence", study.metrics) +
    detailItem("Proposed FDSS role", labelsFor(study.roles, ROLE_LABELS)) +
    detailItem("Relevance to proposed FDSS", study.relevance) +
    detailItem("Evidence type", labelsFor(study.evidenceTypes, EVIDENCE_LABELS));
  return "<details class='matrix-mobile-card'><summary><span class='study-ref'>[" + study.ref + "]</span><span><strong>" + escapeHTML(study.title) + "</strong><small>" + escapeHTML(study.author) + " · " + study.year + "</small></span></summary><dl class='study-detail-grid'>" + rows + "<div><dt>Reference</dt><dd><a href='#ref-" + study.ref + "'>Open reference [" + study.ref + "]</a></dd></div></dl></details>";
}

function readFilters() {
  return {
    method: document.getElementById("filter-method").value,
    application: document.getElementById("filter-application").value,
    evidence: document.getElementById("filter-evidence").value,
    role: document.getElementById("filter-role").value,
  };
}

function updateStudies() {
  const filters = readFilters();
  const visible = STUDIES.filter(function (study) {
    return (filters.method === "all" || study.methods.includes(filters.method)) &&
      (filters.application === "all" || study.applications.includes(filters.application)) &&
      (filters.evidence === "all" || study.evidenceTypes.includes(filters.evidence)) &&
      (filters.role === "all" || study.roles.includes(filters.role));
  });
  const word = visible.length === 1 ? "work" : "works";
  document.getElementById("study-count").textContent = visible.length + " of " + STUDIES.length + " " + word;
  document.getElementById("study-grid").innerHTML = visible.length
    ? visible.map(renderStudyCard).join("")
    : "<p class='no-results'>No reviewed work matches all four filters. Try resetting one or more filters.</p>";
  document.getElementById("matrix-body").innerHTML = visible.length
    ? visible.map(renderDesktopRow).join("")
    : "<tr><td colspan='5'>No reviewed work matches the selected filters.</td></tr>";
  document.getElementById("matrix-mobile").innerHTML = visible.length
    ? visible.map(renderMobileRow).join("")
    : "<p class='no-results'>No reviewed work matches the selected filters.</p>";
}

function formatLakhs(value, digits) {
  const places = digits === undefined ? 1 : digits;
  return "₹" + Number(value).toLocaleString("en-IN", { minimumFractionDigits: places, maximumFractionDigits: places }) + " lakh";
}

function formatRate(value) {
  return Number(value).toLocaleString("en-IN", { maximumFractionDigits: 1 }) + "%";
}

function updateRangeFill(input) {
  const min = Number(input.min);
  const max = Number(input.max);
  const ratio = ((Number(input.value) - min) / (max - min)) * 100;
  input.style.setProperty("--fill", ratio + "%");
}

function calculatorValues() {
  return {
    cost: Number(document.getElementById("calc-cost").value),
    benefit: Number(document.getElementById("calc-benefit").value),
    rate: Number(document.getElementById("calc-rate").value) / 100,
    years: Number(document.getElementById("calc-years").value),
  };
}

function cashFlowNPV(cost, benefit, rate, years) {
  let total = -cost;
  for (let year = 1; year <= years; year += 1) total += benefit / Math.pow(1 + rate, year);
  return total;
}

function cashFlowIRR(cost, benefit, years) {
  if (benefit <= 0) return null;
  const valueAt = function (rate) { return cashFlowNPV(cost, benefit, rate, years); };
  let low = -0.99;
  let high = 5;
  let lowValue = valueAt(low);
  let highValue = valueAt(high);
  if (!Number.isFinite(lowValue) || !Number.isFinite(highValue) || lowValue * highValue > 0) return null;
  for (let index = 0; index < 90; index += 1) {
    const middle = (low + high) / 2;
    const middleValue = valueAt(middle);
    if (Math.abs(middleValue) < 0.0000001) return middle * 100;
    if ((middleValue > 0) === (lowValue > 0)) {
      low = middle;
      lowValue = middleValue;
    } else {
      high = middle;
      highValue = middleValue;
    }
  }
  return ((low + high) / 2) * 100;
}

function drawEconomicsChart(values) {
  const drawing = document.getElementById("economics-chart-drawing");
  const width = 500;
  const height = 180;
  const zeroY = 85;
  const maxBarHeight = 54;
  const maxValue = Math.max(values.cost, values.benefit, 1);
  const scale = maxBarHeight / maxValue;
  const count = values.years + 1;
  const step = (width - 34) / count;
  let html = "<line class='calc-grid-line' x1='15' y1='" + zeroY + "' x2='" + (width - 9) + "' y2='" + zeroY + "'/>";
  for (let index = 0; index <= values.years; index += 1) {
    const center = 17 + step * (index + 0.5);
    const amount = index === 0 ? values.cost : values.benefit;
    const barHeight = amount * scale;
    const y = index === 0 ? zeroY : zeroY - barHeight;
    const barClass = index === 0 ? "calc-bar-cost" : "calc-bar-benefit";
    const label = index === 0 ? "−" + amount.toFixed(1) : "+" + amount.toFixed(1);
    html += "<rect class='" + barClass + "' x='" + (center - Math.min(11, step * 0.24)) + "' y='" + y + "' width='" + Math.min(22, step * 0.48) + "' height='" + Math.max(2, barHeight) + "' rx='2'/>";
    html += "<text class='calc-bar-label' text-anchor='middle' x='" + center + "' y='" + (index === 0 ? zeroY + barHeight + 11 : Math.max(12, y - 5)) + "'>" + label + "</text>";
    html += "<text class='calc-axis-label' text-anchor='middle' x='" + center + "' y='172'>" + (index === 0 ? "Now" : "Yr " + index) + "</text>";
  }
  drawing.innerHTML = html;
  const description = "Illustrative cash flows: an initial cost of " + formatLakhs(values.cost, 1) + " now and " + formatLakhs(values.benefit, 1) + " in benefits each year for " + values.years + " years.";
  document.getElementById("economics-chart-desc").textContent = description;
  document.getElementById("economics-chart").setAttribute("aria-label", description);
}

function updateCalculator() {
  const values = calculatorValues();
  document.getElementById("calc-cost-output").textContent = formatLakhs(values.cost, 1);
  document.getElementById("calc-benefit-output").textContent = formatLakhs(values.benefit, 1);
  document.getElementById("calc-rate-output").textContent = formatRate(values.rate * 100);
  document.getElementById("calc-years-output").textContent = values.years + (values.years === 1 ? " year" : " years");
  const npv = cashFlowNPV(values.cost, values.benefit, values.rate, values.years);
  const irr = cashFlowIRR(values.cost, values.benefit, values.years);
  document.getElementById("calc-npv").textContent = (npv < 0 ? "−" : "") + formatLakhs(Math.abs(npv), 2);
  document.getElementById("calc-irr").textContent = irr === null ? "—" : (irr >= 0 ? "+" : "−") + formatRate(Math.abs(irr));
  document.getElementById("calc-npv-note").textContent = npv >= 0
    ? "Illustrative benefits exceed the initial cost in present-value terms"
    : "Illustrative benefits fall below the initial cost in present-value terms";
  document.querySelectorAll(".calc-field input").forEach(updateRangeFill);
  drawEconomicsChart(values);
}

function initializeMicrosite() {
  updateStudies();
  ["filter-method", "filter-application", "filter-evidence", "filter-role"].forEach(function (id) {
    document.getElementById(id).addEventListener("change", updateStudies);
  });
  document.getElementById("reset-filters").addEventListener("click", function () {
    ["filter-method", "filter-application", "filter-evidence", "filter-role"].forEach(function (id) {
      document.getElementById(id).value = "all";
    });
    updateStudies();
    document.getElementById("filter-method").focus();
  });
  document.querySelectorAll(".calc-field input").forEach(function (input) {
    input.addEventListener("input", updateCalculator);
  });
  updateCalculator();
}

initializeMicrosite();
