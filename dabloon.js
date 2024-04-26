// Define routes and corresponding functions using page.js
page('/user/:userId', function(ctx) {
    const userId = ctx.params.userId;
    findUser(userId);
});

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

// Start the page.js routing
page();

