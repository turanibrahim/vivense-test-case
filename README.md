# Vivense test Case
Job application test case from Vivense based on Vue.js, Vue-Router and Vuex.

## Live Version
https://vivense-test-case.vercel.app/

## Genel Kriterler
- Ürün verilerini uygulamaya veren bir Mock API oluşturmalısın. Bütün ürün verileri oluşturacağın API üzerinden gelmeli. İstediğin gibi bir ürün modeli oluşturabilirsin.
- İstersen kendin bir API yaratabilirsin veya Firebase, MockAPI gibi hazır araçlar kullanabilirsin.
  Ürün fotoğrafları için https://picsum.photos/ gibi hazır araçlardan fotoğraflar alabilirsin. Ürünün birden fazla fotoğrafı olmalı! Bunları url olarakta tutabilirsin.
- UI için modern bir CSS framework'ü kullanmalısın. (Bootstrap, Material IO, Vuetify, Bulma...)
- Uygulamada bir routing mekanizması olmalı. İzin verilenin dışında bir route'a gitmeye çalışıldığında hata verebilmeli.
- Uygulama çoklu dil desteklemeli. Dil değişimleri uygulamanın URL'ine yansımalı. (Türkçe ve İngilizce yeterli bizim için)
- Uygulamadaki veriler bir State Management üzerinden yönetilmeli. Bileşenler içerisinde doğrudan API call yapılmamalı.
- Ürün Listeleme ve Ürün Detay Kriterleri
- Ürün listeleme sayfasında sayfalama olmalı.
- Masaüstü görünümde klasik sayfalama olmalı. Sayfalama ile ilgili yapılan değişiklikler URL'e yansımalı.
- Mobil görünümde infinite scroll pagination tekniği kullanarak scroll yaptıkça yeni ürünler ekrana basılmalı.
- Mobil masaüstü ayrımını belirli genişlik değerine göre veya doğrudan User Agent bilgisine göre yapabilirsin.
- Listeleme ve detay sayfalarında ürün ile ilgili bilgiler (Başlık, açıklama gibi) kullanıcının seçeceği dile göre ekrana basılmalı. Dil değişimi yapıldığında ekrandaki değerler aktif olarak değişmeli.
- Ürün Detayda ürünün birden fazla fotoğrafı olacağı için bir slider olmalı ve kullanıcı fotoğraflar arasında gezinebilmeli.

## Ek Kriterler
- Clean Code prensiplerine uygun kodlama yapmalısın. Yazdığın kodlar okunaklı ve anlaşılabilir olmalı. Özellikle isimlendirmelere dikkat etmelisin.
- VueJS bileşen tabanlı bir framework olduğu için kodlarının kompakt ve küçük parçalara bölünmüş olmalı.
- Uygulamada Eslint'i aktif hale getirmelisin. Eslint'in standart kural setleride kullanabilirsin artı olarak Prettier kural setini beraberin kullanabilirsin.


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
