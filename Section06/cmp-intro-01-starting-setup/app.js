const app = Vue.createApp({
  data: () => {
    return {
      friends: [
        {
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});

app.component("Friend", {
  template: `
    <li>
        <h2>Manuel Lorenz</h2>
        <button>Show Details</button>
        <ul>
          <li><strong>Phone:</strong> 01234 5678 991</li>
          <li><strong>Email:</strong> manuel@localhost.com</li>
        </ul>
    </li>
    `,

  data: () => {
    return {
      friend: {
        name: "Julie Jones",
        phone: "09876 543 221",
        email: "julie@localhost.com",
      },
    };
  },
});

app.mount("#app");

// Task 1:
// Add two components to the app:
// An ActiveUser component and an UserData component
// ActiveUser should output a username (h2) and age (h3)
// UserData should output two input fields => for name and age
// Optional: Add styling of your choice

// Task 2: Output both components side-by-side in your main App template

// Task 3: Add user data and ensure it contains a name and age
// User data should be output in ActiveUser
// It should be updated via the UserData component
