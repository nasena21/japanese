---
sidebar_position: 5
sidebar_label: 'Belajar Strategi'
---


# Belajar Strategi

Mahjong adalah game yang mengandalkan skill dan keberuntungan. Ada beberapa prinsip-prinsip strategi yang bisa dipelajari untuk meningkatkan skill, tapi menguasai skill bukanlah sesuatu yang wajib atau cukup untuk memenangkan sebuah permainan. Justru sebaliknya, dengan keberuntungan, pemain dengan skill yang buruk bisa dengan mudah mengalahkan pemain yang ahli di mahjong. Setidaknya dalam jangka pendek, hasil dari permainan ditentukan lebih banyak oleh keberuntungan dibandingkan oleh skill.[^1] Tetapi, mempelajari prinsip-prinsip strategi sangat penting untuk meningkatkan performamu dalam jangka panjang. Selain itu, kamu akan bisa menikmati permainan dengan pemahaman yang lebih dalam ketika kamu memahami prinsip-prinsip tersebut.

Karena permainan ini bersifat perobabilistik, membuat keputusan yang terbaik tidak selalu memberikan hasil yang terbaik. Keputusan terbaik adalah yang menghasilkan hasil terbaik dalam rata-rata. Oleh karena itu, evaluasi terhadap keputusan kita memerlukan penilaian probabilistik (yaitu, statistik) terhadap berbagai pilihan. 

[^1]: Pertanyaan yang menarik : seberapa pendek "jangka pendek" yang disebutkan di atas. Artinya, seberapa banyak permainan yang harus dilakukan untuk membedakan mana pemain yang kuat dan mana pemain yang lemah? Penelitian menunjukkan setidaknya kita perlu 100 permainan atau lebih untuk mendapatkan perkiraan yang dapat diandalkan untuk mengukur kemampuan kita. Turnamen EMA biasanya hanya terdiri dari 8 permainan, untuk menjadi pemenang dalam turnamen itu membutuhkan cukup keberuntungan. 

Sebagai contoh, lihatlah pegangan di bawah ini 
![Gambar 1](/img/BS3-1.png)
Dari pegangan tersebut, tile mana yang akan kamu buang? 

Pegangan ini akan menjadi tenpai (siap untuk menang) jika kamu membuang 6 pin atau 7 pin. Mari kita bandingkan kedua pilihan tersebut.

| 6 Pin | 7 Pin | 
|-------|-------|
|![minipic](/img/6-pin.png) | ![minipic](/img/7-pin.png)| 

Kalau kamu membuang 6 pin, maka kamu perlu menunggu 5 pin atau 8 pin untuk menang. 

| 5 Pin | 8 Pin | 
|-------|-------|
|![minipic](/img/5-pin.png) | ![minipic](/img/8-pin.png)| 


Kalau kamu membuang 7 pin, maka kamu perlu menunggu 4 man atau 6 pin untuk menang. 

| 4 Man | 6 Pin | 
|-------|-------|
|![minipic](/img/4-man.png) | ![minipic](/img/6-pin.png)| 

Pilihan mana yang lebih baik? Meskipun kedua pilihan tersebut sama-sama menghasilkan tungguan dua arah atau menunggu dua tile. Secara probabilitas, menunggu 5 pin atau 8 pin lebih baik daripada menunggu 4 man atau 6 pin. 

Setiap tile memiliki 4 duplikat. Jika hanya mengandalkan informasi yang tersedia dari pegangan di atas. Maka masih ada 4 tile 5 pin dan 4 tile 8 pin yang ada di luar pegangan kamu, sehingga ada 8 tile yang bisa memberikan kemenangan. 

Sementara jika kita menunggu 4 man atau 6 man, kita akan memiliki kesempatan menang yang lebih kecil. Karena di pegangan di atas, kamu sudah memiliki 2 tile 4 man, dan 2 tile 6 pin. Karena setiap tile memiliki 4 duplikat, itu artinya hanya ada 2 tile 4 man dan 2 tile 6 pin di luar pegangan. Dengan begitu, hanya ada 4 tile yang bisa memberikan kemenangan.

Kesimpulannya sudah jelas lebih baik untuk menunggu 5 pin atau 8 pin dibandingkan menunggu 4 man atau 6 pin, karena itu akan memberikan kamu kesempatan menang yang lebih besar dengan pegangan ini. 


## Reference
[Daina Chiba, Riichi Book I](https://dainachiba.github.io/RiichiBooks/)