var footer = "Eda Ceylan 2020"
const anaSayfa = function (req, res, next) {
	res.render('mekanlar-liste',
		{
			'baslik': 'Anasayfa',
			'footer': footer,
			'sayfaBaslik': {
				'siteAd': 'Mekan32',
				'aciklama': 'Isparta civarındaki mekanları keşfedin'
			},
			'mekanlar': [
				{
					'ad': 'Starbucks',
					'adres': 'Centrum Garden AVM',
					'puan': 3,
					'imkanlar': ['Dünya Kahveleri', 'Kekler', 'Pastalar'],
					'mesafe': '10km'
				},
				{
					'ad': 'Gloria Jeans',
					'adres': 'SDÜ Doğu Kampüsü',
					'puan': 5,
					'imkanlar': ['Kahve', 'Çay', 'Pasta'],
					'mesafe': '1km'
				},
				{
					'ad': 'Gratis',
					'adres': 'Centrum Garden AVM',
					'puan': 3,
					'imkanlar': ['Bakım','Makyaj'],
					'mesafe': '10km'
				},
				{
					'ad': 'Penti',
					'adres': 'Centrum Garden AVM',
					'puan': 3,
					'imkanlar': ['Çanta','Spor Giyim'],
					'mesafe': '10km'
				},
				{
					'ad': 'Kahve Dünyası',
					'adres': 'Centrum Garden AVM',
					'puan': 3,
					'imkanlar': ['Dünya Kahveleri', 'Kekler', 'Pastalar'],
					'mesafe': '10km'
				},
			]
		}

	);
}

const mekanBilgisi = function (req, res, next) {
	res.render('mekan-detay',
		{
			'baslik': 'Mekan Bilgisi',
			'footer': footer,
			'sayfaBaslik': 'Starbucks',
			'mekanBilgisi': {
				'ad': 'Starbucks',
				'adres': 'Centrum Garden AVM',
				'puan': 3,
				'imkanlar': ['Dünya Kahveleri', 'Kekler', 'Pastalar'],
				'koordinatlar': {
					'enlem': '37.781885',
					'boylam': '30.566034'
				},
				'saatler': [
					{
						'gunler': 'Pazartesi-Cuma',
						'acilis': '7:00',
						'kapanis': '23:00',
						'kapali': false
					},
					{
						'gunler': 'Cumartesi',
						'acilis': '9:00',
						'kapanis': '22:00',
						'kapali': false
					},
					{
						'gunler': 'Pazar',
						'kapali': true
					},
				],
				'yorumlar': [
					{
						'yorumYapan': 'Asım Sinan Yüksel',
						'puan': 3,
						'tarih': '27.11.2020',
						'yorumMetni': 'Kahveleri güzel.'
					},
					{
						'yorumYapan': 'Asım Sinan Yüksel',
						'puan': 5,
						'tarih': '27.11.2020',
						'yorumMetni': 'Kahveleri harika.'
					}

				]

			}
		}
	);
}

const yorumEkle = function (req, res, next) {
	res.render('yorum-ekle', { title: 'Yorum Ekle' });
}

module.exports = {
	anaSayfa,
	mekanBilgisi,
	yorumEkle
}