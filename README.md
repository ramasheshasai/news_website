
# NEWS-WEBSITE

A real-time news platform built using **React.js**, **HTML**, and **CSS**, designed to fetch and display news articles across multiple categories. The website integrates the **NewsAPI** to provide users with up-to-date news while ensuring fast performance with optimized state management.

## Features

- **Real-Time News**: Fetches and displays the latest news articles dynamically.
- **Category-Specific Content**: Users can browse news across 7 different categories.
- **Optimized Performance**: Uses React's state management to reduce loading times.
- **Modular Component Architecture**: Ensures easy maintenance and scalability.
- **Responsive Design**: Styled with Bootstrap for seamless viewing on all devices.

## Technologies Used

- **Frontend**: React.js, HTML, CSS
- **Styling**: Bootstrap
- **API**: NewsAPI (for fetching real-time news articles)
- **State Management**: React Hooks

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/NEWS-WEBSITE.git
   ```
2. Navigate to the project directory:
   ```bash
   cd NEWS-WEBSITE
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and add your **NewsAPI** key:
   ```env
   REACT_APP_NEWS_API_KEY=your_news_api_key_here
   ```
5. Start the development server:
   ```bash
   npm start
   ```
6. Open `http://localhost:3000/` in your browser.

## API Integration

- The application fetches **20 news articles per category** using the **NewsAPI**.
- Ensure you have a valid API key from [NewsAPI.org](https://newsapi.org/) to access live news data.

## Contributing

Contributions are welcome! If you’d like to improve this project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

Let me know if you need any modifications or additions! 🚀
