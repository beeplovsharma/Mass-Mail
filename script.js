// JavaScript code to open the default email client with a new email
document.getElementById('emailButton').addEventListener('click', function() {
    // Replace 'yourEmailAddress' with the actual Gmail address
    var emailAddress = 'director@nitjsr.ac.in';
    var subject = 'LAN not working despite multiple complaints';
    var body = `
    Hello sir.

Sir, this mail is to inform you regarding the issue of no internet connectivity via the LAN ports, and this problem is being faced by the entire hostel K. 
Mobile data is not enough to sustain us. With our ongoing internship season, it becomes a hectic task to find a place with proper and stable internet connectivity, to give our interviews. Besides, we need internet connection to learn from various skill building courses, which we are unable to access.

Sir, despite repeated complaints from the students to the Student Council and to the administration, no action has yet been taken. We are only given assurance. Now, we are on the verge of bearing the brunt of this enormous negligence.

Sir, it is our humble request to please look into this matter and get this issue sorted as soon as possible. 

Thank You.
 `;
    
    
    
    // Create the mailto link
    var mailtoLink = 'mailto:' + encodeURIComponent(emailAddress) +
                     '?subject=' + encodeURIComponent(subject) +
                     '&body=' + encodeURIComponent(body);
                     
    
    // Open the default email client
    window.location.href = mailtoLink;
});