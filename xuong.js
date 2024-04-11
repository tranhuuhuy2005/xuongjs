
var arr =[
        {
        src:"img/anh1.jpg",
        tenSP:"Nước hoa CHANEL PARIS",
        moTa:"Mùi hương nhẹ dễ chịu phù hợp với mọi đối tượng",
        gia:"1000$",
        },
        {
            src:"img/anh2.jpg",
            tenSP:"Nước hoa SAVAGE",
            moTa:"Đặc trưng cho phái mạnh, phù hợp mọi lứa tuổi",
            gia:"1200$",
            },
            {
                src:"img/anh3.jfif",
                tenSP:"Nước hoa CILINE",
                moTa:"Mùi hương lan tỏa giúp tự tin hơn khi ở nơi đông người",
                gia:"3000$",
                },
                {
                    src:"img/anh4.jpg",
                    tenSP:"Nước hoa DONCLE&GABBANA",
                    moTa:"Mùi hương đặc trưng là thứ khiến bạn khác biệt ",
                    gia:"500$",
                    },
                    {
                        src:"img/anh5.jfif",
                        tenSP:"Nước hoa CREED",
                        moTa:"Chiết xuất hoàn toàn từ thành phần thiên nhiên không có chất gây hại",
                        gia:"3500$",
                        },
                        {
                            src:"img/anh6.jfif",
                            tenSP:"Nước hoa KENZYY",
                            moTa:"Hoàn toàn làm thủ công không chất tạo mùi và lưu hương bền lâu trong 24h",
                            gia:"4000$",
                            },
                        ]

var dem = 0;
for (let i = 0; i < arr.length; i++) {
    if (dem % 3 == 0) {
        var row = document.createElement("div");
        row.classList.add("row");
        document.getElementById("product-list").appendChild(row);
    }
    var cot = document.createElement('div');
    cot.classList.add('col-lg-4');
    var theSP = document.createElement('div');
    theSP.classList.add('card');
    theSP.style = 'width: 18rem';
    var anhSP = document.createElement('img');
    anhSP.src = arr[i].src;
    row.appendChild(cot);
    cot.appendChild(theSP);
    theSP.appendChild(anhSP);
    var thanSP = document.createElement('div');
    thanSP.classList.add('card-body');
    theSP.appendChild(thanSP);
    var tenSP = document.createElement('h5');
    tenSP.classList.add('card-title');
    tenSP.textContent = arr[i].tenSP
    thanSP.appendChild(tenSP);
    var moTa = document.createElement('p');
    moTa.classList.add('card-text');
    moTa.textContent = arr[i].moTa;
    thanSP.appendChild(moTa);
    var giaSP =document.createElement('h3');
    giaSP.style.textAlign = 'center';
    giaSP.innerText =arr[i].gia;
    thanSP.appendChild(giaSP);
    var nutThem = document.createElement('button');
    nutThem.classList.add('btn');
    nutThem.classList.add('btn-primary');
    nutThem.innerHTML ='Thêm Vào Giỏ Hàng';
    thanSP.appendChild(nutThem);
    thanSP.style.textAlign = 'center';
    dem++;
}