const generateBtn = document.getElementById('generate-btn');
const qrContainer = document.getElementById('qr-container');
const qrText = document.getElementById('qr-text');
const downloadBtn = document.getElementById('download-btn');

generateBtn.addEventListener('click', () => {
    qrContainer.innerHTML = '';
    const text = qrText.value.trim();
    if (!text) {
        alert('Please enter text or URL');
        return;
    }

    QRCode.toCanvas(text, { width: 200 }, (err, canvas) => {
        if (err) throw err;
        qrContainer.appendChild(canvas);

        // Prepare download
        downloadBtn.href = canvas.toDataURL("image/png");
        downloadBtn.style.display = 'inline-block';
    });
});
