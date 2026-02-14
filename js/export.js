function exportCSV() {
    let rows = ['เลขที่,ชื่อสมาชิก,สถานะการจ่าย'];
    let count = 0;

    members.forEach((n, i) => {
        const isPaid = paid[i] ? 'จ่ายแล้ว' : '-';
        if (paid[i]) count++; 
        rows.push(`${i + 1},${n},${isPaid}`);
    });

    // เพิ่มบรรทัดสรุปท้ายไฟล์
    rows.push(''); // บรรทัดว่าง
    rows.push(`,จำนวนคนจ่ายทั้งหมด,${count} คน`);
    rows.push(`,ยอดเงินรวมทั้งสิ้น,${count * PRICE} บาท`);

    // ใช้ \uFEFF ป้องกันภาษาไทยเพี้ยน
    let blob = new Blob(['\uFEFF' + rows.join('\n')], { type: 'text/csv;charset=utf-8' });
    let a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `สรุปยอดเงินห้อง_${new Date().toLocaleDateString('th-TH')}.csv`;
    a.click();
}