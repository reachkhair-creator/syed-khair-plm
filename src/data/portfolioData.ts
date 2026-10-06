import {
  WorkExperience,
  ExpertisePillar,
  FeaturedProject,
  ManufacturingStage,
  SkillCategory,
  MaturityCriterion,
  ProfessionalStudy
} from '../types/portfolio';
import profilePhotoUrl from '../assets/images/syed-khair-profile.jpg';

export const PERSONAL_INFO = {
  name: 'Syed Abdul Khair',
  shortName: 'Syed Khair',
  profileImage: profilePhotoUrl,
  headline: 'Teamcenter / PLM Architect · Teamcenter Administrator · BMIDE Specialist',
  eyebrow: 'TEAMCENTER / PLM ARCHITECT · MANUFACTURING DIGITAL THREAD · UAE & GCC',
  location: 'Sharjah, UAE',
  mobility: 'Available for Dubai, Abu Dhabi, Saudi Arabia (KSA) & Global Opportunities',
  email: 'reachkhair@gmail.com',
  phone: '+971 52 558 2129',
  phoneFormatted: '+971 525 582 129',
  linkedIn: 'https://linkedin.com/in/syed-khair-plm',
  linkedInDisplay: 'linkedin.com/in/syed-khair-plm',
  yearsExperience: '20+',
  tagline: '“Driving engineering excellence and digital thread integration — from BMIDE data models to controlled ERP data exchange.”',
  summary: [
    'Mechanical engineer with 20+ years spanning industrial product design and enterprise PLM architecture. Deep hands-on expertise in Siemens Teamcenter administration, BMIDE data-model configuration, Active Workspace, and engineering BOM governance.',
    'At SKM Air Conditioning LLC, serve as Teamcenter / PLM Architect & Administrator (Lead Design Engineer), leading platform administration, BMIDE data-model configuration, controlled release workflows, and engineering-to-manufacturing information flow.',
    'Extensive dual PLM depth including 11 years administering PTC Windchill at Al Zamil Air Conditioners while supervising multi-site design engineering teams. Grounded in practical engineering realities to bridge design data with manufacturing execution.'
  ],
  stats: [
    { value: '20+', label: 'Years Engineering & PLM', context: 'Comprehensive manufacturing lifecycle experience' },
    { value: 'Dual PLM', label: 'Teamcenter & Windchill', context: 'Deep multi-platform enterprise expertise' },
    { value: 'BMIDE', label: 'Data Model Architecture', context: 'Manufacturing-oriented product structures' },
    { value: 'Digital Thread', label: 'CAD ➔ BOM ➔ ERP', context: 'Controlled engineering-to-manufacturing flow' }
  ],
  education: [
    {
      degree: 'Bachelor of Engineering (B.Tech) — Mechanical Engineering',
      institution: 'Karnataka State Open University (KSOU), Mysuru, India',
      period: '2009 – 2012'
    },
    {
      degree: 'Diploma in Mechanical Engineering (3-Year Technical)',
      institution: 'Aalim Muhammed Salegh Polytechnic College, Chennai, India',
      period: '2003 – 2006'
    }
  ],
  certifications: [
    {
      title: 'Teamcenter Administrator & Teamcenter Architecture',
      issuer: 'Siemens Xcelerator Academy (Member)',
      date: 'Member / Certified'
    },
    {
      title: 'Siemens Teamcenter PLM Deployment & Implementation',
      issuer: 'Faith PLM Solutions, Pune',
      date: 'Oct 2019'
    },
    {
      title: 'PTC Windchill PLM Configuration & Implementation',
      issuer: 'CAD Opt Technologies, Bangalore',
      date: 'Feb 2017'
    },
    {
      title: 'PTC Windchill PLM Data Management Admin',
      issuer: 'Worklogix Middle East, Dubai',
      date: 'Jun 2016'
    },
    {
      title: 'Screw & Reciprocating Compressor Selection',
      issuer: 'Bitzer Training, Sindelfingen, Germany',
      date: 'Jun 2015'
    },
    {
      title: 'Autodesk Revit MEP Certification',
      issuer: 'Compusoft, Dammam',
      date: 'Jan 2014'
    }
  ],
  languages: [
    { language: 'English', proficiency: 'Full Professional' },
    { language: 'Arabic', proficiency: 'Working Knowledge' },
    { language: 'Hindi', proficiency: 'Professional Working' },
    { language: 'Tamil', proficiency: 'Native' }
  ]
};

export const EXPERTISE_PILLARS: ExpertisePillar[] = [
  {
    id: 'infra-deployment',
    title: '1. Infrastructure & Deployment',
    subtitle: 'High-availability 4-tier topologies, FSC caching, and volume distribution',
    description: 'Architecture and maintenance of Teamcenter enterprise tiers. Hands-on experience configuring File Management System (FMS), Server Caching (FSC), Dispatcher translation pools, and TEM patching.',
    toolsAndHandlers: [
      '4-Tier Enterprise Topology',
      'FMS & FSC Server Caching',
      'Dispatcher Pools (PDF, DXF, JT, STEP)',
      'TEM (Teamcenter Environment Manager)',
      'Volume Directory Management'
    ],
    outcome: 'Demonstrated capability to configure multi-tier architectures supporting high-concurrency engineering CAD checkouts without storage bottlenecks.',
    operationalImpact: 'Ensures reliable volume distribution, reduced network latency, and high system availability across distributed engineering teams.',
    level: 95,
    sampleCodeSnippet: `<!-- Standard Teamcenter FMS Client Cache Configuration Concept -->
<fscconfig xmlns="http://teamcenter.com/fms/fscconfig">
  <fsc id="FSC_APP_SERVER" iscurrent="true" address="http://tc-app.enterprise.local:4544">
    <volume id="VOL_CAD_REPOS" path="/tcdata/volumes/vol01" readonly="false"/>
    <cache id="CACHE_ENG_CLIENT" size="50GB" maxage="30d"/>
  </fsc>
</fscconfig>`
  },
  {
    id: 'bmide-quality',
    title: '2. Data Model & BMIDE Quality',
    subtitle: 'Domain-tailored schema engineering, LOVs, and business object inheritance',
    description: 'Designing clean, maintainable BMIDE extensions for industrial equipment product lines. Custom Item Types, revision naming rules, List of Values (LOVs), GRM relations, and TCXML packaging.',
    toolsAndHandlers: [
      'BMIDE Custom Business Objects',
      'List of Values (LOV) & Filters',
      'Generic Relationship Management (GRM)',
      'TCXML / Live Model Deployment',
      'Runtime & Compound Properties'
    ],
    outcome: 'Proven capability to architect domain-tailored BMIDE data models that enforce revision rules and structure product definitions cleanly.',
    operationalImpact: 'Prevents duplicate part creation, enforces consistent metadata, and establishes a single source of engineering truth.',
    level: 98,
    sampleCodeSnippet: `// Conceptual BMIDE Business Object Definition Pattern
<BusinessObject name="Industrial_Equipment_Assembly" parentName="Item">
  <Property name="nominal_capacity_tr" type="Double"/>
  <Property name="refrigerant_standard" type="String" lovName="LOV_Refrigerants"/>
  <Relation name="Standard_EBOM_Relation" parentName="view"/>
</BusinessObject>`
  },
  {
    id: 'workflow-governance',
    title: '3. Workflow Governance & Security',
    subtitle: 'Automated stage-gate validation, rule-based protection, and sign-off handlers',
    description: 'Engineering release and change processes (ECR/ECN) automated via Teamcenter Workflow Designer. Implementing validation rules before status progression and rule-based Access Control Lists (ACLs).',
    toolsAndHandlers: [
      'EPM-assert-targets-checked-in',
      'PS-check-assembly-status-progression',
      'EPM-set-rule-based-protection',
      'Access Manager (ACLs) & AM_RULE_TREE',
      'ECR / ECN Multi-level Change Control'
    ],
    outcome: 'Experience configuring controlled release workflows ensuring that unreleased revisions cannot be modified or distributed downstream.',
    operationalImpact: 'Provides strict digital stage-gate sign-offs, full revision auditability, and regulatory compliance evidence.',
    level: 96,
    sampleCodeSnippet: `// Standard Teamcenter Workflow Handler Configuration Pattern
Action: Complete Task (Engineering Sign-off)
Rule Handler: PS-check-assembly-status-progression
  -relation = "view"
  -status   = "TBR_Review"
Rule Handler: EPM-assert-targets-checked-in
Action Handler: EPM-set-rule-based-protection
  -rule     = "Released_Read_Only"`
  },
  {
    id: 'performance-hygiene',
    title: '4. Performance Hygiene & Optimization',
    subtitle: 'Database index tuning, dataset purging, and syslog latency analysis',
    description: 'Systematic database query optimization concepts, volume hygiene, temporary directory housekeeping, and syslog time duration analysis to keep high-concurrency environments responsive.',
    toolsAndHandlers: [
      'TC_TMP_DIR Automated Cleanup Routines',
      'TCRS-purge-dataset Utility',
      'tc_purge_audit & Archive Rules',
      'syslog Time Duration (ms) Profiling',
      'POM_find_qualifiers & DB Indexing'
    ],
    outcome: 'Knowledge of systematic maintenance hygiene routines that maintain client responsiveness and eliminate query bottlenecks.',
    operationalImpact: 'Maintains fast authentication, smooth structure navigation, and stable CAD check-in/checkout performance.',
    level: 92,
    sampleCodeSnippet: `# Maintenance Utility Automation Pattern (Conceptual)
find $TC_TMP_DIR -type f -mtime +3 -delete
tc_purge_audit -u=infodba -p=****** -g=dba -keep=90 -delete
# Profiling Slow POM Queries in syslog:
grep "Time Duration:" tcserver.syslog | awk '$NF > 500 {print $0}'`
  },
  {
    id: 'cad-bom-alignment',
    title: '5. CAD & BOM Alignment',
    subtitle: 'EBOM-to-MBOM transformation, 3D JT generation, and multi-CAD integration',
    description: 'Bridging engineering CAD assemblies (PTC Creo, Autodesk Inventor, Siemens NX) to structured Engineering and Manufacturing Bills of Material (EBOM/MBOM) with variant logic.',
    toolsAndHandlers: [
      'ME-create-mirror-mbom-AH Concept',
      'Multi-CAD Integration (Creo, Inventor, NX)',
      '3D JT Tessellation & Visualization',
      'Bill of Processes (BOP) Routing Concepts',
      'Parameterized CAD Model Automation'
    ],
    outcome: 'Hands-on experience structuring multi-level BOMs from CAD models and aligning engineering definitions with plant assembly requirements.',
    operationalImpact: 'Reduces design turnaround time, minimizes bill-of-materials discrepancies, and accelerates production handoffs.',
    level: 94,
    sampleCodeSnippet: `// Conceptual Action Handler for Mirroring EBOM to MBOM
Action Handler: ME-create-mirror-mbom-AH
  -ebom_view_type = "view"
  -mbom_view_type = "manufacturing"
  -copy_dataset   = "false"
  -log_status     = "MBOM_Synchronized"`
  },
  {
    id: 'awc-integration',
    title: '6. Active Workspace & Enterprise Data Exchange',
    subtitle: 'Declarative UI configuration, PLMXML exports, and bi-directional ERP data handoff',
    description: 'Configuring user interactions through Active Workspace declarative UI stylesheets, table property layouts, and supporting PLM-to-ERP engineering data exchange concepts.',
    toolsAndHandlers: [
      'AWC Declarative UI Configuration',
      'PIE-export-to-plmxmlfile Handler',
      'DOCMGTAPP-apply-pdf-control',
      'SOA (Service Oriented Architecture) APIs',
      'PLM-to-ERP Data Exchange Concepts'
    ],
    outcome: 'Experience configuring intuitive web-based PLM views and automating engineering data exchange with enterprise systems.',
    operationalImpact: 'Enables browser-based access for non-CAD users, direct metadata editing, and controlled data transfer to ERP.',
    level: 95,
    sampleCodeSnippet: `<!-- Standard AWC Declarative ViewModel XML Concept -->
<view model="ProductAssemblySummaryViewModel">
  <dataProviders>
    <dataProvider name="bomLineProvider">
      <searchCriteria productCode="PRODUCT_LINE"/>
    </dataProvider>
  </dataProviders>
  <columnProviders>
    <column name="item_id" width="120" displayName="Part Number"/>
    <column name="item_revision_id" width="60" displayName="Rev"/>
    <column name="material_spec" width="180" displayName="Material"/>
  </columnProviders>
</view>`
  }
];

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: 'skm-air-conditioning',
    company: 'SKM Air Conditioning LLC',
    role: 'Teamcenter / PLM Architect & Administrator (Lead Design Engineer)',
    location: 'Sharjah, UAE',
    period: 'Sep 2018 – Present',
    summary: 'Hands-on experience delivering Teamcenter PLM administration, configuration, and optimization in an industrial HVAC manufacturing environment.',
    achievements: [
      'Teamcenter PLM administration, system configuration, user provisioning, and operational support across engineering departments.',
      'Designed and configured custom Teamcenter data models using BMIDE to support manufacturing-oriented product structures.',
      'Configured Active Workspace interfaces, stylesheets, and property layouts to enhance user adoption and productivity.',
      'Configured controlled engineering release and approval workflows supporting downstream manufacturing activities.',
      'Supported CAD/PLM integration across multi-CAD environments including PTC Creo and Autodesk Inventor.',
      'Managed multi-level Engineering Bills of Materials (EBOM), revision rules, and metadata governance.',
      'Administered user access management, role security, and Access Control Lists (ACLs) to safeguard engineering intellectual property.',
      'Experience supporting PLM-to-ERP engineering data exchange and BOM integration concepts.',
      'Administered engineering change processes (ECR/ECN) with traceable digital stage-gate sign-offs.',
      'Authored user training documentation and conducted coaching sessions to standardize data entry and engineering practices.',
      'Executed regular PLM maintenance hygiene, database query indexing, and technical troubleshooting.',
      'Recognized with the Best Product Designer Award for engineering excellence and contributions to PLM-driven product development.'
    ],
    metrics: [
      { label: 'PLM Role', value: 'Architect & Admin' },
      { label: 'Core Platform', value: 'Teamcenter / AWC' },
      { label: 'Data Model', value: 'BMIDE Schema' },
      { label: 'Change Control', value: 'ECR / ECN' }
    ],
    technologies: [
      'Siemens Teamcenter',
      'BMIDE Data Modeling',
      'Active Workspace (AWC)',
      'Workflow Designer & Handlers',
      'Access Manager (ACL)',
      'CAD/PLM Integration',
      'PLM-ERP Data Exchange Concepts',
      'PTC Creo',
      'Autodesk Inventor'
    ],
    productLines: ['Air-Cooled Chillers', 'AHUs', 'FCUs', 'Packaged Units', 'Condenser & DX Coils']
  },
  {
    id: 'al-zamil-air-conditioners',
    company: 'Al Zamil Air Conditioners',
    role: 'Product Design Supervisor | PTC Windchill PLM Administrator',
    location: 'Dammam, Saudi Arabia',
    period: 'Jun 2007 – Jun 2018 (11 Years)',
    summary: 'Supervised product engineering for industrial HVAC equipment while administering PTC Windchill PLM, aligning engineering and manufacturing stakeholders on unified BOM structures.',
    achievements: [
      'Led a multi-site team of 20+ design engineers delivering custom HVAC equipment for major regional infrastructure projects.',
      'Administered PTC Windchill PLM company-wide — mapping engineering release processes, configuring workflows, and part numbering conventions.',
      'Established unified HVAC product data architecture in Windchill, aligning engineering and manufacturing on a single BOM truth.',
      'Designed and released packaged A/C units, chillers, and air-handling equipment for prominent regional infrastructure projects.',
      'Engineered structural chiller bases, refrigeration circuits, and electrical control panels meeting NEMA 4X, IP55/65, and ATEX/IECEx standards.',
      'Reduced late-stage engineering change orders by embedding design-for-manufacture reviews early into NPI cycles.'
    ],
    metrics: [
      { label: 'Multi-Site Team Led', value: '20+ Engineers' },
      { label: 'Platform Depth', value: 'PTC Windchill' },
      { label: 'Tenure', value: '11 Years' },
      { label: 'Domain', value: 'HVAC Equipment' }
    ],
    technologies: [
      'PTC Windchill PLM',
      'PTC Creo / Pro/Engineer',
      'BOM Architecture',
      'Oracle ERP Concepts',
      'Autodesk Revit MEP',
      'Stage-Gate Governance',
      'IECEx / ATEX Compliance'
    ],
    keyClients: ['Regional Industrial & Utility Infrastructure']
  },
  {
    id: 'blue-star-limited',
    company: 'Blue Star Limited',
    role: 'HVAC Engineer',
    location: 'Chennai, India',
    period: 'May 2006 – Apr 2007 (1 Year)',
    summary: 'Developed the foundational thermal and hydraulic engineering knowledge that underpins 20+ years of technical PLM authority.',
    achievements: [
      'Executed ASHRAE heat load calculations, equal-friction duct sizing, and hydraulic pump head calculations.',
      'Prepared air balancing and P&ID diagrams for central chilled-water HVAC installations.',
      'Coordinated execution and commissioning for commercial and healthcare chiller installations.'
    ],
    metrics: [
      { label: 'Engineering Base', value: 'Thermal & P&ID' },
      { label: 'Standards', value: 'ASHRAE / Carrier' }
    ],
    technologies: ['ASHRAE Heat Load Calc', 'P&ID Layouts', 'Ductulator', 'Carrier E-20', 'Chilled Water Piping']
  }
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'enterprise-plm-synthesis',
    title: 'Enterprise Teamcenter Multi-Tier Infrastructure & Performance Tuning',
    category: 'Infrastructure & Performance Optimization',
    problem: 'High-concurrency CAD authoring environments often face storage latency, volume distribution bottlenecks, and slow assembly retrieval during peak engineering cycles.',
    solution: 'Engineered a comprehensive multi-tier optimization strategy incorporating distributed FMS/FSC server caching, automated temporary directory housekeeping, database query indexing, and server-side 3D preview tuning.',
    techStack: ['Teamcenter 4-Tier', 'Active Workspace', 'FMS/FSC Caching', 'Database Indexing', 'Syslog Profiling'],
    metricHighlight: { value: 'High Avail.', label: 'Infrastructure Stability' },
    outcomes: [
      'Ensured rapid client authentication and smooth structure navigation across distributed engineering sites.',
      'Eliminated volume server bottlenecks during intensive multi-CAD check-in/checkout operations.',
      'Established routine maintenance policies for dataset cleanup and temporary file housekeeping.'
    ],
    detailedNotes: [
      'Configured FSC caching policies to minimize WAN/LAN latency for distributed CAD teams.',
      'Tuned database indexing on POM queries to accelerate large assembly searches.',
      'Established proactive syslog monitoring procedures to analyze transaction duration.'
    ]
  },
  {
    id: 'cad-erp-integration',
    title: 'Engineering BOM to Manufacturing ERP Data Exchange Architecture',
    category: 'Digital Thread & BOM Synchronization',
    problem: 'Manual handoffs of Bills of Materials between engineering PLM and enterprise ERP introduce procurement mismatches, revision ambiguity, and costly production delays.',
    solution: 'Designed and deployed an automated data exchange architecture using Teamcenter workflow export handlers and PLMXML / SOA services, passing released Item Masters and revision-controlled BOMs directly to ERP.',
    techStack: ['PLMXML', 'SOA APIs', 'Workflow Action Handlers', 'ERP Integration Concepts', 'BOM Governance'],
    metricHighlight: { value: 'Zero Manual', label: 'BOM Re-entry Goal' },
    outcomes: [
      'Supported single-source-of-truth alignment between engineering product definitions and ERP planning items.',
      'Enabled automated data export upon final workflow sign-off, eliminating manual spreadsheet re-keying.',
      'Ensured exact revision synchronization between released engineering drawings and procurement records.'
    ],
    detailedNotes: [
      'Implemented transactional queueing to handle high-density assemblies without network timeouts.',
      'Enforced status validation rules preventing unreleased BOM lines from triggering downstream procurement.'
    ]
  },
  {
    id: 'ebom-to-mbom-automation',
    title: 'EBOM to MBOM Alignment & Controlled Stage-Gate Workflows',
    category: 'Manufacturing Process Governance',
    problem: 'Engineering BOMs organized by functional design geometry rarely reflect shop-floor assembly sequences, causing friction at the engineering-to-manufacturing boundary.',
    solution: 'Configured automated structure transformation concepts (mirroring EBOM to MBOM), establishing plant-executable BOMs, Bill of Processes (BOP), and parameterized model templates.',
    techStack: ['Structure Manager', 'Manufacturing BOM Concepts', 'Parametric CAD', 'ECR/ECN Workflows'],
    metricHighlight: { value: 'Streamlined', label: 'Design-to-Production Flow' },
    outcomes: [
      'Streamlined product development cycles through parameterized templates and automated BOM generation.',
      'Bridged design engineering structures with manufacturing assembly requirements and shop-floor routing.',
      'Embedded mandatory stage-gate reviews ensuring compliance with applicable international industry standards.'
    ],
    detailedNotes: [
      'Established drawing revision control directly tied to manufacturing order releases.',
      'Authored design guidelines to standardize practices across multi-disciplinary engineering teams.'
    ]
  },
  {
    id: 'bmide-governance-security',
    title: 'Enterprise BMIDE Data Model Architecture & Access Governance',
    category: 'Data Model Governance & Access Security',
    problem: 'Without standardized data models and access security, engineering organizations experience part proliferation, inconsistent revision naming, and accidental modification of released data.',
    solution: 'Architected robust BMIDE data models tailored to complex equipment manufacturing. Implemented custom business objects, strict LOVs, automated part numbering rules, and rule-based ACL protection in Access Manager.',
    techStack: ['BMIDE Schema Design', 'Access Manager (ACL)', 'EPM Rule Handlers', 'LOV Configuration'],
    metricHighlight: { value: 'Robust', label: 'Data Model Governance' },
    outcomes: [
      'Delivered clean, maintainable BMIDE data models aligned with manufacturing product structures.',
      'Implemented automated check-in assertion rules and assembly status progression validation.',
      'Secured released intellectual property with automated read-only protection rules upon sign-off.'
    ],
    detailedNotes: [
      'Standardized part numbering conventions across modular equipment product families.',
      'Authored end-user guidance and delivered training for engineering and manufacturing staff.'
    ]
  }
];

export const MANUFACTURING_THREAD_STAGES: ManufacturingStage[] = [
  {
    step: 1,
    title: 'CAD Engineering & Parameterization',
    system: 'PTC Creo / Autodesk Inventor / Siemens NX',
    description: '3D parametric solid modeling of frames, circuits, piping, and electrical assemblies with standardized part numbering rules.',
    keyOutputs: ['3D CAD Assembly Models', 'Parametric Part Templates', 'Direct Teamcenter Check-in'],
    governanceRule: 'Naming convention enforced at creation; prevents unmanaged part proliferation.'
  },
  {
    step: 2,
    title: 'EBOM Structuring & Revision Control',
    system: 'Teamcenter BMIDE & Structure Manager',
    description: 'Hierarchical Engineering Bill of Materials grouping functional subassemblies with revision rules and metadata attributes.',
    keyOutputs: ['Multi-level Engineering BOM', 'Revision Controlled Items', '3D JT Model Generation'],
    governanceRule: 'Rule handlers ensure child components are released prior to parent assembly sign-off.'
  },
  {
    step: 3,
    title: 'EBOM to MBOM Transformation',
    system: 'Teamcenter Manufacturing Concepts',
    description: 'Structuring design data into plant-executable manufacturing structures, grouping items by assembly workstation rather than design logic.',
    keyOutputs: ['Manufacturing BOM (MBOM)', 'Phantom Part Resolution', 'Plant Assembly Structure'],
    governanceRule: 'Controlled transformation mirrors structures with complete traceability back to CAD.'
  },
  {
    step: 4,
    title: 'Bill of Processes (BOP) & Routing',
    system: 'Process & Resource Planning',
    description: 'Attaching standard operational cycle times, tooling allocations, and worker operations to the MBOM nodes.',
    keyOutputs: ['Standard Cycle Time Calculation', 'Tooling & Jig Assignments', 'Assembly Sequence Routing'],
    governanceRule: 'Enforces standard manufacturing routing before order release to production.'
  },
  {
    step: 5,
    title: 'ECR / ECN Stage-Gate Sign-Off',
    system: 'Teamcenter Workflow Engine',
    description: 'Formal Engineering Change Notices with multi-tier digital sign-offs across Engineering, Quality, and Operations.',
    keyOutputs: ['Auditable ECN History', 'Rule-Based Read-Only Lock', 'Quality & Standard Compliance'],
    governanceRule: 'Action handlers lock all released revisions against modification upon final approval.'
  },
  {
    step: 6,
    title: 'Controlled ERP Data Handoff',
    system: 'Enterprise ERP via PLMXML & SOA Concepts',
    description: 'Controlled data exchange pushing released Item Masters, routings, and BOM structures into ERP planning tables.',
    keyOutputs: ['ERP Item Master Creation', 'Real-time Cost Value Reports', 'Accurate MRP Procurement Schedules'],
    governanceRule: 'Elimination of manual data re-entry; ensures single source of truth across systems.'
  },
  {
    step: 7,
    title: 'Shop-Floor Execution & Quality Compliance',
    system: 'Plant Floor & Quality Inspection',
    description: 'Assembly workers build equipment strictly following released drawings, work instructions, and validated testing protocols.',
    keyOutputs: ['Verified Assembly Standards', 'Factory Acceptance Testing', 'Compliance with Applicable Standards'],
    governanceRule: 'Drawings automatically watermarked with status and revision control before distribution.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'PLM Platforms & Architecture',
    description: 'Core product lifecycle management systems mastered over 20+ years of enterprise engineering experience.',
    skills: [
      { name: 'Siemens Teamcenter (TC 13.x / Current)', level: 'Expert', context: 'Administration & Configuration' },
      { name: 'Active Workspace (AWC)', level: 'Expert', context: 'Declarative UI & Stylesheets' },
      { name: 'BMIDE Schema Configuration', level: 'Expert', context: 'Business Objects, LOVs, GRM' },
      { name: 'PTC Windchill PLM', level: 'Expert', context: '11 Years Admin & Implementation' },
      { name: 'Workflow Designer & Handlers', level: 'Expert', context: 'Stage-Gate & ECR/ECN' },
      { name: 'Access Manager & Security (ACLs)', level: 'Expert', context: 'AM_RULE_TREE, Groups/Roles' },
      { name: 'Structure Manager & PSE', level: 'Expert', context: 'Multi-level BOM & Variants' },
      { name: 'Audit Manager & Query Builder', level: 'Advanced', context: 'Reporting & Governance' }
    ]
  },
  {
    category: 'Customization, APIs & Integration',
    description: 'System extensions, script automation, and enterprise system synchronization concepts.',
    skills: [
      { name: 'ITK (Integration Toolkit - C++)', level: 'Advanced', context: 'Server-side handlers & exits' },
      { name: 'SOA (Service Oriented Architecture)', level: 'Advanced', context: 'Java & Web Services APIs' },
      { name: 'PLMXML & TCXML', level: 'Expert', context: 'Engineering Data Exchange' },
      { name: 'Dispatcher & Translation Services', level: 'Expert', context: 'PDF, DXF, JT, STEP Farms' },
      { name: 'PLM-to-ERP Integration Concepts', level: 'Expert', context: 'Item Master & BOM Sync' },
      { name: 'AWC Declarative ViewModels', level: 'Advanced', context: 'Client UI Tailoring' },
      { name: 'Shell / Batch Scripting', level: 'Advanced', context: 'Maintenance & Utility Automation' }
    ]
  },
  {
    category: 'Infrastructure & System Administration',
    description: 'Ensuring enterprise scalability, uptime, and database responsiveness for multi-user engineering teams.',
    skills: [
      { name: '4-Tier Deployment Architecture', level: 'Expert', context: 'Web, Enterprise, DB, FMS' },
      { name: 'FMS / FSC Caching & Volumes', level: 'Expert', context: 'Distributed High-Speed Caching' },
      { name: 'Database & SQL Index Tuning', level: 'Advanced', context: 'POM Query Performance' },
      { name: 'TEM Patching & Upgrades', level: 'Expert', context: 'Planning, Patching & Execution' },
      { name: 'TC_TMP_DIR & Dataset Hygiene', level: 'Expert', context: 'Routine Maintenance' },
      { name: 'Syslog Time Duration Profiling', level: 'Expert', context: 'Latency Diagnostics' }
    ]
  },
  {
    category: 'Engineering & Manufacturing Governance',
    description: 'Bridging CAD geometries into structured, certified industrial equipment products.',
    skills: [
      { name: 'EBOM to MBOM Transformation', level: 'Expert', context: 'Manufacturing Alignment' },
      { name: 'Bill of Processes (BOP) & Routing', level: 'Advanced', context: 'Process Planning Concepts' },
      { name: 'Engineering Change Order (ECR/ECN)', level: 'Expert', context: 'Full Audit Traceability' },
      { name: 'Parametric CAD Modeling (Inventor/Creo)', level: 'Expert', context: 'Design Automation' },
      { name: 'Siemens NX CAD Integration', level: 'Advanced', context: 'Embedded Teamcenter Authoring' },
      { name: 'NPI Stage-Gate Management', level: 'Expert', context: 'Complex Product Lines' },
      { name: 'ASHRAE / AHRI / UL Compliance', level: 'Expert', context: 'Industrial Standards' }
    ]
  },
  {
    category: 'Next-Gen Solutions & Sustainability Analytics',
    description: 'Advanced solution research in Teamcenter 2606, Environmental LCA, and Microsoft Power BI Star Schema analytics.',
    skills: [
      { name: 'Teamcenter 2606 Solution Design', level: 'Expert', context: '8 Core Solution Domains' },
      { name: 'Environmental LCA (T4SUST & Makersite)', level: 'Advanced', context: 'Carbon Footprint & EF 3.0' },
      { name: 'Microsoft Power BI & DAX Architecture', level: 'Expert', context: 'Star Schema Dimensional Modeling' },
      { name: 'Substance Compliance (IMM & CPM)', level: 'Advanced', context: 'REACH, RoHS, Conflict Minerals' },
      { name: 'Easy Plan & Electronic Work Instructions', level: 'Advanced', context: 'BOP Builder & Shop-floor EWI' },
      { name: 'Supplier Quality Hub & Briefcase', level: 'Advanced', context: '8D Root-Cause Collaboration' },
      { name: 'Weight & Balance Management', level: 'Expert', context: 'Mass Properties & CG Envelopes' },
      { name: 'Teamcenter AI Copilot Frameworks', level: 'Advanced', context: 'Document & Structure Assistants' }
    ]
  }
];

export const MATURITY_PILLARS = [
  { id: 'infra', name: 'Infrastructure & Deployment', defaultScore: 68 },
  { id: 'dataModel', name: 'BMIDE & Data Model Quality', defaultScore: 72 },
  { id: 'workflow', name: 'Workflow & Security Governance', defaultScore: 65 },
  { id: 'performance', name: 'Performance & Maintenance', defaultScore: 54 },
  { id: 'bom', name: 'CAD & BOM-to-ERP Thread', defaultScore: 50 },
  { id: 'awc', name: 'Active Workspace & Usability', defaultScore: 58 }
];

export const MATURITY_QUESTIONS: MaturityCriterion[] = [
  {
    id: 'q1',
    pillar: 'Infrastructure & Deployment',
    question: 'How is your Teamcenter server and volume storage structured?',
    options: [
      { label: 'Single-tier / local disk, frequent volume alerts, no automated FSC caching', points: 30, hint: 'High risk of storage bottlenecks and single-point system downtime.' },
      { label: '4-Tier architecture with basic FMS, but manual directory maintenance', points: 65, hint: 'Functional baseline, but needs automated volume distribution policies.' },
      { label: 'High-availability 4-tier with distributed FSC caching, multi-vault balancing, and monitored Dispatcher farms', points: 100, hint: 'Enterprise-grade topology supporting hundreds of concurrent CAD checkouts.' }
    ]
  },
  {
    id: 'q2',
    pillar: 'BMIDE & Data Model Quality',
    question: 'How standardized are your custom business objects and revision rules?',
    options: [
      { label: 'Default OOTB item types with ad-hoc attributes in folder trees', points: 35, hint: 'Leads to severe part proliferation and unsearchable component libraries.' },
      { label: 'Custom Item Types configured in BMIDE, but inconsistent LOVs and naming rules', points: 65, hint: 'Moderate governance, but missing relational constraints and part classification.' },
      { label: 'Strict BMIDE schema with custom LOVs, GRM relations, runtime properties, and part classification', points: 100, hint: 'Best-in-class data model preventing duplicate CAD creation.' }
    ]
  },
  {
    id: 'q3',
    pillar: 'Workflow & Security Governance',
    question: 'How are engineering changes (ECR/ECN) and sign-offs executed?',
    options: [
      { label: 'Manual email/paper approvals; unreleased CAD can be accessed by shop floor', points: 25, hint: 'Major operational risk of building obsolete revisions.' },
      { label: 'Basic Teamcenter sign-off workflow, but manual rule validation and no automated ACL locking', points: 60, hint: 'Partial automation; still requires manual verification of checked-in targets.' },
      { label: 'Automated stage-gate workflows with EPM assertion handlers and rule-based read-only protection', points: 100, hint: 'Zero risk of revision leakage; fully auditable for ISO/UL compliance.' }
    ]
  },
  {
    id: 'q4',
    pillar: 'Performance & Maintenance',
    question: 'What is your current maintenance regimen for temp directories and database indexing?',
    options: [
      { label: 'No routine maintenance; users report slow Save/Create operations and random crashes', points: 30, hint: 'Common in legacy sites; unpurged logs degrade database throughput.' },
      { label: 'Occasional manual cleanup when disks fill up; no systematic syslog latency analysis', points: 60, hint: 'Reactive maintenance leaves hidden POM query bottlenecks.' },
      { label: 'Scheduled automated TC_TMP_DIR purges, TCRS dataset cleanup, and indexed database queries', points: 100, hint: 'Maintains optimal authentication and eliminates assembly checkout timeouts.' }
    ]
  },
  {
    id: 'q5',
    pillar: 'CAD & BOM-to-ERP Thread',
    question: 'How is product structure handed off from engineering to production planning / ERP?',
    options: [
      { label: 'Manual re-entry of BOM into ERP via Excel / CSV spreadsheets', points: 20, hint: 'High risk of procurement mismatches, obsolete part orders, and scrap.' },
      { label: 'Batch export script or one-way BOM load requiring manual alignment', points: 60, hint: 'Saves time but lacks bi-directional synchronization and revision locking.' },
      { label: 'Automated bi-directional PLMXML/SOA sync between Teamcenter and ERP', points: 100, hint: 'Eliminates manual re-entry with live MRP cost visibility.' }
    ]
  },
  {
    id: 'q6',
    pillar: 'Active Workspace & Usability',
    question: 'What is the end-user adoption and interface experience for engineering teams?',
    options: [
      { label: 'Users struggle with rich client (RAC), complain about slow 3D previews and timeouts', points: 35, hint: 'High resistance to PLM usage; users bypass the system.' },
      { label: 'Active Workspace deployed, but users lack direct attribute editing and need training', points: 65, hint: 'Users see the value but experience friction in day-to-day operations.' },
      { label: 'Tailored AWC Declarative UI with instant 3D JT preview, fast search, and high user adoption', points: 100, hint: 'Peak operational adoption across engineering and manufacturing.' }
    ]
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote: 'Syed brings a rare and valuable dual background: deep mechanical product design knowledge combined with hands-on enterprise PLM administration. His implementations are always filtered through what actually makes engineering teams faster and more accurate.',
    author: 'Engineering Management Perspective',
    title: 'Senior Engineering Leadership',
    context: 'Product Development & PLM Governance',
    badge: 'Peer Recognition: Best Product Designer'
  },
  {
    quote: 'Aligning CAD assemblies with manufacturing ERP data is one of the hardest challenges in manufacturing. Syed’s understanding of BOM architecture and release workflows bridges the gap between engineering intent and production procurement.',
    author: 'Operations & Planning Perspective',
    title: 'Manufacturing & Operations Stakeholders',
    context: 'Engineering-to-Manufacturing Alignment',
    badge: 'Core Competency: BOM Governance'
  },
  {
    quote: 'From BMIDE data models and Active Workspace configuration to performance tuning and user training, Syed demonstrates end-to-end platform ownership with practical engineering common sense.',
    author: 'Technical Collaboration Review',
    title: 'Cross-Functional Engineering Colleagues',
    context: 'PLM Implementation & Support',
    badge: 'Practice Area: Teamcenter & BMIDE'
  }
];

export const PROFESSIONAL_STUDIES: ProfessionalStudy[] = [
  {
    id: 'teamcenter-2606-analysis',
    title: 'Siemens Teamcenter 2606 Solution Architecture & Industry 4.0 Analysis',
    subtitle: 'Comprehensive evaluation across 8 core PLM solution domains, AI assistants, and enterprise digital thread business case.',
    category: 'Next-Generation PLM Solution Architecture',
    badge: 'Teamcenter 2606 Architecture Study',
    executiveSummary: 'This architectural study evaluates 8 core solution domains in Siemens Teamcenter 2606. Transitioning from fragmented document-based practices to an integrated digital thread establishes a unified engineering backbone. Strategic drivers include a 50%–80% search velocity increase, 25% reduction in shop-floor assembly rework through Electronic Work Instructions, and 30%–40% faster change processing.',
    corePillars: [
      {
        name: 'Document & Content Management',
        description: 'Single source of truth for technical documentation, specifications, controlled drawings, and enterprise communications.',
        keyFeatures: ['Teamcenter Drive desktop sync', 'Live Excel direct property sync (Interactive/Bulk/Offline)', 'AI Copilot for Documents (RAG search)', 'Automated PDF viewable translation via Dispatcher'],
        benefit: 'Reduces multi-attribute property editing time by up to 70%; integrates natively with Office 365, SharePoint, and CAD.'
      },
      {
        name: 'Advanced BOM & Structure Management',
        description: 'Multi-BOM structures (EBOM, MBOM, SBOM) and mass property governance across the product lifecycle.',
        keyFeatures: ['Weight & Balance Management (estimated, budgeted, actual mass, CG envelopes)', 'Teamcenter Copilot for Structures', 'Cross-structure requirement impact analysis', 'Variant dictionary migration'],
        benefit: 'Cuts BOM navigation time by 60%–80% and reduces scrap/rework by 20% across complex machinery assemblies.'
      },
      {
        name: 'Supplier Collaboration & Quality Hub',
        description: 'Secure bi-directional collaboration with external suppliers without exposing internal corporate infrastructure.',
        keyFeatures: ['Supplier Quality Hub for 8D root-cause problem solving', 'Briefcase Browser for unmanaged vendor CAD/JT packages', 'Automated background task synchronization', 'CAGE code and project security filters'],
        benefit: 'Speeds vendor non-conformance resolution by 15% with complete IP access control.'
      },
      {
        name: 'Upgrade-Safe Customization & BMIDE',
        description: 'Upgrade-safe frameworks to extend user interfaces, business logic, and schema definitions.',
        keyFeatures: ['XML Rendering Templates (XRT) for display layout control', 'SWT/JFace Toolkit RAC modernization', 'Hierarchical user preferences', 'Live BMIDE data-model deployment'],
        benefit: 'Reduces long-term IT maintenance overhead by 30% while ensuring extensions remain stable across major version upgrades.'
      },
      {
        name: 'Manufacturing Execution (Easy Plan)',
        description: 'Connecting engineering design (EBOM) to plant execution through MBOM, Bill of Processes (BOP), and Work Instructions.',
        keyFeatures: ['Easy Plan authoring for process plans & Electronic Work Instructions (EWI)', 'BOP Builder for plant operations', 'Auto-Predict Source for assembly parts', 'Interactive JSON prompt validation'],
        benefit: 'Cuts manufacturing process authoring time by 50% and reduces shop-floor assembly errors by 25%.'
      },
      {
        name: 'Sustainability & Substance Compliance',
        description: 'Managing product material compositions, substance declarations, and international compliance regulations (REACH, RoHS, Conflict Minerals).',
        keyFeatures: ['Substance Compliance integration with BOMcheck', 'Integrated Material Management (IMM)', 'Direct asynchronous workflow connection to Compliance Process Manager (CPM)', 'Color-coded Active Workspace BOM indicators'],
        benefit: 'Eliminates product recall risks, prevents regulatory market access blocks, and automates material declarations.'
      },
      {
        name: 'Process & Automated Change Governance',
        description: 'Automating, standardizing, and tracking business workflows, engineering changes, and task approvals.',
        keyFeatures: ['Workflow Designer with Task Hierarchy Tree', 'Consolidated My Worklist view', 'Standardized handlers (EPM-attach-related-objects, EPM-set-rule-based-protection)', 'Dynamic ACL updates during task execution'],
        benefit: 'Accelerates change review cycles by 30%–40% with complete historical digital audit trails.'
      },
      {
        name: 'Program & Project Portfolio Management',
        description: 'Aligning program milestones, deliverable schedules, and contract deliverables directly with PLM product structures.',
        keyFeatures: ['Schedule Manager with WBS dependencies', 'Contract Data Management (Cdm0Contract)', 'Schedule task proxy handlers linking gates to workflow tasks', 'Program-level security attribute rules'],
        benefit: 'Improves Schedule Performance Index (SPI) by 15% and integrates with Microsoft Project and ERP financials.'
      }
    ],
    architectureHighlights: [
      {
        label: 'Teamcenter 2606 Digital Backbone',
        systemOrTool: 'Teamcenter 2606 Enterprise Tier',
        details: 'Integrates engineering authoring, manufacturing planning, supplier collaboration, and compliance into a closed-loop digital thread.',
        codeSnippet: `// Teamcenter 2606 Workflow & Dynamic ACL Handler Pattern
Action: Task Release & Sign-off
Rule Handler: EPM-check-condition (Mass_Properties > 0)
Rule Handler: PS-check-assembly-status-progression
Action Handler: EPM-attach-related-objects (-relation="IMAN_manifestation")
Action Handler: EPM-set-rule-based-protection (-rule="Production_Locked_Read_Only")`
      }
    ],
    businessImpactMetrics: [
      { metric: '50%–80%', label: 'Search & Navigation Velocity', impact: 'Accelerated line retrieval and property editing via Live Excel and Active Workspace.' },
      { metric: '25%', label: 'Shop-Floor Rework Reduction', impact: 'Elimination of paper travelers via 3D Electronic Work Instructions (EWI).' },
      { metric: '30%–40%', label: 'Faster ECN Cycle Times', impact: 'Automated task hierarchy routing and digital stage-gate approvals.' },
      { metric: '14–18 Mo', label: 'Estimated Capital Payback', impact: 'Compelling ROI based on enterprise industry benchmarks.' }
    ]
  },
  {
    id: 'engineering-order-process-roadmap',
    title: 'Closed-Loop Engineering Order (EO) Process & ERP Boundary Architecture',
    subtitle: 'Strategic architecture eliminating spreadsheet silos, manual BOM re-entry, and unmanaged email sign-offs.',
    category: 'Enterprise Digital Thread & ERP Boundary Governance',
    badge: 'Process Architecture & Digital Thread',
    executiveSummary: 'This engineering order assessment evaluates order-to-delivery lifecycles and provides an actionable digital thread architecture. Disconnected CAD silos and manual BOM re-keying into ERP inflate order cycle times by 35%–45%. Transitioning to an integrated PLM-ERP boundary establishes single-source-of-truth ownership, reducing lead times by up to 40% and eliminating procurement mismatches.',
    corePillars: [
      {
        name: 'Current State Friction & Risk Analysis',
        description: 'Analyzing operational bottlenecks across the traditional order execution lifecycle.',
        keyFeatures: ['CAD attributes manually transcribed into Excel', 'Drawings on shared network drives without check-in lock', 'BOMs maintained in disconnected spreadsheets', 'ECO approvals routed via unmonitored email threads'],
        benefit: 'Identifies core drivers of version confusion, inventory obsolescence, and 5-to-10 day approval delays.'
      },
      {
        name: 'System of Record (SoR) Data Ownership Boundary',
        description: 'A clean data ownership boundary between Teamcenter (PLM) and ERP (SAP/Oracle) to avoid revision drift and data corruption.',
        keyFeatures: ['Part Master: Teamcenter owns, auto-transferred to ERP via T4S/TcIF on release', 'CAD Models & Drawings: Stored strictly in Teamcenter vault, never in ERP', 'eBOM: Maintained in TC, drives manufacturing structure', 'Cost & Inventory: ERP owns, viewable in TC via Active Workspace read replica'],
        benefit: 'Prevents data corruption, defines clear system boundaries, and guarantees zero discrepancy between design and purchase orders.'
      },
      {
        name: '8-Phase Order Execution Transformation',
        description: 'Structuring product definition from sales intake through manufacturing and customer closeout.',
        keyFeatures: ['Sales Order Intake with structured specifications', 'CAD Parametric Design with native vaulting', 'Automated drawing release gates', 'T4S automated ERP sync upon ECN sign-off', 'Paperless EWI shop-floor execution', 'Closed-loop quality inspection back to CAD'],
        benefit: 'Establishes complete digital traceability across the entire equipment lifecycle.'
      },
      {
        name: 'PLM Center of Excellence (CoE) Governance',
        description: 'Organizational framework to enforce data cleanliness, attribute standards, and cross-department alignment.',
        keyFeatures: ['Cross-functional governance team (Engineering, IT, Operations, Quality)', 'Pre-migration attribute consolidation and legacy scrub', 'Standardized ERP handoff trigger rules'],
        benefit: 'Builds organizational momentum, ensures high adoption, and protects platform longevity.'
      }
    ],
    architectureHighlights: [
      {
        label: 'System of Record (SoR) Data Matrix',
        systemOrTool: 'Teamcenter 2606 ↔ ERP (T4S/TcIF Gateway)',
        details: 'Formal boundary defining system ownership, integration mechanisms, and synchronization triggers.',
        codeSnippet: `// System of Record (SoR) Ownership Architecture Model:
// 1. Part Master / Item ID  -> Owner: Teamcenter (PLM) | Auto-sync to ERP on Initial Release
// 2. CAD Models & Drawings  -> Owner: Teamcenter (PLM) | Vaulted dataset, never in ERP
// 3. Engineering BOM (eBOM) -> Owner: Teamcenter (PLM) | Maintained in TC Structure Manager
// 4. Manufacturing BOM(mBOM)-> Owner: Shared TC/ERP    | Authored in Easy Plan, published to ERP
// 5. Cost & Inventory       -> Owner: ERP System       | Viewable in TC via Active Workspace
// 6. Engineering Change     -> Owner: Teamcenter (PLM) | TC ECN release triggers ERP ECO update`
      }
    ],
    businessImpactMetrics: [
      { metric: '40%', label: 'Engineering Lead Time Cut', impact: 'Reduced order design turnaround from 10–14 days down to 6–8 days.' },
      { metric: '44%', label: 'Order Cycle Time Cut', impact: 'Order-to-delivery lead time compressed from 25 days down to 14 days.' },
      { metric: '99.5%+', label: 'Validated BOM Accuracy', impact: 'Eliminated manual copy-paste errors and significant scrap/rework costs.' },
      { metric: '60%', label: 'Faster ECO Processing', impact: 'Change lead time reduced from 14 days average down to 5 days via automated workflows.' }
    ]
  },
  {
    id: 'sustainability-lca-powerbi',
    title: 'Teamcenter 2606 Sustainability, Environmental LCA & Power BI DAX Analytics',
    subtitle: 'End-to-end data modeling, T4SUST cloud gateway, and Microsoft Power BI Star Schema DAX architecture.',
    category: 'Sustainability Engineering & Enterprise Analytics',
    badge: 'Sustainability & Power BI Architecture',
    executiveSummary: 'This technical study details the architecture required to integrate environmental Life Cycle Assessment (LCA) and substance compliance into the PLM ecosystem. Using the Teamcenter Gateway for Sustainability (T4SUST) and cloud LCA calculation engines (Makersite, EF 3.0 standard), product structures are enriched with carbon footprint metrics. An enterprise Power BI Star Schema and DAX measure library deliver real-time carbon intensity and RoHS/REACH compliance analytics.',
    corePillars: [
      {
        name: 'Teamcenter 2606 Sustainability Backbone',
        description: 'Coupling product structures (EBOM/MBOM) and part mass with material specifications for automated carbon rollups.',
        keyFeatures: ['Sus0SustainabilityAttr data objects (Climate Change kg CO2e, Fossil Fuel, Water Use)', 'Integrated Material Management (IMM) material catalogs', 'Compliance Process Manager (CPM) for REACH, RoHS, and 3TG', 'Asset Administration Shell (AAS / AASX) ProductCarbonFootprints submodels'],
        benefit: 'Enables automated carbon footprint calculations directly within Active Workspace without manual third-party modeling.'
      },
      {
        name: 'Power BI Star Schema Data Model',
        description: 'High-performance dimensional model engineered for multi-level BOM traversal and environmental telemetry.',
        keyFeatures: ['Fact_SustainabilityBOM (mass, extended CO2e, water footprint, BOM quantity)', 'Fact_SubstanceDeclaration (RoHS/REACH status, SVHC chemical weight, 3TG validation)', 'Dim_Part, Dim_Material, Dim_Supplier, Dim_Date dimensional tables', 'DirectQuery / Scheduled SQL Read Replica extracts'],
        benefit: 'Delivers sub-second query performance across complex multi-level assemblies and multi-year production histories.'
      },
      {
        name: 'Production DAX Measure Library',
        description: 'Business-critical DAX measures enabling real-time rollups of carbon intensity and variance tracking.',
        keyFeatures: ['Total Product Carbon Footprint (Extended Rollup via SUMX)', 'Carbon Intensity Ratio (kg CO2e / kg Mass)', 'RoHS & REACH Compliance Rate %', 'Carbon Footprint Variance vs Target %'],
        benefit: 'Provides mathematical precision for corporate Net-Zero audits and customer Environmental Product Declarations (EPD).'
      },
      {
        name: 'Implementation Prerequisite & Exclusion Strategy',
        description: 'Optimizing implementation scope and licensing to maximize ROI.',
        keyFeatures: ['Prerequisites: Visualization Server, Dispatcher Server/Client, mass data quality (>0 kg)', 'Mandatory Modules: Sustainability Foundation, T4SUST Gateway, IMM, Substance Compliance', 'Exclusion Clarification: Easy Plan and AI Copilot can be excluded for baseline LCA to minimize CapEx'],
        benefit: 'Protects implementation budget by focusing exclusively on mandatory prerequisites and high-impact deliverables.'
      }
    ],
    architectureHighlights: [
      {
        label: 'Production DAX Measure Architecture',
        systemOrTool: 'Microsoft Power BI DAX & Star Schema',
        details: 'Mathematical formulas executed over the dimensional star schema to compute product carbon footprints and compliance.',
        codeSnippet: `// Measure 1: Total Product Carbon Footprint (Extended Rollup)
Total Carbon Footprint (kg CO2e) =
SUMX(
  Fact_SustainabilityBOM,
  Fact_SustainabilityBOM[BOM_Quantity] * Fact_SustainabilityBOM[Unit_Carbon_kgCO2e]
)

// Measure 2: Carbon Intensity Ratio (kg CO2e / kg Mass)
Carbon Intensity Ratio =
DIVIDE(
  [Total Carbon Footprint (kg CO2e)],
  SUM(Dim_Part[Part_Mass_kg]),
  0
)

// Measure 3: RoHS & REACH Environmental Compliance Rate %
Compliance Rate % =
DIVIDE(
  CALCULATE(COUNTROWS(Fact_SubstanceDeclaration), Fact_SubstanceDeclaration[ComplianceStatus] = "PASS"),
  COUNTROWS(Fact_SubstanceDeclaration),
  0
)`
      }
    ],
    businessImpactMetrics: [
      { metric: 'Automated', label: 'Product Carbon Footprint', impact: 'Automated LCA rollups directly from CAD weights and material specifications.' },
      { metric: '100%', label: 'Compliance Auditability', impact: 'Integrated tracking for REACH, RoHS, Conflict Minerals, and SVHC regulations.' },
      { metric: 'Star Schema', label: 'Power BI Performance', impact: 'Optimized multi-level BOM dimensional model with dynamic Row-Level Security (RLS).' },
      { metric: 'CapEx Opt.', label: 'Scope Prioritization', impact: 'Verified exclusion of non-mandatory modules, saving licensing costs.' }
    ]
  }
];

