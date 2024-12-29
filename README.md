# TechPrep AI - Your Personal Technical Interview Coach 🤖

<div align="center">
  <img src="https://media.licdn.com/dms/image/v2/D5612AQEoTzK2rVxHZQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707420465234?e=1740009600&v=beta&t=uTf1UXMoixTu4hIkcKvHUyXysWYkN0u3sicF3eghG7c" alt="TechPrep AI Interface" />
  
  [![Next.js](https://img.shields.io/badge/Next.js-13.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Firebase](https://img.shields.io/badge/Firebase-9.0-orange?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
  [![AWS](https://img.shields.io/badge/AWS-ECS-orange?style=for-the-badge&logo=amazon-aws)](https://aws.amazon.com/)
  [![Docker](https://img.shields.io/badge/Docker-20.10-blue?style=for-the-badge&logo=docker)](https://www.docker.com/)
  
  <p align="center">
    <strong>🎯 Personalized Practice</strong> • <strong>🤖 AI-Powered Feedback</strong> • <strong>📈 Smart Problem Recommendations</strong>
  </p>
</div>

## 🎯 Overview

TechPrep AI is an intelligent mock interviewing platform that simulates real technical interviews using advanced AI. By combining RAG (Retrieval-Augmented Generation) technology with personalized learning algorithms, it provides a tailored interview preparation experience that adapts to your skill level and learning needs.


## ✨ Key Features

### 🤖 AI Mock Interviewer
- Realistic interview simulation using LangChain and RAG technology
- Dynamic conversation flow that adapts to your responses
- Real-time hints and guidance when needed
- Support for multiple programming languages and problem types

### 📊 Smart Assessment System
- Comprehensive performance scoring across multiple competencies
- Detailed analysis of problem-solving approach
- Code quality evaluation
- Communication skills assessment

### 🎯 Personalized Learning Path
- Intelligent problem recommendation engine
- Customized difficulty progression
- Focus on your preferred problem types and areas of improvement
- Track your progress over time

### 📝 Detailed Performance Reports
- Session-by-session improvement tracking
- Strength and weakness analysis
- Actionable feedback for improvement
- Historical performance trends

### 💳 Premium Subscription Features
- Secure payment processing with Stripe
- Access to advanced interview scenarios
- Unlimited practice sessions
- Premium problem sets and solutions

## 🛠️ Technical Architecture

### Backend Infrastructure
- **Framework**: Next.js for server-side rendering and API routes
- **Database**: Firebase for real-time data storage and user management
- **Deployment**: Dockerized containers on AWS ECS
- **Load Balancing**: AWS Application Load Balancer with blue-green deployment

### AI Components
- **LangChain**: Core interview simulation and conversation management
- **Vector Embeddings**: Semantic context matching for relevant responses
- **RAG System**: Enhanced response generation with retrieved context
- **Recommendation Engine**: Points-based system for problem selection

## 💡 How It Works

1. **Profile Setup**
   - Set your experience level
   - Choose preferred problem types
   - Select target companies/roles

2. **Interview Session**
   - AI interviewer presents relevant problems
   - Real-time conversation and code evaluation
   - Dynamic difficulty adjustment

3. **Performance Analysis**
   - Comprehensive scoring across key competencies
   - Detailed feedback on approach and solution
   - Areas for improvement identification

4. **Smart Recommendations**
   - Analysis of performance patterns
   - Personalized problem suggestions
   - Progressive difficulty scaling

## 📈 Performance & Reliability

- 99.9% system uptime
- Average response time < 2 seconds
- Seamless scaling under load
- Regular backup and recovery systems

## 🚀 Future Enhancements

- Video interview simulation
- Integration with IDE environments
- Collaborative interview practice
- Extended problem database
- Company-specific interview tracks

## 🔧 Development Setup

```bash
# Clone the repository
git clone https://github.com/skylarshi123/ragmockinterviewer.git

# Install dependencies
npm install


# Run development server
npm run dev

#Your secrets and publishable keys
.env.local:
# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.storage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <strong>🎯 Practice Smarter, Interview Better 🚀</strong>
</div>
