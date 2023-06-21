
function Konversi(){
    var suhu = document.getElementById("input").value; //Mengambil nilai inputan
    if(suhu != ""){
        var hasil = document.getElementById("hasil-output").innerHTML = suhu * 9/5 + 32; //Memproses inputan dan menampilkannya output menggunakan inner.HTML
    } else{
        alert("Masukkan Nilai Yang Valid Pada Kolom Celcius");
    }
}


function Hapus(){
    hasil = null; //Mengubah nilai hasil agar nilainya kosong/null
    document.getElementById("hasil-output").innerHTML = hasil; //Menampilkan nilai variabel hasil pada html yang ber-id"hasil-output"
    document.getElementById("form-input").reset(); //untuk reset valuenya pada html yang ber-id"form-input"
}