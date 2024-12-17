
```
# 📄 **Portfolio Website**

This is a fully responsive **Portfolio Website** featuring animations, a contact form, and seamless user experience. Built using modern web technologies, this project showcases my skills, projects, and provides a clean, professional platform for interaction.

---

## 📋 **Features**

1. **Smooth Animations with ScrollReveal**  
   - Elements animate when scrolled into view (e.g., `.load1`, `.load2`, etc.).  
   - Reusable and clean code for animation triggering.

2. **Responsive Design**  
   - Layout adjusts seamlessly for all devices using **CSS Flexbox** and **Media Queries**.

3. **Dynamic Icon Carousel**  
   - Icons dynamically repeat and adjust based on the number of displayed elements.

4. **Form Validation and Submission**  
   - Validates user input (name, email, phone, and message).  
   - Sends form data to **Google Sheets** via Google Apps Script for seamless handling.  

5. **Modern UI Design**  
   - Clean, professional design optimized for both light and dark themes.

---

## 🛠 **Technologies Used**

- **HTML5** - For semantic structure.  
- **CSS3** - For styling and responsive layout.  
- **JavaScript (ES6)** - For interactivity and logic.  
- **ScrollReveal** - For smooth animations on scroll.  
- **Google Apps Script** - To handle form submissions.

---

## 🗂 **Project Structure**

```
Portfolio/
│
├── index.html                # Main HTML file
├── style.css                 # Main CSS file
├── script.js                 # JavaScript logic
└── assets/                   # Images, icons, and other assets
```

---

## ✨ **Installation Instructions**

1. Clone the repository:
   ```bash
   git clone https://github.com/Chan-08/Portfolio.git
   ```

2. Open the `index.html` file in your browser to view the project.

3. Ensure an internet connection to load external libraries like **ScrollReveal**.

---

## 📧 **Form Integration Setup**

1. Go to **Google Sheets** > Tools > Script Editor.  
2. Paste the Apps Script code to capture form data.  
3. Deploy the script as a **Web App** and replace your `scriptURL` in `script.js`:
   ```javascript
   const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL';
   ```

4. Now, form submissions will be sent to your Google Sheet.

---

## 🔧 **How it Works**

- **Animations:** Elements animate using ScrollReveal when they enter the viewport.
- **Form Validation:** User inputs are validated for name, email, phone, and message.
- **Form Submission:** Validated data is sent to Google Sheets.
- **Dynamic Icons:** The icon list dynamically clones its children to create smooth looping.

---

## 🎯 **Future Improvements**

- Add **dark/light mode toggle**.  
- Integrate a backend for portfolio projects.  
- Include a blog section to share updates.

---

## 🧑‍💻 **Author**

- **Name**: Chandrakumar  
- **Email**: chandrakumar.developer@gmail.com  
- **LinkedIn**: [Chandrakumar's LinkedIn](https://www.linkedin.com/in/chandrakumar-s-b26368242)  
- **GitHub**: [Chandrakumar's GitHub](https://github.com/Chan-08)

---

By creating this portfolio, I aimed to provide a visually appealing and functional experience for anyone exploring my work. 🚀
```

This version includes all the sections from your original description, formatted properly for a GitHub README.
