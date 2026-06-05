const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");
const qrResult = document.getElementById("qrResult");
const clearBtn = document.getElementById("clearBtn");
const inputBox = document.querySelector(".input-box");

// Helper: Prepare data for QR code (add https:// to URLs if missing)
function prepareQRData(input) {
    let value = input.trim();
    if (value === "") return value;
    // Simple URL check: contains a dot and no spaces, and no protocol
    const urlPattern = /^(https?:\/\/)/i;
    const looksLikeUrl = /\./.test(value) && !/\s/.test(value) && !urlPattern.test(value);
    if (looksLikeUrl) {
        return "https://" + value;
    }
    return value;
}

function generateQR() {
    let rawValue = qrText.value;
    if (rawValue.length === 0) {
        qrText.classList.add("error");
        setTimeout(() => qrText.classList.remove("error"), 1000);
        return;
    }

    const finalData = prepareQRData(rawValue);
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(finalData)}`;
    
    qrImage.src = apiUrl;
    qrResult.classList.add("show");
    inputBox.classList.add("active");
}

// Show/hide clear button based on input
qrText.addEventListener("input", () => {
    if (qrText.value.length > 0) {
        clearBtn.style.display = "flex";
    } else {
        clearBtn.style.display = "none";
    }
});

// Clear button functionality
clearBtn.addEventListener("click", () => {
    qrText.value = "";
    clearBtn.style.display = "none";
    qrResult.classList.remove("show");
    inputBox.classList.remove("active");
});

// Download QR Code
function downloadQR() {
    if (!qrImage.src || qrImage.src === "") return;
    const link = document.createElement("a");
    link.href = qrImage.src;
    link.download = "qr-code.png";
    link.click();
}

// Copy input text to clipboard
function copyText() {
    if (qrText.value === "") {
        alert("Nothing to copy! Please enter text or URL first.");
        return;
    }
    navigator.clipboard.writeText(qrText.value);
    alert("Copied to clipboard!");
}

// Reset everything (Generate New)
function generateNew() {
    qrText.value = "";
    qrImage.src = "";
    qrResult.classList.remove("show");
    clearBtn.style.display = "none";
    inputBox.classList.remove("active");
}
