# Okul Kapanış Geri Sayım Uygulaması

Bu proje, okulların kapanmasına ne kadar süre kaldığını gösteren bir geri sayım uygulamasıdır. Kullanıcılar, temayı beyaz ve siyah arasında geçirebilir ve bu tercihleri tarayıcıda saklanır. Uygulama, tatil günlerini ve belirli haftalık tatil günlerini çıkararak gerçek okul günlerini hesaplar.

## Özellikler

- Okul kapanış tarihine geri sayım.
- Kullanıcıların beyaz ve siyah tema arasında geçiş yapabilmesi.
- Tema tercihlerinin tarayıcıda saklanması.
- Tatil günlerinin ve Cuma günlerinin hariç tutulmasıyla kalan gerçek okul günlerinin hesaplanması.

## Kullanılan Diller

- HTML
- CSS
- JavaScript

## Kurulum

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

3. Proje dosyalarını tarayıcınızda açın:

    - `alpha.html` dosyasını herhangi bir tarayıcıda açın.

## Kullanım

- **Tema Geçişi:** Sağ üst köşedeki tema değiştirme ikonuna tıklayarak beyaz ve siyah tema arasında geçiş yapabilirsiniz. Tercihiniz tarayıcıda saklanır ve sayfa yenilendiğinde tercih edilen tema yüklenir.
- **Geri Sayım:** Uygulama, belirlenen kapanış tarihine kadar olan gün, saat, dakika ve saniyeyi gösterir. Tatil günleri ve Cuma günleri dikkate alınarak kalan gerçek okul günleri hesaplanır.

## Özelleştirme

- **Kapanış Tarihi ve Tatil Günleri:** `alpha.js` dosyasındaki kapanış tarihi ve tatil günlerini kendi ihtiyaçlarınıza göre güncelleyebilirsiniz.

```javascript
const closingDate = new Date('June 14, 2024 00:00:00').getTime();

const holidays = [
    new Date('June 10, 2024'),
    new Date('June 11, 2024'),
    new Date('June 12, 2024'),
    new Date('June 13, 2024'),
];
