// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 导航栏滚动效果
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// 联系表单处理
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // 这里可以添加发送数据到服务器的代码
        console.log('表单提交的数据：', data);
        
        // 显示提交成功消息
        alert('消息已发送！感谢您的留言。');
        this.reset();
    });
}

// 文章卡片动画
const articles = document.querySelectorAll('.article-card');
articles.forEach(article => {
    article.addEventListener('mouseenter', () => {
        article.style.transform = 'translateY(-10px)';
    });
    
    article.addEventListener('mouseleave', () => {
        article.style.transform = 'translateY(0)';
    });
});

// 页面加载动画
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
