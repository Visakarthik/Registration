document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const instagram = document.getElementById('instagram').value;
    const about = document.getElementById('about').value;
    
    localStorage.setItem('user', JSON.stringify({ name, email, password, whatsapp, instagram, about }));
    alert('Registration Successful');
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user && user.email === email && user.password === password) {
        document.getElementById('user-name').textContent = user.name;
        document.getElementById('profile-name').textContent = user.name;
        document.getElementById('profile-email').textContent = user.email;
        document.getElementById('profile-whatsapp').textContent = user.whatsapp;
        document.getElementById('profile-instagram').textContent = user.instagram;
        document.getElementById('profile-about').textContent = user.about;

        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('dashboard-container').style.display = 'flex';
    } else {
        alert('Invalid email or password');
    }
});

document.getElementById('dashboard-btn').addEventListener('click', function() {
    setActiveContent('dashboard-content');
});

document.getElementById('profile-btn').addEventListener('click', function() {
    setActiveContent('profile-content');
});

function setActiveContent(contentId) {
    const contents = document.querySelectorAll('.content > div');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(contentId).classList.add('active');
}

// Initial load
setActiveContent('dashboard-content');
