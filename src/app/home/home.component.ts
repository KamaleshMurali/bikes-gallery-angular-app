import { Component, OnInit } from '@angular/core';

export interface Image {
  title: string,
  subTitle: string,
  url: string,
  logoUrl: string,
  description: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: Image[] = [
    {
      title: 'BMW DC Roadster',
      subTitle: "BMW's first road-ready electric motorcycle",
      url: '../../assets/images/bmw.jpg',
      logoUrl: '../../assets/logos/bmw.png',
      description: 'The BMW Motorrad Vision DC Roadster is a visionary symbol of the future of BMW Motorrad with alternative drive forms. It showcases the electrically powered driving experience in honest, authentic form, and in particular, creates a new, distinctive aesthetic appeal that is still firmly rooted in the finest BMW tradition.'
    },    {
      title: 'Royal Enfield Bullet 350 ',
      subTitle: 'Dog Breed',
      url: '../../assets/images/bullet.jpg',
      logoUrl: '../../assets/logos/royal-enfield.jpg',
      description: 'The Royal Enfield Bullet 350 is powered by a 346 cc air-cooled engine which produces of power. It has a fuel tank of 13.5 L and a . The Royal Enfield Bullet 350 starts at Rs 1.27 and goes up to Rs 1.42 Lakh (ex-showroom, Delhi). It is available in two variants.'
    },    {
      title: 'Ducati Multistrada 1260',
      subTitle: 'comfort that makes your travels unforgettable both on-road and off-road.',
      url: '../../assets/images/ducati.jpg',
      logoUrl: '../../assets/logos/ducati.png',
      description: 'The Multistrada 1260 Enduro expands the concept of adventure with a Ducati Testastretta DVT 1262 engine with full torque curve and a renewed chassis for greater ease of riding at low speeds or when manoeuvring. '
    },    {
      title: 'Harley-Davidson Freewheeler',
      subTitle: 'It has a 1,690 cc displacement, air-cooled, V-twin engine with 142 N⋅m (105 lbf⋅ft) torque',
      url: '../../assets/images/harley-davidson.jpg',
      logoUrl: '../../assets/logos/harley.png',
      description: 'The Harley-Davidson Freewheeler is a motorized tricycle introduced by Harley-Davidson in August, 2014 for the 2015 model year. It is designated the FLRT.'
    },    {
      title: 'Ninja ZX-10R',
      subTitle: "The Ninja ZX-10R's engine balances stunning power with manageability.",
      url: '../../assets/images/ninja.jpg',
      logoUrl: '../../assets/logos/ninja.png',
      description: 'Kawasaki Ninja ZX-10R is a bike available at a starting price of Rs. 14,99,000 in India. It is available in only 1 variant and 2 colours. The Ninja ZX-10R is powered by 998cc BS6 engine which develops a power of 200.21 bhp and a torque of 114.9 Nm'
    },    {
      title: 'Pulsar RS200',
      subTitle: 'The new Bajaj Pulsar RS 200 ',
      url: '../../assets/images/pulsar.jpg',
      logoUrl: '../../assets/logos/pulsar.png',
      description: 'Bajaj Pulsar RS200 is powered by 199.5 cc engine. This Pulsar RS200 engine generates a power of 24.5 PS @ 9750 rpm and a torque of 18.7 Nm @ 8000 rpm. Bajaj Pulsar RS200 gets Disc brakes in the front and rear.'
    },    {
      title: 'Yamaha RX100',
      subTitle: 'The Yamaha RX 100 was a motorcycle designed by Yamaha',
      url: '../../assets/images/yamaha.jpg',
      logoUrl: '../../assets/logos/yamaha.jpg',
      description: "The Yamaha RX100 was the go-to bike for two-wheeler enthusiasts back in the 80's and early-90s. Back then, the Yamaha RX100 not only set a benchmark for two-stroke motorcycles but also single-handedly changed people's perspective towards motorcycling"
    },    {
      title: 'BMW R 1250 GS',
      subTitle: 'The new BMW R 1250 GS Adventure is built for your challenges.',
      url: '../../assets/images/bmw.jpg',
      logoUrl: '../../assets/logos/bmw.png',
      description: "The R 1250 GS is a powered by 1254cc BS6 engine mated to a 6 is speed gearbox . This engine of R 1250 GS develops a power of 136 ps and a torque of 143 nm . The BMW R 1250 GS gets disc brakes in the front and rear. The BMW R 1250 GS weighs 249 kg and has a fuel tank capacity of 20 liters."
    },    {
      title: 'Royal Enfield Interceptor 650',
      subTitle: 'Royal Enfield Interceptor 650',
      url: '../../assets/images/bullet.jpg',
      logoUrl: '../../assets/logos/royal-enfield.jpg',
      description: "The Interceptor 650 is powered by 648cc BS6 engine which develops a power of 47 bhp and a torque of 52 Nm. With both front and rear disc brakes, Royal Enfield Interceptor 650 comes up with anti-locking braking system."
    }
  ]

  constructor() {}

  ngOnInit() {}
}
