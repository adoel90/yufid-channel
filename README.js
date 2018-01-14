#
	Feature Navigasi "Video Pilihan"
	
	Scenario navigasi mesti-nya berhasil menampilkan seluruh video dalam kategori video pilihan

		Given "Video Pilihan" link di klik
		When click link
		Then url link menjadi "http://localhost:8081/list/video_pilihan"
		And variable 'categoryList' mengaktifkan property name dengan value 'video_pilihan'

			***
				//in 'src/news-data.html'
				let categoryList = [

			      {name: 'top_stories', title: 'Top Stories'},
			      {name: 'doodles', title: 'Doodles'},
			      {name: 'chrome', title: 'Chrome'},
			      {name: 'search', title: 'Search'},
			      {name: 'shopping_payments', title: 'Shopping & Payments'},
			      {name: 'nonprofits', title: 'Nonprofits'},
			      {name: 'video_pilihan', title: 'News - Nasional'}
			    ];
			
	Scenario navigasi tidak berhasil menampilkan seluruh video dalam kategori video pilihan

		Given
		When 
		Then


# 
	Feature Amp Pages Articel of Video Pilihan

	Scenario page artikel memiliki kemampuan teknologi AMP, menampilkan tag youtube amp, dan title terkait

		Given user choose artikel
		When clicked artikel yang di inginkan 
		Then muncul page fastly content of artikel
		And have metadata terkait sehingga memudahkan indexing pencarian google
		
