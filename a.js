db.mekanlar.save({
            'ad':'Starbucks',
            'adres':'Centrum Garden',
            'puan':3,
            'imkanlar':['Kahve','Pasta','Kek'],
            'koordinatlar':[37.781885,30.566034],
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
                   '_id':ObjectId(),
                   'yorumYapan':'Asým Sinan Yüksel',
                   'puan':3,
                   'tarih':new Date(),
                   'yorumMetni':'Kahveleri çok güzel'
                }

            ]
}
)
