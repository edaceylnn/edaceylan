var express = require('express');
var router = express.Router();
const anaSayfa = function(req, res, next) {
	res.render('mekanlar-liste',
	{
	    'baslik':'Anasayfa',
	    'sayfaBaslik':{
	       'siteAd':'Mekan32',
	       'aciklama':'Isparta civarındaki mekanları keşfedin!'
      },
      'mekanlar':[
	    {
		   'ad':'Starbucks',
		   'adres':'Centrum Garden',
		   'puan':'3',
		   'imkanlar':['Dünya kahveleri','kahveler','pastalar'],
	       'mesafe':'10km'
	    },
	    {
		   'ad':'Starbucks',
		   'adres':'Centrum Garden',
		   'puan':'3',
		   'imkanlar':['Dünya kahveleri','kahveler','pastalar'],
		   'mesafe':'10km'

        },
	    {
		   'ad':'Starbucks',
		   'adres':'Centrum Garden',
		   'puan':'3',
		   'imkanlar':['Dünya kahveleri','kahveler','pastalar'],
		   'mesafe':'10km'
        },
	    {
		   'ad':'Starbucks',
		   'adres':'Centrum Garden',
		   'puan':'3',
		   'imkanlar':['Dünya kahveleri','kahveler','pastalar'],
	       'mesafe':'10km'
        },
	    {
		   'ad':'Starbucks',
		   'adres':'Centrum Garden',
		   'puan':'3',
		   'imkanlar':['Dünya kahveleri','kahveler','pastalar'],
		   'mesafe':'10km'
        }
	  ]
    });
  	 
}

const mekanBilgisi=function(req,res){
	res.render('mekan-detay',{
	   'baslik':'Mekan Bilgisi',
	   'sayfaBaslik':'Starbucks',
	   'mekanBilgisi':{
			'ad':'Starbucks',
			'adres':'Centrum Garden',
			'puan':'3',
			'imkanlar':['Dünya kahveleri','kahveler','pastalar'],
            'koordinatlar':{
				'enlem':37.781885,
				'boylam':30.566034
			},
			'saatler':[
			 { 
				'gunler':'Pazartesi-Cuma',
				'acilis':'7:00',
				'kapanis':'23:00',
				'kapali':false
			 },
			 {
				'gunler':'Cumartesi',
				'acilis':'9:00',
				'kapanis':'22:30',
				'kapali':false

			 },
			 {
				'gunler':'Pazar',
				'kapali':true
			 }
			],
			'yorumlar':[
			 {
				'yorumYapan':'Eda Ceylan',
				'puan':4,
				'tarih':'27 Ekim 2019',
				'yorumMetni':'Kahveleri efsane'
			 },
			 {
				'yorumYapan':'Eda Ceylan',
				'puan':4,
				'tarih':'27 Ekim 2019',
				'yorumMetni':'Kahveleri efsane'
			 }
			]
	   }
	});
}

const yorumEkle=function(req, res, next) {
	res.render('yorum-ekle', { title: 'Yorum Ekle' });
}
  
  module.exports={
  anaSayfa,
  mekanBilgisi,
  yorumEkle
  }

