window.onload = function() {
    // Meminta input nama dan alamat dari pengguna
    var nama = prompt("Siapa nama kamu?", "");
    var alamat = prompt("Di mana alamat kamu?", "");

    // Menampilkan nama dan alamat di dalam elemen dengan id 'output'
    document.getElementById("output").innerHTML = "<p>Nama: " + nama + "</p><p>Alamat: " + alamat + "</p>";
};
