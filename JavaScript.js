// ตรวจจับเมื่อเนื้อหาปรากฏบนหน้าจอ
const elements = document.querySelectorAll('.image-gallery .img-fluid');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view'); // เพิ่มคลาสเมื่อภาพปรากฏ
        } else {
            entry.target.classList.remove('in-view'); // ลบคลาสเมื่อภาพหายไป
        }
    });
}, { threshold: 0.5 });

elements.forEach(element => {
    observer.observe(element); // เริ่มการตรวจสอบ
});
