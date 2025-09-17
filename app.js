const form = document.getElementById('demo-form');
const output = document.getElementById('demo-output');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

const playbooks = {
    'ai-automation': {
        title: 'Intelligent Automation Delivery Blueprint',
        summary: 'We deploy human-in-the-loop automation that blends AI models with secure orchestration to lift throughput and accuracy.',
        differentiators: [
            'Reusable automation accelerators tuned for federal compliance environments',
            'Continuous monitoring with explainable AI to satisfy auditability requirements',
            'Transition plan that protects incumbent knowledge and retrains impacted staff'
        ],
        actions: [
            'Identify high-friction workflows and map expected ROI per process lane',
            'Stand up secure AI inference environment aligned to agency Authority to Operate (ATO)',
            'Deliver phased automation rollout with governance checkpoints at 30/60/90 days'
        ]
    },
    'data-analytics': {
        title: 'Decision-Grade Data Modernization Plan',
        summary: 'TEAM 2 builds analytics stacks that fuse siloed data, automate quality, and push actionable intelligence to mission teams.',
        differentiators: [
            'Metadata-first ingestion with automated cataloging and lineage tracking',
            'Mission-aligned dashboards built with user co-design to drive adoption',
            'Secure enclave patterns supporting IL4/IL5 data classifications'
        ],
        actions: [
            'Assess current data landscape and define a phased modernization backlog',
            'Implement data pipelines with automated validation and MLOps guardrails',
            'Enable user communities through enablement labs and embedded data coaches'
        ]
    },
    'cybersecurity': {
        title: 'Adaptive Cyber Defense Response',
        summary: 'We secure critical assets with zero-trust controls, AI-driven threat hunting, and round-the-clock incident readiness.',
        differentiators: [
            'Threat intel fused with AI anomaly detection for faster mean-time-to-detect',
            'Accredited SOC analysts and red team support for Purple Team exercises',
            'Compliance accelerators for NIST 800-53, CMMC, and FedRAMP baselines'
        ],
        actions: [
            'Harden identity perimeter with conditional access and privileged access management',
            'Deploy continuous monitoring sensors with automated containment playbooks',
            'Conduct tabletop exercises and deliver 30-day continuous improvement roadmap'
        ]
    },
    'cloud-services': {
        title: 'Cloud Modernization & FinOps Strategy',
        summary: 'TEAM 2 modernizes mission systems with secure landing zones, container platforms, and continuous cost governance.',
        differentiators: [
            'Accelerator patterns for AWS, Azure, and hybrid mission fabrics',
            'Integrated pipeline security from infrastructure-as-code to runtime',
            'FinOps scorecard that keeps spend aligned to mission value and KPIs'
        ],
        actions: [
            'Baseline current workloads and prioritize migration waves by mission criticality',
            'Stand up automation pipelines to provision compliant landing zones',
            'Operationalize FinOps with continuous optimization sprints and executive reporting'
        ]
    }
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const rfpText = document.getElementById('rfp-text').value.trim();
    const capability = document.getElementById('capability').value;

    if (!rfpText) {
        output.innerHTML = '<h3>Proposal outline</h3><p class="error">Please paste an RFP requirement so we can shape the response.</p>';
        return;
    }

    const playbook = playbooks[capability];
    const requirementPreview = rfpText.length > 180 ? `${rfpText.slice(0, 180)}…` : rfpText;

    output.innerHTML = `
        <h3>${playbook.title}</h3>
        <p class="summary">${playbook.summary}</p>
        <div class="req">
            <h4>Requirement detected</h4>
            <p>${requirementPreview}</p>
        </div>
        <div class="columns">
            <div>
                <h4>TEAM 2 differentiators</h4>
                <ul>${playbook.differentiators.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>
            <div>
                <h4>Action plan</h4>
                <ol>${playbook.actions.map(item => `<li>${item}</li>`).join('')}</ol>
            </div>
        </div>
        <p class="cta">Need a fully compliant draft? TEAM 2 will compile pricing, staffing, and past performance references within 90 minutes.</p>
    `;
});
