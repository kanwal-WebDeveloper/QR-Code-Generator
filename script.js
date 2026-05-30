let imgBox = document.getElementById("imgBox");
let qrimage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    if(qrText.value.length > 0) {const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");
const qrResult = document.getElementById("qrResult");
const clearBtn = document.getElementById("clearBtn");
const inputBox = document.querySelector(".input-box");

function generateQR() {

    if (qrText.value.length > 0) {

        qrImage.src =
            "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="
            + encodeURIComponent(qrText.value);

        qrResult.classList.add("show");

        inputBox.classList.add("active");

    } else {

        qrText.classList.add("error");

        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}

/* SHOW CLEAR BUTTON */

qrText.addEventListener("input", () => {

    if (qrText.value.length > 0) {
        clearBtn.style.display = "flex";
    } else {
        clearBtn.style.display = "none";
    }

});

/* CLEAR INPUT */

clearBtn.addEventListener("click", () => {

    qrText.value = "";

    clearBtn.style.display = "none";

    qrResult.classList.remove("show");

    inputBox.classList.remove("active");

});

/* DOWNLOAD QR */

function downloadQR() {

    if (!qrImage.src) return;

    const link = document.createElement("a");

    link.href = qrImage.src;

    link.download = "qr-code.png";

    link.click();
}

/* COPY TEXT */

function copyText() {

    navigator.clipboard.writeText(qrText.value);

    alert("Copied Successfully!");
}

/* SHARE */

function shareQR() {

    navigator.clipboard.writeText(qrText.value);

    alert("Share link copied!");
}

/* RESET */

function generateNew() {

    qrText.value = "";

    qrImage.src = "";

    qrResult.classList.remove("show");

    clearBtn.style.display = "none";

    inputBox.classList.remove("active");
}
    qrimage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.Value;
    imgBox.classList.add("show-img");
    }else{
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}
