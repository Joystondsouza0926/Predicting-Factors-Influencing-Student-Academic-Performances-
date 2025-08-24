import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

// This determines which API to use (live or local)
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [formData, setFormData] = useState({});
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Define all the features in the correct order as expected by the model
  const features = [
    "Gender", "SchoolType", "StudiesDaily", "AttendsExtraClasses",
    "UsesOnlineLearningPlatforms", "HasFixedStudySchedule", "ParticipatesGroupStudy",
    "SleepsAtLeast7Hours", "UsesSocialMediaDuringStudyHours", "SubmitsAssignmentsOnTime",
    "EnjoysReading", "ParticipatesInSchoolActivities", "UsesTutor",
    "PrefersStudyingAlone", "AttendsSchoolRegularly", "HasPartTimeJob",
    "UsesPlannerForSchoolwork", "GetsNervousBeforeExams", "PrefersOnlineClasses",
    "TakesNotesInClass", "HasQuietStudyEnvironment"
  ];

  // Feature display names for better UX
  const featureDisplayNames = {
    "Gender": "Gender", "SchoolType": "School Type", "StudiesDaily": "Studies Daily",
    "AttendsExtraClasses": "Attends Extra Classes", "UsesOnlineLearningPlatforms": "Uses Online Learning Platforms",
    "HasFixedStudySchedule": "Has a Fixed Study Schedule", "ParticipatesGroupStudy": "Participates in Group Study",
    "SleepsAtLeast7Hours": "Sleeps At Least 7 Hours", "UsesSocialMediaDuringStudyHours": "Uses Social Media During Study Hours",
    "SubmitsAssignmentsOnTime": "Submits Assignments On Time", "EnjoysReading": "Enjoys Reading",
    "ParticipatesInSchoolActivities": "Participates in School Activities", "UsesTutor": "Uses Tutor",
    "PrefersStudyingAlone": "Prefers Studying Alone", "AttendsSchoolRegularly": "Attends School Regularly",
    "HasPartTimeJob": "Has Part-Time Job", "UsesPlannerForSchoolwork": "Uses Planner for Schoolwork",
    "GetsNervousBeforeExams": "Gets Nervous Before Exams", "PrefersOnlineClasses": "Prefers Online Classes",
    "TakesNotesInClass": "Takes Notes in Class", "HasQuietStudyEnvironment": "Has Quiet Study Environment"
  };

  // Feature options
  const featureOptions = {
    "Gender": [{ value: "0", label: "Female" }, { value: "1", label: "Male" }],
    "SchoolType": [{ value: "0", label: "Government" }, { value: "1", label: "Private" }],
    // All other features are Yes/No
    ...Object.fromEntries(
      features.slice(2).map(feature => [
        feature,
        [{ value: "0", label: "No" }, { value: "1", label: "Yes" }]
      ])
    )
  };

  const handleRadioChange = (feature, value) => {
    setFormData(prev => ({ ...prev, [feature]: value }));
  };

  const isFormComplete = () => {
    return features.every(feature => formData[feature] !== undefined);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormComplete()) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    setLoading(true);
    setError(null);
    setPrediction(null);

    try {
      // Prepare features in the correct order by mapping over the master 'features' array
      const featureValues = features.map(feature => parseInt(formData[feature]));
      
      // Send the request to the correct API endpoint (live or local)
      const response = await axios.post(`${API_URL}/predict`, {
        features: featureValues
      });

      setPrediction(response.data.prediction[0]);
    } catch (err) {
      console.error('Prediction error:', err);
      setError('Failed to get prediction. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({});
    setPrediction(null);
    setError(null);
  };

  const renderFeatureGroup = (feature) => {
    const options = featureOptions[feature];
    return (
      <div key={feature} className="form-group">
        <label>{featureDisplayNames[feature]}</label>
        <div className="radio-group">
          {options.map(option => (
            <label
              key={option.value}
              className={`radio-option ${formData[feature] === option.value ? 'selected' : ''}`}
            >
              <input
                type="radio"
                name={feature}
                value={option.value}
                checked={formData[feature] === option.value}
                onChange={() => handleRadioChange(feature, option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>🎓 Student Performance Predictor</h1>
          <p>
            Predict whether a student is a high academic performer based on behavioral and demographic factors. 
            This AI-powered tool uses machine learning to analyze study habits, attendance patterns, and learning preferences.
          </p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="features-grid">
              {features.map(feature => renderFeatureGroup(feature))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button
                type="submit"
                className="btn"
                disabled={!isFormComplete() || loading}
              >
                {loading ? 'Analyzing...' : 'Predict Performance'}
              </button>
              
              {Object.keys(formData).length > 0 && (
                <button
                  type="button"
                  className="btn"
                  onClick={resetForm}
                  style={{ 
                    marginLeft: '15px', 
                    background: 'linear-gradient(135deg, #718096 0%, #4a5568 100%)' 
                  }}
                >
                  Reset Form
                </button>
              )}
            </div>
          </form>

          {error && (
            <div className="result failure">
              ❌ {error}
            </div>
          )}

          {loading && (
            <div className="result loading">
              🔍 Analyzing student data...
            </div>
          )}

          {prediction !== null && !loading && (
            <div className={`result ${prediction === 1 ? 'success' : 'failure'}`}>
              {prediction === 1 ? (
                <>
                  🎉 <strong>High Performer!</strong>
                  <div style={{ fontSize: '18px', marginTop: '10px', opacity: 0.9 }}>
                    This student shows excellent academic potential based on their behavioral patterns.
                  </div>
                </>
              ) : (
                <>
                  📚 <strong>Standard Performer</strong>
                  <div style={{ fontSize: '18px', marginTop: '10px', opacity: 0.9 }}>
                    This student may benefit from additional support and study strategies.
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '20px', color: '#2d3748' }}>📊 About This Model</h3>
          <p style={{ lineHeight: '1.6', color: '#4a5568' }}>
            This prediction model was trained on data from 310 students using a Random Forest Classifier. 
            It analyzes 21 different factors including study habits, sleep patterns, attendance, and learning preferences 
            to predict academic performance with 74% accuracy on test data and 87% accuracy in cross-validation.
          </p>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginTop: '15px' }}>
            <strong>Note:</strong> This tool is designed for educational research and should not be used as the sole 
            determinant of a student's academic potential. Many factors beyond those measured here contribute to 
            student success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;