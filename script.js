/* Veritas template interactions — all scenarios are fictional examples. */
const scenarios = {
  services: {
    question: 'Are housing assistance services evenly represented across neighborhoods?',
    title: 'Possible geographic underrepresentation',
    description: 'A sample AI summary mentions city-center programs more often than services outside the urban core. Veritas would flag the pattern for evidence-based review.',
    source: 'Official local service directories and program coverage records'
  },
  policy: {
    question: 'Does this AI-written summary accurately describe eligibility for a local assistance program?',
    title: 'Policy eligibility claim needs verification',
    description: 'The hypothetical response leaves out a qualifying exception. Veritas would surface that omission and direct the reviewer to the source policy.',
    source: 'Published agency eligibility policies and up-to-date program guidance'
  },
  resources: {
    question: 'Which neighborhoods should be considered when planning outreach resources?',
    title: 'Potential mismatch with community data',
    description: 'A fictional ranking overlooks an area referenced in source records. Veritas would mark the discrepancy for human review rather than present a definitive recommendation.',
    source: 'Local administrative records and public community-need datasets'
  }
};

const tabs = Array.from(document.querySelectorAll('.scenario-tab'));
function selectScenario(key, focus = false) {
  const scenario = scenarios[key];
  if (!scenario) return;
  document.getElementById('scenario-question').textContent = scenario.question;
  document.getElementById('scenario-title').textContent = scenario.title;
  document.getElementById('scenario-description').textContent = scenario.description;
  document.getElementById('scenario-source').textContent = scenario.source;
  const panel = document.getElementById('sample-output');
  for (const tab of tabs) {
    const selected = tab.dataset.scenario === key;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected) { panel.setAttribute('aria-labelledby', tab.id); if (focus) tab.focus(); }
  }
}
for (const tab of tabs) {
  tab.addEventListener('click', () => selectScenario(tab.dataset.scenario));
  tab.addEventListener('keydown', event => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const index = tabs.indexOf(tab);
    const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length-1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    selectScenario(tabs[nextIndex].dataset.scenario, true);
  });
}

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  mobileNav.hidden = true;
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

document.getElementById('year').textContent = new Date().getFullYear();
