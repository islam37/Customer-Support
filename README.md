# Customer Support Zone 🎟️

A React-based **Customer Support Zone** application designed to manage customer tickets, track progress, and mark them as resolved.  
This project follows a Figma design and includes features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 🚀 Features

- **Navbar**
  - Website name/logo on the left
  - Menu items and **New Ticket** button on the right

- **Banner**
  - Linear gradient background
  - Ticket statistics:
    - In Progress Count
    - Resolved Count (default = 0)

- **Main Section**
  - Ticket data stored in JSON (10–15 tickets)
  - Ticket properties: `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`
  - Ticket cards displayed in a 2-column grid
  - Clicking a card adds it to the **Task Status Section** and increases the In Progress count

- **Task Status Section**
  - Shows ticket title
  - **Complete Button**:
    - Marks ticket as resolved
    - Removes from Task Status
    - Updates counts (In Progress ↓, Resolved ↑)
    - Removes from Customer Tickets list

- **Footer**
  - Designed according to Figma

- **Responsiveness**
  - Fully responsive for mobile devices

- **Notifications**
  - Stylish toast notifications using **React-Toastify** (replaces alerts)

---

## 🧰 Tech Stack

- **HTML**
- **CSS** (Vanilla / Tailwind / DaisyUI)
- **JavaScript**
- **React.js** (Mandatory)

---

## 📌 Project Rules

- ✅ At least 5 meaningful commits
- ❌ No dummy text where real data can be displayed

---

## 📖 React Concepts (Assignment Questions)

### 1. What is JSX, and why is it used?
JSX stands for **JavaScript XML**. It allows us to write HTML-like syntax inside JavaScript, making React components easier to read and write. JSX helps React create virtual DOM elements efficiently.

---

### 2. What is the difference between State and Props?
- **State**: Managed within a component. It represents data that can change over time and affects how the component renders.
- **Props**: Passed from parent to child components. They are read-only and used to pass data or functions.

---

### 3. What is the useState hook, and how does it work?
`useState` is a React hook that lets you add state to functional components.  
It returns an array with two values:
1. The current state
2. A function to update the state  

Example:
```jsx
const [count, setCount] = useState(0);
