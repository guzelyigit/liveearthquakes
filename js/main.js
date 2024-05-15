var magnitude, locationName, latitude, longitude, timestamp, km;

    var userLocation = {
        latitude: null,
        longitude: null
    };

    var earthquakeData = [];

    const cityData = [
        { country: "Turkey", name: "Istanbul", latitude: 41.0082, longitude: 28.9784, locationUrl:"!1m18!1m12!1m3!1d385403.40682245424!2d28.388397289371216!3d41.00415860956207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1715790474589!5m2!1str!2str"},
        { country: "Turkey", name: "Ankara", latitude: 39.9334, longitude: 32.8597, locationUrl:"!1m18!1m12!1m3!1d195884.30043145744!2d32.59795774239394!3d39.90352329781131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1str!2str!4v1715790491891!5m2!1str!2str"},
        { country: "Turkey", name: "Izmir", latitude: 38.4192, longitude: 27.1287, locationUrl:"!1m18!1m12!1m3!1d200065.4849717728!2d26.91490979931525!3d38.417828664005164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWly!5e0!3m2!1str!2str!4v1715790511856!5m2!1str!2str"},
        { country: "Turkey", name: "Bursa", latitude: 40.1821, longitude: 29.0669, locationUrl:"!1m18!1m12!1m3!1d97485.70348675306!2d28.949889024004314!3d40.221779861845526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca1582d8d45695%3A0x61a00555fc973392!2sBursa!5e0!3m2!1str!2str!4v1715790523092!5m2!1str!2str"},
        { country: "Turkey", name: "Antalya", latitude: 36.8969, longitude: 30.7133, locationUrl:"!1m18!1m12!1m3!1d102101.7017857809!2d30.635704444822156!3d36.89804638431684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39aaeddadadc1%3A0x95c69f73f9e32e33!2sAntalya!5e0!3m2!1str!2str!4v1715790536741!5m2!1str!2str"},
        { country: "USA", name: "New York", latitude: 40.7128, longitude: -74.0060, locationUrl:"!1m18!1m12!1m3!1d193595.2527998699!2d-74.14448787425354!3d40.697631233397885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1715790549692!5m2!1str!2str"},
        { country: "USA", name: "Los Angeles", latitude: 34.0522, longitude: -118.2437, locationUrl:"!1m18!1m12!1m3!1d423284.04410562495!2d-118.74137439752131!3d34.0206084680616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20Kaliforniya%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1715790591015!5m2!1str!2str"},
        { country: "UK", name: "London", latitude: 51.5074, longitude: -0.1278, locationUrl:"!1m18!1m12!1m3!1d158857.83988672637!2d-0.2664034848794909!3d51.528739805029666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2zTG9uZHJhLCBCaXJsZcWfaWsgS3JhbGzEsWs!5e0!3m2!1str!2str!4v1715790603569!5m2!1str!2str"},
        { country: "France", name: "Paris", latitude: 48.8566, longitude: 2.3522, locationUrl:"!1m18!1m12!1m3!1d83998.77824573245!2d2.264634906379706!3d48.85893843461572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20Fransa!5e0!3m2!1str!2str!4v1715790614921!5m2!1str!2str"},
        { country: "Germany", name: "Berlin", latitude: 52.5200, longitude: 13.4050, locationUrl:"!1m18!1m12!1m3!1d155421.70603792695!2d13.25992711787948!3d52.50693861615697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Almanya!5e0!3m2!1str!2str!4v1715790629832!5m2!1str!2str"},
        { country: "Italy", name: "Rome", latitude: 41.9028, longitude: 12.4964, locationUrl:"!1m18!1m12!1m3!1d190028.3544265694!2d12.371191233888965!3d41.91020879186578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRoma%2C%20Roma%20ili%2C%20%C4%B0talya!5e0!3m2!1str!2str!4v1715790641005!5m2!1str!2str"},
        { country: "Spain", name: "Madrid", latitude: 40.4168, longitude: -3.7038, locationUrl:"!1m18!1m12!1m3!1d194347.47827008562!2d-3.844343568095898!3d40.43809861031433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20%C4%B0spanya!5e0!3m2!1str!2str!4v1715790653645!5m2!1str!2str"},
        { country: "Portugal", name: "Lisbon", latitude: 38.7223, longitude: -9.1393, locationUrl:"!1m18!1m12!1m3!1d49789.64536430872!2d-9.200935299508698!3d38.744139164358415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLizbon%2C%20Portekiz!5e0!3m2!1str!2str!4v1715790667152!5m2!1str!2str"},
        { country: "Greece", name: "Athens", latitude: 37.9838, longitude: 23.7275, locationUrl:"!1m18!1m12!1m3!1d50310.55897739638!2d23.69713984334259!3d37.99089765944479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2sAtina%2C%20Yunanistan!5e0!3m2!1str!2str!4v1715790678347!5m2!1str!2str"},
        { country: "Russia", name: "Moscow", latitude: 55.7558, longitude: 37.6176, locationUrl:"!1m18!1m12!1m3!1d577332.5662515962!2d36.72621025329629!3d55.58103352605414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoskova%2C%20Rusya!5e0!3m2!1str!2str!4v1715790689531!5m2!1str!2str"},
        { country: "China", name: "Beijing", latitude: 39.9042, longitude: 116.4074, locationUrl:"!1m18!1m12!1m3!1d391565.99700015766!2d116.06782094499634!3d39.93894360251835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f05296e7142cb9%3A0xb9625620af0fa98a!2zUGVraW4sIMOHaW4!5e0!3m2!1str!2str!4v1715790702337!5m2!1str!2str"},
        { country: "Japan", name: "Tokyo", latitude: 35.6895, longitude: 139.6917, locationUrl:"!1m18!1m12!1m3!1d831443.6192918717!2d139.1104279724294!3d35.50856471555884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japonya!5e0!3m2!1str!2str!4v1715790714941!5m2!1str!2str"},
        { country: "South Korea", name: "Seoul", latitude: 37.5665, longitude: 126.9780, locationUrl:"!1m18!1m12!1m3!1d202404.9141691648!2d126.80933191362428!3d37.565033714195856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2012d5c39cf%3A0x7e11eca1405bf29b!2sSeul%2C%20G%C3%BCney%20Kore!5e0!3m2!1str!2str!4v1715790726069!5m2!1str!2str"},
        { country: "India", name: "New Delhi", latitude: 28.6139, longitude: 77.2090, locationUrl:"!1m18!1m12!1m3!1d112173.03012632084!2d77.12658421808223!3d28.52747816358838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sYeni%20Delhi%2C%20Delhi%2C%20Hindistan!5e0!3m2!1str!2str!4v1715790757382!5m2!1str!2str"},
        { country: "Australia", name: "Canberra", latitude: -35.2809, longitude: 149.1300, locationUrl:"!1m18!1m12!1m3!1d208364.4066270458!2d148.96497591102846!3d-35.31358777506054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164ca3b20b34bb%3A0x400ea6ea7695970!2sKanberra%20Avustralya%20Ba%C5%9Fkent%20B%C3%B6lgesi%2C%20Avustralya!5e0!3m2!1str!2str!4v1715790745833!5m2!1str!2str"},
        { country: "Brazil", name: "Brasilia", latitude: -15.8267, longitude: -47.9218, locationUrl:"!1m18!1m12!1m3!1d3957770.32833782!2d-50.961004584398445!3d-14.368828473251682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18df9ae275%3A0x738470e469754a24!2sBrazilya%20-%20Bras%C3%ADlia%2C%20Federal%20B%C3%B6lge%2C%20Brezilya!5e0!3m2!1str!2str!4v1715790802907!5m2!1str!2str"},
        { country: "Canada", name: "Ottawa", latitude: 45.4215, longitude: -75.6972, locationUrl:"!1m18!1m12!1m3!1d359536.9778791152!2d-76.12989085719718!3d45.25016592628499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttava%2C%20Ontario%2C%20Kanada!5e0!3m2!1str!2str!4v1715790774946!5m2!1str!2str"},
        { country: "Mexico", name: "Mexico City", latitude: 19.4326, longitude: -99.1332, locationUrl:"!1m18!1m12!1m3!1d240863.71543035388!2d-99.3084221997571!3d19.390983242631872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sMeksika%2C%20Meksiko%2C%20Meksika!5e0!3m2!1str!2str!4v1715790819639!5m2!1str!2str"},
        { country: "South Africa", name: "Pretoria", latitude: -25.7463, longitude: 28.1876, locationUrl:"!1m18!1m12!1m3!1d229975.85764800562!2d28.033142400670656!3d-25.75824794340078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95619cbec65033%3A0xf66262b07a847b4c!2sPretorya%2C%20G%C3%BCney%20Afrika!5e0!3m2!1str!2str!4v1715790836623!5m2!1str!2str"},
        { country: "Nigeria", name: "Abuja", latitude: 9.0765, longitude: 7.3986, locationUrl:"!1m18!1m12!1m3!1d126093.7824440121!2d7.367466821090184!3d9.024416365142859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Abuja%20Ba%C5%9Fkent%20B%C3%B6lgesi%2C%20Nijerya!5e0!3m2!1str!2str!4v1715790852042!5m2!1str!2str"},
        { country: "Egypt", name: "Cairo", latitude: 30.0444, longitude: 31.2357, locationUrl:"!1m18!1m12!1m3!1d55251.336634876694!2d31.217264776508966!3d30.059556316684063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2zS2FoaXJlLCBNxLFzxLFy!5e0!3m2!1str!2str!4v1715790869490!5m2!1str!2str"},
        { country: "Saudi Arabia", name: "Riyadh", latitude: 24.7136, longitude: 46.6753, locationUrl:"!1m18!1m12!1m3!1d463877.31242950493!2d46.49288193599672!3d24.725455372447055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyad%20Suudi%20Arabistan!5e0!3m2!1str!2str!4v1715790883316!5m2!1str!2str"},
        { country: "UAE", name: "Abu Dhabi", latitude: 24.4539, longitude: 54.3773, locationUrl:"!1m18!1m12!1m3!1d232565.41896976897!2d54.39381134894592!3d24.38705412927417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dabi%20-%20Birle%C5%9Fik%20Arap%20Emirlikleri!5e0!3m2!1str!2str!4v1715790898440!5m2!1str!2str"},
        { country: "Qatar", name: "Doha", latitude: 25.276987, longitude: 51.526988, locationUrl:"!1m18!1m12!1m3!1d115443.1014604547!2d51.4295956806145!3d25.28414143995997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44d9319f78cfd4b1!2sDoha%2C%20Katar!5e0!3m2!1str!2str!4v1715790910794!5m2!1str!2str"},
        { country: "Kuwait", name: "Kuwait City", latitude: 29.3759, longitude: 47.9774, locationUrl:"!1m18!1m12!1m3!1d27814.411939993763!2d47.96126717288458!3d29.376101014666823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c83ce455983%3A0xc3ebaef5af09b90e!2sKuveyt!5e0!3m2!1str!2str!4v1715790927950!5m2!1str!2str"},
        { country: "Iraq", name: "Baghdad", latitude: 33.3152, longitude: 44.3661, locationUrl:"!1m18!1m12!1m3!1d106696.58342689612!2d44.27350426750273!3d33.3118023175102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f67a0a74193%3A0x9deda9d2a3b16f2c!2zQmHEn2RhdCwgSXJhaw!5e0!3m2!1str!2str!4v1715790939388!5m2!1str!2str"},
        { country: "Iran", name: "Tehran", latitude: 35.6892, longitude: 51.3890, locationUrl:"!1m18!1m12!1m3!1d207344.0754367783!2d51.18284757799681!3d35.707740216702526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2zVGFocmFuLCDEsHJhbg!5e0!3m2!1str!2str!4v1715790953504!5m2!1str!2str"},
        { country: "Pakistan", name: "Islamabad", latitude: 33.6844, longitude: 73.0479, locationUrl:"!1m18!1m12!1m3!1d212644.89173275375!2d72.92130002296658!3d33.61629289877074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2zxLBzbGFtYWJhZCwgSXNsYW1hYmFkLCDEsHNsYW1hYmFkIEJhxZ9rZW50IELDtmxnZXNpLCBQYWtpc3Rhbg!5e0!3m2!1str!2str!4v1715790967138!5m2!1str!2str"},
        { country: "Afghanistan", name: "Kabul", latitude: 34.5553, longitude: 69.2075, locationUrl:"!1m18!1m12!1m3!1d210303.18197349852!2d69.03292315750458!3d34.55387900770567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d1694c3c1e6d49%3A0xebdf473578214429!2sKabil%2C%20Afganistan!5e0!3m2!1str!2str!4v1715790981634!5m2!1str!2str"},
        { country: "China", name: "Hong Kong", latitude: 22.3193, longitude: 114.1694, locationUrl:"!1m18!1m12!1m3!1d236161.13633326875!2d113.97459070226601!3d22.352958430189624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403e2eda332980f%3A0xf08ab3badbeac97c!2sHong%20Kong!5e0!3m2!1str!2str!4v1715790994490!5m2!1str!2str"},
        { country: "Singapore", name: "Singapore", latitude: 1.3521, longitude: 103.8198, locationUrl:"!1m18!1m12!1m3!1d31910.368300122496!2d103.82972940278034!3d1.2970474864775412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da11238a8b9375%3A0x887869cf52abf5c4!2sSingapur!5e0!3m2!1str!2str!4v1715791039094!5m2!1str!2str"},
        { country: "Malaysia", name: "Kuala Lumpur", latitude: 3.1390, longitude: 101.6869, locationUrl:"!1m18!1m12!1m3!1d127482.66733721766!2d101.60458825366769!3d3.1386740724284437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e7d3%3A0x232e1ff540d86c99!2sKuala%20Lumpur%2C%20Kuala%20Lumpur%20Federal%20B%C3%B6lgesi%2C%20Malezya!5e0!3m2!1str!2str!4v1715791055473!5m2!1str!2str"},
        { country: "Indonesia", name: "Jakarta", latitude: -6.2088, longitude: 106.8456, locationUrl:"!1m18!1m12!1m3!1d126920.2822859067!2d106.74711681124296!3d-6.229569452648181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sCakarta%2C%20Endonezya!5e0!3m2!1str!2str!4v1715791069517!5m2!1str!2str"},
        { country: "Philippines", name: "Manila", latitude: 14.5995, longitude: 120.9842, locationUrl:"!1m18!1m12!1m3!1d61776.70145457798!2d120.93836014406138!3d14.596577749824808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca03571ec38b%3A0x69d1d5751069c11f!2sManila%2C%20Metro%20Manila%2C%20Filipinler!5e0!3m2!1str!2str!4v1715791081265!5m2!1str!2str"},
        { country: "Australia", name: "Sydney", latitude: -33.8688, longitude: 151.2093, locationUrl:"!1m18!1m12!1m3!1d424141.6978944982!2d150.93197474999997!3d-33.84824395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20Yeni%20G%C3%BCney%20Galler%2C%20Avustralya!5e0!3m2!1str!2str!4v1715790272582!5m2!1str!2str"},
        { country: "New Zealand", name: "Wellington", latitude: -41.2865, longitude: 174.7762, locationUrl:"!1m18!1m12!1m3!1d95986.41909290003!2d174.67185754177945!3d-41.25280171657056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38b1fc49e974cb%3A0xa00ef63a213b470!2sWellington%2C%20Yeni%20Zelanda!5e0!3m2!1str!2str!4v1715790321536!5m2!1str!2str"},
        { country: "Argentina", name: "Buenos Aires", latitude: -34.6037, longitude: -58.3816, locationUrl:"!1m18!1m12!1m3!1d105073.45340273721!2d-58.51569885718409!3d-34.61565476971351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Arjantin!5e0!3m2!1str!2str!4v1715790377079!5m2!1str!2str"},
        { country: "Chile", name: "Santiago", latitude: -33.4489, longitude: -70.6693, locationUrl:"!1m18!1m12!1m3!1d212999.27175611115!2d-70.7946382078586!3d-33.47239249758323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Santiago%20Metropolitan%20b%C3%B6lgesi%2C%20%C5%9Eili!5e0!3m2!1str!2str!4v1715790406100!5m2!1str!2str"},
        { country: "Peru", name: "Lima", latitude: -12.0464, longitude: -77.0428, locationUrl:"!1m18!1m12!1m3!1d249744.04473677755!2d-77.15258873328116!3d-12.026254176923683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima%2C%20Peru!5e0!3m2!1str!2str!4v1715790446409!5m2!1str!2str"}
    ];

    function addEarthquakeDataToSlider(earthquakeData) {
        var sliderList = document.querySelector('.upper-slider-list');

        earthquakeData.forEach(function(data) {
            var magnitude = data.magnitude;
            var locationName = data.location;
            var latitude = data.latitude;
            var longitude = data.longitude;
            var timestamp = data.timestamp;
            var locationUrl = data.locationUrl;
            var distance;

            var earthquakeItemElement = document.createElement('div');
            earthquakeItemElement.classList.add('col-md-2', 'm-2', 'earthquakeItem');

            earthquakeItemElement.setAttribute('location-url', `${locationUrl}`);
            earthquakeItemElement.style.backgroundColor = '#ffffff';
            earthquakeItemElement.style.display = 'flex';
            earthquakeItemElement.style.borderRadius = '1vw';
            earthquakeItemElement.style.padding = '1vw';
            earthquakeItemElement.style.textAlign = 'center';
            earthquakeItemElement.style.cursor = 'pointer';

            earthquakeItemElement.innerHTML = `
                <div class="row" style="border-radius: 2%;">
                    <div class="col-md-12 mb-3" style="background-color: ${magnitude >= 5 ? "#f39c12" : magnitude >=4 ? "#f1c40f" : "#8ab11f"}; height: 6vh; border-radius: 1vw; display: flex; text-align: center; align-items: center; justify-content: space-around;">
                        <p id="magnitude" style="margin:0; font-size: 25px;font-weight: 500;color: white;">${magnitude ? magnitude : "0.0"}</p>
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-12 location" location-data="${latitude},${longitude}">
                                <p id="locationName" style="font-size: 20px; font-weight: 500;">
                                    <span> <i class="bi bi-geo-alt" style="font-size: 20px;"></i> </span>
                                    ${locationName ? locationName : "Unknown"}
                                </p>
                                <hr>
                            </div>
                            <div class="col-md-12">
                                <p id="timestamp" style="font-size: 20px; font-weight: 400;">
                                    <span> <i class="bi bi-clock-history" style="font-size: 20px;"></i> </span>
                                    ${timestamp ? timeAgo(timestamp) : "Unknown"} 
                                </p>
                                <hr>
                            </div>
                            <div class="col-md-12">
                                <p id="distance" style="font-size: 20px;">
                                    <span> <i class="bi bi-binoculars" style="font-size: 20px;"></i> </span>
                                    ${distance ? distance + " km" : "x km"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            sliderList.appendChild(earthquakeItemElement);
        });
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            userLocation.latitude = position.coords.latitude;
            userLocation.longitude = position.coords.longitude;
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log("Latitude: " + latitude + ", Longitude: " + longitude);
    }

    function generateFakeEarthquakeData(cityData) {
        // Rastgele bir index seç
        var randomIndex = Math.floor(Math.random() * cityData.length);

        // Seçilen index'e göre bir şehir bilgisini al
        var selectedCity = cityData[randomIndex];
        
        // Seçilen şehrin adını al
        var locationName = selectedCity.name;

        // Şehrin URL'sini al
        var locationUrl = selectedCity.locationUrl;

        // Şehrin latitude ve longitude değerlerini al
        var latitude = selectedCity.latitude;
        var longitude = selectedCity.longitude;

        // Rastgele büyüklükte bir deprem büyüklüğü oluştur
        var magnitude = (Math.random() * 10).toFixed(1);

        var timestamp = new Date().toISOString();
        var timestamp = new Date(Date.now() - Math.floor(Math.random() * 900000)).toISOString();

        // Oluşturulan verileri bir nesne olarak döndür
        return {
            location: locationName,
            latitude: latitude,
            longitude: longitude,
            magnitude: magnitude,
            timestamp: timestamp,
            locationUrl: locationUrl
        };
    }

    function timeAgo(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const seconds = Math.floor((now - date) / 1000);

        let interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    }

    function calculateDistance(latitude, longitude, userLocation) {
        const R = 6371; // Radius of the earth in km
        const lat1 = userLocation.latitude;
        const lon1 = userLocation.longitude;
        const lat2 = latitude;
        const lon2 = longitude;

        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;

        return distance.toFixed(1);
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

    function updateEarthquakeDistances(userLocation) {
        var earthquakeItems = document.getElementsByClassName("earthquakeItem");

        for (let i = 0; i < earthquakeItems.length; i++) {
            var locationDiv = earthquakeItems[i].querySelector(".location");
            var distanceP = earthquakeItems[i].querySelector("#distance");

            var locationData = locationDiv.getAttribute("location-data");
            var [latitude, longitude] = locationData.split(",");

            var distance = calculateDistance(parseFloat(latitude), parseFloat(longitude), userLocation);
            distanceP.innerHTML = `<span> <i class="bi bi-binoculars"></i> </span> ` + distance + ` km`;
        }
    }

    // 20 tane deprem oluşturuyorum
    for (let i = 0; i < 20; i++) {
        earthquakeData.push(generateFakeEarthquakeData(cityData));
    }

    // depremleri tarihe göre ters sıralıyorum
    earthquakeData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    // slidera deprem verilerini ekliyorum
    addEarthquakeDataToSlider(earthquakeData);

    // her 5 ile 10 sn de bir deprem oluştur ve slidera ekle 
    setInterval(function() {
        var newEarthquakeData = generateFakeEarthquakeData(cityData);
        earthquakeData.push(newEarthquakeData);
        earthquakeData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        addEarthquakeDataToSlider([newEarthquakeData]);
        updateEarthquakeDistances(userLocation);
    }, 5000 + Math.floor(Math.random() * 5000));

    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        userLocation.latitude = position.coords.latitude;
        userLocation.longitude = position.coords.longitude;
        updateEarthquakeDistances(userLocation);
    });


    $(document).ready(function(){

        $(".earthquakeItem").click(function(){
            var locationData = $(this).find(".location").attr("location-data");
            var [latitude, longitude] = locationData.split(",");

        });


        $(".upper-slider-list").on("wheel", function(event) {
            event.preventDefault();
            var delta = event.originalEvent.deltaY;
            var scrollLeft = $(this).scrollLeft();
            $(this).scrollLeft(scrollLeft + delta);
        });

        $(".upper-slider-list").on("mousedown", function(event) {
            var startX = event.pageX;
            var scrollLeft = $(this).scrollLeft();

            $(this).on("mousemove", function(event) {
                var moveX = event.pageX - startX;
                $(this).scrollLeft(scrollLeft - moveX);
            });
        });

        $(document).on("mouseup", function() {
            $(".upper-slider-list").off("mousemove");
        });

        $(".earthquakeItem").hover(function() {
            $(this).css("background-color", "#e4e2e2");
        }, function() {
            $(this).css("background-color", "#ffffff");
        });

        // on clikc event for earthquakeItem
        $(".earthquakeItem").click(function() {
            var locationData = $(this).attr("location-url");
            // alert(locationData);
            $(".map-frame").attr("src", "https://www.google.com/maps/embed?pb=" + locationData);
        });

    });