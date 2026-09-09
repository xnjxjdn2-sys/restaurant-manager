document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  // التحقق البسيط من البيانات (يمكن ربطه لاحقاً بـ Supabase)
  if (email && password) {
    message.style.color = 'green';
    message.textContent = 'جاري تسجيل الدخول...';
  } else {
    message.style.color = 'red';
    message.textContent = 'يرجى إدخال جميع البيانات';
  }
});
