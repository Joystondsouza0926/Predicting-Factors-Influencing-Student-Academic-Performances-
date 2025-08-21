
# Predicting Factors Influencing Student Academic Performance

This project aims to predict whether a student is a **high academic performer** based on behavioral and demographic data using machine learning techniques. It was developed as part of the **MSc. Big Data Analytics** program at **St. Aloysius (Deemed to be University) AIMIT**, Mangalore, Karnataka.

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

| Model               | Test Accuracy | 10-Fold CV Accuracy |
|--------------------|---------------|----------------------|
| Logistic Regression| 61%           | 60%                  |
| Random Forest      | 74%           | 87%                  |
| SVM                | 76%           | 82%                  |
| MLP                | 76%           | 86%                  |

**Random Forest** performed best, highlighting its ability to capture complex patterns in educational behavior data.

## 📁 Files Included
- `final.ipynb`: Source Jupyter Notebook
- `24251325_Joyston.csv`: Cleaned student dataset
- `24251325_Project.pdf`: Final project report (PDF)
- `ML_PROJECT.docx`: Editable report document

## 👨‍🎓 Author
Joyston Jose D’souza  
MSc. Big Data Analytics  
AIMIT, St. Aloysius (Deemed to be University), Mangalore  
Under the guidance of Dr. Hemalatha N, Dean, School of IT

---
