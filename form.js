function valForm() {
    document.getElementById("formDangKy").addEventListener("click", function (event) {
        event.preventDefault()
    });
    var valTen = document.querySelector('#hoTen');
    if (valTen.value == "") {
        document.querySelector('#err-name').innerHTML = 'Tên Không Được Bỏ Trống !'
    } else {
        document.querySelector('#err-name').innerHTML = ''
    }
    var valTuoi = document.querySelector('#tuoi')
    if (isNaN(valTuoi.value)) {
        document.querySelector('#err-tuoi').innerHTML = 'Tuổi Phải Là Số !'
    } else {
        document.querySelector('#err-tuoi').innerHTML = ''
    }
    var valsoDT = document.querySelector('#soDT').value;
    if (isNaN(valsoDT)) {
        document.querySelector('#err-sdt').innerHTML = 'Số Điện Thoại Phải Là Số !'
    } else {
        if (valsoDT.indexOf("0") != 0) {
            document.querySelector('#err-sdt').innerHTML = 'Số Điện Thoại Phải Bắt Đầu Bằng 0!'
        }else{
            document.querySelector('#err-sdt').innerHTML = ''
        }
    }
};