// ********* JavaScript Kodları **************

let userName=prompt("İsminizi Giriniz");
let myName=document.querySelector("#myName");

if (userName) {
    myName.innerHTML=userName;
}
else{
    alert("İsminizi Girmediniz veya İşlemi İptal Ettiniz");
}

function gosterge() {  //  fonksiyonumuz

    let tarih= new Date();
    let saat= tarih.getHours();
    let dakika=tarih.getMinutes();
    let saniye=tarih.getSeconds();
    let gun=tarih.getDay();


    if (gun==1) {
        gun="Pazartesi";
    }
    else if (gun==2) {
        gun="Sali";
    }
    else if (gun==3) {
        gun="Carsamba";
    }
    else if (gun==4) {
        gun="Persembe";
    }
    else if (gun==5) {
        gun="Cuma";
    }
    else if (gun==6) {
        gun="Cumartesi";
    }
    else if (gun==7) {
        gun="Pazar";
    }
  
    saat  = saat   < 10 ? "0" + saat   : saat;
    dakika= dakika < 10 ? "0" + dakika : dakika; // Ternary Operator Kullanimi
    saniye= saniye < 10 ? "0" + saniye : saniye;

    let time= saat + ":" + dakika + ":" + saniye + " " + gun;
    document.querySelector("#time").innerHTML=time;
    document.querySelector("#time").textContent=time;


    setTimeout(gosterge, 1000);
}

gosterge();





