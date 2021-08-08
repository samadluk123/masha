console.log('ok')
const { VK } = require('vk-io'); 
const vk = new VK();
const commands = [];
const {Keyboard} = require("vk-io");
const request = require('prequest');
let user = new VK();
user.setOptions({
	token: '10684db7676619708875117287267800d931893d8c45dfad5c678e8c40fb0ec6103e5569771be674b1ae0' // токен ot страницы 
});
let giving = false;
const cars = [
	{
		name: 'Ferrari Enzo V5',
		cost: 1000000,
		id: 1
	},
	{
		name: 'Bugatti Chiron',
		cost: 2200000,
		id: 2
	},
	{
		name: 'McLaren F1',
		cost: 30000000,
		id: 3
	},
	{
		name: 'Lamborghini Avendator',
		cost: 41000000,
		id: 4
	},
	{
		name: 'SSC Tuatara',
		cost: 59000000,
		id: 5
	},
	{
		name: 'Bugatti Veryon',
		cost: 80000000,
		id: 6
	},
	{
		name: 'Лада Нива',
		cost: 100000000,
		id: 7
	},
	{
		name: 'Лада Калина',
		cost: 300000000,
		id: 8
	}
];

const yachts = [
	{
		name: 'Ванна',
		cost: 10000,
		id: 1
	},
	{
		name: 'Nauticat 331',
		cost: 10000000,
		id: 2
	},
	{
		name: 'Nordhavn 56 MS',
		cost: 15000000,
		id: 3
	},
	{
		name: 'Princess 60',
		cost: 25000000,
		id: 4
	},
	{
		name: 'Azimut 70',
		cost: 35000000,
		id: 5
	},
	{
		name: 'Dominator 40M',
		cost: 50000000,
		id: 6
	},
	{
		name: 'Moonen 124',
		cost: 60000000,
		id: 7
	},
	{
		name: 'Wider 150',
		cost: 65000000,
		id: 8
	},
	{
		name: 'Palmer Johnson 42M SuperSport',
		cost: 80000000,
		id: 9
	},
	{
		name: 'Wider 165',
		cost: 85000000,
		id: 10
	},
	{
		name: 'Eclipse',
		cost: 150000000,
		id: 11
	},
	{
		name: 'Dubai',
		cost: 300000000,
		id: 12
	},
	{
		name: 'Streets of Monaco',
		cost: 750000000,
		id: 13
	}
];

const stranas = [

	{
		name: 'Не указана',
		cost: 0,
		id: 1
    },
	{
		name: '🇺🇸США',
		cost: 0,
		id: 2
    },

	{
		name: '🇷🇺Россия',
		cost: 0,
		id: 3
    },

	{
		name: '🇰🇷Япония',
		cost: 0,
		id: 4
    },

	{
		name: '🇺🇦Украина',
		cost: 0,
		id: 5
    },
	{
		name: '🇰🇿Казахстан',
		cost: 0,
		id: 6
    },
	{
		name: '🇧🇾Белоруссия',
		cost: 0,
		id: 7
    }
];

const airplanes = [
	{
		name: 'Параплан',
		cost: 100000,
		id: 1
	},
	{
		name: 'АН-2',
		cost: 350000,
		id: 2
	},
	{
		name: 'Cessna-172E',
		cost: 700000,
		id: 3
	},
	{
		name: 'Supermarine Spitfire',
		cost: 1000000,
		id: 4
	},
	{
		name: 'BRM NG-5',
		cost: 1400000,
		id: 5
	},
	{
		name: 'Cessna T210',
		cost: 2600000,
		id: 6
	},
	{
		name: 'Beechcraft 1900D',
		cost: 5500000,
		id: 7
	},
	{
		name: 'Cessna 550',
		cost: 8000000,
		id: 8
	},
	{
		name: 'Hawker 4000',
		cost: 22400000,
		id: 9
	},
	{
		name: 'Learjet 31',
		cost: 45000000,
		id: 10
	},
	{
		name: 'Airbus A318',
		cost: 85000000,
		id: 11
	},
	{
		name: 'F-35A',
		cost: 160000000,
		id: 12
	},
	{
		name: 'Boeing 747-430 Custom',
		cost: 225000000,
		id: 13
	},
	{
		name: 'C-17A Globemaster III',
		cost: 350000000,
		id: 14
	},
	{
		name: 'F-22 Raptor',
		cost: 400000000,
		id: 15
	},
	{
		name: 'Airbus 380 Custom',
		cost: 600000000,
		id: 16
	},
	{
		name: 'B-2 Spirit Stealth Bomber',
		cost: 1359000000,
		id: 17
	}
];

const helicopters = [
	{
		name: 'Шарик с пропеллером',
		cost: 2,
		id: 1
	},
	{
		name: 'RotorWay Exec 162F',
		cost: 300000,
		id: 2
	},
	{
		name: 'Robinson R44',
		cost: 450000,
		id: 3
	},
	{
		name: 'Hiller UH-12C',
		cost: 1300000,
		id: 4
	},
	{
		name: 'AW119 Koala',
		cost: 2500000,
		id: 5
	},
	{
		name: 'MBB BK 117',
		cost: 4000000,
		id: 6
	},
	{
		name: 'Eurocopter EC130',
		cost: 7500000,
		id: 7
	},
	{
		name: 'Leonardo AW109 Power',
		cost: 10000000,
		id: 8
	},
	{
		name: 'Sikorsky S-76',
		cost: 15000000,
		id: 9
	},
	{
		name: 'Bell 429WLG',
		cost: 19000000,
		id: 10
	},
	{
		name: 'NHI NH90',
		cost: 35000000,
		id: 11
	},
	{
		name: 'Kazan Mi-35M',
		cost: 60000000,
		id: 12
	},
	{
		name: 'Bell V-22 Osprey',
		cost: 135000000,
		id: 13
	}
];

const homes = [
		{
		name: 'Коттедж Медведева',
		cost: 4500000,
		id: 1
	},
	{
		name: 'Особняк Порошенко',
		cost: 7250000 ,
		id: 2
	},
	{
		name: 'Дом на Рублёвке',
		cost: 10000000,
		id: 3
	},
	{
		name: 'Личный небоскрёб Tramp',
		cost: 15000000,
		id: 4
	},
	{
		name: 'Остров с особняком',
		cost: 19500000,
		id: 5
	},
	{
		name: 'Белый дом Путина',
		cost: 23000000,
		id: 6
	}
];

const apartments = [
	{
		name: 'Чердак',
		cost: 15000,
		id: 1
	},
	{
		name: 'Квартира в общежитии',
		cost: 55000,
		id: 2
	},
	{
		name: 'Однокомнатная квартира',
		cost: 175000,
		id: 3
	},
	{
		name: 'Двухкомнатная квартира',
		cost: 260000,
		id: 4
	},
	{
		name: 'Четырехкомнатная квартира',
		cost: 500000,
		id: 5
	},
	{
		name: 'Квартира в центре Москвы',
		cost: 1600000,
		id: 6
	},
	{
		name: 'Двухуровневая квартира',
		cost: 4000000,
		id: 7
	},
	{
		name: 'Квартира с Евроремонтом',
		cost: 6000000,
		id: 8
	}
];

const phones = [
	{
		name: 'Nokia 108',
		cost: 2500,
		id: 1
	},
	{
		name: 'Nokia 3310 (2017)',
		cost: 5000,
		id: 2
	},
	{
		name: 'ASUS ZenFone 4',
		cost: 20000,
		id: 3
	},
	{
		name: 'BQ Aquaris X',
		cost: 100000,
		id: 4
	},
	{
		name: 'Sony Xperia XA',
		cost: 150000,
		id: 5
	},
	{
		name: 'Samsung Galaxy S8',
		cost: 300000,
		id: 6
	},
	{
		name: 'Xiaomi Mi Mix',
		cost: 500000,
		id: 7
	},
	{
		name: 'Torex FS1',
		cost: 750000,
		id: 8
	},
	{
		name: 'iPhone X',
		cost: 2500000,
		id: 9
	}
];

const pets = [
	{
		name: 'Улитка',
		cost: 1000,
		id: 1
	},
	{
		name: 'Лягушка',
		cost: 25000,
		id: 2
	},
	{
		name: 'Заяц',
		cost: 500000,
		id: 3
	},
	{
		name: 'Свинья',
		cost: 300000000,
		id: 4
	},
	{
		name: 'Лиса',
		cost: 1250000000,
		id: 5
	},
	{
		name: 'Собака',
		cost: 5000000000,
		id: 6
	},
	{
		name: 'Панда',
		cost: 30000000000,
		id: 7
	},
	{
		name: 'Ястреб',
		cost: 180000000000,
		id: 8
	}
];


const petsupd = [
	{
		cost: 2000,
		id: 1
	},
	{
		cost: 50000,
		id: 2
	},
	{
		cost: 1000000,
		id: 3
	},
	{
		cost: 600000000,
		id: 4
	},
	{
		cost: 2500000000,
		id: 5
	},
	{
		cost: 10000000000,
		id: 6
	},
	{
		cost: 60000000000,
		id: 7
	},
	{
		cost: 360000000000,
		id: 8
	}
];

const farms = [
	{
		name: '6U Nvidia',
		cost: 20500000,
		id: 1
	},
	{
		name: 'AntminerS9',
		cost: 100000000,
		id: 2
	},
	{
		name: 'FM2018-BT200',
		cost: 900000000,
		id: 3
	},
	{
		name: 'FM2019-BTC2000',
		cost: 1000000000,
		id: 4
	},
	{
		name: 'FM2019-BTC20000',
		cost: 10000000000,
		id: 5
	}
];

const businesses = [
	[ // Бизнес #1
		{ // Стандартный бизнес
			name: 'Шаурмечная',
			cost: 50000,
			earn: 200,
			workers: 1,
			id: 1,
			icon: '🥖'
		},

		{ // Первое улучшение
			name: '5 шаурмечных',
			cost: 350000,
			earn: 1000,
			workers: 10,
			id: 1,
			icon: '🥖'
		},

		{ // Второе улучшение
			name: 'Небольшая сеть шаурмечных',
			cost: 900000,
			earn: 2625,
			workers: 30,
			id: 1,
			icon: '🥖'
		},

		{ // 3 улучшение
			name: 'Средняя сеть шаурмечных',
			cost: 1200000,
			earn: 3750,
			workers: 50,
			id: 1,
			icon: '🥖'
		},

		{ // Последнее улучшение
			name: 'Лучшая шаурма в стране',
			cost: 4000000,
			earn: 11000,
			workers: 200,
			id: 1,
			icon: '🥖'
		}
	],

	[
		{
			name: 'Ларёк',
			cost: 100000,
			earn: 700,
			workers: 1,
			id: 2,
			icon: '🏪'
		},

		{
			name: '5 ларьков',
			cost: 500000,
			earn: 3700,
			workers: 5,
			id: 2,
			icon: '🏪'
		},

		{
			name: 'Средняя сеть ларьков',
			cost: 950000,
			earn: 7725,
			workers: 40,
			id: 2,
			icon: '🏪'
		},

		{
			name: 'Ларьки во всех городах страны',
			cost: 8000000,
			earn: 37450,
			workers: 150,
			id: 2,
			icon: '🏪'
		},

		{
			name: 'Ларьки в каждой стране',
			cost: 17500000,
			earn: 79950,
			workers: 400,
			id: 2,
			icon: '🏪'
		}
	],

	[
		{
			name: 'Забегаловка',
			cost: 300000,
			earn: 2700,
			workers: 3,
			id: 3,
			icon: '🍷'
		},

		{
			name: 'Общепит',
			cost: 450000,
			earn: 4350,
			workers: 7,
			id: 3,
			icon: '🍷'
		},

		{
			name: 'Ресторан',
			cost: 450000,
			earn: 7400,
			workers: 15,
			id: 3,
			icon: '🍷'
		},

		{
			name: 'Небольшая сеть ресторанов',
			cost: 4000000,
			earn: 19900,
			workers: 80,
			id: 3,
			icon: '🍷'
		},

		{
			name: 'Лучшие рестораны в стране',
			cost: 11000000,
			earn: 47400,
			workers: 300,
			id: 3,
			icon: '🍷'
		}
	],

	[
		{
			name: 'Мини-магазин',
			cost: 500000,
			earn: 4100,
			workers: 15,
			id: 4,
			icon: '🏫'
		},

		{
			name: 'Магазин',
			cost: 1250000,
			earn: 9350,
			workers: 10,
			id: 4,
			icon: '🏫'
		},

		{
			name: 'Сеть магазинов',
			cost: 3000000,
			earn: 23350,
			workers: 70,
			id: 4,
			icon: '🏫'
		},

		{
			name: 'Сеть супермаркетов',
			cost: 20000000,
			earn: 109850,
			workers: 500,
			id: 4,
			icon: '🏫'
		}
	],

	[
		{
			name: 'Завод в гараже',
			cost: 1500000,
			earn: 8800,
			workers: 5,
			id: 5,
			icon: '🏭'
		},

		{
			name: 'Средний завод',
			cost: 3500000,
			earn: 13800,
			workers: 20,
			id: 5,
			icon: '🏭'
		},

		{
			name: 'Сеть заводов',
			cost: 15000000,
			earn: 60800,
			workers: 200,
			id: 5,
			icon: '🏭'
		},

		{
			name: 'Главные заводы страны',
			cost: 50000000,
			earn: 274800,
			workers: 1000,
			id: 5,
			icon: '🏭'
		}
	],

	[
		{
			name: 'Угольная шахта',
			cost: 25000000,
			earn: 84700,
			workers: 50,
			id: 6,
			icon: '⛏'
		},

		{
			name: 'Золотая шахта',
			cost: 50000000,
			earn: 117200,
			workers: 75,
			id: 6,
			icon: '⛏'
		},

		{
			name: 'Алмазная шахта',
			cost: 60000000,
			earn: 229700,
			workers: 200,
			id: 6,
			icon: '⛏'
		},

		{
			name: 'Алмазный карьер',
			cost: 90000000,
			earn: 432700,
			workers: 360,
			id: 6,
			icon: '⛏'
		},

		{
			name: 'Крупнейший алмазный карьер',
			cost: 200000000,
			earn: 709700,
			workers: 700,
			id: 6,
			icon: '⛏'
		}
	],

	[
		{
			name: 'Маленький офис',
			cost: 80000000,
			earn: 229625,
			workers: 10,
			id: 7,
			icon: '🏢'
		},

		{
			name: 'Средний офис',
			cost: 240000000,
			earn: 329175,
			workers: 60,
			id: 7,
			icon: '🏢'
		},

		{
			name: 'Большой офис',
			cost: 240000000,
			earn: 614675,
			workers: 200,
			id: 7,
			icon: '🏢'
		},

		{
			name: 'Офис-небоскрёб',
			cost: 1000000000,
			earn: 1227275,
			workers: 700,
			id: 7,
			icon: '🏢'
		}
	],

	[
		{
			name: 'Любительский GameDev',
			cost: 150000000,
			earn: 302000,
			workers: 5,
			id: 8,
			icon: '🕹'
		},

		{
			name: 'Инди GameDev',
			cost: 200000000,
			earn: 379500,
			workers: 10,
			id: 8,
			icon: '🕹'
		},

		{
			name: 'AA GameDev',
			cost: 750000000,
			earn: 1024500,
			workers: 50,
			id: 8,
			icon: '🕹'
		},

		{
			name: 'AAA GameDev',
			cost: 5000000000,
			earn: 6749500,
			workers: 500,
			id: 8,
			icon: '🕹'
		}
	],

	[
		{
			name: 'Нефтевышка',
			cost: 500000000,
			earn: 707000,
			workers: 8,
			id: 9,
			icon: '🏜'
		},

		{
			name: 'Нефтеплатформа в море',
			cost: 750000000,
			earn: 1019000,
			workers: 20,
			id: 9,
			icon: '🏜'
		},

		{
			name: 'Нефтеплатформа в океане',
			cost: 1250000000,
			earn: 4049000,
			workers: 50,
			id: 9,
			icon: '🏜'
		},

		{
			name: '5 нефтеплатформ в океане',
			cost: 5000000000,
			earn: 15249000,
			workers: 250,
			id: 9,
			icon: '🏜'
		}
	],

	[
		{
			name: 'Мини АЭС',
			cost: 800000000,
			earn: 1050700,
			workers: 40,
			id: 10,
			icon: '💡'
		},

		{
			name: 'Средняя АЭС',
			cost: 1200000000,
			earn: 1496200,
			workers: 75,
			id: 10,
			icon: '💡'
		},

		{
			name: 'АЭС с 5 энергоблоками',
			cost: 4250000000,
			earn: 3088700,
			workers: 300,
			id: 10,
			icon: '💡'
		},

		{
			name: 'Крупнейшая АЭС',
			cost: 10000000000,
			earn: 34843700,
			workers: 650,
			id: 10,
			icon: '💡'
		}
	],

	[
		{
			name: 'Apple Store',
			cost: 25000000000,
			earn: 250000000,
			workers: 75,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Магазин Apple',
			cost: 3000000000000,
			earn: 1000000000,
			workers: 150,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Центральный Apple Store',
			cost: 9000000000000,
			earn: 5000000000,
			workers: 250,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Завод Apple',
			cost: 20000000000000,
			earn: 11000000000,
			workers: 500,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Заводы Apple по всему миру',
			cost: 100000000000000,
			earn: 45000000000,
			workers: 1000,
			id: 11,
			icon: '🗺'
		},

		{
			name: 'Заводы Apple по всему миру',
			cost: 200000000000000,
			earn: 75000000000,
			workers: 1500,
			id: 11,
			icon: '🗺'
		}
	]
];
const works = [
	{
		name: 'Работник в Орифлейм',
		requiredLevel: 1,
		min: 20000,
		max: 25000,
		id: 1
	},
	{
		name: 'Программист в ITM',
		requiredLevel: 2,
		min: 37500,
		max: 40000,
		id: 2
	},
	{
		name: 'Уборщик в IT школе',
		requiredLevel: 3,
		min: 40000,
		max: 45000,
		id: 3
	},
	{
		name: 'Работник в Роскомнадзоре',
		requiredLevel: 4,
		min: 50000,
		max: 55000,
		id: 4
	},
	{
		name: 'Уборщик в Роскомнадзоре',
		requiredLevel: 5,
		min: 75000,
		max: 80000,
		id: 5
	},
	{
		name: 'Программист в Kaspersky',
		requiredLevel: 6,
		min: 90000,
		max: 94890,
		id: 6
	},
	{
		name: 'Зам.Президента IT школы',
		requiredLevel: 7,
		min: 100000,
		max: 125000,
		id: 7
	},
	{
		name: 'Президент IT школы',
		requiredLevel: 8,
		min: 125000,
		max: 135000,
		id: 8
	},
	{
		name: 'Основатель RuNet',
		requiredLevel: 9,
		min: 160000,
		max: 175000,
		id: 9
	},
	{
		name: 'Основатель DarkNet',
		requiredLevel: 10,
		min: 1600000,
		max: 1750000,
		id: 10
	},
	{
		name: 'Основатель Яндекса',
		requiredLevel: 11,
		min: 160000043534,
		max: 7501000434436,
		id: 11
	},
	{
		name: 'Основатель Google',
		requiredLevel: 12,
		min: 16000004353488,
		max: 175000043443688,
		id: 12
	}
];
 
const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'Дохера!');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}


const rotateText = {
	q: 'q',
	w: 'ʍ',
	e: 'ǝ',
	r: 'ɹ',
	t: 'ʇ',
	y: 'ʎ',
	u: 'u',
	i: 'ᴉ',
	o: 'o',
	p: 'p',
	a: 'ɐ',
	s: 's',
	d: 'd',
	f: 'ɟ',
	g: 'ƃ',
	h: 'ɥ',
	j: 'ɾ',
	k: 'ʞ',
	l: 'l',
	z: 'z',
	x: 'x',
	c: 'ɔ',
	v: 'ʌ',
	b: 'b',
	n: 'n',
	m: 'ɯ',

	й: 'ņ',
	ц: 'ǹ',
	у: 'ʎ',
	к: 'ʞ',
	е: 'ǝ',
	н: 'н',
	г: 'ɹ',
	ш: 'm',
	щ: 'm',
	з: 'ε',
	х: 'х',
	ъ: 'q',
	ф: 'ф',
	ы: 'ıq',
	в: 'ʚ',
	а: 'ɐ',
	п: 'u',
	р: 'd',
	о: 'о',
	л: 'v',
	д: 'ɓ',
	ж: 'ж',
	э: 'є',
	я: 'ʁ',
	ч: 'һ',
	с: 'ɔ',
	м: 'w',
	и: 'и',
	т: 'ɯ',
	ь: 'q',
	б: 'ƍ',
	ю: 'oı'
}

let btc = 6000;

const users = require('./users.json');
const promo = require('./base/promo.json');
let buttons = [];

setTimeout(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
	await saveUsers();
	console.log('Работает');
}, 30000);

function clearTemp() 
{ 
users.map(user => { 
user.timers.hasWorked = false; 
user.timers.bonus = false; 
user.timers.translation = false; 
user.orcase = false; 
user.war = false; 
user.urabota = false; 
user.a_case = false; 
user.a_war = false; 
user.vivi = false; 
user.bonus_balance = false; 
user.bcase = false; 
user.timers.shaxta = false; 
user.bonus_exs = false; 
user.timers.eda = false; 
user.timers.krik = false; 
user.timers.mine = false; 
user.giverub = false; 
user.energy = 100;
user.hp = 100;
user.timers.blockpay = false; 
}); 
}

function rand(min, max) {
		return Math.round(Math.random() * (max - min)) + min
	}

function check(num){
    if(num == 1) return "Открытый"
    if(num == 2) return "Закрытый"
}

function filter(text){
	var filter0 = text.replace(/(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/ig, "<LINK REMOVED>")
	var filter1 = filter0.replace(/(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.|ТЕСТЕР|Павел Дуров)/ig, '[Запрещено]')
	return filter1
}

clearTemp();

async function saveUsers()
{
	require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
	return true;
}

vk.setOptions({ token: 'd9b47076379b01f4ba2c6847e95203ba5e026331deb5f339ca4d04b24c8194abe24c6c760d806db5c2b2b', pollingGroupId:205257229 });
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[club205257229\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club205257229\|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		message.send (`[👋🏻] Здравствуй! Спасибо за регистрацию чтобы начать играть напишите "Помощь"\n 📚 Правила бота: https://vk.com/topic-205257229_47938121\n 📚 Беседа - https://vk.me/join/oNOw_P4jieK7Qf7m4gdnsWdG1G6EtvTA2xg=\n ♻ Наш форум: https://mashbot.my1.ru/`);

		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

		users.push({
            id: message.senderId,
			uid: users.length,
			balance: 5000,
			dublicoin: 1,
			rating: 0,
			energy: 100,
			alvl: 0, 
			opit: 0,
			mention: true,
			timers: {
				translation: false,
				commands: false,
				delacc: false,
				bonus: false,
				obva: false,
				blockpay: false,
				krik: false,
				mine: false,
				hasWorked: false,
            },
			tag: user_info.first_name,
			work: 0,
            sword: false,
            eda: false,
            times: false,
            card: 0,
            call: 0,
            ccard: false,
         	business: [], 
			gpriglos: 0,
			mer:false,
            rubins: 0,
			pp: 0,
			seccard: 0,
			cardss: 0,
            messages: true,
            giverub: false,
            mute: false,
			message: 0,
			notifications: true,
			ban: false,
			banyoutube: false,
			case: 0,
			exp: 1,
			expup: 24,
			level: 1,
			referal: null,
			regDate: `${date.getDate() < 10 ? [0] + (date.getDate() + 1) : date.getDate()}.${date.getMonth() < 10 ? [0] + (date.getMonth() + 1) : date.getMonth()}.${date.getFullYear()}`,  
			transport: {
				car: 0,
				yacht: 0,
				airplane: 0,
				strana: 1,
				helicopter: 0
			},
			realty: {
				home: 0,
				apartment: 0
			},
			marriage: {
				partner: 0,
				requests: [],
			},
			pet: {
				lvl: 0,
				poterl: false
			},
			misc: {
				phone: 0,
				farm: 0,
			    farm_count: 0,
				pet: 0
			

			}
		});
	} 
		saveUsers();
	
bcase: false,

	message.user = users.find(x=> x.id === message.senderId);
	if(message.user.ban) return;

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}

	const command = commands.find(x=> x[0].test(message.text));
	if(!command) return;

	if(message.user.exp >= 24)
	{
		message.user.exp = 1;
		message.user.level += 1;
	}

	message.args = message.text.match(command[0]);
	await command[1](message, bot);

	console.log(`Executed: VK_ID: ${message.user.id} ID: ${message.user.uid} Nickname: ${message.user.tag} Message: ${message.text} `)
});

const cmd = {
	on: (p, f) => {
		commands.push([p, f]);
	}
}

cmd.on(/^(?:eval)\s([^]+)$/i, async (message, bot) => { 
if(message.senderId !== 518008120) return; 

try { 
const result = eval(message.args[1]); 

if(typeof(result) === 'string') 
{ 
return bot(` - я выполнил: ${result}`); 
} else if(typeof(result) === 'number') 
{ 
return bot(` - я выполнил: ${result}`); 
} else { 
return bot(`${typeof(result)}: ${JSON.stringify(result, null, '　\t')}`); 
} 
} catch (e) { 
console.error(e); 
return bot(`ошибка: 
${e.toString()}`); 
} 
});

cmd.on(/^(?:test)$/i, async (message, bot) => {
	message.user.foolder += 1;
	return message.send(`
Работаю`)
});  

cmd.on(/^(?:бонус|@club195595178|💎Бонус|💎 Бонус)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.timers.bonus == true) return bot(`Бонус можно взять через 24 часа`) 
let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]); 
let carta = rand(1,3); 

setTimeout(() => { 
message.user.timers.bonus = false; 
}, 86400000); 

message.user.timers.bonus = true; 

if(prize === 1) 
{ 
message.user.balance += 1000000; 
return bot(`вы выиграли 10.000.00₽`); 
} 

if(prize === 2) 
{  
message.user.btc += 1000; 
return bot(`вы выиграли 1000฿`); 
} 

if(prize === 3) 
{ 
message.user.rating += 5; 
return bot(`вы выиграли 5👑`); 
} 

if(prize === 4) 
{  
message.user.rating += 1; 
return bot(`вы выиграли 1👑`); 
} 

if(prize === 5) 
{ 
message.user.rating += 10; 
return bot(`вы выиграли 10👑`); 
} 

if(prize === 6) 
{ 
message.user.rating += 2; 
return bot(`вы выиграли 2👑`); 
} 
if(prize === 7) 
{ 
message.user.rating += 30; 
return bot(`вы выиграли 30👑`); 
} 
if(prize === 8) 
{  
message.user.rating += 40; 
return bot(`вы выиграли 40👑`); 
} 
if(prize === 9) 
{
message.user.balance += 100000000; 
return bot(`вы выиграли 100.000.000₽ на свой баланс счёт`); 
} 
if(prize === 10) 
{ 
message.user.balance += 500000000; 
return bot(`вы выиграли 500.000.000₽ на свой баланс счё`); 
} 

if(prize === 11) 
{ 
message.user.balance += 1000000000; 
return bot(`вы выиграли 1.000.000.000₽ на свой баланс счёт`); 
} 

if(prize === 12) 
{ 
message.user.balance += 5000000000; 
return bot(`вы выиграли 5.000.000.000₽ на свой баланс счёт`); 
} 
});

cmd.on(/^(?:Копать рубины|Рубины копать)$/i, async (message, args, bot) => {
 if(message.user.timers.shaxta) return message.send(`⚠Вы сможете копать рубины бонус через 10 минут`);
 let mine = utils.pick([1, 2, 3, 4, 5]);
  setTimeout(() => {
		message.user.timers.shaxta = false;
	}, 600000);

	message.user.timers.shaxta = true;

if(mine === 1)
	{
		message.user.rubins += 50;
		message.user.exp += 20;
        return message.send(`@id${message.user.id}(${message.user.tag}) вы накопали 50 рубинов💎`);
	}

	if(mine === 2)
	{
		message.user.rubins += 80;
		message.user.exp += 70;
         return message.send(`@id${message.user.id}(${message.user.tag}) вы накопали 80 рубинов💎`);
	}

	if(mine === 3)
	{
		message.user.rubins += 100;
		message.user.exp += 100;
         return message.send(`@id${message.user.id}(${message.user.tag}) вы накопали 100 рубинов💎`);
	}

	if(mine === 4)
	{
		message.user.rubins += 130;
		message.user.exp += 180;
         return message.send(`@id${message.user.id}(${message.user.tag}) вы накопали 130 рубинов💎`);
	}

	if(mine === 5)
	{
		message.user.rubins += 180;
		message.user.exp += 200;
        return message.send(`@id${message.user.id}(${message.user.tag}) вы накопали 180 рубинов💎`);
	}
});

cmd.on(/^(?:рейтинг)\s(.*)$/i, async (message, bot) => {
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(( message.args[1] * 250000000 ) > message.user.balance) return bot(`у вас недостаточно денег \n vk.com/mashagamebot?w=product-205257229_5111584/query`);
	else if(( message.args[1] * 250000000 ) <= message.user.balance)
	{
		message.user.balance -= ( message.args[1] * 250000000 );
		message.user.rating += message.args[1];

		return bot(`вы повысили свой рейтинг на ${utils.sp(message.args[1])}👑 за ${utils.sp(message.args[1] * 250000000)}$`);
	}
});

//test
cmd.on(/^(?:онлайн)$/i, async (message, bot) => {
	message.user.floder += 1;
		if(!message.isChat) return bot(`команда работает только в беседе!`);
    vk.api.messages.getConversationMembers({
        peer_id: message.peerId,
        fields: "online"
    }).then(async function (response) {
        let text = `[📗] || Список людей,которые в онлайн:\n\n`;
        await response.profiles.map(e => {
            if(e.id < 1) return;
            if(e.online != 0) text += `${['??', '😎', '😏', '🙂', '??', '😌', '🤤', '😇', '😳', '😂', '😝', '🙄', '😝', '😘', '😗', '😙', '😛', '??'].random()} || *id${e.id} (${e.first_name.slice(0,1)}. ${e.last_name})\n`;
			})
        return message.reply(text)
    })
});

cmd.on(/^(?:офлайн)$/i, async (message, bot) => {
	message.user.floder += 1;
		if(!message.isChat) return bot(`команда работает только в беседе!`);
    vk.api.messages.getConversationMembers({
        peer_id: message.peerId,
        fields: "ofline"
    }).then(async function (response) {
        let text = `[📗] || Список людей,которые не в сети:\n\n`;
        await response.profiles.map(e => {
            if(e.id < 1) return;
            if(e.oflain != 0) text += `${['😍', '😎', '😏', '🙂', '🙃', '😌', '🤤', '😇', '😳', '😂', '😝', '🙄', '😝', '😘', '😗', '😙', '😛', '🤑'].random()} || *id${e.id} (${e.first_name.slice(0,1)}. ${e.last_name})\n`;
			})
        return message.reply(text)
    })
});

cmd.on(/^(?:!kick)\s(.*)$/i, async (message, bot) => {
	if(message.user.alvl < 5)return;
	let chatid = message.chatId;
		let argses = message.text.split("!kick ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: user.object_id});
			return message.send(`Учасник вышел из беседы`);
		});
//test

cmd.on(/^(?:выдать)\s?([0-9]+)?\s?([0-9]+)?/i, async (message, args, bot) => {
	let user = users.find(x=> x.uid === Number(message.args[1]));
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    if(message.user.alvl < 2) return message.send(`🔸 » Вы не Премиум`);
	if(!message.args[1] || !users[message.args[1]] || !message.args[2] || message.args[2] < 0) return message.send(`💰 » Пример: 'выдать [ID] [COUNT]'`); 
	users[message.args[1]].balance += Number(message.args[2]);
 	 
	return message.send(`💰 » Вы выдали игроку [@id${users[message.args[1]].id}(${users[message.args[1]].tag})] ${utils.sp(message.args[2])}₽`);
});

cmd.on(/^(?:removerating)\s?([0-9]+)?\s?([0-9]+)?/i, async (message, args, bot) => {
	let user = users.find(x=> x.uid === Number(message.args[1]));
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    if(message.user.alvl < 5) return message.send(`🔸 » Вы не Администратор`);
	if(!message.args[1] || !users[message.args[1]] || !message.args[2] || message.args[2] < 0) return message.send(`💰 » Пример: 'removerating [ID] [COUNT]'`); 
	users[message.args[1]].rating -= Number(message.args[2]);
 	 
	return message.send(`💰 » Вы забрали у игрока [@id${users[message.args[1]].id}(${users[message.args[1]].tag})] ${utils.sp(message.args[2])} рейтинга💰`);
});

cmd.on(/^(?:забанить)(\s?https\:\/\/vk\.com\/)?(id)?([0-9]+)?([^]+)?/i, (message) => { 
   let user = users.find(x=> x.uid === Number(message.args[1]));
    if(!message.isChat) return message.send(`? ? Команда работает только в беседах!`);
     if(message.user.adm < 5) return message.send(`? ? Вам не доступно!`);

    if(message.args[4]) { 
        var domain = message.args[4].split(" "); 
        vk.api.call("utils.resolveScreenName", { 
        screen_name: message.args[4] 
    }).then((res) => { 
            if(res.object_id == 246602948) return bot('? ? Отказ'); 

            if(!users[message.args[1]]){
                if(message.user.adm > 7) return message.send(`? ? Нельзя кикнуть этого игрока!`);
            } 

            vk.api.call("messages.removeChatUser", {chat_id: message.chatId, user_id: res.object_id })
            .catch((error) => {return bot(`? ? Ошибка. Возможные причины:\n? ? В данной беседе группа не Администратор\n? ? Такого игрока нет в беседе.`);
            });  
            return  
        })  
    }else{
        if(!message.args[3]) return message.reply("? ? ID не указан, либо указан неверно."); 
        if(message.args[3] == 246602948) return bot('? ? Отказ'); 

        if(!users[message.args[1]]){
            if(message.user.adm > 7) return message.send(`? ?Нельзя кикнуть этого игрока!`);
        }

        vk.api.call("messages.removeChatUser", { chat_id: message.chatId, user_id: message.args[3] }).
        catch((error) => {return bot(`? ? Ошибка. Возможные причины:\n? ? В данной беседе группа не Администратор\n? ? Такого игрока нет в беседе.`);}); 

        return                  
    } 
});

cmd.on(/^(?:!пострассылка)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
 			if(message.user.alvl < 5) return;
 			 users.filter(x=> x.id !== 1).map(zz => { 
  vk.api.messages.send({ user_id: zz.id, message: `[👮] ⇢ Быстро посмотрел запись:`, attachment: `${message.args[1]}`}); 
 }); 
 			let people = 0;
        for(let id in users) {
            vk.api.call('messages.send', {
             chat_id: id,
              message: `[👮] ⇢ Уведомления:`,
              attachment: `${message.args[1]}` });
        }
        return message.send(`[🚀] || Я успешно сделал рассылку!`);
 
})

cmd.on(/^(?:!рассылка)\s([^]+)$/i, async (message, bot) => {
message.user.foolder += 1;
 			if(message.user.alvl < 5) return bot(`доступно с привилегии - Admin.`);
 			 users.filter(x=> x.id !== 1).map(zz => { 
  vk.api.messages.send({ user_id: zz.id, message: `${message.args[1]}`}); 
 }); 
 			let people = 0;
        for(let id in users) {
            vk.api.call('messages.send', {
             chat_id: id,
              message: `${message.args[1]}` });
        }
        return message.send(`[🚀] || Я успешно сделал рассылку! Посмотрите, как будет видно другим:\n\n,Сегодня в ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}\n"${message.args[1]}"`);
 
})

cmd.on(/^(?:вприву)\s?([0-9]+)?\s?([0-9]+)?/i, async (message, args, bot) => {
		let user = users.find(x=> x.uid === Number(message.args[1]));
        if(message.user.alvl < 5) return message.send(`Вы не Администратор`)
       if(!message.args[1] || !message.args[2]) return message.send(`🔸 >> Пример команды: вприву [ID] [LVL(1-3)]`); 
		if(message.args[2] > 3) return message.send(` 🔸 >> Максимальный админ-уровень 3!`)
		if(!users[message.args[1]]) return message.send(`❎ » Такого игрока нет!`); 
		users[message.args[1]].alvl = Number(message.args[2]); 
		vk.api.call('messages.send', {
			peer_id: users[message.args[1]].id,
				message: `✅ » ${user.tag} Вам выдали должность: ${message.args[2].toString().replace(/0/gi, "Игрока").replace(/1/gi, "VIP'а").replace(/2/gi, "Премиума").replace(/3/gi, "Администратора").replace(/4/gi, "Кодера").replace(/5/gi, "Владельца")}`
		}); 
		return message.send(` 🔸 >> Вы выдали игроку [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]\n🔸 >> Админ-уровень: ${message.args[2]} [${message.args[2].toString().replace(/0/gi, "Игрок").replace(/1/gi, "VIP").replace(/2/gi, "Премиум").replace(/3/gi, "Администратора").replace(/4/gi, "Кодера").replace(/5/gi, "Владельца")}]`);
	});

cmd.on(/^(?:забратьруб)\s?([0-9]+)?/i, async (message, args, bot) => {
    let user = users.find(x=> x.uid === Number(message.args[1]));
	if(message.user.alvl < 5) return message.send(`🔸 » У вас нету доступа`);
	if(!message.args[1] || !users[message.args[1]]) return message.send(`💰 » Пример: 'removerub [ID]'`); 
	users[message.args[1]].balance = 0; 
	return message.send(`💰 » Вы забрали все рубли у игрока [@id${users[message.args[1]].id}(${users[message.args[1]].tag})]`);
});

cmd.on(/^(?:ббан)\s?([0-9]+)?/i, async (message, args, bot) => { 
	let user = users.find(x=> x.uid === Number(message.args[1]));
    
	if(message.user < 3) return message.send(`🔸 >> Вы не Создатель`);
	if(message.args[1]){
		 var id = message.args[1];
		if(!users[id]) return message.send(`Не верно указаны данные | Игрока нет`);
		message.send(`Пользователь vk.com/id${users[message.args[1]].id} успешно исключен из беседы.`);   
		return vk.api.call("messages.removeChatUser", { chat_id: id, user_id: users[message.args[1]].id });
     }
});

cmd.on(/^(?:Донат)$/i, async (message, bot) => {
	message.user.floder += 1;
	return message.send(`💲 [id${message.user.id}|${message.user.tag}], ✅Ваш баланс: ${utils.sp(message.user.dublicoin)} Дублей✅

♻ Список обмен товара:

💎 - Игровая валюта ~ 49 Дублей
💎 - 1 трлн рейтинга ~ 10 Дублей
💎 - Пак промокодов ~ 5 Дублей
💎 - Премиум ~ 690 Дублей
💎 - VIP ~ 139 Дублей

♻ Скидки на товар:

💎 - Игровая валюта ~ Скидка -290 Дублей
💎 - Премиум ~ Скидка -190 Дублей

⁉ Курс 1 Дублей = 1 рубль
💥 Чтобы приобрести дубли напишите @id494048514 (Владельцу)✅
💥 Чтобы обменять дубли на Привилегию напишите @id494048514 (Владельцу)
💥 Чтобы увеличить Дубли койн вам нужно играть в "Азино"
💥 Чтобы проверить баланс дублей напишите "Дубли"`);
});

cmd.on(/^(?:Вывести|Пополнить)$/i, async (message, bot) => {
	message.user.floder += 1;
	return bot(`📤 Нажмите на кнопку @samadluk (Вывести) напишите с текстом "Вывести дубли"\n 📥 Нажмите на кнопку @samadluk (Пополнить) напишите с текстом "Пополнить дубли"`);
});

cmd.on(/^(?:Курс)$/i, async (message, bot) => {
	message.user.floder += 1;
	return bot(`💥 Курс: 1 Дублей ~ 1 рубль`);
});

cmd.on(/^(?:Дубли)$/i, async (message, bot) => {
	message.user.floder += 1;
	return message.send(`[id${message.user.id}|${message.user.tag}], ✅Ваш баланс: ${utils.sp(message.user.dublicoin)} Дублей`,
		{
			keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Вывести"
		},
			"color": "negative"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Пополнить"
		},
			"color": "primary"
			}]
		]
			})
		});
		}
);	

cmd.on(/^(?:репорт|report|rep|жалоба|вопрос)\s?([^]+)?/i, async (message, args, bot) => { 
 		if(message.chat) return message.send(`Обращаться в репорт можно только в ЛС ${config.group_url}`);
		if(!message.args[1]) return message.send(`🔸 » вы не написали жалобу | репорт [текст]`);

		for(i=0;i<25000;i++){
			if(users[i]){
			if(users[i].alvl >= 3){ 
				vk.api.call("messages.send", {
					peer_id: users[i].id,
					message: `👉 » [REPORT]\n👉 » ID игрока: ${message.user.uid}\n👉 » Жалоба: ${message.args[1]}\n👉 » [Для ответа: ответ [ID] [TEXT]`
				}).then((res) => {}).catch((error) => {console.log('report error'); });	
			}
		}
		}
		return message.send(`🔸 » Вы успешно отправили жалобу.`);
	});

cmd.on(/^(?:смник)\s?([0-9]+)?\s([^]+)?/i, async (message, args, bot) => { 
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(message.user.alvl < 1) return message.send(`🔸 » Вы не VIP`); 
		if(!message.args[1] || !message.args[2]) return message.send(`🔸 » Пример команды: смник [ID] [ИМЯ]`);
		users[message.args[1]].tag = message.args[2];
		return message.send(`📗 » Вы сменили ник игрока на: ${message.args[2]}`);
	});

cmd.on(/^(?:setpet)\s?([0-9]+)?\s([^]+)?/i, async (message, args, bot) => { 
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(message.user.alvl < 1) return message.send(`🔸 » Вы не VIP`); 
		if(!message.args[1] || !message.args[2]) return message.send(`🔸 » Пример команды: setpet [ID] [ИМЯ]`);
		users[message.args[1]].misc.pet  = message.args[2];
		return message.send(`📗 » Вы сменили питомца на: ${message.args[2]}`);
	});

cmd.on(/^(?:ban)\s?([0-9]+)?\s([^]+)?/i, async (message, args, bot) => { 
       message.user.foolder += 1;
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!message.args[1] || !message.args[2]) return message.send(`🔸 » Пример команды: ban [ID] [ПРИЧИНА]`);
		if(!Number(message.args[1])) return message.send(`?? » Число должно быть цифрового вида.`);
		if(message.user.alvl < 2) return message.send(`🔸 » Вы не Aдминистратор`);
		if(!users[message.args[1]]) return message.send(`❎ » Такого игрока нет!`);

		users[message.args[1]].ban = true;  
 

		let text = `✅ » ${message.user.tag} Вам выдал блокировку аккаунта по причине: [${message.args[2]}]`
		vk.api.call('messages.send', {
			peer_id: users[message.args[1]].id,
			message: text
		});
		return message.send(`✅ » Вы выдали блокировку аккаунта игроку [${users[message.args[1]].tag}].`);
	}); 

	cmd.on(/^(?:unban)\s?([0-9]+)?/i, async (message, args, bot) => { 
	message.user.foolder += 1;
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!message.args[1]) return message.send(`🔸 » Пример команды: unban [ID]`);
		if(!Number(message.args[1])) return message.send(`🔸 » Число должно быть цифрового вида.`);
		if(message.user.alvl < 2) return message.send(`🔸 » Вы не Администратор`);
		if(!users[message.args[1]]) return message.send(`❎ » Такого игрока нет!`);

		users[message.args[1]].ban = false;

		vk.api.call('messages.send', {
			peer_id: users[message.args[1]].id,
			message: `✅ » Администратор снял вам блокировку аккаунта`
		}); 
		return message.send(`✅ » Вы сняли блокировку аккаунта игроку [${users[message.args[1]].tag}].`);
	});

	cmd.on(/^(?:промокод)\s?([^]+)?/i, async (message, args, bot) => {
 	if(!message.args[1]) return message.send(`📝 » Укажите промокод`);
 	if(!promo[message.args[1]]) return message.send(`📝 » Такого промокода нету/либо закончились активации`);
 	if(promo[message.args[1]].users[message.user]) return message.send(`📝 » Вы уже активировали промокод`);
 	promo[message.args[1]].users[message.user] = {i: true};
 	promo[message.args[1]].activ -= 1;
 	if(promo[message.args[1]].type == 1){
 		message.user.balance += promo[message.args[1]].balance; 
 		message.send(`✅ » Вы активировали промокод!\n✅ » Вы получили: ${promo[message.args[1]].balance}$!\n 📛 » Осталось активаций: ${promo[message.args[1]].activ}`);
 	}
 	if(promo.type == 2){
 		message.user.rubins += promo[message.args[1]].balance; 
 		message.send(`✅ » Вы активировали промокод!\n✅ » Вы получили: ${promo[message.args[1]].balance} рубинов!\n 📛 » Осталось активаций: ${promo[message.args[1]].activ}`);
 	}

 	if(promo[message.rgs[1]].activ == 0) delete promo[message.args[1]];
 	return 
 });

	cmd.on(/^(?:админ|панель|ап|э)$/i, async (message, bot) => {
	message.user.foolder += 1;

	    if (message.user.alvl < 1) return message.send(`💀 » Вам не Доступно « 💀`);
	    if (message.user.alvl == 1) {
	        return message.send(`
					☑ » VIP-Панель « ☑ 
✅ » Кейс - открыть кейс
✅ » смник [ID] [NAME] - изменить ник.
✅ » setpet [ID] [ИМЯ] - сменить питомца игроку
`);
	    }
	    if (message.user.alvl == 2) {
	        return message.send(`
					☑ » Премиум-Панель « ☑
 ✅ » Смник [ID] [ИМЯ] - Выдать ник.
 ✅ » Спромо [Сумма] [Активации] - созадть промокод
 ✅ » Выдать [ID] [СУММА] - выдать деньги
 ✅ » ban [ID] - заблокировать навсегда.
✅ » unban [ID] - разблокировать игрока.
`);
	    }
	});

	cmd.on(/^(?:спромо)\s?([0-9]+)?\s([0-9]+)?/i, async (message, args, bot) => {
      	message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
      if(message.user.alvl < 2) return message.send(`🔸 ➡ Доступ Запрещен`);
      if(!message.args[1]) return message.send(`🔸 » Пример команды: Спромо [Сумма] [Активации]`);
        var result  = '';
				let words  = '1234567890offbot';
				let max_position = words.length - 1;
				for( i = 0; i < 6; ++i ) {
					position = Math.floor ( Math.random() * max_position );
					result = result + words.substring(position, position + 1);
				}
				promo[result] = {
					activ: Number(message.args[2]),
					balance: Number(message.args[1]),
					users: {},
					type: 1
				}
				var text = `Промокод\nДля получения ${Number(message.args[1])}$ пишите:\nпромокод ${result}`
				var text = `Промокод на 🔸 » ${Number(message.args[1])} рублей \n🔸 » ${Number(message.args[2])} успешно создан \n🔸 » Чтобы использовать введите: Промокод ${result}`
                message.send(text)
	});
	
	cmd.on(/^(?:ответ)\s?([0-9]+)?\s([^]+)?/i, async (message, args, bot) => { 
		let user = users.find(x=> x.uid === Number(message.args[1]));
        if(message.user.alvl < 2) return message.send(`🔸 » Вы не Премиум`);
		if(message.user.alvl < 5) return
		if(!Number(message.args[1]) || !message.args[1] || !message.args[2] || !users[message.args[1]]) return message.send(`🔸 » Проверьте вводимые данные.`);
		vk.api.call("messages.send", {
			peer_id: users[message.args[1]].id,
			message: `👉 » Администратор: ${message.user.tag} ответил Вам:\n👉 ${message.args[2]}\n\n`
		}).then((res) => {}).catch((error) => {console.log('ans error'); });	 
		return message.send(`👉 » Ответ отправлен.`)
	});

 cmd.on(/^(?:стандарт кнопка|стандартная кнопка|стандарт|кнопка|кнопки|кнопка gay|кнопка хуй|выключить кнопки)$/i, (message) => { 
{
	if(user.full == false) return;
	return message.send(`[id${message.user.id}|${message.user.tag}], вы включили кнопки!
	`, 
	{ 
	keyboard:JSON.stringify( 
	{ "one_time": false, "buttons": [ 
	[
	{ "action": { "type": "text", "payload": "{\"button\": \"1\"}", "label": "📒 Профиль" }, "color": "negative" }, 
	{ "action": { "type": "text", "payload": "{}", "label": "🔋 Ферма" }, "color": "negative" }, 
	{ "action": { "type": "text", "payload": "{}", "label": "💎 Бонус" }, "color": "positive" }
	], 
	[
	{ "action": { "type": "text", "payload": "{}", "label": "ТикТок" }, "color": "primary" }, 
	{ "action": { "type": "text", "payload": "{}", "label": "🏆 Топ" }, "color": "primary" }, 
	{ "action": { "type": "text", "payload": "{}", "label": "🎲 Помощь" }, "color": "negative" 
	}
	] 
	] 
	})
	});
	} 
	});
	//тесты команд и т.д

	
	//тесты команд

cmd.on(/^(?:помощь|команды|меню|help|commands|cmds|начать|start|хелп|Помощь|🎲 Помощь)$/i, async (message, bot) => {
	message.user.foolder += 1;
	await bot(`📚 Мои команды:

    🎉 Разное:
  &#4448; 🔮 Шар [фраза] 
  &#4448; 🖼 Пикча - рандом пикча
  &#4448; 🕐 Тест - тест бота
  &#4448; 💞 Брак [id] - сделать предложение
  &#4448; 💞 Браки - список предложений

  👔 Деятельность:
  &#4448; 👔 Работы - список работ
  &#4448; 🔨 Работать
  &#4448; ❌ Уволиться
  &#4448; 📈 Бизнес [1-2] - статистика 
  &#4448; 👷 Бизнес нанять [1-2] [кол-во]
  &#4448; 💵 Бизнес снять [1-2] [кол-во] - снять деньги со счёта
  &#4448; ✅ Бизнес улучшить [номер]

    🌽 Питомцы:
  &#4448; 🐒 Инфопет - информация
  &#4448; 🐪 Питомец поход
  &#4448; 🌟 Питомец улучшить

    🎮 Список игр:
  &#4448; [VIP] 🎰 Казино [сумма]
  &#4448; [VIP] 💰 монетка [ставка] [орел/решка]
  &#4448; [VIP] 👮 Взломать
  &#4448; [VIP] 🎲 Кубик [1-6]
  &#4448; [VIP] 🔫 Рулетка - русская рулетка
  &#4448; [VIP] 📈 Трейд [вверх/вниз] [сумма]
  &#4448; [VIP] 🥛 Стаканчик [1-3] [сумма]
  &#4448; 📱 Тикток - заработай на видео
  &#4448; 📷 Ютуб - создай свой канал

    💲 Заработок в боте:
  &#4448; 👑 Топ дубли - топ по дублям
  &#4448; 🎰 Азино [ставка] - поднять дубли
  &#4448; 📒 Дубли - баланс ваших дублей
  &#4448; 💥 Курс - курс дублей

    💡 Разное: 
  &#4448; 📒 Профиль
  &#4448; 💲 Баланс
  &#4448; 👑 Рейтинг - ваш рейтинг
  &#4448; 🖊 Ник [ник/вкл/выкл]
  &#4448; 🛒 Магазин
  &#4448; ➖ Продать [предмет]
  &#4448; 🔋 Ферма - ферма
  &#4448; 🤝 Передать [id] [сумма]
  &#4448; 💎 Бонус - ежедневный бонус
  &#4448; 🏆 Топ
  &#4448; 🛍 Донат
  &#4448; 👫 Реферал - деньги за друзей
  &#4448; ⌚ Дата [id] - дата регистрации игрока

📝 Промокод [код] - активация промокода
📱 Кнопки - включить кнопки
🆘 Репорт [фраза] - ошибки или пожелания`);
});

cmd.on(/^(?:рандом пикча|пикча)$/i, async (message) => { 
return message.send(`Держи годную пикчу , бро`, { attachment: utils.pick(["photo-91345271_456256259", "photo-81250721_456240108", "photo-81250721_456240106", "photo-81250721_456240105", "photo-81250721_456240104", "photo-81250721_456240103"]) }); 
});
cmd.on(/^(?:тест|ко)$/i, async (message, bot) => {
	message.user.foolder += 1;
	return bot(`♻ Uptime ${uptime.days}:${uptime.hours}:${uptime.min}:${uptime.sec}`);
});

cmd.on(/^(?:трейд)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.alvl < 1) return message.send(`🔸 ➡ Играть можно только VIP игрокам`);
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const rand = utils.pick([0, 1]);
		const nav = Number(message.args[1].toLowerCase().replace(/вверх/, '1').replace(/вниз/, '2'));

		if(rand === nav)
		{
			const multiply = utils.pick([0.75, 0.80, 0.90, 0.95, 1.25, 1.5, 1.75, 2, 2.5, 3.2, 4.2, 5.6]);
			message.user.balance += Math.floor(message.args[2] * multiply);

			return bot(`курс ${nav === 1 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}₽
			✅ Вы заработали +${message.args[2] * multiply}$
			💰 Баланс: ${message.user.balance}$`);
		} else {
			return bot(`курс ${nav === 2 ? `подорожал⤴` : `подешевел⤵`} на ${utils.random(100)}₽
			❌ Вы потеряли ${message.args[2]}$ 
			💰 Баланс: ${message.user.balance}`);
		}
	}
});

cmd.on(/^(?:стаканчик)\s([1-3])\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.alvl < 1) return message.send(`🔸 ➡ Играть можно только VIP игрокам`);
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`у вас нет данной суммы`);
	else if(message.args[2] <= message.user.balance)
	{
		message.user.balance -= message.args[2];

		const multiply = utils.pick([0.95, 0.90, 0.85, 0.80, 0.75, 0.70, 0.65]);
		const cup = utils.random(1, 3);

		if(cup == message.args[1])
		{
			message.user.balance += Math.floor(message.args[2] * multiply);
			return bot(`вы угадали! Приз ${message.args[2] * multiply}`);
		} else {
			return bot(`вы не угадали, это был ${cup} стаканчик`);
		}
	}
});

cmd.on(/^(?:бизнес)\s(\d)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес [1 или 2]`);
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
	const biz = businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade - 1];

	return bot(`статистика "${biz.name}":
	💸 Прибыль: ${utils.sp(Math.floor(biz.earn / biz.workers * message.user.business[message.args[1]].workers))}₽/час
	💼 Рабочих: ${message.user.business[message.args[1]].workers}/${biz.workers}
	💰 На счёте: ${utils.sp(message.user.business[message.args[1]].moneys)}₽

	${ (businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade] != null ? "✅ Доступно улучшение! (" + utils.sp(businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade].cost) + "₽)" : "") }`);
});

cmd.on(/^(?:бизнес)\s(?:снять)\s(.*)\s(.*)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес снять [1 или 2] [количество]`);
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.business[message.args[1]].moneys);
	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.args[2] <= 0) return bot(`вы не можете снять столько со счёта бизнеса`);
	if(message.args[2] > message.user.business[message.args[1]].moneys) return bot(`у вас нет денег на счёте этого бизнеса`);

	message.user.balance += message.args[2];
	message.user.business[message.args[1]].moneys -= message.args[2];

	return bot(`вы сняли со счёта своего бизнеса ${utils.sp(message.args[2])}₽`);
});

cmd.on(/^(?:бизнес)\s(?:улучшить)\s(.*)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес улучшить [1 или 2]`);
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
	if(businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade] == null) return bot(`нет доступных улучшений для вашего бизнеса`);
	const cost = businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade].cost;
	if(cost > message.user.balance) return bot(`у вас недостаточно денег для улучшения`);
	message.user.balance -= cost;
	message.user.business[message.args[1]].upgrade++;

	return bot(`вы улучшили бизнес #${message.args[1] + 1} за ${utils.sp(cost)}₽`);
});

cmd.on(/^(?:бизнес)\s(?:нанять)\s(.*)\s(.*)$/i, async (message, bot) => {
	message.args[1] = Math.floor(Number(message.args[1]));
	message.args[2] = Math.floor(Number(message.args[2]));
	if(message.args[1] < 1 || message.args[1] > 2) return bot(`используйте: Бизнес нанять [1 или 2] [кол-во работников]`);
	if(message.user.business.length < message.args[1]) return bot(`у вас нет этого бизнеса`);
	message.args[1]--;
	if(message.user.business[message.args[1]].workers + message.args[2] > businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade - 1].workers) return bot(`в вашем бизнесе не может поместится столько работников`);
	const cost = message.args[2] * 0;
	if(cost > message.user.balance) return bot(`у вас недостаточно денег для покупки рабочих`);
	message.user.balance -= cost;
	message.user.business[message.args[1]].workers += message.args[2];

	return bot(`вы наняли ${message.args[2]} рабочих для бизнеса #${message.args[1] + 1}`);
});

cmd.on(/^(?:ферма)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.user.misc.farm) return bot(`у вас нет фермы`);
	if(!message.user.farm_btc) return bot(`на вашей ферме пусто, новые тапкоины появятся скоро`);

	const btc_ = message.user.farm_btc;

	message.user.btc += message.user.farm_btc;
	message.user.farm_btc = 0;

	return bot(`вы собрали ${utils.sp(btc_)}₿, следующие тапкоины появятся через 15мин
	🌐 Тапкоинов: ${utils.sp(message.user.btc)}฿`);
});

cmd.on(/^(?:Рулетка)$/i, async (message, bot) => {

    if(message.user.alvl < 1) return message.send(`🔸 ➡ Играть можно только VIP игрокам`);
    if(message.user.balance == 0) return message.reply("🔔 Играть в игры можно с балансом выше 0! 🔔");
    if(message.user.pp == 1) return message.reply(`${message.user.tag}, ты уже в игре!`);
	message.reply(`[💀] | ${message.user.tag}, Вы начали игру "Русская Рулетка"\n\n [🤤] | Задача этой игры: Вам дано 3 выстрела... Если в Вас не попала пуля, то мы дадим на ваш баланс 100.000$, а если в вас попала пуля, то весь ваш баланс обнуляется.\n\n[⚠] » Чтобы сделать выстрел, то отправьте боту - 🔫`);
	return message.user.pp = 1;
});

cmd.on(/^(?:🔫|выстрел)$/i, async (message, bot) => {
    if(message.user.alvl < 1) return message.send(`🔸 ➡ Играть можно VIP игрокам`);
	let balance = message.user.balance;
	let pp = message.user.pp;
	let p = 3 - pp;
		let ran =  ["вы выжили","вы погибли"];
		let rand = ran.random();

	if(message.user.pp == 0) return;
	if(message.user.pp > 0){
		if(rand != "вы выжили"){
			message.user.pp += 1;
			if(message.user.pp == 4){
			message.user.pp = 0;
			message.user.balance += 100000;
			return message.reply(`[😅] >> ${message.user.tag}, поздравляем! Вы выжили в этой страшной игре!\n[☺] » Мы подарили вам - 100.000₽`);
			}
			message.reply(`1...`);
			message.reply(`2...`);
			message.reply(`3...`);
			message.reply(`*БАХ!!*`);
			return message.reply(`[😎] >> Пуля непопала вам в голову - вы выжили\n[🍀] » Вам повезло. Стреляйте дальше!\n[😧] » Осталось выстрелов: ` + p);

		}
		if(rand != "вы погибли"){
			message.reply(`1...`);
			message.reply(`2...`);
			message.reply(`3...`);
			message.reply(`*БАХ!!*`);
			message.reply(`[🤕] >> Пуля попала вам в голову - вы погибли\n[😞] » Удача повернулась к вам спиной.\n[😶] » Вы проиграли. Баланс анулирован. `);
			message.user.balance = 5000;
			return message.user.pp = 0;
				}
			}


});

cmd.on(/^(?:рейтинг)$/i, async (message, bot) => {
	message.user.foolder += 1;
	return bot(`ваш рейтинг: ${utils.sp(message.user.rating)}👑`);
});

cmd.on(/^(?:ник)\s(вкл|выкл)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.alvl < 1) return message.send(`🔸 ➡ Доступ VIP игрокам`);
	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return bot(`гиперссылка включена!`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return bot(`гиперссылка отключена!`);
	}
});

cmd.on(/^(?:ник)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.alvl < 1) return message.send(`🔸 ➡ Доступ VIP игрокам`);
	if(message.args[1].length >= 16) return bot(`максимальная длина ника 15 символов`);

	message.user.tag = message.args[1];
	return bot(`Теперь ваш ник: "${message.user.tag}"`);
			});

cmd.on(/^(?:магазин)$/i, async (message, bot) => {
	message.user.foolder += 1;
	return bot(`разделы магазина:
🚙 Транспорт:
⠀⠀🚗 Машины
⠀⠀🛥 Яхты
⠀⠀🛩 Самолеты
⠀⠀🚁 Вертолеты

🏘 Недвижимость:
⠀⠀🏠 Дома
⠀⠀🌇 Квартиры

📌 Остальное:

⠀⠀📱 Телефоны
⠀⠀🔋 Фермы
⠀⠀👑 Рейтинг [кол-во] - $250 млн
  🐪 Питомцы - список питомцев
⠀⠀💼 Бизнесы

🔎 Для покупки используйте "[категория] [номер]".
⠀ ⠀ Например: "${utils.pick(['Телефон 7', 'Машина 1', 'Ферма 2', 'Тапкоин 100', 'Рейтинг 10'])}"`);
});

function getRandomElement(array) {
return array[getRandomInt(array.lenght - 1)];  
}


cmd.on(/^(?:продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.alvl < 1) return message.send(`🔸 ➡ Доступ VIP игрокам`);
	let options = {
		count: null
	}

	message.args[2] = message.args[1].split(' ')[1];

	if(!message.args[2]) options.count = 1;
	if(message.args[2])
	{
		message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
		message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
		message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');

		message.args[2] = Math.floor(Number(message.args[2]));
		if(message.args[2] <= 0) return;

		if(!message.args[2]) options.count = 1;
		else if(message.args[2]) options.count = message.args[2];
	}

	if(/машин/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.car) return bot(`у вас нет машины`);
		let a = Math.floor(cars[message.user.transport.car - 1].cost * 0.85);

		message.user.balance += Math.floor(cars[message.user.transport.car - 1].cost * 0.85);
		message.user.transport.car = 0;

		return bot(`вы продали свою машину за ${utils.sp(a)}₽`);
	}

	if(/яхт/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.yacht) return bot(`у вас нет яхты`);
		let a = Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);

		message.user.balance += Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.85);
		message.user.transport.yacht = 0;

		return bot(`вы продали свою яхту за ${utils.sp(a)}₽`);
	}

	if(/самол(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.airplane) return bot(`у вас нет самолёта`);
		let a = Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);

		message.user.balance += Math.floor(airplanes[message.user.transport.airplane - 1].cost * 0.85);
		message.user.transport.airplane = 0;

		return bot(`вы продали свой самолёт за ${utils.sp(a)}₽`);
	}

	if(/в(и|е|я)рт(а|о)л(е|ё|йо)т/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.transport.helicopter) return bot(`у вас нет самолёта`);
		let a = Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);

		message.user.balance += Math.floor(helicopters[message.user.transport.helicopter - 1].cost * 0.85);
		message.user.transport.helicopter = 0;

		return bot(`вы продали свой вертолёт за ${utils.sp(a)}₽`);
	}

	if(/дом/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.home) return bot(`у вас нет дома`);
		let a = Math.floor(homes[message.user.realty.home - 1].cost * 0.85);

		message.user.balance += Math.floor(homes[message.user.realty.home - 1].cost * 0.85);
		message.user.realty.home = 0;

		return bot(`вы продали свой дом за ${utils.sp(a)}₽`);
	}

	if(/квартир/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.realty.apartment) return bot(`у вас нет квартиры`);
		let a = Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);

		message.user.balance += Math.floor(apartments[message.user.realty.apartment - 1].cost * 0.85);
		message.user.realty.apartment = 0;

		return bot(`вы продали свою квартиру за ${utils.sp(a)}₽`);
	}

	if(/телефон/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.phone) return bot(`у вас нет телефона`);
		let a = Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);

		message.user.balance += Math.floor(phones[message.user.misc.phone - 1].cost * 0.85);
		message.user.misc.phone = 0;

		return bot(`вы продали свой телефон за ${utils.sp(a)}₽`);
	}

if(/питомца/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.pets.pet) return bot(`у вас нет питомца`);
		let a = Math.floor(pets[message.user.misc.pet - 1].cost * 0.85);

		message.user.balance += Math.floor(pets[message.user.pets.pet - 1].cost * 0.85);
		message.user.pets.pet = 0;

		return bot(`вы продали свой телефон за ${utils.sp(a)}₽`);
	}

	if(/ферм/i.test(message.args[1].toLowerCase()))
	{
		if(!message.user.misc.farm) return bot(`у вас нет фермы`);
		let a = Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);

		message.user.balance += Math.floor(farms[message.user.misc.farm - 1].cost * 0.85);
		message.user.misc.farm = 0;

		return bot(`вы продали свою ферму за ${utils.sp(a)}₽`);
	}

	if(/рейтинг/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.rating) return bot(`у вас нет рейтинга`);
		let a = (5000000 * options.count);

		message.user.balance += Math.floor(a);
		message.user.rating -= options.count;

		return bot(`вы продали ${options.count} ${utils.decl(options.count, ['рейтинг', 'рейтинга', 'рейтингов'])} за ${utils.sp(Math.floor(a))}`);
	}

	if(/бизнес/i.test(message.args[1].toLowerCase()))
	{
		if(message.user.business.length == 0) return bot(`у вас нет бизнеса`);
		if(options.count < 1 || options.count > 2) return bot(`используйте: Продать бизнес [1 или 2]`);
		if(message.user.business.length < options.count) return bot(`у вас нет этого бизнеса`);
		options.count--;
		let a = Math.floor(businesses[message.user.business[options.count].id - 1][message.user.business[options.count].upgrade - 1].cost * 0.85);

		message.user.balance += Math.floor(a);
		message.user.business.splice(options.count, 1);

		return bot(`вы продали свой бизнес за ${ utils.sp(a) }₽`);
	}


	if(/тапкоин/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.btc) return bot(`недостаточно тапкоинов`);
		let a = Math.floor(btc * options.count);

		message.user.balance += Math.floor(a);
		message.user.btc -= options.count;

		return bot(`вы продали ${options.count}₿ за ${utils.sp(a)}₽`);
	}
	if(/рубин/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.rubins) return bot(`недостаточно рубинов`);
		const rubins = utils.random(100000);

		message.user.balance += rubins;
		message.user.rubins -= options.count

		return bot(`вы продали ${options.count} рубины за ${utils.sp(rubins)}₽`);
	}
	
	if(/угль/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.coal) return bot(`недостаточно угля`);
		const coals = utils.random(500);

		message.user.balance += coals;
		message.user.coal -= options.count;

		return bot(`вы продали ${options.count} угль за ${utils.sp(coals)}₽`);
	}

	if(/железо/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.iron) return bot(`недостаточно железа`);
		const irons = utils.random(1000);

		message.user.balance += irons;
		message.user.iron -= options.count;

		return bot(`вы продали ${options.count} слиток зелеза за ${utils.sp(irons)}₽`);
	}

	if(/золото/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.gold) return bot(`недостаточно золота`);
		const golds = utils.random(3500);

		message.user.balance += golds;
		message.user.gold -= options.count;

		return bot(`вы продали ${options.count} слиток золота за ${utils.sp(golds)}₽`);
	}

	if(/алмаз/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.diamonds) return bot(`недостаточно алмаза`);
		const diamonds = utils.random(5000);

		message.user.balance += diamonds;
		message.user.diamonds -= options.count;

		return bot(`вы продали ${options.count} алмаз за ${utils.sp(diamonds)}₽`);
	}

	if(/изумруд/i.test(message.args[1].toLowerCase()))
	{
		if(options.count > message.user.emeralds) return bot(`недостаточно эмеральда`);
		const emeralds = utils.random(10000);

		message.user.balance += emeralds;
		message.user.emeralds -= options.count;

		return bot(`вы продали ${options.count} эмеральд за ${utils.sp(emeralds)}₽`);
	}
});

cmd.on(/^(?:передать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.alvl < 1) return message.send(`🔸 ➡ Доступ VIP игрокам`);
	message.args[2] = message.args[2].replace(/(\.|\,)/ig, '');
	message.args[2] = message.args[2].replace(/(к|k)/ig, '000');
	message.args[2] = message.args[2].replace(/(м|m)/ig, '000000');
	message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[2])) return;
	message.args[2] = Math.floor(Number(message.args[2]));

	if(message.args[2] <= 0) return;

	if(message.args[2] > message.user.balance) return bot(`недостаточно денег
💰 Баланс: ${utils.sp(message.user.balance)}₽`);
	else if(message.args[2] <= message.user.balance)
	{
		let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		message.user.balance -= message.args[2];
		user.balance += message.args[2];

		await bot(`вы передали игроку ${user.tag} ${utils.sp(message.args[2])}₽`);
		if(user.notifications) vk.api.messages.send({ user_id: user.id, message: `[УВЕДОМЛЕНИЕ]
▶ Игрок ${message.user.tag} перевел вам ${utils.sp(message.args[2])}₽!
🔕 Введите "Уведомления выкл", если не хотите получать подобные сообщения` });
	}
});

cmd.on(/^(?:уведомления)\s(выкл|вкл)$/i, async (message, bot) => {
	if(message.user.alvl < 1) return message.send(`🔸 ➡ Доступ VIP игрокам`);
	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.notifications = false;
		return bot(`уведомления отключены! 🔕`);
	}

	if(message.args[1].toLowerCase() === 'вкл')
	{
		return bot(`уведомления включены! 🔔`);
	}
});

cmd.on(/^(?:брак)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1; 

	if(message.user.marriage.partner) return bot(`вы уже в браке с игроком ${users[message.user.marriage.partner].tag}`);
	if(Number(message.args[1]) === message.user.uid) return bot(`вы не можете жениться/выйти замуж за себя`);

	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID`);

	if(user.marriage.partner) return bot(`этот человек уже состоит в браке`);

	if(user.marriage.requests.find(x=> x == message.args[1])) return bot(`вы уже делали предложение этому игроку`);

	if(message.user.marriage.requests.find(x=> x == message.args[1]))
	{
		message.user.marriage.requests = [];
		message.user.marriage.partner = user.uid;

		user.marriage.requests = [];
		user.marriage.partner = message.user.uid;

		return bot(`вы вступили в брак с игроком "${user.tag}"
📒 » Дорогие молодые! От всего сердца поздравляю Вас с вступлением в законный брак и образованием семьи! Любовь – самые прекрасные чувство в человеческой жизни. Пусть Ваша любовь будет такой же долгой, как Ваша жизнь! Живите в любви, счастье и радости, пусть у Вас будут здоровые и жизнерадостные дети, и будьте верной опорой Вашим отцам и матерям. В добрый час, дорогие! Горько!...
  💍 » С этого момента вы объявляетись мужем и женой!`);
	}

	user.marriage.requests.push(message.user.uid);
	return bot(`вы сделали предложение игроку "${user.tag}"`);
});

cmd.on(/^(?:браки)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.marriage.partner) return bot(`вы уже состоите в браке`);
	return bot(`предложения:
		${message.user.marriage.requests.map(x=> `от игрока "${users[x].tag}" (ID: ${x})`).join('\n')}`);
});

cmd.on(/^(?:развод)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.user.marriage.partner) return bot(`вы не состоите в браке`);

	let user = users.find(x=> x.uid === message.user.marriage.partner);

	message.user.marriage.partner = 0;
	user.marriage.partner = 0;

	return bot(`вы теперь свободный человек`);
});

cmd.on(/(?:профиль|проф|прф|аккаунт|Профиль)$/i, async (message, bot) => {
	 
let mosh = message.user.hero_hp + message.user.hero_zashita + message.user.hero_ataka + message.user.hero_kr_udar
	message.user.foolder += 1;
	clanid = message.user.clanid
	let text = ``;

   text += `🔎 ID: ${message.user.uid}\n`;
   text += `💰 Рублей: ${utils.sp(message.user.balance)}₽\n`;  
   text += `💥 Опыта: ${utils.sp(message.user.opit)}\n`;
   text += `🔋 Энергии: ${utils.sp(message.user.energy)}\n`;
   if(message.user.work) text += `👔 Работа: ${works[message.user.work - 1].name}\n`;
	
   if(message.user.ccard) text += `💳Баланс карты: ${message.user.card}\n`;
   text += `👑 Рейтинг: ${utils.sp(message.user.rating)}\n\n`;


   if(message.user.work) text += `👔 Работа: ${works[message.user.work - 1].name}\n`;
   text += `🌟 Уровень: ${message.user.level} [${message.user.exp}/24]\n`;   
   if(message.user.foolder) text +=`&#128228; Использовано команд:${message.user.foolder}\n\n`;

   text += `💎 Рубины: ${utils.sp(message.user.rubins)}\n`;
   text += `⛔ Статус: ${message.user.alvl.toString().replace(/0/gi, "Игрок").replace(/1/gi, "VIP").replace(/2/gi, "Премиум").replace(/5/gi, "Владелец")}\n\n`;


   if(message.user.transport.car || message.user.transport.yacht || message.user.transport.airplane || message.user.transport.helicopter ||
		message.user.realty.home || message.user.realty.apartment ||
		message.user.misc.phone || message.user.misc.farm || message.user.business)
   {
text += `🏠 Имущество:\n`;
		if(message.user.transport.car) text += `🚗 Машина: ${cars[message.user.transport.car - 1].name}\n`;
		if(message.user.transport.yacht) text += `🛥 Яхта: ${yachts[message.user.transport.yacht - 1].name}\n`;
		if(message.user.transport.airplane) text += `🛩 Самолёт: ${airplanes[message.user.transport.airplane - 1].name}\n`;
		if(message.user.transport.helicopter) text += `🚁 Вертолёт: ${helicopters[message.user.transport.helicopter - 1].name}\n`;
		if(message.user.realty.home) text += `⠀🏠Дом: ${homes[message.user.realty.home - 1].name}\n`;
		if(message.user.realty.apartment) text += `🌇 Квартира: ${apartments[message.user.realty.apartment - 1].name}\n`;
		if(message.user.misc.phone) text += `📱 Телефон: ${phones[message.user.misc.phone - 1].name}\n`;
		if(message.user.misc.farm) text += `🔋 Ферма: ${farms[message.user.misc.farm - 1].name} (1 шт.)\n`;
		if(message.user.business.length != 0)
		{
			for(var i = 0; i < message.user.business.length; i++)
			{
				text += `⠀${ businesses[message.user.business[i].id - 1][message.user.business[i].upgrade - 1].icon } ${businesses[message.user.business[i].id - 1][message.user.business[i].upgrade - 1].name}\n`;
			}
		}
	}
	 
	text += `\n📗 Дата регистрации: ${message.user.regDate}`;
	return bot(`🔰 Tвой профиль:\n${text}`);
});
   
cmd.on(/^(?:баланс)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let text = `💰 На руках: ${utils.sp(message.user.balance)}₽\n💎Рубины: ${utils.sp(message.user.rubins)}\n`;
    if(message.user.card) text += `💳 Баланс карты: ${message.user.card}`;
	return bot(text);
});

cmd.on(/^(?:дата)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let user = users.find(x=> x.uid === Number(message.args[1]));
	if(!user) return bot(`неверный ID`);

	return bot(`дата регистрации ${user.tag}: ${user.regDate}`);
});

cmd.on(/^(?:кубик|куб)\s([1-6])$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.alvl < 1) return message.send(`🔸 ➡ Играть можно только VIP игрокам`);
	const int = utils.pick([1, 2, 3, 4, 5, 6]);
	if(int == message.args[1])
	{
		message.user.balance += 2000000000;  
		return bot(`вы угадали! Приз 2.000.000.000₽`);  
	} else return bot(`не угадали 
	Выпало число ${int}`);
});

cmd.on(/^(?:машины|машина)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.args[1]) return bot(`машины: 
${message.user.transport.car === 1 ? '🔹' : '🔸'} 1. Ferrari Enzo V5 (1.000.000₽)
${message.user.transport.car === 2 ? '🔹' : '🔸'} 2. Bugatti Chiron (2.200.000₽)
${message.user.transport.car === 3 ? '🔹' : '🔸'} 3. McLaren F1 (30.000.000₽)
${message.user.transport.car === 4 ? '🔹' : '🔸'} 4. Lamborghini Aventador (41.000.000₽)
${message.user.transport.car === 5 ? '🔹' : '🔸'} 5. SSC Tuatara (59.000.000₽)
${message.user.transport.car === 6 ? '🔹' : '🔸'} 6. Bugatti Veryon Super (80.000.000₽)
${message.user.transport.car === 7 ? '🔹' : '🔸'} 7. Лада Нива (100.000.000₽)
${message.user.transport.car === 8 ? '🔹' : '🔸'} 8. Лада Калина (300.000.000₽)
Для покупки введите "Машина [номер]"`);

	const sell = cars.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.car) return bot(`у вас уже есть машина (${cars[message.user.transport.car - 1].name}), введите "Продать машину"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.car = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.on(/^(?:фермы|@mashagamebot|🔋 Ферма )\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.args[1]) return bot(`Майнинг фермы: 
${message.user.misc.farm === 1 ? '🔹' : '🔸'} 1. 6U Nvidia 200000฿/15мин (20.500.000₽)
${message.user.misc.farm === 2 ? '🔹' : '🔸'} 2. AntminerS9 300000฿/15мин (100.000.000₽)
${message.user.misc.farm === 3 ? '🔹' : '🔸'} 3. FM2018-BT200 500000฿/15мин (900.000.000₽)
${message.user.misc.farm === 4 ? '🔹' : '🔸'} 4. FM2019-BTC2000 1000000฿/15мин (1.000.000.000₽)
Для покупки введите "Фермы [номер]"`);

	const sell = farms.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.farm) return bot(`у вас уже есть ферма (${farms[message.user.misc.farm - 1].name}), введите "Продать ферму"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.farm = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.on(/^(?:дом|дома)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.args[1]) return bot(`дома: 
${message.user.realty.home === 1 ? '🔹' : '🔸'} 1. Коттедж Медведева (4.500.000₽)
${message.user.realty.home === 2 ? '🔹' : '🔸'} 2. Особняк Порошенко (7.250.000₽)
${message.user.realty.home === 3 ? '🔹' : '🔸'} 3. Дом на Рублёвке (10.000.000₽₽)
${message.user.realty.home === 4 ? '🔹' : '🔸'} 4. Личный небоскрёб Tramp'a(15.000.000₽)
${message.user.realty.home === 5 ? '🔹' : '🔸'} 5. Остров с особняком (19.500.000₽)
${message.user.realty.home === 6 ? '🔹' : '🔸'} 6. Белый дом Путина (23.000.000₽)

Для покупки введите "Дом [номер]"`);

	const sell = homes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.home) return bot(`у вас уже есть дом (${homes[message.user.realty.home - 1].name}), введите "Продать дом"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.home = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.on(/^(?:квартира|квартиры)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.args[1]) return bot(`квартиры: 
${message.user.realty.apartment === 1 ? '🔹' : '🔸'} 1. Чердак (15.000$)
${message.user.realty.apartment === 2 ? '🔹' : '🔸'} 2. Квартира в общежитии (55.000₽)
${message.user.realty.apartment === 3 ? '🔹' : '🔸'} 3. Однокомнатная квартира (175.000$₽)
${message.user.realty.apartment === 4 ? '🔹' : '🔸'} 4. Двухкомнатная квартира (260.000₽)
${message.user.realty.apartment === 5 ? '🔹' : '🔸'} 5. Четырехкомнатная квартира (500.000₽)
${message.user.realty.apartment === 6 ? '🔹' : '🔸'} 6. Квартира в центре Москвы (1.600.000₽)
${message.user.realty.apartment === 7 ? '🔹' : '🔸'} 7. Двухуровневая квартира (4.000.000₽)
${message.user.realty.apartment === 8 ? '🔹' : '🔸'} 8. Квартира с Евроремонтом (6.000.000₽)


Для покупки введите "Квартира [номер]"`);

	const sell = apartments.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.realty.apartment) return bot(`у вас уже есть квартира (${apartments[message.user.realty.apartment - 1].name}), введите "Продать квартиру"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.realty.apartment = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.on(/^(?:телефон|телефоны)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.args[1]) return bot(`телефоны: 
${message.user.misc.phone === 1 ? '🔹' : '🔸'} 1. Nokia 108 (2500₽)
${message.user.misc.phone === 2 ? '🔹' : '🔸'} 2. Nokia 3310 (2017) (5000₽)
${message.user.misc.phone === 3 ? '🔹' : '🔸'} 3. ASUS ZenFone 4 (2.0000₽)
${message.user.misc.phone === 4 ? '🔹' : '🔸'} 4. BQ Aquaris X (10.0000₽)
${message.user.misc.phone === 5 ? '🔹' : '🔸'} 5. Sony Xperia XA (15.0000₽)
${message.user.misc.phone === 6 ? '🔹' : '🔸'} 6. Samsung Galaxy S8 (30.0000₽)
${message.user.misc.phone === 7 ? '🔹' : '🔸'} 7. Xiaomi Mi Mix (50.0000₽)
${message.user.misc.phone === 8 ? '🔹' : '🔸'} 8. Torex FS1 (75.0000₽)
${message.user.misc.phone === 9 ? '🔹' : '🔸'} 9. iPhone X (250.0000₽)

Для покупки введите "Телефон [номер]"`);

	const sell = phones.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.phone) return bot(`у вас уже есть телефон (${phones[message.user.misc.phone - 1].name}), введите "Продать телефон"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.phone = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

	cmd.on(/^(?:питомцы)\s?([0-9]+)?$/i, async (message, bot) => {
	if(!message.args[1]) return bot(`питомцы:
🐌 1. Улитка (1.000₽)
🐸 2. Лягушка (25.000₽)
🐰 3. Заяц (500.000₽)
🐷 4. Свинья (300.000.000₽)
🦊 5. Лиса (1.250.000.000₽)
🐶 6. Собака (5.000.000.000₽)
🐼 7. Панда (30.000.000.000₽)
🦅 8. Ястреб (180.000.000.000₽)

🚩Для покупки введите "Питомцы [номер]"`);

	const sell = pets.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.misc.pet) return bot(`У Вас уже есть питомец.`);

	if(message.user.balance < sell.cost) return bot(`Вам нужно ${utils.sp(sell.cost)}₽ для покупки.`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.misc.pet = sell.id;
		message.user.pet.lvl += 1;

		return bot(`Вы успешно купили себе питомца, отправляйте его в поход и прокачивайте его уровень.`);
	}
});

cmd.on(/^(?:Инфопет)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`У Вас нет питомца.`);
	else {
return bot(`информация:
🐌 Питомец: «${pets[message.user.misc.pet - 1].name}»
💳 Стоимость улучшения: ${utils.sp(petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl)}₽
🌟 Уровень: ${message.user.pet.lvl}`);
}

});

cmd.on(/^(?:питомец улучшить)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца.`);
	else {

		if(message.user.balance < petsupd[message.user.misc.pet - 1].cost) return bot(`Недостаточно денег.`);

		var priceupd = petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl;

		var lvlpoupd = message.user.pet.lvl+1;

		message.user.balance -= priceupd;
		message.user.pet.lvl += 1;

		return bot(`питомец был прокачен до ${lvlpoupd} уровня за ${utils.sp(priceupd)}₽
💰 Ваш баланс: ${utils.sp(message.user.balance)}₽`);


}

});

cmd.on(/^(?:питомец поход)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца.`);
	else {

		if(message.user.timers.poxod) return bot(`вы сможете отправить питомца в поход через 60 минут. Ваш питомец довольно сильно устал!`);

		let cashfind = utils.random(736,2879);
		message.user.balance += cashfind;
		message.user.timers.poxod = true;

			setTimeout(() => {
				message.user.timers.poxod = false;
			}, 3600000);

		return bot(`ваш питомец нашёл в походе ${utils.sp(cashfind)}$. Улучшайте своего питомца!`);
}

});

cmd.on(/^(?:бизнесы)\s?([0-9]+)?$/i, async (message, bot) => {
if(!message.args[1]) return bot(`Бизнесы:
🔹 1. Шаурмичная - 50.000₽
⠀ 💰 Прибыль: 200₽/час
🔹 2. Ларёк - 100.000₽
⠀ 💰 Прибыль: 700₽/час
🔹 3. Забегаловка - 300.000₽
⠀ 💰 Прибыль: 2.700₽/час
🔹 4. Мини-Магазин - 500.000₽
⠀ 💰 Прибыль: 4.100₽/час
🔹 5. Завод в гараже - 1.500.000₽
⠀ 💰 Прибыль: 8.800₽/час
🔹 6.Угольная Шахта - 25.000.000₽
⠀ 💰 Прибыль: 84.700₽/час
🔹 7. Маленький Офис - 80.000.000₽
⠀ 💰 Прибыль: 229.625₽/час
🔹 8. Любительский GameDev - 150.000.000₽
⠀ 💰 Прибыль: 302.000₽/час
🔹 9. Нефтевышка - 500.000.000₽
⠀ 💰 Прибыль: 707.000₽/час
🔹 10. Мини АЭС - 800.000.000₽
⠀ 💰 Прибыль: 1.050.700₽/час
🔸 11. Apple Store - 250.000.000.00₽
⠀ 💰 Прибыль: 250.000.000₽/час
❓ Для покупки введите «Бизнесы [номер]»
`);

	if(message.user.business.length == 2) return bot(`у вас уже есть 2 бизнеса`);

	message.args[1] = Number(message.args[1]) - 1;
	const sell = businesses[message.args[1]][0];
	if(sell == null) return;
	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	message.user.balance -= sell.cost;
	message.user.business.push({
		"id": message.args[1] + 1,
		"upgrade": 1,
		"workers": 1,
		"moneys": 0
	});

	return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
});

cmd.on(/^(?:работа)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);

	const work = works.find(x=> x.id === Number(message.args[1]));
	if(!work) return console.log(message.args[1]);

	if(work.requiredLevel > message.user.level) return bot(`вы не можете устроиться на эту работу!`);
	else if(work.requiredLevel <= message.user.level)
	{
		message.user.work = work.id;
		return bot(`Вы устроились - ${work.name}
		👔 Введите команду "Работать"`);
	}
});
cmd.on(/^(?:работы)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.work) return bot(`ваша профессия - ${works[message.user.work - 1].name}
	${message.user.timers.hasWorked ? `Вы уже работали в эти 10 минут` : ``}`);
	return bot(`профессии:
	🔹 1. Работник в Орифлейм - зарплата ~25.000₽
	🔹 2. Программист в ITM - зарплата ~40.000₽
	🔹 3. Уборшик в IT школе - зарплата ~45.000₽
	🔹 4. Работник в Роскомнадзоре - зарплата ~50.000₽
	🔹 5. Уборщик в Роскомнадзоре - зарплата ~80.000₽
	🔹 6. Программист в Kaspersky - зарплата ~94.890₽
	🔹 7. Зам.Президента IT школы - зарплата ~125.000₽
	?? 8. Президент IT школы - зарплата ~135.000₽
	🔹 9. Основатель RuNet'a - зарплата ~175.000₽
	🔹 10.Основатель DarkNet'a - зарплата ~175.0000₽
	🔹 11.Основатель Яндекса - зарплата ~7.501.000.434.436₽
	🔹 12.Основатель Google - зарплата ~175.000.043.443.688₽

	Для трудоустройства введите "Работа [номер]`);
});
cmd.on(/^(?:работать)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.user.work) return bot(`вы нигде не работаете 😩
	Для трудоустройства введите "Работы"`);

	if(message.user.timers.hasWorked) return bot(`рабочий день закончен.
	⏳ Вы сможете работать в ближайшие 10 минут`);

	setTimeout(() => {
		message.user.timers.hasWorked = false;
	}, 600000);

	message.user.timers.hasWorked = true;

	const work = works.find(x=> x.id === message.user.work);
	const earn = utils.random(work.min, work.max);

	message.user.balance += earn;
	message.user.exp += 1;

	return bot(`рабочий день закончен 
	💵 Вы заработали ${utils.sp(earn)}₽`);
});

cmd.on(/^(?:уволиться)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.user.work) return bot(`вы нигде не работаете`);
	
	message.user.work = 0;
	return bot(`вы уволились со своей работы`);
});


cmd.on(/^(?:питомец улучшить)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца.`);
	else {

		if(message.user.balance < petsupd[message.user.misc.pet - 1].cost) return bot(`Недостаточно денег.`);

		var priceupd = petsupd[message.user.misc.pet - 1].cost*message.user.pet.lvl;

		var lvlpoupd = message.user.pet.lvl+1;

		message.user.balance -= priceupd;
		message.user.pet.lvl += 1;

		return bot(`питомец был прокачен до ${lvlpoupd} уровня за ${utils.sp(priceupd)}₽
💰 Ваш баланс: ${utils.sp(message.user.balance)}₽`);


}

});

cmd.on(/^(?:питомец поход)$/i, async (message, bot) => {
	if(message.user.misc.pet < 1) return bot(`у Вас нет питомца.`);
	else {

		if(message.user.timers.poxod) return bot(`вы сможете отправить питомца в поход через 60 минут. Ваш питомец довольно сильно устал!`);

		let cashfind = utils.random(736,2879);
		message.user.balance += cashfind;
		message.user.timers.poxod = true;

			setTimeout(() => {
				message.user.timers.poxod = false;
			}, 3600000);

		return bot(`ваш питомец нашёл в походе ${utils.sp(cashfind)}$. Улучшайте своего питомца!`);
}

});

cmd.on(/^(?:яхты|яхта)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "Полезное"!`);
	if(!message.args[1]) return bot(`яхты: 
${message.user.transport.yacht === 1 ? '🔹' : '🔸'} 1. Ванна (10.000₽)
${message.user.transport.yacht === 2 ? '🔹' : '🔸'} 2. Nauticat 331 (10.000.000₽)
${message.user.transport.yacht === 3 ? '🔹' : '🔸'} 3. Nordhavn 56 MS (15.000.000₽)
${message.user.transport.yacht === 4 ? '🔹' : '🔸'} 4. Princess 60 (25.000.000₽)
${message.user.transport.yacht === 5 ? '🔹' : '🔸'} 5. Azimut 70 (35.000.000₽)
${message.user.transport.yacht === 6 ? '🔹' : '🔸'} 6. Dominator 40M (50.000.000₽)
${message.user.transport.yacht === 7 ? '🔹' : '🔸'} 7. Moonen 124 (60.000.000₽)
${message.user.transport.yacht === 8 ? '🔹' : '🔸'} 8. Wider 150 (65.000.000₽)
${message.user.transport.yacht === 9 ? '🔹' : '🔸'} 9. Palmer Johnson 42M SuperSport (80.000.000₽)
${message.user.transport.yacht === 10 ? '🔹' : '🔸'} 10. Wider 165 (85.000.000₽)
${message.user.transport.yacht === 11 ? '🔹' : '🔸'} 11. Eclipse (150.000.000₽)
${message.user.transport.yacht === 12 ? '🔹' : '🔸'} 12. Dubai (300.000.000₽)
${message.user.transport.yacht === 13 ? '🔹' : '🔸'} 13. Streets of Monaco (750.000.000₽)

Для покупки введите "Яхта [номер]"`);

	const sell = yachts.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.yacht) return bot(`у вас уже есть яхта (${yachts[message.user.transport.yacht - 1].name}), введите "Продать яхту"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.yacht = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}$`);
	}
});

cmd.on(/^(?:самол(?:е|ё)т|самол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "Полезное"!`);
	if(!message.args[1]) return bot(`самолеты: 
${message.user.transport.airplane === 1 ? '🔹' : '🔸'} 1. Параплан (100.000₽)
${message.user.transport.airplane === 2 ? '🔹' : '🔸'} 2. АН-2 (350.000₽)
${message.user.transport.airplane === 3 ? '🔹' : '🔸'} 3. Cessna-172E (700.000₽)
${message.user.transport.airplane === 4 ? '🔹' : '🔸'} 4. Supermarine Spitfire (1.000.000₽)
${message.user.transport.airplane === 5 ? '🔹' : '🔸'} 5. BRM NG-5 (1.400.000₽)
${message.user.transport.airplane === 6 ? '🔹' : '🔸'} 6. Cessna T210 (2.600.000₽)
${message.user.transport.airplane === 7 ? '🔹' : '🔸'} 7. Beechcraft 1900D (5.500.000₽)
${message.user.transport.airplane === 8 ? '🔹' : '🔸'} 8. Cessna 550 (8.000.000₽)
${message.user.transport.airplane === 9 ? '🔹' : '🔸'} 9. Hawker 4000 (22.400.000₽)
${message.user.transport.airplane === 10 ? '🔹' : '🔸'} 10. Learjet 31 (45.000.000₽)
${message.user.transport.airplane === 11 ? '🔹' : '🔸'} 11. Airbus A318 (85.000.000₽)
${message.user.transport.airplane === 12 ? '🔹' : '🔸'} 12. F-35A (160.000.000₽)
${message.user.transport.airplane === 13 ? '🔹' : '🔸'} 13. Boeing 747-430 Custom (225.000.000₽)
${message.user.transport.airplane === 14 ? '🔹' : '🔸'} 14. C-17A Globemaster III (350.000.000₽)
${message.user.transport.airplane === 15 ? '🔹' : '🔸'} 15. F-22 Raptor (400.000.000₽)
${message.user.transport.airplane === 16 ? '🔹' : '🔸'} 16. Airbus 380 Custom (600.000.000₽)
${message.user.transport.airplane === 17 ? '🔹' : '🔸'} 17. B-2 Spirit Stealth Bomber (1.359.000.000₽)

Для покупки введите "Самолет [номер]"`);

	const sell = airplanes.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.airplane) return bot(`у вас уже есть самолёт (${airplanes[message.user.transport.airplane - 1].name}), введите "Продать самолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.airplane = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.on(/^(?:вертол(?:е|ё)т|вертол(?:е|ё)ты)\s?([0-9]+)?$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.user.pass < 1) return bot(`Нету паспорта!Как его получить можно узнать в разделе "Полезное"!`);
	if(!message.args[1]) return bot(`вертолеты: 
${message.user.transport.helicopter === 1 ? '🔹' : '🔸'} 1. Шарик с пропеллером (2₽)
${message.user.transport.helicopter === 2 ? '🔹' : '🔸'} 2. RotorWay Exec 162F (300.000₽)
${message.user.transport.helicopter === 3 ? '🔹' : '🔸'} 3. Robinson R44 (450.000₽)
${message.user.transport.helicopter === 4 ? '🔹' : '🔸'} 4. Hiller UH-12C (1.300.000₽)
${message.user.transport.helicopter === 5 ? '🔹' : '🔸'} 5. AW119 Koala (2.500.000₽)
${message.user.transport.helicopter === 6 ? '🔹' : '🔸'} 6. MBB BK 117 (4.000.000₽)
${message.user.transport.helicopter === 7 ? '🔹' : '🔸'} 7. Eurocopter EC130 (7.500.000₽)
${message.user.transport.helicopter === 8 ? '🔹' : '🔸'} 8. Leonardo AW109 Power (10.000.000₽)
${message.user.transport.helicopter === 9 ? '🔹' : '🔸'} 9. Sikorsky S-76 (15.000.000₽)
${message.user.transport.helicopter === 10 ? '🔹' : '🔸'} 10. Bell 429WLG (19.000.000₽)
${message.user.transport.helicopter === 11 ? '🔹' : '🔸'} 11. NHI NH90 (35.000.000₽)
${message.user.transport.helicopter === 12 ? '🔹' : '🔸'} 12. Kazan Mi-35M (60.000.000₽)
${message.user.transport.helicopter === 13 ? '🔹' : '🔸'} 13. Bell V-22 Osprey (135.000.000₽)

Для покупки введите "Вертолет [номер]"`);

	const sell = helicopters.find(x=> x.id === Number(message.args[1]));
	if(!sell) return;
	if(message.user.transport.helicopter) return bot(`у вас уже есть вертолёт (${homes[message.user.transport.helicopter - 1].name}), введите "Продать вертолёт"`);

	if(message.user.balance < sell.cost) return bot(`недостаточно денег`);
	else if(message.user.balance >= sell.cost)
	{
		message.user.balance -= sell.cost;
		message.user.transport.helicopter = sell.id;

		return bot(`вы купили "${sell.name}" за ${utils.sp(sell.cost)}₽`);
	}
});

cmd.on(/^(?:казино|ставка)\s(.*)$/i, async (message, bot) => { 
	message.user.foolder += 1;
	if(message.user.alvl < 1) return message.send(`🔸 ➡ Играть можно только VIP игрокам`);
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.balance) return bot(`у вас нет данной суммы https://vk.com/mashagamebot?w=product-205257229_5111584%2Fquery`);
	else if(message.args[1] <= message.user.balance)
	{
		message.user.balance -= message.args[1];
		const multiply = utils.pick([0.25, 0.75, 0.5, 0.75, 0.5, 0.5, 0.75, 0.50, 0.50, 0.75, 0.5, 0.75, 0.5, 0.75, 0.25, 0.75, 0.25, 1, 1, 1, 1, 0.5, 0.5, 0.25, 0.5, 1, 1, 1, 10, 1, 1, 1, 2, 2, 20]);

		message.user.balance += Math.floor(message.args[1] * multiply);
		return message.send(`
		[${['😐','🤐', '😝', '😰', '🤧'].random()}] >> ${multiply === 1 ? `Ваши деньги остаются при вас` : `${multiply < 1 ? `Вы проиграли ${utils.sp(message.args[1] * multiply)}₽` : `Вы выиграли ${utils.sp(message.args[1] * multiply)}₽`}`} (x${multiply})
		
		[💰] || Ваш баланс: ${utils.sp(message.user.balance)}₽`);
	}
});

cmd.on(/^(?:азино)\s(.*)$/i, async (message, bot) => { 
	message.user.foolder += 1;
	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.dublicoin);

	if(message.args[1] < 99) return bot(`Ставка должна быть выше 100! 🎲`)

	if(!Number(message.args[1])) return;
	message.args[1] = Math.floor(Number(message.args[1]));

	if(message.args[1] <= 0) return;

	if(message.args[1] > message.user.dublicoin) return bot(`у вас нет данной суммы`);
	else if(message.args[1] <= message.user.dublicoin)
	{
		message.user.dublicoin -= message.args[1];
		const multiply = utils.pick([0.25, 0.75, 0.85, 1]);

		message.user.dublicoin += Math.floor(message.args[1] * multiply);
		return message.send(`
		[${['😐','🤐', '😝', '😰', '🤧'].random()}] >> ${multiply === 1 ? `Ваши деньги остаются при вас` : `${multiply < 1 ? `Вы проиграли ${utils.sp(message.args[1] * multiply)}₽` : `Вы выиграли ${utils.sp(message.args[1] * multiply)}₽`}`} (x${multiply})
		
		[💰] || Ваш баланс: ${utils.sp(message.user.dublicoin)} Дублей`);
	}
});

cmd.on(/^(?:датьдубли)\s?([0-9]+)?\s?([0-9]+)?/i, async (message, args, bot) => {
	let user = users.find(x=> x.uid === Number(message.args[1]));
    message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');
	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');
	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');
    if(message.user.alvl < 5) return message.send(`🔸 » Вы не Администратор`);
	if(!message.args[1] || !users[message.args[1]] || !message.args[2] || message.args[2] < 0) return message.send(`💰 » Пример: 'датьдубли [ID] [COUNT]'`); 
	users[message.args[1]].dublicoin += Number(message.args[2]);
 	 
	return message.send(`💰 » Вы выдали игроку [@id${users[message.args[1]].id}(${users[message.args[1]].tag})] ${utils.sp(message.args[2])}₽`);
});

cmd.on(/^(?:шар)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const phrase = utils.pick(['перспективы не очень хорошие', 'сейчас нельзя предсказать', 'пока не ясно', 'знаки говорят - "Да"', 'знаки говорят - "Нет"', 'можешь быть уверен в этом', 'мой ответ - "нет"', 'мой ответ - "да"', 'бесспорно', 'мне кажется - "Да"', 'мне кажется - "Нет"']);
	return bot(phrase);
}); 

cmd.on(/^(?:монетка)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {

    if(message.user.alvl < 1) return message.send(`🔸 ➡ Играть можно только VIP игрокам`);
    if(!message.args[1]) return message.reply(`Ⓜ » Проверьте вводимые данные:\nⓂ »  монетка ставка орел/решка`);
    let user = message.user;
    if(message.args[1] > message.user.balance || message.args[1] <= 0) return message.reply(message.args[1] <= 0 ? `Ставка не может быть меньше 0 или равна 0` : `Ставка не может превышать баланс`);
   	
	let a = rand(1,100);
    if(a > 50) {
    	if(message.args[2].toLowerCase() == 'решка'){
        message.user.balance += Math.round(message.args[1]);
        return bot(`вам выпала 'Решка' \n\n[^_^] » Вы выиграли: ${spaces(message.args[1])}$\n[$] » Баланс: ${spaces(user.balance)}`);
    	}
    	if(message.args[2].toLowerCase() == 'орел'){
        message.user.balance -= Math.round(message.args[1]);
        return bot(`вам выпала 'Решка' \n\n[-_-] » Вы проиграли: ${spaces(message.args[1])}$\n[$] » Баланс: ${spaces(user.balance)}`);
    }
    }
    if(a < 50) {
       if(message.args[2].toLowerCase() == 'решка'){
        message.user.balance -= Math.round(message.args[1]);
        return bot(`вам выпал 'Орел' \n\n[-_-] » Вы проиграли: ${spaces(message.args[1])}$\n[$] » Баланс: ${spaces(user.balance)}`);
    	}
    	if(message.args[2].toLowerCase() == 'орел'){
        message.user.balance += Math.round(message.args[1]);
        return bot(`вам выпал 'Орел' \n\n[^_^] » Вы выиграли: ${spaces(message.args[1])}$\n[$] » Баланс: ${spaces(user.balance)}`);
    		}
   		 }
	return message.reply(`[Подсказка] » монетка [ставка] [орел/решка]`);
});

cmd.on(/^(?:взломать|взлом)$/i, async (message, bot) => { 
if(message.user.alvl < 1) return message.send(`🔸 ➡ Взламывать можно только VIP игрокам`);
if(message.user.timers.hack) return bot(`Вы сможете взломать через 5 минут`);

let situac = utils.random(1,2);

if(situac === 1)
{

let hackcash = utils.random(156781,451981);
message.user.balance += hackcash;
setTimeout(() => {
	message.user.timers.hack = false;
}, 300000);

message.user.timers.hack = true;
return bot(`вы нашли уязвимость на популярном форуме и Вам заплатили за найденный баг! ✅ Вы заработали ${utils.sp(hackcash)}₽`);

}
if(situac === 2)
{

let hackcash = utils.random(26981051,41184185);
message.user.balance += hackcash;
setTimeout(() => {
	message.user.timers.hack = false;
}, 300000);

message.user.timers.hack = true;
return bot(`вам удалось ограбить банк, но, не все так просто. Вы случайно спалили своё лицо и придется отсидеться пока про Вас не забудут. ✅ Вы заработали ${utils.sp(hackcash)}₽`);

}

});

cmd.on(/^(?:топ|@mashagamebot|🏆 Топ)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let top = [];

	users.map(x=> {
		top.push({ balance: x.balance, rating: x.rating, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.rating - a.rating;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — 👑 ${utils.sp(user.rating)} | $${utils.rn(user.balance)}
		`;
	}

	return bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — 👑${utils.sp(message.user.rating)} | $${utils.rn(message.user.balance)}`);
});

cmd.on(/^(?:топ дубли)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let top = [];

	users.map(x=> {
		top.push({ balance: x.balance, dublicoin: x.dublicoin, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.dublicoin - a.dublicoin;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — ${utils.sp(user.dublicoin)} Дублей
		`;
	}

	return bot(`топ игроков:
		${text}
—————————————————
${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(message.user.dublicoin)} Дублей`);
});

cmd.on(/^(?:топ тикток)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let top = [];

	users.map(x=> {
		top.push({ balance: x.balance, tiktokpod: x.tiktokpod, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.tiktokpod - a.tiktokpod;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${message.user.id} (${message.user.tiktok}) — ${utils.sp(user.tiktokpod)} подписчиков | ${utils.sp(message.user.tiktoklikes)} Лайков
		`;
	}

	return bot(`топ тиктокер:
		${text}
		—————————————————
${utils.gi(find() + 1)} ${message.user.tiktok} — ${utils.sp(message.user.tiktokpod)} подписчиков | ${utils.sp(message.user.tiktoklikes)} Лайков`);
});

cmd.on(/^(?:Ютуб тренды|тренды)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let top = [];

	users.map(x=> {
		top.push({ balance: x.balance, youtubepod: x.youtubepod, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.youtubepod - a.youtubepod;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${message.user.id} (${message.user.youtube}) — ${utils.sp(user.youtubepod)} подписчиков
		`;
	}

	return bot(`топ тиктокер:
		${text}
		—————————————————
${utils.gi(find() + 1)} ${message.user.youtube} — ${utils.sp(message.user.youtubepod)} подписчиков`);
});

//секунды минуты//
 	var uptime = { sec: 0, min: 0, hours: 0, days: 0 }
//------------------------------------------------------------------------------------\\
 
	setInterval(() => {
		uptime.sec++;
		if (uptime.sec == 60) { uptime.sec = 0; uptime.min += 1; }
		if (uptime.min == 60) { uptime.min = 0; uptime.hours += 1; }
		if (uptime.hours == 24) { uptime.hours = 0; uptime.days += 1; }
	}, 1000);

//------------------------------------------------------------------------------------\\

function spaces(string) { 
if (typeof string !== "string") string = string.toString(); 
return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join(""); 
}; 

Array.prototype.random = function() { return this[Math.floor(this.length * Math.random())]; } 

function rand(min, max) {return Math.round(Math.random() * (max - min)) + min} 

function getRandomInt(x, y) { 
return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x); 
} 

function getRandomElement(array) { 
return array[getRandomInt(array.lenght - 1)]; 
} 


function getRandomElement(array) { 
return array[getRandomInt(array.length - 1)]; 
}

cmd.on(/^(?:реф|реферал)$/i, async (message, bot) => {
	return bot(`вы пригласили: ${users.filter(x=> x.referal === message.user.uid).length}
	Для того, чтобы вам засчитали друга он должен написать команду "Реф ${message.user.uid}"
	
	За каждого друга вы получаете 1 дубль
	Если друг активирует вашу рефералку, то он получит 2 дубля`);
});

cmd.on(/^(?:реф|реферал)\s([0-9]+)$/i, async (message, bot) => {
	if(message.user.referal !== null) return bot(`вы уже активировали рефералку!`);
	let user = users.find(x=> x.uid === Number(message.args[1]));

	if(!user) return bot(`неверный ID`);
	if(user.id === message.senderId) return bot(`неверный ID`);

	user.dublicoin += 1;
	message.user.dublicoin += 2;

	message.user.referal = Number(message.args[1]);

	vk.api.messages.send({ user_id: user.id, message: `🎉 Спасибо за приглашение друга в бот!
	💸 Вам начислено 1 дубль на баланс.` });
	return bot(`вы активировали рефералку.
	💲 Вам начислено 2 дубля`);
});

cmd.on(/^(?:Вывести)$/i, async (message, bot) => {
message.send(`Для вывода введите команду 
	«Вывести [сумма] [qiwi/webmoney] [номер]`)
message.send({sticker_id:75})
});

cmd.on(/^(?:Вывести) (.*) qiwi|webmoney (.*)$/i, async (message, bot) => {
if(message.user.dublicoin < 150) 
	{
	message.send(`${message.user.tag}, вывести можно только с 150 рублей.`)
	message.send({sticker_id:65})
	}
if(message.user.dublicoin > 1)
	if(message.user.dublicoin < message.args[1])
	{
	message.send(`${message.user.tag}, у вас нет столько рублей!`)
	message.send({sticker_id:21155})
	}
if(message.user.dublicoin >= message.args[1])
	{
	message.user.dublicoin -= message.args[1]
	message.send(`${message.user.tag}, вывод начался!
	Вывод на ваш терминал на ваш номер может занять до недели!`)
	}
});

cmd.on(/^(?:Награды)$/i, async (message, bot) => {
	return bot(`Все награды за ютуб и тикток:
💕 За подписки [Общий]:
&#4448;		За 1 тыс подписчиков ~ Секретный промокод
&#4448;		За 100 тыс подписчиков ~ 10 секретных промокодов
&#4448;		За 1 млн подписчиков ~ VIP на месяц
&#4448;	    За 100 млн подписчиков ~ 15 Дублей

💕 За просмотры [На ютубе]:
&#4448; За 10 тыс просмотров ~ VIP на 3 дня
&#4448; За 500 тыс просмотров ~ VIP на 10 дней
&#4448; За 1 млн просмотров ~ VIP на месяц
&#4448; За 100 млн просмотров ~ 56 Дублей
&#4448; За 1 млрд просмотров ~ 106 Дублей

 &#4448;&#4448;  💌 Чтобы получить награду напишите >> @Samadluk (Админу) в письме введите свой ID и Скрин потверждение`);
});

cmd.on(/^(?:ютуб создать|ютуб)$/i, async (message, bot) => {
if(typeof message.user.youtube == "undefined" || message.user.youtube == null){
return bot(`вы можете создать свой Ютуб в боте и получать дополнительный доход со своих видео!

👑 Развивайте его, получайте больше подписчиков и дохода, получайте ПОПУЛЯРНОСТЬ В НАШЕМ БОТЕ, выходите в ТОП и становитесь №1 Ютуб!

🆕 Создать Ютуб канал: «ютуб создать [название]»
❤ Подписаться: «ютуб подписка [ID игрока]»`);
}
else{
return bot(` Канал «${message.user.youtube}»
👥 Подписчики: ${utils.rn(message.user.youtubepod)}
👁️‍🗨️ Просмотров: ${utils.rn(message.user.youtubepros)}
❤ Лайки: ${utils.rn(message.user.youtubelikes)}
🖤 Дизлайки: ${utils.rn(message.user.youtubedizlikes)}

📸 Чтобы снять Ютуб, напиши «ютуб снять»
🎈 Чтобы Подписаться: «ютуб подписка [ID игрока]»`, {attachment: 'photo-193710599_457239394'});
}
});

cmd.on(/^(?:канал)$/i, async (message, bot) => {
	return bot(` Ваш Канал «${message.user.youtube}»
👥 Подписчики: ${utils.rn(message.user.youtubepod)}
👁️‍🗨️ Просмотров: ${utils.rn(message.user.youtubepros)}
❤ Лайки: ${utils.rn(message.user.youtubelikes)}
🖤 Дизлайки: ${utils.rn(message.user.youtubedizlikes)}

📸 Чтобы снять Ютуб, напиши «ютуб снять»
🎈 Чтобы Подписаться: «ютуб подписка [ID игрока]»`);
});

cmd.on(/^(?:Ютуб создать)\s(.*)$/i, async (message, bot) => {
if(message.user.youtube != null || typeof message.user.youtube != "undefined" && typeof message.user.youtube != "object") return bot(` у вас уже есть Ютуб! Вы можете удалить его: «ютуб удалить»`);
message.user.youtube = message.args[1];
message.user.youtubevideo = message.args[1];
message.user.youtubepod = 0;
message.user.youtubelikes = 0;
message.user.youtubetimer = 0;
message.user.youtubedizlikes = 0;
message.user.youtubepros = 0;
return bot(`Вы успешно создали Ютуб аккаунт «${message.args[1]}»! 🎉 Напишите команду «Канал» для информации.

❌ Чтобы удалить, напиши: «ютуб удалить»
📃 Чтобы сменить название, напиши: «юутб название [новое]»`, {attachment: 'photo-193710599_457239396'});
});

cmd.on(/^(?:ютуб название)\s(.*)$/i, async (message, bot) => {
if(typeof message.user.youtube == "undefined" || message.user.youtube == null) return bot(` вам необходимо создать Ютуб, чтобы использовать эту команду!
🌈 Создайте командой: «ютуб создать [название]»`);
message.user.youtube = message.args[1];
return bot(` Вы успешно изменили название Ютуб канала на «${message.args[1]}»!`)
});

cmd.on(/^(?:ютуб удалить)$/i, async (message, bot) => {
if(typeof message.user.youtube == "undefined" || message.user.youtube == null) return bot(` вам необходимо создать ТикТок, чтобы использовать эту команду!
🌈 Создайте командой: «тикток создать [название]»`);
message.user.youtube = null;
message.user.youtubepod = 0;
message.user.youtubelikes = 0;
message.user.youtubetimer = 0;
message.user.youtubedizlikes = 0;
return bot(` Ваш Ютуб успешно удалён!`);
});

cmd.on(/^(?:Ютуб снять|Снять видео)\s(.*)$/i, async (message, bot) => {
	message.user.youtubevideo = message.args[1];
if(typeof message.user.youtube == "undefined" || message.user.youtube == null) return bot(` вам необходимо создать Канал, чтобы использовать эту команду!
🌈 Создайте командой: «ютуб создать [название]»`);
let newpod = utils.random(10,100);
message.user.youtubepod += newpod;
let newlike = utils.random(10,100);
message.user.youtubelikes += newlike;
let newdiz = utils.random(10,100);
message.user.youtubedizlikes += newdiz;
let newpros = utils.random(10,100);
message.user.youtubepros += newpros;
let ads = utils.pick([1,0]);
let adsCash = 0;
if(ads == 1){
adsCash = 10000*message.user.youtubepod+utils.random(100,500);
message.user.balance += adsCash;
}
let txt = ` Вы сняли новое видео «${message.args[1]}»!
🎵 Получено ${newpod} новых подписчиков
❤ Лайков ${newlike} 
🖤 Дизлайков ${newdiz}
👁️‍🗨️ Просмотров ${newpros}
${ads == 0 ? "💸 К сожалению, рекламных предложений к Вам не поступало. Снимайте ещё!":"💸 Получено "+utils.sp(adsCash)+" $ с рекламы!"}`;
message.user.youtubetimer = Date.now()+15*60000;
return bot(txt);
});


cmd.on(/^(?:Тикток|📷 ТикТок|Тикток помощь)$/i, async (message, bot) => {
if(typeof message.user.tiktok == "undefined" || message.user.tiktok == null){
return bot(`вы можете создать свой ТикТок в боте и получать дополнительный доход со своих видео!

👑 Развивайте его, получайте больше подписчиков и дохода, получайте ЛАЙКИ, выходите в ТОП и становитесь №1 ТикТокером!

🆕 Создать ТикТок: «тикток создать [название]»
❤ Поставить лайк: «тикток лайк [ID игрока]»`);
}
else{
return bot(` ТикТок «${message.user.tiktok}»
👥 Подписчики: ${utils.rn(message.user.tiktokpod)}
❤ Лайки: ${utils.rn(message.user.tiktoklikes)}

📸 Чтобы снять ТикТок, напиши «тикток снять»
🎈 Поставить лайк: «тикток лайк [ID игрока]»`, {attachment: 'photo-193710599_457239394'});
}
});

cmd.on(/^(?:Тикток создать)\s(.*)$/i, async (message, bot) => {
if(message.user.tiktok != null || typeof message.user.tiktok != "undefined" && typeof message.user.tiktok != "object") return bot(` у вас уже есть ТикТок! Вы можете удалить его: «тикток удалить»`);
message.user.tiktok = message.args[1];
message.user.tiktokpod = 0;
message.user.tiktoklikes = 0;
message.user.tiktoktimer = 0;
return bot(`Вы успешно создали ТикТок «${message.args[1]}»! 🎉 Напишите команду «тикток» для информации.

❌ Чтобы удалить, напиши: «тикток удалить»
📃 Чтобы сменить название, напиши: «тикток название [новое]»`, {attachment: 'photo-193710599_457239396'});
});

cmd.on(/^(?:Тикток название)\s(.*)$/i, async (message, bot) => {
if(typeof message.user.tiktok == "undefined" || message.user.tiktok == null) return bot(` вам необходимо создать ТикТок, чтобы использовать эту команду!
🌈 Создайте командой: «тикток создать [название]»`);
message.user.tiktok = message.args[1];
return bot(` Вы успешно изменили название ТикТока на «${message.args[1]}»!`)
});

cmd.on(/^(?:Тикток удалить)$/i, async (message, bot) => {
if(typeof message.user.tiktok == "undefined" || message.user.tiktok == null) return bot(` вам необходимо создать ТикТок, чтобы использовать эту команду!
🌈 Создайте командой: «тикток создать [название]»`);
message.user.tiktok = null;
message.user.tiktokpod = 0;
message.user.tiktoklikes = 0;
message.user.tiktoktimer = 0;
return bot(` Ваш ТикТок успешно удалён!`);
});

cmd.on(/^(?:Тикток снять|📷 Тикток снять)$/i, async (message, bot) => {
if(typeof message.user.tiktok == "undefined" || message.user.tiktok == null) return bot(` вам необходимо создать ТикТок, чтобы использовать эту команду!
🌈 Создайте командой: «тикток создать [название]»`);
let newpod = utils.random(10,100);
message.user.tiktokpod += newpod;
let ads = utils.pick([1,0]);
let adsCash = 0;
if(ads == 1){
adsCash = 10000*message.user.tiktokpod+utils.random(100,500);
message.user.balance += adsCash;
}
let txt = ` Вы сняли новый ТикТок!
🎵 Получено ${newpod} новых подписчиков
${ads == 0 ? "💸 К сожалению, рекламных предложений к Вам не поступало. Снимайте ещё!":"💸 Получено "+utils.sp(adsCash)+" $ с рекламы!"}`;
message.user.tiktoktimer = Date.now()+15*60000;
return bot(txt);
});

cmd.on(/^(?:Тикток лайк)\s([0-9]+)$/i, async (message, bot) => {
if(typeof message.user.tiktokliketimer != "undefined" && message.user.tiktokliketimer > Date.now()) return bot(` подождите ${left(message.user.tiktokliketimer-Date.now())}, чтобы поставить лайк! ⏳`);
message.user.tiktokliketimer = Date.now()+60000;
let user = users.find(x=> x.uid === Number(message.args[1]));
if(!user) return bot(` такой игрок не найден! 🤕 Проверьте
 
правильность введенного айди.`);

if(message.user.uid == user.uid) return bot(` нельзя ставить лайки самому себе! Попросите своих друзей ставить вам лайк!`);
if(typeof user.tiktok == "undefined" || user.tiktok == null) return bot(` у этого игрока нет ТикТока! 😥`);
bot(` вы лайкнули ТикТок игрока ${user.tag}!`);
user.tiktoklikes++;
vk.api.messages.send({user_id:user.id,message:` игрок ${message.user.tag} лайкнул ваш ТикТок!`});
});
