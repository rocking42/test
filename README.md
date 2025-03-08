# My Personal Website

This is a simple personal website template that includes a contact form for user data capture. It's designed to be deployed easily on Netlify with no technical experience needed.

## Deployment Instructions for Non-Technical Users

### Step 1: Create Accounts

1. **Create a GitHub account**
   - Go to [GitHub](https://github.com/)
   - Click "Sign up" and follow the instructions

2. **Create a Netlify account**
   - Go to [Netlify](https://www.netlify.com/)
   - Click "Sign up" and choose "Sign up with GitHub"

### Step 2: Deploy Your Website

1. **Import your project to GitHub**
   - Go to [GitHub](https://github.com/)
   - Click the "+" icon in the top right corner and select "New repository"
   - Name your repository (e.g., "my-website")
   - Keep it as "Public"
   - Click "Create repository"
   - Follow the instructions to upload your files (you can drag and drop this entire folder to GitHub's upload interface)

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "New site from Git"
   - Select "GitHub"
   - Find and select your repository
   - In the "Basic build settings" section:
     - Leave "Build command" empty
     - Set "Publish directory" to "public"
   - Click "Deploy site"

3. **Set Up Your Domain (Optional)**
   - After deploying, Netlify gives you a random URL (like "random-name-123456.netlify.app")
   - To use a custom domain:
     - Go to "Site settings" > "Domain management"
     - Click "Add custom domain"
     - Follow the instructions to set up your domain

### Step 3: Test Your Website

1. Visit your Netlify URL to make sure everything is working
2. Test the contact form by filling it out and submitting
3. You'll receive form submissions in your Netlify dashboard under "Forms"

## Customizing Your Website

To make this website your own:

1. **Change text and content**
   - Open the HTML files (index.html, about.html, contact.html) in any text editor
   - Replace the placeholder text with your own information

2. **Update images**
   - Add your images to the "images" folder
   - Update the references in the HTML files

3. **Change colors and styling**
   - Modify the CSS in the "css/style.css" file

4. **Update contact information**
   - Change the email address and social links in "contact.html"

## Getting Form Submissions

Netlify automatically handles your form submissions. To view them:

1. Log in to your Netlify account
2. Go to your site dashboard
3. Click on "Forms"
4. You'll see all submissions listed there
5. You can also set up email notifications in the Forms settings

## Need More Help?

Netlify has excellent documentation for beginners:
- [Netlify Documentation](https://docs.netlify.com/)
- [Getting Started with Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)

---

This website template was created for easy deployment on Netlify. It includes HTML, CSS, and JavaScript files.