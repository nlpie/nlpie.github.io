---
layout: page
title: PIER
description: Patient Information Extraction for Research - An application for investigators to leverage clinical notes for research
permalink: /pier
---

### Overview
PIER is an Information Extraction (IE) platform that provides direct access to patient data stored in free text of clinical notes. The underlying framework of PIER uses Elasticsearch technology and features the University of Minnesota Clinical NLP/IE program’s open source Natural Language Processing (NLP) application, BioMedICUS (BioMedical Information Collection and Understanding System). This resource aims to serve biomedical and clinical researchers and is a result of the collaborative efforts between the NLP/IE program, Clinical Translational Science Institute (CTSI), Minnesota Supercomputing Institute (MSI), and Academic Health Center Information System Research Development and Support Group.

PIER was released as a resource for CTSI researchers via the AHC-IE initiative in July 2015 as v1.0. This initial release includes all Fairview Health Services inpatient and outpatient clinical notes in the Fairview Epic electronic health record, including outpatient documents for Fairview Medical Group from 2004 onward, outpatient documents from University of Minnesota Physicians from 2009 onward, and inpatient documents from Fairview hospitals including University of Minnesota Medical Center from 2011 to present time. This release of PIER includes the ability to filter and search documents using HL7-LOINC Document Ontology document features, keyword searches, UMLS concept searches, Boolean queries, and searches by UMLS semantic type. To maintain concurrency, this repository will be updated on a weekly basis to include new notes and latest revisions to existing notes.

Similarly to other AHC-IE resources, access to PIER and clinical documents for specific research protocols can be requested through a [Informatics Consultation Request Form](https://redcap.ahc.umn.edu/surveys/?s=gmfwoj8yGJ).

### About Us
PIER is developed by the University of Minnesota Institute for Health Informatics NLP/IE Group. This work is made possible through a close collaboration between the NLP/IE group, Academic Health Center-Information Services (AHC-IS), and Fairview Health Services Information Technology (FHS-IT) departments.

### Acknowledgements
Funding for this work was provided by:
 *	1 R01 LM011364-01 NIH-NLM
 *	1 R01 GM102282-01A1 NIH-NIGMS
 *	U54 RR026066-01A2 NIH-NCRR
