// ========================================
// PARALLAX EFFECT FOR FLOATING PARTICLES
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
      const speed = (index + 1) * 0.5;
      particle.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
  
  // ========================================
  // PAGE LOAD ANIMATION
  // ========================================
  window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 0.5s ease';
      document.body.style.opacity = '1';
    }, 100);
  });
  
  // ========================================
  // FORM VALIDATION FOR REGISTER
  // ========================================
  const registerForm = document.querySelector('form[action="/register"]');
  
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      const terms = document.getElementById('terms').checked;
      
      // Check if passwords match
      if (password !== confirmPassword) {
        showMessage('كلمات المرور غير متطابقة', 'error');
        return;
      }
      
      // Check password length
      if (password.length < 6) {
        showMessage('كلمة المرور يجب أن تكون 6 أحرف على الأقل', 'error');
        return;
      }
      
      // Check terms acceptance
      if (!terms) {
        showMessage('يجب الموافقة على الشروط والأحكام', 'error');
        return;
      }
      
      // If all validations pass
      showMessage('تم إنشاء الحساب بنجاح! 🎉', 'success');
      
      // Uncomment to actually submit the form
      // this.submit();
    });
  }
  
  // ========================================
  // FORM VALIDATION FOR LOGIN
  // ========================================
  const loginForm = document.querySelector('form[action="/login"]');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // Basic validation
      if (!email || !password) {
        showMessage('يرجى ملء جميع الحقول', 'error');
        return;
      }
      
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showMessage('البريد الإلكتروني غير صحيح', 'error');
        return;
      }
      
      // If all validations pass
      showMessage('جاري تسجيل الدخول... ⏳', 'success');
      
      // Uncomment to actually submit the form
      // this.submit();
    });
  }
  
  // ========================================
  // SHOW MESSAGE FUNCTION
  // ========================================
  function showMessage(message, type) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.message-popup');
    if (existingMessage) {
      existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-popup ${type}`;
    messageDiv.textContent = message;
    
    // Style the message
    messageDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 25px;
      background: ${type === 'success' ? 'rgba(76, 175, 80, 0.9)' : 'rgba(244, 67, 54, 0.9)'};
      color: white;
      border-radius: 15px;
      font-weight: 600;
      z-index: 9999;
      backdrop-filter: blur(10px);
      animation: slideInRight 0.3s ease;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    `;
    
    // Add to body
    document.body.appendChild(messageDiv);
    
    // Remove after 3 seconds
    setTimeout(() => {
      messageDiv.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
  }
  
  // Add animations for messages
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  
  // ========================================
  // INPUT FOCUS EFFECTS
  // ========================================
  const inputs = document.querySelectorAll('input');
  
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.style.transform = 'translateX(-2px)';
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.style.transform = 'translateX(0)';
    });
  });
  
  // ========================================
  // SOCIAL BUTTON CLICKS
  // ========================================
  const socialButtons = document.querySelectorAll('.social-button');
  
  socialButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      showMessage('هذه الميزة قيد التطوير 🔧', 'error');
    });
  });
  
  // ========================================
  // PASSWORD VISIBILITY TOGGLE (Optional Enhancement)
  // ========================================
  function addPasswordToggle() {
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    
    passwordInputs.forEach(input => {
      const wrapper = input.parentElement;
      
      // Create toggle button
      const toggleBtn = document.createElement('button');
      toggleBtn.type = 'button';
      toggleBtn.innerHTML = '👁️';
      toggleBtn.style.cssText = `
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 1.2em;
        opacity: 0.7;
        transition: opacity 0.3s;
      `;
      
      // Make wrapper position relative
      wrapper.style.position = 'relative';
      
      // Add toggle button
      wrapper.appendChild(toggleBtn);
      
      // Toggle password visibility
      toggleBtn.addEventListener('click', () => {
        if (input.type === 'password') {
          input.type = 'text';
          toggleBtn.innerHTML = '🙈';
        } else {
          input.type = 'password';
          toggleBtn.innerHTML = '👁️';
        }
      });
      
      toggleBtn.addEventListener('mouseenter', () => {
        toggleBtn.style.opacity = '1';
      });
      
      toggleBtn.addEventListener('mouseleave', () => {
        toggleBtn.style.opacity = '0.7';
      });
    });
  }
  
  // Call password toggle function
  addPasswordToggle();