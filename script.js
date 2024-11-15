// Select the form and resume display area
const form = document.getElementById('resumeForm');
const resumeDisplay = document.getElementById('resumeDisplay');

// Handle form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Gather form input values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Format the resume content
    resumeDisplay.innerHTML = `
        <h2>${fullName}</h2>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>
        
        <h3>Education</h3>
        <p>${education.replace(/\n/g, '<br>')}</p>
        
        <h3>Experience</h3>
        <p>${experience.replace(/\n/g, '<br>')}</p>
        
        <h3>Skills</h3>
        <p>${skills.replace(/\n/g, '<br>')}</p>
    `;

    // Make the generated resume section editable
    resumeDisplay.contentEditable = true;
    resumeDisplay.style.border = "1px solid #d1d9e6";
    resumeDisplay.style.padding = "15px";
    resumeDisplay.style.borderRadius = "8px";
});
