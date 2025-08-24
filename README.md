

# Predicting Factors Influencing Student Academic Performance

This project aims to predict whether a student is a **high academic performer** based on behavioral and demographic data using machine learning techniques. It was developed as part of the **MSc. Big Data Analytics** program at **St. Aloysius (Deemed to be University) AIMIT**, Mangalore, Karnataka.

## 🚀 Deployment & Live Demo

To make the model accessible, it has been deployed as a full-stack web application with a modern, decoupled architecture.

**You can access the live application here:**
**[https://performance0perdiction.netlify.app/](https://performance0perdiction.netlify.app/)**

### Architecture
- **Backend API (Hosted on Render):** The core prediction engine is a REST API built with **Python** and **Flask**. It loads the trained Random Forest model (`.pkl` file) and exposes a `/predict` endpoint to serve predictions. It runs on a **Gunicorn** production server.
- **Frontend Application (Hosted on Netlify):** The user interface is a responsive single-page application built with **React.js**. It captures user input and communicates with the backend via API calls to get predictions, which are then displayed to the user.

This setup ensures scalability and separation of concerns, which is a standard practice in modern web development.

## 📌 Overview

The dataset consists of 310 students with 21 features (e.g., daily study habits, attendance, sleep, class participation) and a binary target variable indicating high performance.

## ⚙️ Methodology

The following machine learning models were implemented and compared:

- **Logistic Regression** (Baseline Linear Model)
- **Random Forest Classifier**
- **Support Vector Machine (SVM)**
- **Multilayer Perceptron (MLP Neural Network)**

### Data Preprocessing
- Label encoding of categorical features
- Handling class imbalance with **SMOTE**
- Standardization using `StandardScaler`

### Evaluation Metrics
- Accuracy
- Precision, Recall, F1-Score
- Confusion Matrix
- 5-fold and 10-fold Cross-Validation

## 🏆 Results

| Model                   | Test Accuracy | 10-Fold CV Accuracy |
|-------------------------|---------------|-----------------------|
| Logistic Regression     | 61%           | 60%                   |
| **Random Forest** | **74%** | **87%** |
| SVM                     | 76%           | 82%                   |
| MLP                     | 76%           | 86%                   |

**Random Forest** performed best overall, highlighting its ability to capture complex patterns in educational behavior data and demonstrating excellent robustness in cross-validation.

## 📁 Files Included
- `final.ipynb`: Source Jupyter Notebook with data cleaning, analysis, and model training.
- `24251325_Joyston.csv`: Cleaned student dataset used for training.
- `24251325_Project.pdf`: Final project report (PDF).
- `ML_PROJECT.docx`: Editable report document.

## 👨‍🎓 Author
Joyston Jose D’souza  
MSc. Big Data Analytics  
AIMIT, St. Aloysius (Deemed to be University), Mangalore  
Under the guidance of Dr. Hemalatha N, Dean, School of IT

---
