# Vivense test Case
This test case project developed with vue, vuex, vue-router and vuetify.I didn't want to spend time to build product API, so I have created my own product builder. This builder gets it power to Math.random() function. Besides, I added setTimeout between produce process for prevent duplication and simulate real world API behavior. Because of this, I added loader animation for making application more realistic.

Missing points of the random product builder is, when user refresh page every product will be recreated randomly so if you refresh on product details page, you will be redirected to 404 page. We can prevent this with using vuex-persist library, but I didn't want to add it into the project, because it will make more complex to project.

This project includes all the points that listed in case description. I didn't spend any time to modify vuetify components and colors so project looks very ugly, please forgive me about that :(

Lastly, I didn't like URL based localization. This approach makes routing so complicated. I would save user language into localeStorage instead of this approach.

## Live Version
https://vivense-test-case.vercel.app/

## Project Criteria
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

## Addition Criteria
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
