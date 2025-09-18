document.getElementById('menu-icon').onclick = function() {
  document.querySelector('nav ul.link').classList.toggle('active');
};
document.querySelectorAll('nav ul.link a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.querySelector('nav ul.link').classList.remove('active');
  });
});
function sendMail(e) {
  e.preventDefault(); 
    const params = 
    {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    const serviceID = "service_9eyfeas";
    const templateID = "template_pw0u4cd";
    emailjs.send(serviceID, templateID, params)
    .then(res => 
    {
      document.getElementById("status").innerHTML = "<div class='alert alert-success'>Message sent successfully!</div>";
      document.getElementById("contact-form").reset();
    })
    .catch(err => 
    {
      document.getElementById("status").innerHTML = "<div class='alert alert-danger'>Failed to send message. Please try again.</div>";
      console.log(err);
    });
}
document.getElementById("contact-form").addEventListener("submit", sendMail);