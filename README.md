# predictive-multilayer-cyber-detection
A predictive multi-layer detection framework using Machine Learning (Random Forest &amp; Logistic Regression) and a Flask dashboard to identify DDoS and SQL Injection attacks at an early stage.


---

## 📌 Overview

Traditional security measures (firewalls, signature-based IDS) often fail against zero-day exploits and exhibit high false-positive rates because they operate reactively after an attack has already begun. 

This project implements a **Predictive Multi-Layer Detection System** that analyzes network-level traffic patterns and application-level request payloads. By decomposing threat inspection into modular layers, the system progressively reduces data noise, extracts behavioral characteristics, and classifies threats before full execution.

---

## 🚀 Key Features

* **Dual-Surface Attack Coverage:** 
  * **Network Layer:** Identifies DDoS flood patterns via packet rate, flow duration, and traffic volume anomalies.
  * **Application Layer:** Inspects SQL queries for syntax anomalies, suspicious keywords, and special character abuse.
* **Progressive Multi-Layer Pipeline:** 
  1. *Preprocessing Layer:* Cleans, handles missing data, and normalizes feature ranges.
  2. *Feature Analysis Layer:* Ranks and selects key behavioral indicators (correlation analysis & feature importance).
  3. *Detection Layer:* Multi-model inference engine (Logistic Regression, Decision Trees, Random Forest).
  4. *Decision & Response Layer:* Evaluates confidence scores and assigns threat severity tiers.
* **Interactive Monitoring Dashboard:** Built with Flask, Bootstrap, and Matplotlib to monitor real-time probability trends and query analysis[cite: 1].

---

## 🛠️ Tech Stack

* **Core Language:** Python[cite: 1]
* **Data Processing:** Pandas, NumPy[cite: 1]
* **Machine Learning:** Scikit-Learn[cite: 1]
* **Visualization:** Matplotlib, Seaborn[cite: 1]
* **Backend:** Flask[cite: 1]
* **Frontend:** HTML5, CSS3, Bootstrap[cite: 1]

---

## 📊 System Architecture

```text
[ Raw Network & Application Data ]
                │
                ▼
      [ Layer 1: Data Preprocessing ] (Cleaning, Scaling, Encoding)
                │
                ▼
      [ Layer 2: Feature Extraction ] (Traffic Flow & Syntax Metrics)
                │
                ▼
      [ Layer 3: ML Detection Engine ] (Random Forest / Logistic Regression)
                │
                ▼
      [ Layer 4: Decision & Response ] ────► [ Flask Web Dashboard ]
