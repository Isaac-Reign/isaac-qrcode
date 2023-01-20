const form = document.querySelector('.generate-form');
const spinner = document.querySelector('.image-box');
const spinnerImg = document.querySelector('.image-box img');
const qr = document.getElementById('qrcode');


const onGenerateSubmit = (e) => {
    e.preventDefault()
    qr.innerHTML = '';
    const saveLinke = document.querySelector('.download-btn');
    const saveLinke2 = document.querySelector('.add-database');

    if (saveLinke || saveLinke2) {
        saveLinke.remove()
        saveLinke2.remove()
    }
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    // const name = document.getElementById('url_name').value;


    showSpiner()
    if (url) {
        setTimeout(() => {
            hideSpiner()
                try{
                    generateQRCode(url, size);

                    setTimeout(() => {
                        // form.classList.add('generate-form-toggler');
                        saveURL = qr.querySelector('img').src;
                        createSaveBtn(saveURL);

                        // addToDataBase(name, saveURL, size);
                    }, 50)
                }
                catch {
                    error = window.confirm('Sorry an error occure, refreshing the page will solve this error. Click \'Ok\' to refresh')
                    if(error){
                        window.location.reload()
                    }
                }
        }, 100)

    }
}

const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size
    })
}
form.addEventListener('submit', onGenerateSubmit)

const showSpiner = () => {
    spinner.style.opacity = 'border: 1.5px dotted dodgerblue'
    spinnerImg.style.display = 'block'
    qr.style.display = 'none'
}

const hideSpiner = () => {
    spinner.style.border = 'none';
    spinnerImg.style.display = 'none'
    qr.style.display = 'block'
}


const createSaveBtn = (saveURL) => {
    const link = document.createElement('a');
    link.download = 'qrcode';
    link.classList = 'download-btn';
    link.href = saveURL;
    link.innerHTML = "Download Image";
    generated = document.getElementById('generated');


    const link2 = document.createElement('button');
    // link2.classList = 'download-btn add-database';
    // link2.innerHTML = "";
    // link2.type = "submit";
    // link2.name = 'data_base';
    // link2.style.pointerEvents = "none";
    // generated.appendChild(link2);
    
    generated.appendChild(link);

}

//ADD TO DATA BASE

// function addToDataBase(name, source, size){
//     document.getElementById('name').value = name;
//     document.getElementById('source').value = source;
//     document.getElementById('size2').value = size;
// }