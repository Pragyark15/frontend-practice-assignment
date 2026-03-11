# frontend-practice-assignment

**Instructor:** Vishanth  
**Email:** vishanth453@gmail.com

---

## 📁 Project Structure

```
frontend-practice-assignment/
│
├── flexbox-login/
│   ├── index.html       # Login/Register UI with Flexbox
│   └── style.css        # Styling and layout
│
├── js-validation/
│   ├── index.html       # Form with validation UI
│   └── script.js        # All validation logic
│
├── api-crud/
│   └── index.js         # Node.js CRUD operations
│
└── README.md
```

---

## 🚀 How to Run the Project

### Task 1 & Task 2 — Flexbox Login + JS Validation

1. Open the folder `flexbox-login/` or `js-validation/`
2. Double click `index.html` to open it in your browser
3. OR right-click → **Open with** → your browser (Chrome recommended)

No installation needed. Runs directly in the browser.

---

### Task 3 — API CRUD (Node.js)

**Step 1:** Make sure Node.js is installed
```bash
node --version
```
Download from 👉 https://nodejs.org if not installed.

**Step 2:** Navigate to the folder
```bash
cd api-crud
```

**Step 3:** Run the script
```bash
node index.js
```

**Expected output:**
```
==================================================
  STEP 1: GET — Fetch All Objects (Promise .then())
==================================================
✅ Fetched 13 objects successfully.
  🔹 ID: 1 | Name: Google Pixel 6 Pro
  ...

==================================================
  STEP 2: POST — Create New Object (Async/Await)
==================================================
✅ Object created successfully!
  🆔 ID: ff808181...
  📛 Name: Vinayaka Laptop Pro

==================================================
  STEP 3: PATCH — Update Object (Async/Await)
==================================================
✅ Object updated successfully!

==================================================
  STEP 4: DELETE — Remove Object (Async/Await)
==================================================
✅ Object deleted successfully!
```

---

## 💡 Concepts Implemented

### ✅ Task 1 — Flexbox Layout (25 Marks)
- Full page layout built using **CSS Flexbox**
- Split screen design: image panel on left, form on right
- Form fields: First Name, Last Name, Email, Password
- Hero image included on the left panel
- Form is **centered on screen** using Flexbox
- **Mobile responsive** — stacks vertically on small screens
- Smooth animations on input focus and button hover

---

### ✅ Task 2 — JavaScript Validation (25 Marks + 15 Marks)

**Validation Rules:**
| Field | Rule |
|-------|------|
| First Name | Required — cannot be empty |
| Last Name | Required — cannot be empty |
| Email | Must match valid email format |
| Password | Min 8 chars, 1 uppercase letter, 1 special character |

**Error Handling:**
- Error messages appear **below each field** in real time
- Fields turn **red** on error, **green** on valid input
- Validates on every keystroke (`input`) and on field blur

**Arrow Functions used for:**
- `isRequired()` — checks if value is not empty
- `isValidEmail()` — validates email with regex
- `isValidPassword()` — checks password strength
- `getPasswordError()` — returns specific password hint
- `validateFirstName()`, `validateLastName()`, etc. — per-field validators
- `attachRealTimeValidation()` — attaches blur/input listeners

**Normal Functions used for:**
- `showError()` — displays error message and red border
- `showValid()` — displays green border on success
- `clearField()` — resets field to default state
- `showToast()` — shows success toast message
- `handleRegister()` — form submit handler
- `handleLogin()` — form submit handler
- `switchTab()` — switches between Login and Register tabs

**Bonus:** Repeated logic refactored into reusable helper functions

---

### ✅ Task 3 — API CRUD Operations (25 Marks)

**API used:** https://api.restful-api.dev/objects

| Operation | Method | JS Style Used |
|-----------|--------|---------------|
| Fetch all objects | GET | Promises `.then().catch()` |
| Create new object | POST | `async/await` |
| Update object | PATCH | `async/await` |
| Delete object | DELETE | `async/await` |

- Object created with: `name`, `year`, `price`, `brand`, `ram`, `storage`
- PATCH updates the name, price, RAM and storage
- DELETE confirms removal with success message
- All errors handled with `try/catch` and `.catch()`

---

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript (ES6+)
- Node.js (v18+)
- Fetch API
- Git & GitHub

---

## 👨‍💻 Author

**Pragya**  
AI & ML Engineering Student  
