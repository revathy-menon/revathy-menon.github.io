# MASTER CV — REVATHY MENON
### PhD Candidate | Computational Structural Biology | NCBS-TIFR, Bangalore

---

## TABLE OF CONTENTS

1. [Profile & Contact](#1-profile--contact)
2. [Education](#2-education)
3. [Fellowships, Awards & Secured Funding](#3-fellowships-awards--secured-funding)
4. [Research Portfolio](#4-research-portfolio)
5. [Publications](#5-publications)
6. [Presentations & Knowledge Translation](#6-presentations--knowledge-translation)
7. [Technical Case Study: The Big Five](#7-technical-case-study-personality-classification-the-big-five)
8. [Leadership, Mentorship & Teaching](#8-leadership-mentorship--teaching)
9. [Operations, Procurement & Fiscal Oversight](#9-operations-procurement--fiscal-oversight)
10. [Scientific Communication, Editing & Artifacts](#10-scientific-communication-editing--artifacts)
11. [Extracurricular Leadership & Initiatives](#11-extracurricular-leadership--initiatives)
12. [Professional Development & Workshops](#12-professional-development--workshops)
13. [Technical & Methodological Skills Bank](#13-technical--methodological-skills-bank)

---

## 1. PROFILE & CONTACT

**Revathy Menon**
PhD Candidate, National Centre for Biological Sciences (NCBS-TIFR), Bangalore, India
Supervisor: Prof. Ramanathan Sowdhamini | Batch: GS2021
Expected Thesis Submission: July 2026

**Research Theme:** Exploring protein-protein interactions through computational approaches — encompassing structural database curation, ML-augmented docking score prediction, and biological case studies in innate immunity and cytoskeletal regulation.

**Languages:** English, Hindi, Malayalam, Bengali
**Programming:** Python, R
**LinkedIn:** [linkedin.com/in/revathy-menon](https://www.linkedin.com/in/revathy-menon/)
**GitHub:** [github.com/revathy-menon](https://github.com/revathy-menon)

---

## 2. EDUCATION

### PhD (Biological Sciences) — In Progress
**National Centre for Biological Sciences (NCBS), Tata Institute of Fundamental Research (TIFR)**
Bangalore, India | August 2021 – Present (Expected July 2026)
- Enrolled under the TIFR Deemed University (Subject Board of Biology)
- **CGPA: 7.9 / 10** (equivalent to First Class with Distinction; threshold: 7.5)
- Passed Comprehensive Examination (Part II) on first attempt — November 2023
- Thesis Committee: Prof. R. Sowdhamini (PI), Dr. Shruthi Viswanath, Dr. Sabarinathan Radhakrishnan
- **Thesis Committee Grade: A (Unanimous, all four TCM meetings)** — consistently rated Highly Satisfactory

**PhD Coursework (NCBS-TIFR):**

| Course | Credits | Semester | Year | Grade |
|---|---|---|---|---|
| Proteins: Structure to Function | 3 | August | 2021 | B+ |
| Stories from the History of Science | 3 | August | 2021 | A |
| Statistical Inference in Biology | 4 | August | 2021 | A+ |
| Biostatistics | 3 | January | 2022 | B+ |
| Research and Publication Ethics | 2 | August | 2022 | A |
| Research Methodology: Culture of Scientific Research | 4 | January | 2023 | A |
| The People of India | 2 | January | 2023 | A |
| Research Project II | 2 | January | 2023 | A |

**Total credits earned: 23 (Required: 20)**

---

### Integrated BS-MS (Biology) — Completed 2021
**Indian Institute of Science Education and Research (IISER) Tirupati**
Tirupati, Andhra Pradesh, India | 2016 – 2021
- **CGPA: 7.4 / 10**
- MS Thesis: *Understanding the role of bifurcated inter-protein interactions in protein complexes*
  - Supervisors: Prof. N. Srinivasan (IISc) & Dr. Sreenivas Chavali (IISER Tirupati)
  - Resulted in a co-first-author publication in *Proteins: Structure, Function, and Bioinformatics* (2025)

---

### Secondary Education
- **ISC (Class XII):** St. Paul's Boarding & Day School | 2016 | **95.2%**
- **ICSE (Class X):** Our Lady Queen of the Missions School | 2014 | **96.0%**

---

## 3. FELLOWSHIPS, AWARDS & SECURED FUNDING

| Award | Awarding Body | Value / Impact | Period |
|---|---|---|---|
| **DAE-TIFR Junior/Senior Research Fellowship** (via JGEEBILS) | Dept. of Atomic Energy, Govt. of India | Full doctoral funding (stipend + HRA); cleared two competitive national interviews for selection to NCBS-TIFR | 2021–Present |
| **CSIR-NET Junior Research Fellowship (JRF)** | Council of Scientific & Industrial Research (CSIR-HRDG) | **All India Rank 65** — Top 0.1 percentile nationally; qualifies for lectureship/assistant professorship | 2019 |
| **DST INSPIRE Scholarship for Higher Education (SHE)** | Dept. of Science & Technology, Govt. of India | **~₹1.4 Lakhs + contingency**; awarded to top 1% of students nationally pursuing basic sciences | 2016–2021 |
| **National Talent Search Examination (NTSE) Scholarship** | Ministry of Education (NCERT) | Highly competitive national scholarship; ~1,000 students selected annually | 2013–2016 |
| **Infosys Foundation Travel Grant** | Infosys Foundation | **₹50,000** for EMBL AI and Biology Conference, Heidelberg (March 2026) | 2026 |

---

## 4. RESEARCH PORTFOLIO

### 4.1 Doctoral Research — NCBS-TIFR (2021–Present)

**Lab:** Computational Biology & Structural Biology, Prof. R. Sowdhamini
**Overarching Theme:** Computational exploration of protein-protein interactions (PPIs) through database curation, docking algorithm development, ML-based scoring, and biological case studies.

---

#### Project: PASS2 Database — Structure-Based Sequence Alignments of Protein Superfamilies
*(Published — PASS2.8, Database Journal, 2025)*

- **Scope & Scale:** Led the update of the PASS2 database (v8; http://caps.ncbs.res.in/pass2) corresponding to SCOPe 2.08, encompassing **26,690 protein domains** organized into **2,058 superfamilies** with <40% pairwise sequence identity.
- **Pipeline Execution:** Drove the end-to-end automated pipeline for **1,244 multi-member superfamilies (MMSs)**, achieving a **90.4% success rate** (1,124/1,244).
- **Outlier Resolution:** Implemented k-means clustering (elbow method; WCSS-based k selection) to recover and re-align **79 problematic superfamilies** with >50% gap content or <40% secondary structure conservation; clusters corresponded in several cases to family-level annotations (CoA-dependent acyl transferases, Histone-fold superfamilies).
- **Feature Engineering:** Computed and integrated per-superfamily: HMMs (HMMER), conserved residues (absolutely: 100%; highly: >90%), secondary structural motifs (Smotif), alignment statistics (AliStat), indel profiling (CUSP), intra-domain interaction networks (HORI), Gene Ontology (GO) annotations, topological diagrams (PDBsum), putative interactors (STRING-DB).
- **Tools:** MATT, JOY, COMPARER, MNYFIT, HMMER, Smotif, AliStat, CUSP, HORI, PDBsum, BioPython, Python, PHP, MariaDB.

---

#### Project: DockScore 2.0 — ML-Augmented Protein-Protein Docking Scorer
*(Unpublished — referred to as DS / DS2.0 / SODAPOP)*

- **Re-implementation:** Recoded the original Perl-based DockScore in Python; computed six normalized interface descriptors: Interface Surface Area (FreeSASA), Residue Conservation (PSI-BLAST PSSMs), Short Contacts (distance-based), Interface Hydrophobicity, Spatial Clustering, Positive Residues at Interface.
- **Baseline Performance:** Python implementation achieved **~87% accuracy** (26/30 cases) on the initial benchmark (15 homodimers + 15 heterodimers), establishing full functional parity with the original algorithm.
- **Large-Scale Benchmarking:** Extended to **Docking Benchmark v5 (DBv5; 257 complexes, >100,000 decoys)** across rigid-body, medium, and difficult docking categories using LightDock-generated ensembles; decoys labeled via CAPRI/DockQ quality criteria.
- **ML Model Development & Key Metrics:**
  - Benchmarked: Logistic Regression, SVM, Random Forest, XGBoost; addressed class imbalance via SMOTE and down-sampling
  - **Best regression:** XGBoost + Neural Network blend (0.6:0.4) → **Spearman's ρ = 0.7048, MAE = 0.1270**
  - **Best classification:** Knowledge distillation (NN imitating XGBoost; Huber loss; λ = 0.25) → **F1 = 0.91, PR AUC = 0.99**
- **Advanced Methods Explored:** Graph Neural Networks (residue-level interface graphs; margin-ranking loss); hybrid gradient-boosted + neural network models; knowledge distillation; residual learning.
- **Conference:** Poster selected for **EMBL AI and Biology Conference, Heidelberg (March 2026)**; presented virtually; ₹50,000 travel grant received.

---

#### Project: Actin–Tropomyosin Interface Modelling
*(Manuscript Under Preparation — collaboration with Dr. Mohan Balasubramanian, University of Warwick)*

- **Systems:** hTPM1 (284 aa, 7 actin subunits), hTPM4 (248 aa, 6 actins), *S. pombe* CDC8/pCDC8 (161 aa, 4 actins)
- **Pipeline:**
  - Full-length coiled-coil homodimers via **AlphaFold2-Multimer** (ColabFold); model selection by PPCheck pseudo-energies + pLDDT; validated with DeepCoil2/CoCoNat
  - *S. pombe* actin modeled with **AlphaFold3** (PDB: 8GSU for human actin)
  - Docking restraints from published literature, transferred via **ClustalW** alignment
  - Iterative **LightDock** docking (200 swarms, 10 decoys/swarm, 1,000 GSO steps); each round positions one actin subunit; evaluated by PPCheck
  - CDC8 temperature-sensitive mutants (A18T, R21H, E31K, E129K) built in PyMol; energy-minimized by **FoldX**; analyzed with PPCheck
- **Results:**
  - **Energetic hierarchy: pCDC8 > hTPM1 > hTPM4** — shorter filaments incur fewer cumulative geometric penalties along the actin helix ("gestalt-binding" model)
  - **Isoform chemistry:** hTPM1 forms stronger interfaces than hTPM4 despite being longer, mirroring their contractile vs. dynamic cytoskeletal roles
  - **Conserved electrostatic anchors:** Acidic hotspot residues (D254/hTPM1, D218/hTPM4, D131/pCDC8) at equivalent quasi-repeat positions form conserved salt bridges across all three isoforms and species
  - **ts Mutants:** pCDC8 mutations primarily destabilise the coiled-coil dimer, not actin contacts — contractile ring failure arises from impaired cable continuity, not direct actin affinity loss

---

#### Project: Structural Analysis of TRAM Dimeric Interface Mutations
*(Published — Proteins: Structure, Function, and Bioinformatics, 2024)*

- **Context:** Investigated how two dominant-negative mutations (P116H, C117H) at the TRAM homodimer BB loop abrogate TLR4 downstream TRIF-dependent signaling.
- **Methods:** WT/mutant dimers built from NMR structure (PDB: 2M1W) via PyMol; HADDOCK-modeled complexes (1,000 structures, 9 clusters); **200 ns MD simulations × 3 replicates (GROMACS)**; Dynamic Cross-Correlation (DCC) + Communication Propensity (CP) via **MDM-TASK**; Protein Structural Network analysis via **PSN-Ensemble**; allosteric path analysis via **NAPS**.
- **Results:** Mutant dimers showed elevated CP, increased radius of gyration, loss of conserved cliques (WT: 1; mutants: 0), and prolonged allosteric shortest paths between AEDD and TS sites — structural basis for abrogated TRIF recruitment.

---

#### Project: Bifurcated Inter-Protein Interactions in Protein Complexes
*(Published — Proteins: Structure, Function, and Bioinformatics, 2025)*

- MS-thesis-derived project extended to publication; co-first author with Dr. Sneha Bheemireddy (IISc)
- Computational analyses of bifurcated inter-protein interactions across PDB assemblies; demonstrated their pivotal role in complex stability

---

#### Project: GRAYU Database
*(Published — Frontiers in Pharmacology, 2026)*

- Co-author on graph-based database integrating Ayurvedic formulations, medicinal plants, phytochemicals, and diseases
- Contributed to data curation, analysis pipeline and online documentation
- Database available at http://caps.ncbs.res.in/GRAYU

---

#### Project: Transcriptomic Profiling in the L-DOPA Pathway
*(Manuscript Under Preparation)*

- **Pipeline Execution:** Engineered an end-to-end bulk RNA-seq analysis pipeline for transcriptomic profiling. Conducted rigorous data quality control via FastQC, read alignment using HISAT2, and transcriptome assembly with StringTie.
- **Differential Expression Analysis:** Executed differential gene expression (DEG) analysis using DESeq2 in R to identify statistically significant regulatory changes. Familiar with alternative parametric and empirical Bayes modeling frameworks including edgeR and limma.
- **Visualization:** Generated high-quality statistical visualizations, including volcano plots, to effectively communicate complex transcriptomic shifts.


#### Other Projects
*(Mention selectively based on role; all are unpublished or in-progress)*

- **CHK1/STG project** (Dr. Arjun Guha's lab) — wet-lab validation in progress
- **PDBe-KB contribution** — in progress (EMBL-EBI)
- **Histidinol dehydrogenase structural analysis** (Dr. Rakesh's lab) — in progress
- **Actin ancestral sequence reconstruction** — in progress

---

### 4.2 Pre-Doctoral Research Experience

| Period | Institution | Supervisor | Project |
|---|---|---|---|
| Aug 2020–May 2021 | IISER Tirupati / IISc | Prof. N. Srinivasan & Dr. S. Chavali | MS Thesis: Bifurcated inter-protein interactions in protein complexes |
| Jun–Jul 2019 | IISER Tirupati | Dr. Sreenivas Chavali | Influence of homorepeats on protein lengths in human and yeast |
| May–Jul 2018 | NCBS, Bangalore | Dr. Mahesh Sankaran | Trait-demography relationships in Southern Indian tropical rainforest species; Western Ghats field work |
| May–Jun 2017 | IMSc, Chennai | Dr. Gautam Menon | Modeling dengue vectors *Aedes aegypti* and *Aedes albopictus* |

---

## 5. PUBLICATIONS

*(\* denotes co-first authorship)*

1. **Joshi, S.\*, Pathak, A.\*, Regati, D.R.\*, Menon, R.**, et al. (2026). GRAYU: graph-based database integrating Ayurvedic formulations, medicinal plants, phytochemicals and diseases. *Frontiers in Pharmacology*, 16:1727224. doi: 10.3389/fphar.2025.1727224

2. **Menon, R.\*, Bheemireddy, S.\***, Chavali, S., Sowdhamini, R., Srinivasan, N. (2025). Computational analyses of bifurcated inter-protein interactions in protein–protein assemblies reveal their pivotal role in conferring stability. *Proteins: Structure, Function, and Bioinformatics*. doi: 10.1002/prot.70090

3. **Menon, R.\*, Nayak, S.\***, Rajesh, R., Sowdhamini, R. (2025). PASS2: update of database of structure-based sequence alignments. *Database*. doi: 10.1093/database/baaf072

4. Verma, S., Sharma, A., Pathak, A., **Menon, R.**, Sowdhamini, R. (2025). Evolution of Protein Families. *Encyclopedia of Bioinformatics and Computational Biology (2nd ed.)*, 3:99–110. doi: 10.1016/B978-0-323-95502-7.00144-5

5. Pathak, A., Tiwari, V., **Menon, R.**, Sowdhamini, R. (2025). Prediction of Protein-Protein Interactions. *Encyclopedia of Bioinformatics and Computational Biology (2nd ed.)*, 4:380–396. doi: 10.1016/B978-0-323-95502-7.00146-9

6. **Menon, R.\*, Verma, S.\***, Sowdhamini, R. (2024). Structural insights into the role of deleterious mutations at the dimeric interface of Toll-like receptor interferon-β-related adaptor protein. *Proteins: Structure, Function, and Bioinformatics*. doi: 10.1002/prot.26707

---

## 6. PRESENTATIONS & KNOWLEDGE TRANSLATION

### 6.1 Conference & Symposium Presentations

**EMBL AI and Biology Conference** | Heidelberg, Germany | March 10–13, 2026
- *Poster — selected for in-person; presented virtually (West Asia travel constraints)*
- Title: *"DockScore 2.0: interpretable quality assessment for protein-protein docking ensembles"*
- Received ₹50,000 EMBL travel grant *(DockScore 2.0 / DS2.0 / SODAPOP is unpublished)*

**NCBS Annual Talks (Institute Research Symposium)** | Bangalore | During PhD
- Poster presentation of published research; institute-wide audience (faculty, postdocs, graduate students)

### 6.2 Quarterly Internal Stakeholder Updates
- Structured progress reviews to PI + lab every ~3 months; includes progress, failure mode analysis, updated timelines — equivalent to agile sprint reviews

### 6.3 Quarterly Literature Syntheses
- Critical literature presentations to lab: synthesis, methodological evaluation, and relevance commentary

### 6.4 Annual Cross-Disciplinary Work Seminars (Institute-Wide)
- Annual research seminars to diverse scientific audience (computational, experimental, ecology, neuroscience)
- Previous dates: 3 July 2023; 19 August 2024
- **External Validation:** TCM member noted: *"Very clear presentation! You seem to be talented in explaining things in simple terms."*

### 6.5 Thesis Committee Reports (Formal Stakeholder Reporting)
- 4 formal TCM reports (Nov 2023, Jun 2024, May 2025, Jan 2026): 30–90-page written reports + oral presentations + Q&A before faculty panel
- **Outcome:** Grade A (unanimous across all 3 committee members) at every meeting; fellowship continuation strongly recommended

---

## 7. TECHNICAL CASE STUDY: PERSONALITY CLASSIFICATION (THE BIG FIVE)

**Role:** Co-Lead | Graduate Course Project (Statistical Inference in Biology)
**Collaborator:** Nija George
**Recognition:** Selected as a course exemplar for subsequent iterations

### Problem Statement
Multi-class personality type classification using the validated Big Five model, benchmarked against the limitations of the Myers-Briggs framework.

### Data & Pipeline
- **Dataset:** Kaggle — 1,024 respondents; 5 trait score features; 5 personality labels
- **Tools:** Python (scikit-learn, pandas, NumPy), Matplotlib

### Analytical Steps
1. **EDA:** Boxplot distributions; Pearson correlation across trait pairs (range: **-0.15 to +0.092**, confirming independence)
2. **Preprocessing:** Skewness assessment; log/sqrt transformations tested (declined — worsened distribution)
3. **Benchmarking:** Multinomial Logistic Regression vs. SVMs (Linear, Polynomial, RBF)

### Results

| Model | Accuracy |
|---|---|
| Multinomial Logistic Regression | **66.24%** ← optimal |
| SVM — Linear | 59.55% |
| SVM — RBF | 38.85% |
| SVM — Polynomial | 29.94% |

### Failure Mode Diagnosis
Confusion matrices produced; bottlenecks identified: class imbalance, insufficient margin separation, suboptimal feature-to-sample-size ratio. Selected as exemplar precisely for rigour of failure analysis.

---

## 8. LEADERSHIP, MENTORSHIP & TEACHING

### 8.1 Graduate Teaching Assistant | *Statistical Inference in Biology*
**NCBS-TIFR | Sep–Dec 2022 & Sep–Dec 2023** (two full iterations)

- **Scale:** ~30–40 graduate students per iteration; 19-lecture course
- **Instruction:** Weekly tutorials on probability, Bayesian inference, frequentist statistics, ML, and neural networks; co-designed Python/R pseudocode-based assignments
- **Core Technologies:** Python (NumPy, Matplotlib), R, LaTeX, Google Colab
- **Topics:**
  - Supervised: Linear/logistic regression, SVM, K-NN, perceptrons, CNNs, HMMs; F-statistic; polynomial regression; variable selection
  - Unsupervised: K-means (Lloyd's), hierarchical clustering, GMMs, hard/soft EM
  - Bayesian: MCMC (Metropolis-Hastings proof + detailed balance, Gibbs, simulated annealing, replica exchange), MAP, MLE, Bayesian updating, Bayes factors
  - Regularization: Ridge, LASSO, Elastic Nets; bias-variance tradeoff; k-fold CV
  - Mixed Models: LMER; Simpson's Paradox; batch effect correction
- **Project Supervision:** Supervised **10+ student teams** on end-to-end ML projects (Parkinson's voice diagnosis, prostate cancer malignancy, ecological species abundance)

---

### 8.2 Graduate Teaching Assistant | *AI for Good and Evil (Generative AI)*
**NCBS-TIFR | Jan–Apr 2024**

- Translated generative AI architecture (Transformers, LLMs, Diffusion models, GANs) for diverse student body including non-STEM participants
- Hands-on workshops: text/image generation, prompt engineering, code generation/debugging, Django web apps
- Ethics & AI safety modules: hallucinations, copyright, data privacy, "Garbage-In/Garbage-Out" in science
- Simulations: Hodgkin-Huxley, Lotka-Volterra, Three-Body Problem, Cellular Automata
- Science-specific AI: AlphaFold 2/3, ColabFold, DeepLabCut, Perch (bird call classification)
- Portfolio evaluation: synthesis of AI output with critical reflection on scientific integrity and societal impact
- **Core Technologies:** GPT-4, Claude, Gemini, Ollama, HuggingFace, Copilot, Colab, Django, AlphaFold 2/3, DeepLabCut, ColabFold, Jupyter

---

### 8.3 Guest Lecturer | *AI in Structural Biology*
**NCBS-TIFR | 2025 Iteration**

- Delivered specialist lecture on evolutionary history of protein structure prediction; transformer architecture and limitations of AlphaFold 2/3; live PyMol + ColabFold demonstrations

---

### 8.4 Research Mentorship (Interns & Project Students)

| Mentee(s) | Duration | Institution | Project |
|---|---|---|---|
| Vishal S. Nayak | Jan 2026–Present | KLE Tech University (B.Tech Biotech) | Analysis of docked protein poses |
| Sunil Malgaye | Sep–Dec 2022 | University College Nanded (B.Sc Biology) | Case studies of protein dimers |
| Raghavan Sheshadri K. | Feb–Jun 2023 | MSRIT Bangalore (B.E. Biotech) | Homology search, phylogeny, sequence alignment of DNA clamp (PDB: 1VYM); Tools: BLAST, CD-HIT, MEGA, iTOL, MUSCLE, Jalview, DALI |
| Anushree A., Nithin N.K., Deepashree M. | Feb–Jun 2025 | JSS College, Mysore | Structural/evolutionary analyses of 3 protein interaction pairs *(co-mentored)* |

**Total: 6 individuals mentored across 4 years**

---

## 9. OPERATIONS, PROCUREMENT & FISCAL OVERSIGHT

**Role:** Lab Operations & Procurement Lead (de facto) | NCBS-TIFR | 2022–Present
**Scale:** Annual operating budget ₹30–40 Lakhs; capital procurements up to ₹40 Lakhs

---

### 9.1 Fiscal Stewardship — Year-End Spend-Down (4 Consecutive Years)
- Identified and deployed ~₹50,000/year in residual grant funds; **₹2 Lakhs cumulative infrastructure reinvestment** through proactive year-end budget management
- **Outcome:** 100% utilization of allocated research capital for 4 fiscal years

---

### 9.2 Audit Compliance & Stakeholder Management — Hard Disk Conflict (March 2025)

- **Context:** 6 hard drives procured (~₹80,000); audit flag raised for "duplicate billing" patterns (multiple invoices within 48 hrs, same budget code)
- **Resolution:** Persuaded vendor to accept partial return of 2 unused drives; collaborated with PI to identify alternative funding streams; executed cross-lab indent (budget code) transfers
- **Outcome:** 100% system uptime; zero formal audit flags; ₹80,000 in unnecessary spend prevented; full compliance maintained

---

### 9.3 Risk Mitigation & Negotiation — ₹40 Lakh HPC Server Acquisition

- **Context:** Lead technical evaluator under government L1 (Lowest Bidder) procurement rules for a high-performance computing server
- **Risk Identification:** Flagged the lowest-priced bidder as high-risk despite meeting spec; monitored repeated delivery failures; initiated contract cancellation
- **Negotiation:** Pivoted to Tier-1 vendor (initial quote: ₹44L); negotiated to **₹40L — a ₹4 Lakh (10%) cost reduction** using technical requirements + budget ceiling as leverage
- **Outcome:** Mission-critical HPC deployed within budget; zero project delays; 10% savings vs. premium supplier default

---

### 9.4 Crisis Procurement & Delivery Management
- Routinely executed high-pressure acquisitions within **48–72 hour windows**; unblocked institutional purchase/accounts workflows through targeted stakeholder communication

---

## 10. SCIENTIFIC COMMUNICATION, EDITING & ARTIFACTS

### 10.1 Technical Manuscript Editing & Legibility Improvement
- **Formally acknowledged** for editorial contributions to a published peer-reviewed manuscript: Sharma, A., Krishna, S., & Sowdhamini, R. (2023). Bioinformatics analysis of mutations sheds light on the evolution of dengue NS1 protein with implications in the identification of potential functional and druggable sites. *Molecular Biology and Evolution*, 40(3), msad033. https://doi.org/10.1093/molbev/msad033 — acknowledgement reads: *"We thank Ms Revathy Menon for help in improving the manuscript."*
- Contribution involved close reading for scientific accuracy, logical coherence, and clarity of exposition — the same rigour applied to the four 30–90-page TCM reports produced as first-draft author throughout the PhD
- Demonstrates transferable editorial competency: ability to engage critically with another researcher's scientific argument, improve its communication without distorting its content, and produce publication-ready prose

---

### 10.2 Web & Science News Editing — NCBS Research Explained
- Served as editor for a published lay-science news piece on the official NCBS website, translating primary research findings for a general public audience
- Published at: https://news.ncbs.res.in/research-explained/cellular-changes-linked-parkinson%E2%80%99s-disease-observed-cells-across-body
- Demonstrates ability to distill complex cell biology (Parkinson's disease research) into accessible, accurate, and engaging prose — a core competency for science journalism, outreach grant writing, and editorial roles at science-communication platforms

---

### 10.3 Published Scientific Illustration — Mathematics Journal
- **Hand-drew scientific diagrams formally published** in a peer-reviewed mathematics journal: *Gururaja, H. A., & Subhash, B. (2018). On the orientability of compact hypersurfaces in Euclidean space. Mathematics Student, 87(3–4), 99–108.*
- Acknowledgement reads: *"The authors would like to thank Ms. Revathy Menon for drawing some of the diagrams appearing in the article."*
- Contributes to a cross-disciplinary editorial and illustration portfolio spanning **biology and pure mathematics** — evidence of scientific visual communication skills that are domain-agnostic, transferable, and formally peer-published

---

### 10.4 NCBS Open Day — Scientific Illustration | February 28, 2024

Created and publicly exhibited original informational paintings communicating biological adaptations to a general public audience.

**Octopus:** Distributed nervous system (1 central brain + 8 ganglionated arms); autonomous arm movement; chromatophore-based colour/texture mimicry (*Wunderpus photogenicus*); sucker-based sensorimotor integration (tool use including opening jars from inside and outside)

**Bat:** Passive tendon-locking mechanism enabling inverted roosting without muscular energy expenditure; cardiovascular valve adaptations preventing orthostatic blood pooling; physiological efficiency of low body mass

*Applied skills: translating complex biology into accurate, engaging lay communication — applicable to science journalism, outreach grant writing, and policy briefs*

---

## 11. EXTRACURRICULAR LEADERSHIP & INITIATIVES

| Role | Organization | Period |
|---|---|---|
| Co-founder & Managing Editor | Inventa (inter-institute science communication initiative) | 2021 |
| Chief Editor | Dhwani — IISER Tirupati College Magazine | 2019–2020 |
| Core Member, Arts Team | Dhwani | 2017–2020 |
| Core Organizer | Vivante — IISER Tirupati Scientific & Cultural Fest | 2019 |
| Sports Representative | Women's Badminton, IISM | 2016–2018 |
| Sports Representative | Women's Football, IISM | 2019 |
| Selected Participant | Ek Bharat Shreshtha Bharat (EBSB) — Ministry of Education national cultural exchange | 2018 |
| Member | Literary Club, IISER Tirupati | 2016–2021 |

---

## 12. PROFESSIONAL DEVELOPMENT & WORKSHOPS

| Workshop / School | Institution | Duration | Focus |
|---|---|---|---|
| Summer School on AI and Machine Learning | IIT Tirupati | July 22–26, 2019 (5 days) | Data science, deep learning, AI applications |
| Physics of Life — 6th NCBS-Simons Monsoon School | NCBS, Bangalore | June 15–22, 2018 (7 days) | Interdisciplinary biology; physics & information sciences; group research project |
| National Science Camp (Vijyoshi) | IISc Bangalore (DST/KVPY) | December 3–5, 2016 | Interdisciplinary science; expert-student interaction |

---

## 13. TECHNICAL & METHODOLOGICAL SKILLS BANK

*Comprehensively aggregated from all source documents.*

---

### 13.1 Programming & Software Development

| Language / Tool | Application |
|---|---|
| **Python** | ML pipelines, bioinformatics scripting, data analysis, webserver back-end |
| — NumPy | Numerical computation, matrix operations |
| — Pandas | Data wrangling, cleaning, exploration |
| — scikit-learn | Classification, regression, clustering, model evaluation |
| — Matplotlib | Scientific visualization |
| — BioPython | Biological sequence/structure parsing |
| — FreeSASA | Solvent-accessible surface area |
| **R** | Statistical modeling, LMER, DEG analysis (DESeq2, edgeR, limma), visualization (volcano plots) |
| **SQL / MariaDB 10.5** | Relational database management |
| **PHP 8 (Smarty 5)** | Webserver back-end templating |
| **HTML / CSS / Bootstrap / jQuery** | Frontend webserver development |
| **LaTeX** | Scientific manuscript preparation |
| **Django** | Web application development |
| **Google Colab / Jupyter** | Interactive scientific computing |

---

### 13.2 Machine Learning & Statistical Methods

| Method | Context |
|---|---|
| **Multinomial Logistic Regression** | Multi-class personality classification; docking decoy classification |
| **Support Vector Machines** (Linear, RBF, Polynomial) | Classification benchmarking |
| **Gradient-Boosted Decision Trees (XGBoost)** | Lead model for docking score prediction |
| **Random Forests** | Docking decoy classification benchmarking |
| **Neural Networks** (MLP / fully connected) | DockQ regression; knowledge distillation |
| **Knowledge Distillation** (Huber loss; λ-weighted) | Best classification model (F1=0.91, PR AUC=0.99) |
| **Graph Neural Networks (GNNs)** | Residue-level interface graphs; margin-ranking loss |
| **K-Means Clustering** (elbow method) | PASS2 domain clustering |
| **Hierarchical Clustering** | Structural dissimilarity trees |
| **Gaussian Mixture Models / EM** | Hard/soft EM; TA-taught |
| **Hidden Markov Models** | PASS2 (HMMER); TA-taught |
| **MCMC** (M-H, Gibbs, annealing, replica exchange) | Bayesian inference; extensively TA-taught |
| **Linear Mixed-Effects Regression (LMER)** | Batch effects; Simpson's Paradox; TA-taught |
| **Ridge / LASSO / Elastic Net** | Regularization; TA-taught |
| **Bayesian Inference** (MAP, MLE, Bayes factors) | Statistical modeling; extensively TA-taught |
| **SMOTE / Down-sampling** | Class imbalance correction |
| **Pearson / Spearman Correlation** | Feature testing; ranking evaluation |
| **Mann-Whitney U-Test** | Distribution comparison |
| **k-Fold Cross-Validation** | Model evaluation and selection |
| **Confusion Matrices; F1; PR AUC; MAE; Spearman ρ** | Multi-metric evaluation framework |
| **DockQ / CAPRI** | Standardized docking decoy quality assessment |

---

### 13.3 Computational Biology & Bioinformatics Tools

| Tool | Application |
|---|---|
| **PyMol** | Structure visualization, mutagenesis modeling, structure editing |
| **GROMACS** | Molecular dynamics simulations |
| **HADDOCK** | Guided protein-protein docking |
| **LightDock** | GSO-based docking; ANM flexibility |
| **AlphaFold 2 / AlphaFold-Multimer** | Protein and complex structure prediction; coiled-coil modeling |
| **AlphaFold 3** | Globular protein and complex prediction |
| **ColabFold** | High-throughput AlphaFold |
| **FoldX** | Energy minimization; stability of mutant structures |
| **PPCheck** | Interface energy calculation; hotspot prediction |
| **DockScore (Perl + Python 2.0)** | Docking pose Z-score ranking |
| **MDM-TASK** | DCC and CP from MD trajectories |
| **PSN-Ensemble** | Protein Structural Network analysis |
| **NAPS** | Allosteric shortest-path analysis |
| **PASS2 Pipeline** (MATT, JOY, COMPARER, MNYFIT) | Structure-based MSA of protein superfamilies |
| **HMMER / hmmbuild** | HMM construction from structural alignments |
| **PSI-BLAST / PSSMs** | Residue conservation for interface scoring |
| **FreeSASA** | Solvent-accessible surface area |
| **Smotif / AliStat / CUSP / HORI** | MSA quality and structural feature analysis |
| **PDBsum** | Topological structure diagrams |
| **DeepCoil2 / CoCoNat** | Coiled-coil architecture prediction |
| **BLAST / CD-HIT** | Homology search; sequence clustering |
| **MUSCLE / ClustalW / MAFFT** | Multiple sequence alignment |
| **MEGA / iTOL** | Phylogenetic tree construction and visualization |
| **Jalview / DALI** | Alignment visualization; structure-based alignment |
| **DockQ** | Docking quality evaluation (CAPRI-compatible) |
| **DeepLabCut** | Animal pose estimation |
| **STRING-DB** | Protein interaction network annotation |
| **SCOPe 2.08 / ASTRAL** | Structural domain classification |
| **UniProt / PDB** | Sequence/structure retrieval and analysis |
| **RNA-seq Pipeline** | HISAT2, StringTie, FastQC |
| **Transcriptomic Statistics** | DESeq2, edgeR, limma |

---

### 13.4 Generative AI & LLM Tools

| Tool | Context |
|---|---|
| GPT-4, Claude, Copilot, Bard/Gemini | Taught use-cases, hallucination risks, ethics |
| Prompt Engineering | Designed and taught structured prompting frameworks |
| Django | AI-assisted web application development |
| Perch | Bird call classification (ecological AI) |

---

### 13.5 Professional & Transferable Skills

| Skill | Evidence |
|---|---|
| **Budget Management** | ₹30–40L annual operating budget; ₹40L capital procurement |
| **Vendor Negotiation** | ₹4L / 10% cost reduction from premium supplier |
| **Procurement Lifecycle** | Specification → quoting → purchase → audit certification |
| **Audit & Compliance** | Resolved billing audit flag; cross-budget code reassignment |
| **Crisis Management** | 48–72 hr procurement cycles; multi-stakeholder conflict resolution |
| **Stakeholder Reporting** | 4 formal TCM reports; quarterly PI updates; annual institute seminars |
| **Technical Writing** | 6 peer-reviewed publications; 4 TCM reports (30–90 pages each) |
| **Pedagogical Design** | Graduate ML/AI coursework; pseudocode exercises for 30–40 students |
| **Mentorship** | 6 interns across 3+ years; code reviews; reproducibility training |
| **Literature Synthesis** | Quarterly critical reviews; 2 encyclopedia chapters co-authored |
| **Cross-Disciplinary Communication** | Annual seminars to non-specialist scientific audiences; AI for non-STEM students |
| **Editorial Leadership** | Co-founder/editor (Inventa); Chief Editor (Dhwani) |
| **Science Communication** | Open Day scientific illustration; lay summaries in TCM reports |
| **Multi-Project Management** | 4+ active research projects + TA + mentorship + procurement simultaneously |

---

*Last updated: April 2026*

*Source documents: Academic transcripts (NCBS-TIFR PhD, IISER Tirupati BS-MS), Thesis Committee Reports (TCM2–TCM5), TA syllabi (Statistical Inference in Biology; AI for Good and Evil; AI in Structural Biology), research progress reports, Honors & Awards file, procurement and operations logs (purchase.txt, OPS_INFLUENCE_LOG.txt), publications list, conference records (EMBL 2026 poster), portfolio files (Big Five project; technical_case_study.txt), mentor/intern records, Open Day exhibition notes, research notes (notes.txt), and TCM soft skills comments (tcm_comment.txt).*

---

## 14. TAILORED PROFESSIONAL SUMMARIES (FOR SELECTION)

*Use one of the four summaries below as the opening paragraph ("Professional Summary" or "About") when tailoring this Master CV for a specific role. Each is exactly 3 sentences. Select, do not blend.*

---

### Target 1 — Data Science

I am a computational PhD researcher at NCBS-TIFR with a proven track record of building end-to-end ML pipelines in Python — from feature engineering and class-imbalance handling (SMOTE) to benchmarking XGBoost, Random Forests, knowledge-distilled neural networks, and GNNs across a dataset of 257 protein complexes and over 100,000 decoys, achieving a best classification F1 of 0.91 (PR AUC = 0.99) and a regression Spearman's ρ of 0.7048. My strength lies not only in model development but in rigorous failure-mode diagnosis: I systematically generate confusion matrices, characterize class imbalance, and document precisely why a model breaks — a discipline I honed both in my own research and as a TA supervising 10+ graduate student ML projects on real-world clinical and ecological datasets. With a CSIR-NET All India Rank 65 in mathematical biology, an A+ in graduate Statistical Inference (covering the full stack from MCMC to CNNs), and published contributions to structural bioinformatics databases at 26,000+ domain scale, I bring the quantitative depth and applied engineering instinct to translate messy biological data into production-quality predictive systems.

---

### Target 2 — Management Consulting

I am a PhD researcher at one of India's premier scientific institutions who has simultaneously operated as the de facto lab operations lead, managing an annual research budget of ₹30–40 Lakhs, negotiating a ₹4 Lakh (10%) cost reduction from a Tier-1 supplier on a ₹40 Lakh HPC server acquisition, and resolving a multi-stakeholder audit conflict — persuading a resistant vendor, coordinating cross-departmental budget code transfers, and preventing ₹80,000 in unnecessary expenditure, all while maintaining 100% regulatory compliance. My approach is inherently diagnostic: whether I am identifying why a docking algorithm fails on medium-difficulty protein complexes or why a procurement workflow is stalled in the accounts department, I decompose the problem into its structural causes and implement targeted, data-driven remedies. Across four years of concurrent research project management, teaching, mentorship, and fiscal stewardship, I have consistently delivered to stakeholders — four unanimous Grade A thesis committee evaluations and zero institutional compliance failures — demonstrating the operational discipline and stakeholder-management effectiveness that consulting demands.

---

### Target 3 — Effective Altruism (EA) Grantmaking

I am a PhD researcher with a demonstrated ethic of fiscal stewardship and resource optimization: over four consecutive fiscal years at NCBS-TIFR, I proactively identified and deployed residual grant funds that would otherwise have lapsed, cumulatively reinvesting ₹2 Lakhs in research infrastructure and achieving 100% utilization of allocated capital — directly maximizing the impact of every rupee of public science funding. My analytical work is cross-disciplinary by design: I conduct quarterly critical literature syntheses spanning structural biology, machine learning, and AI safety, and I have formally taught AI ethics — covering LLM hallucinations, data privacy, copyright, and the societal risks of "Garbage-In/Garbage-Out" reasoning — to graduate and non-STEM student cohorts, equipping future researchers to engage responsibly with transformative technologies. With a track record of evaluating evidence rigorously (CSIR-NET AIR 65; A+ in graduate statistical inference; 6 peer-reviewed publications), communicating complex tradeoffs lucidly to diverse audiences, and stewarding institutional resources with integrity, I bring the analytical, ethical, and operational foundations that effective grantmaking requires.

---

### Target 4 — Scientific Editing

I am a computational biology PhD candidate at NCBS-TIFR with six peer-reviewed publications spanning structural databases, molecular dynamics, machine learning, and evolutionary bioinformatics — including three co-first-author papers and two encyclopedia chapters — and four years of conducting quarterly critical literature syntheses in which I evaluate methodology, identify logical gaps, and communicate relevance to a mixed-expertise lab audience. My ability to translate technical complexity for diverse readers has been independently validated: a faculty thesis committee member noted that I am "talented in explaining things in simple terms," and I have taught generative AI architecture, statistical inference, and AI ethics to student cohorts ranging from computational biologists to non-STEM participants, consistently receiving Grade A evaluations. I bring an uncompromising commitment to scientific integrity — formally trained via a dedicated graduate course in Research and Publication Ethics, experienced in enforcing rigorous failure-mode documentation in student projects, and practiced at writing with the precision that distinguishes a record that can withstand peer review from one that merely reads well.

```

Lab Rotation: Cancer Genomics Data Science

Predictive Phenotype Modeling: Developed and trained a Random Forest classifier to predict cancer phenotypes utilizing large-scale transcriptomic (gene expression) datasets sourced from The Cancer Genome Atlas (TCGA).

Omics Data Analysis: Executed rigorous data quality control, normalization, and feature extraction on high-dimensional clinical genomics data to ensure ML-readiness.

Lab Rotation: Integrative Structural Modeling

Macromolecular Modeling: Utilized the Integrative Modeling Platform (IMP) to computationally model the Notch signaling complex, combining structural data to predict complex spatial assemblies.