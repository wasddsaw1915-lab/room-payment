function login() {
    const u = document.getElementById('user').value;
    const p = document.getElementById('pass').value;
    
    // ตั้งค่า User และ Password ของทั้ง 3 คน
    const admin1 = (u === 'admin1' && p === 'avt101623');
    const admin2 = (u === 'admin2' && p === 'san101623');
    const admin3 = (u === 'Admin3' && p === 'wasd1915'); // เพิ่มคนที่ 3 (Admin3 ตัวใหญ่ตามที่คุณพิมพ์มา)

    if (admin1 || admin2 || admin3) {
        localStorage.setItem('login', 'true');
        localStorage.setItem('role', 'admin');
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('err').innerText = '❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';
    }
}

function viewOnly() {
    localStorage.setItem('login', 'true');
    localStorage.setItem('role', 'guest');
    window.location.href = 'dashboard.html';
}

function logout() {
    localStorage.clear(); 
    window.location.replace('index.html'); // ใช้ replace เพื่อไม่ให้กด Back กลับมาได้
}