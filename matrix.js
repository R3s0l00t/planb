document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.createElement("canvas");
    canvas.id = "matrixCanvas";
    document.body.prepend(canvas);

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(0);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "rgba(0, 255, 0, 0.4)";
        ctx.font = "20px Courier New";

        for (let i = 0; i < drops.length; i++) {
            const text = String.fromCharCode(0x30A0 + Math.random() * 96);
            ctx.fillText(text, i * 20, drops[i] * 20);

            if (drops[i] * 20 > canvas.height && Math.random() > 0.95) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(drawMatrix, 50);

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
