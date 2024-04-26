// Function to find user and display feedback
function findUser(userId) {
    // Your logic to find the user based on the userId
    const user = getUserDetails(userId); // Assuming you have a function to get user details
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = `Welcome, ${user.username}!`; // Display username in the feedback
}

// Mock function to get user details
function getUserDetails(userId) {
    // Mock user data for demonstration
    const users = {
        user123: { username: 'Alice' },
        user456: { username: 'Bob' }
    };
    return users[userId] || { username: 'Guest' }; // Default to Guest if user not found
}

// Extract userId from the URL and trigger findUser function
const path = window.location.pathname;
const userRegex = /\/user\/(\w+)/;
const match = path.match(userRegex);

if (match) {
    const userId = match[1];
    findUser(userId);
} else {
    // Handle other routes or show a 404 page
}

