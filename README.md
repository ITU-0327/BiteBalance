# BiteBalance: Project Documentation

## Project Overview

BiteBalance is an innovative mobile web app designed to revolutionize the health and wellness sector by enabling users to make informed dietary choices for a balanced lifestyle. Utilizing advanced AI technologies coupled with a user-friendly interface, BiteBalance offers personalized health and wellness guidance, tailored shopping lists, recipe recommendations, and convenient meal planning tools to promote holistic well-being.

## Challenge and Solution

### Challenge

BiteBalance addresses several challenges in health and wellness:
- Personalizing health guidance to cater to individual dietary preferences and allergies, while minimizing time and effort.
- Simplifying meal planning and recipe selection with user-friendly interfaces.
- Using AI technologies to enhance user engagement and encourage healthier eating habits.

### Solution

BiteBalance integrates state-of-the-art technologies such as AI, Azure, Edamam API, and Selenium, along with intuitive interfaces, to support users throughout their health and wellness journey. This comprehensive solution revolutionizes dietary choices and overall well-being by offering personalized recommendations and convenient meal planning features.

## Technology Stack

- **Figma:** UI/UX design framework.
- **Locofy:** Converts Figma designs into code.
- **React:** Frontend framework for BiteBalance's interface.
- **Azure Function Apps:** Serverless computing for backend logic.
- **OpenAI API:** AI for recipe recommendations and nutrition guidance.
- **Selenium:** Web scraping for recipe data.
- **GitHub Actions:** CI/CD for deployment.
- **Visual Studio Code:** IDE with Azure and React extensions.
- **Python 3.11:** Programming language for backend development.

## Setup and Installation

### Prerequisites

- An Azure account with access to Function Apps and Cognitive Services.
- An OpenAI API key.
- Python 3.11.
- Visual Studio Code with the necessary extensions.
- Git for version control.

### Basic Infrastructure Setup

1. **Azure Function App Setup:** Create a new Function App resource in Azure and follow the Azure documentation for initial setup.
2. **React:** Install Node.js and Visual Studio Code. Export designs from Figma and use Locofy to generate React code.

### Running the Project

1. Clone the project repository:
    ```bash
    git clone https://github.com/ITU-0327/BiteBalance
    ```
2. Install Python dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Set up environment variables in a `.env` file with your Azure and OpenAI API keys.
4. Start the Azure Function App locally for testing using the Azure Functions extension in Visual Studio Code.

## Development and Contribution

- Prepare mock data for initial testing.
- Conduct functionality and user experience testing with target users, gathering feedback for iterative refinement.
- Develop demonstration scenarios to highlight key features and user benefits.

## Licence

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

## Contributors

- **Tony:** Lead on Azure Function Apps integration and frontend-backend bridging. Provided project leadership.
  - [GitHub](https://github.com/ITU-0327)
  - [LinkedIn](https://www.linkedin.com/in/i-tung-hsieh-it)

- **Akshita:** Specialized in UX and project management, contributing to frontend development and ensuring project efficiency.
  - [GitHub](https://github.com/akshiita-01)
  - [LinkedIn](https://www.linkedin.com/in/akshita-mediratta-65065519a/)

- **Kimme:** Focused on user experience, testing, and integration of multilingual support through the Translator API.
  - [GitHub](https://github.com/shuenyng)
  - [LinkedIn](https://www.linkedin.com/in/shuen-y%E2%80%99ng-tan-942b36198/)

- **Yi Xin:** Key player in system architecture, data processing, and external data integration.
  - [GitHub](https://github.com/YiXin-Tan)
  - [LinkedIn]()

Each team member played a crucial role in all project phases, showcasing a collaborative effort from planning to refinement.
