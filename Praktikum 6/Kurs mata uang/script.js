function Kurs()
{
    var mataUang = document.getElementById("world").value;
    var jumlah = document.getElementById("jumlah").value;
    var rupiah = 0;
    if (mataUang == "usd")
    {
        rupiah = jumlah * 14182.60;
        document.getElementById("rupiah").value = "Rp." + rupiah
    }else if (mataUang == "yuan")
    {
        rupiah = jumlah * 2160.99
        document.getElementById("rupiah").value = "Rp." + rupiah
    }else if (mataUang == "eu")
    {
        rupiah = jumlah * 16815.80
        document.getElementById("rupiah").value = "Rp." + rupiah
    }else if(mataUang == "won"){
        rupiah = jumlah * 12.72
        document.getElementById("rupiah").value = "Rp." + rupiah
    } else if(!mataUang){
        alert("pilih Mata Uang dulu!")
    }

}