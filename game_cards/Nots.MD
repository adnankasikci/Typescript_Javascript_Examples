
# Veri Çekme Yöntemleri: XMLHttpRequest, Fetch, Axios ve async/await

## Giriş

JavaScript dünyasında, web uygulamalarına dinamik veri eklemek ve sunucularla iletişim kurmak için veri çekme işlemleri oldukça önemlidir.
Bu işlem için XMLHttpRequest (XHR), Fetch, Axios gibi çeşitli yöntemler bulunmaktadır.

async/await

### XMLHttpRequest (XHR)

XHR, eski nesil bir API olmasına rağmen hala kullanılmaktadır. Bir sunucuya istek göndermek ve gelen yanıtı işlemek için kullanılır.

```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", apiUrl, true);
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        console.log(JSON.parse(xhr.responseText));
    } else {
        console.error("Request failed!");
    }
};
xhr.send();
```

### Fetch API

Fetch API, daha modern bir API olup Promise tabanlıdır. Bu sayede async/await gibi modern JavaScript özelliklerini kullanabiliriz.

```javascript
fetch(apiUrl)
    .then(response => {
        return response.json(); // Bu istek bir promise döndürür ve JSON formatının hazır olması gerekmektedir.
    })
    .then(data => {
        if(data.results) { // API'den dönen JSON yanıtında bir veri kümesini temsil eder.
            data.results.forEach(item => {
                console.log(item); // Her bir item'ı konsola yazdır
            });
        }
        console.log(data) //JSON hazır olduktan sonra veriyi yazdırabilir.
    })
```

### Axios

Axios, Fetch API üzerine inşa edilmiş bir HTTP istek kütüphanesidir. Fetch API'nin sunduğu tüm özelliklere ek olarak, bazı ek özellikler de sunar.

```javascript
axios.get(apiUrl)
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));
```

* **Avantajları:**
  * Fetch API'ye göre daha fazla özellik sunar.
  * İnterceptorlar sayesinde istek ve yanıtları kolayca ele alabiliriz.

### async/await

async/await, Promise'leri daha senkron bir şekilde kullanmamızı sağlayan bir sözdizimi şekeri olarak düşünülebilir.

```javascript
async function fetchData(){
    const apiUrl = "";
    const response = await fetch(apiUrl); //API istek atma
    const data = await response.json(); //API Jsona dönüştürme
    console.log(data);
}

fetchData();
```

* **Avantajları:**
  * Promise tabanlı kodları daha okunaklı hale getirir.
  * Asenkron işlemleri daha kolay yönetmemizi sağlar.

### Karşılaştırma

| Özellik | XMLHttpRequest | Fetch | Axios | async/await |
|---|---|---|---|---|
| Sözdizimi | Karmaşık | Temiz | Temiz | Temiz |
| Promise tabanlı | Hayır | Evet | Evet | Hayır (Promise ile birlikte kullanılır)|
| Ek özellikler | Az | Orta | Çok | Yok (Sözdizimi şekeri) |
| Eski tarayıcı uyumluluğu | Yüksek | Orta | Orta | Orta |

### Sonuç

Veri çekme işlemi için hangi yöntemin kullanılacağı projenin gereksinimlerine ve geliştiricinin tercihlerine bağlıdır.
Modern projelerde genellikle Fetch API veya Axios tercih edilir. async/await ise bu API'lerle birlikte kullanılarak kodun okunabilirliğini artırır.

**Seçim yaparken dikkat edilmesi gerekenler:**

* Projenin gereksinimleri (eski tarayıcı desteği, ek özellikler)
* Geliştiricinin tercihleri
* Projenin büyüklüğü ve karmaşıklığı

**Ek Bilgiler:**

* **CORS:** Farklı domainlerdeki kaynaklara erişmek için CORS (Cross-Origin Resource Sharing) ayarlarının doğru yapılması gerekmektedir.
* **HTTP Metotları:** GET, POST, PUT, DELETE gibi farklı HTTP metotları kullanılarak farklı işlemler yapılabilir.
* **Error Handling:** Hataları doğru bir şekilde yönetmek için try-catch blokları veya Promise'lerin `catch()` metodu kullanılabilir.

Bu belgede, veri çekme yöntemleri hakkında genel bir bilgi verilmiştir. Daha detaylı bilgi için ilgili API'lerin belgelerine başvurabilirsiniz.

**Not:** Bu belgedeki örnekler sadece temel düzeydedir. Gerçek dünya uygulamalarında daha karmaşık senaryolarla karşılaşabilirsiniz.
