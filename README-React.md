# 🚀 Student Performance Predictor - React.js Version

A modern, interactive web application built with React.js that predicts student academic performance using machine learning. This is a complete rewrite of the original Flask application with enhanced UI/UX and modern web technologies.

## ✨ Features

- **Modern React.js Interface**: Built with React 18 and modern JavaScript features
- **Responsive Design**: Mobile-first design that works on all devices
- **Interactive Forms**: Beautiful radio button selections with visual feedback
- **Real-time Validation**: Form validation and error handling
- **Loading States**: Smooth loading animations and user feedback
- **Gradient Design**: Modern gradient-based UI with smooth animations
- **Accessibility**: Proper form labels and keyboard navigation

## 🛠️ Technology Stack

- **Frontend**: React.js 18, CSS3 with modern features
- **Styling**: Custom CSS with gradients, animations, and responsive design
- **HTTP Client**: Axios for API communication
- **Build Tool**: Create React App
- **Backend**: Flask API (existing Python backend)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Python 3.7+ (for the Flask backend)

### Frontend Setup
1. Navigate to the project directory:
   ```bash
   cd Predicting-Factors-Influencing-Student-Academic-Performance-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Backend Setup
1. Ensure you have the required Python packages:
   ```bash
   pip install flask numpy scikit-learn
   ```

2. Run the Flask backend:
   ```bash
   python App.py
   ```

3. The backend will run on [http://localhost:5000](http://localhost:5000)

## 🎯 How It Works

### Feature Input
The application collects 21 different factors about a student:

**Demographics:**
- Gender (Female/Male)
- School Type (Government/Private)

**Study Habits:**
- Studies Daily
- Attends Extra Classes
- Uses Online Learning Platforms
- Has Fixed Study Schedule
- Participates in Group Study
- Sleeps At Least 7 Hours
- Uses Social Media During Study Hours
- Submits Assignments On Time
- Enjoys Reading
- Participates in School Activities
- Uses Tutor
- Prefers Studying Alone
- Attends School Regularly
- Has Part-Time Job
- Uses Planner for Schoolwork
- Gets Nervous Before Exams
- Prefers Online Classes
- Takes Notes in Class
- Has Quiet Study Environment

### Prediction Process
1. User fills out all 21 radio button selections
2. Form validates all inputs are complete
3. Data is sent to the Flask backend via POST request
4. Backend processes the features through the Random Forest model
5. Prediction result is returned and displayed with appropriate styling

## 🎨 UI/UX Features

- **Gradient Backgrounds**: Beautiful purple-blue gradients throughout
- **Card-based Layout**: Clean, organized information presentation
- **Interactive Radio Buttons**: Hover effects and selection states
- **Smooth Animations**: CSS transitions and keyframe animations
- **Responsive Grid**: Features organized in responsive grid layout
- **Loading States**: Visual feedback during API calls
- **Success/Error States**: Color-coded result displays

## 🔧 Customization

### Styling
- Modify `src/index.css` for global styles
- Modify `src/App.css` for component-specific styles
- Colors and gradients can be adjusted in the CSS variables

### Features
- Add new features by updating the `features` array in `App.js`
- Modify feature display names in `featureDisplayNames`
- Adjust feature options in `featureOptions`

### API Integration
- The app is configured to proxy requests to `http://localhost:5000`
- Modify the axios POST request in `handleSubmit` for different endpoints

## 📱 Responsive Design

The application is fully responsive and includes:
- Mobile-first design approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly form controls
- Optimized spacing for different screen sizes

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload the `build` folder to an S3 bucket
- **Heroku**: Use the `build` folder with a simple server

## 🔍 Troubleshooting

### Common Issues
1. **Port Conflicts**: Ensure ports 3000 (React) and 5000 (Flask) are available
2. **CORS Issues**: The proxy configuration should handle this automatically
3. **Model Loading**: Ensure `randomfor.pkl` is in the correct location
4. **Dependencies**: Run `npm install` if you encounter module errors

### Development Tips
- Use React Developer Tools for debugging
- Check the browser console for API errors
- Verify the Flask backend is running before testing predictions

## 📊 Model Information

- **Algorithm**: Random Forest Classifier
- **Training Data**: 310 students with 21 features
- **Accuracy**: 74% on test data, 87% in cross-validation
- **Features**: 21 behavioral and demographic factors
- **Output**: Binary classification (High Performer / Standard Performer)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the MSc. Big Data Analytics program at St. Aloysius (Deemed to be University) AIMIT, Mangalore, Karnataka.

## 👨‍🎓 Author

**Joyston Jose D'souza**  
MSc. Big Data Analytics  
AIMIT, St. Aloysius (Deemed to be University), Mangalore

---

*This React.js version maintains all the original functionality while providing a modern, user-friendly interface for educational research purposes.*
