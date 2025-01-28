import { Component } from '@angular/core';
import { TempDataService } from '../../services/temp-data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  public slides: any = [
    {
      key: 'slide1',
      title: 'HAPPY 11TH MONTHSARY ',
      content: 'ANG PINAKAMAGANDA NA BABAE NAKILALA KO AT ISA SIYA KASINTAHAN KO',
      imgPath: '/assets/10.JPEG'
    },
    {
      key: 'slide2',
      title: 'HINDI AKO MAPANIWALA',
      content: 'UMABOT PO TAYO DITO 1 MONTH NALANG AY MAACHIVE NATIN YUN ISA GOAL NA TAGAL NAGHINTAY',
      imgPath: '/assets/20.JPEG'
    },
    {
      key: 'slide3',
      title: 'ANG SAYA KO PO',
      content: 'ANO NANGYARI SATIN, AWAY, TAMPUHAN, NASASKTAN PERO MAS PINILI PARIN ANG ISA\'T ISA ',
      imgPath: '/assets/30.JPEG'
    },
    {
      key: 'slide4',
      title: 'GUSTO KO SABIHIN SAYO',
      content: 'LAHAT PINAPAKITA KO PO SAYO SUCH AS UPDATES, SIMPLE ASSURANCE LIKE SIMPLE LABYYUU, FREEDOM MO NA ANO GUSTO MO, VALIDATE YOUR FEELINGS, PAGKIKINIG KUNG ANO PROBLEMA MO, UNDERSTANDABLE SAYO AY TOTOONG GALING SA PUSO KO DAHIL YUN WAY KO PAANO AKO NAGMAHAL MULA SAYO',
      imgPath: '/assets/40.JPEG'
    },
    {
      key: 'slide5',
      title: 'GUSTO KO SABIHIN SAYO',
      content: 'WHAT THINGS YOU HAVE IN YOUR HEART AY TATANGAPIN KO',
      imgPath: '/assets/50.JPEG'
    },
    {
      key: 'slide6',
      title: 'GUSTO KO SABIHIN SAYO',
      content: 'I DON\'T WANT MAKE PLAY ABOUT OUR RELATIONSHIP. I WANT ACHIVE FOR US TO MAKE FOREVER, TOTOO SERYOSO KO PO AKO SAYO, I WANT TO MARRY YOU SOON PAG OKAY NA ANG RESPONSIBILITIES NATIN ',
      imgPath: '/assets/60.JPEG'
    },
    {
      key: 'slide7',
      title: 'GUSTO KO SABIHIN SAYO',
      content: 'I DON\'T WANT MAKE PLAY ABOUT OUR RELATIONSHIP. I DONT WANT TO LOSE YOU AGAIN AND AGAIN. I WANT ACHIVE FOR US TO MAKE FOREVER, TOTOO SERYOSO KO PO AKO SAYO, I WANT TO MARRY YOU SOON PAG OKAY NA ANG RESPONSIBILITIES NATIN ',
      imgPath: '/assets/70.JPEG'
    },
    {
      key: 'slide8',
      title: 'I WANT TO SAY THANK YOU LOVE',
      content: 'NAKILALA KITA AT PINAGTAGPO TAYO KUNG DAHIL SAYO AY MAGIGING QUESTION ANO PURPOSE KO SA BUHAY AT BAT KO TO GINAGAWA SUMIKAP',
      imgPath: '/assets/80.JPEG'
    },
    {
      key: 'slide9',
      title: 'THANK YOU LOVE',
      content: 'MINAMAHAL MO KO NANG TOTOO KAHIT MINSAN WALA KA TIWALA SAKIN, NAGING TOTOO KA LANG SAKIN',
      imgPath: '/assets/90.JPEG'
    },
    {
      key: 'slide10',
      title: 'THANK YOU LOVE',
      content: 'TINANGGAP MOKO ANO PAGKATAO KO HABANG BINABAGO YUN IBA DARK SIDE PARA DI KANA MASAKTAN',
      imgPath: '/assets/100.JPEG'
    },
    {
      key: 'slide11',
      title: 'THANK YOU LOVE',
      content: 'PINARAMDAM MO PO NA KAYA KO LAHAT NG BAGAY KAHIT IMPOSSIBLE',
      imgPath: '/assets/120.JPEG'
    },
    {
      key: 'slide12',
      title: 'THANK YOU LOVE',
      content: 'PINASAYA MO KO LALO NA PINANGITI MO KO AT NATUTO PAANO NGUMITI NA GALING SA PUSO',
      imgPath: '/assets/130.JPEG'
    },
    {
      key: 'slide13',
      title: 'SA DAMI PO DARK SIDE NARANASAN MO MULA SAKIN',
      content: 'NATATAKOT AKO NA HABANG GINAGAWA KO YON AY PATIBAY NG PATIBAY UNTIL MAGING MANHID NA PUSO MO KAYA NAG TANONG AKO SAYO KUNG AKO PA RIN BA GANON',
      imgPath: '/assets/140.JPEG'
    },
    {
      key: 'slide14',
      title: 'SORRY',
      content: 'SA MGA ACTION KO AT PAGWALA GANA',
      imgPath: '/assets/150.JPEG'

    },
    {
      key: 'slide15',
      title: 'SORRY LOVE',
      content: 'SA MGA TREATMENT KO SAYO NA DI MAGANDA',
      imgPath: '/assets/160.JPEG'

    },
    {
      key: 'slide16',
      title: 'SORRY SA LAHAT NAGAWA KO NOON NAKARAAN',
      content: 'WALA AKO MASABI DITO DAHIL KASALANAN KO AT NABIKTMA KA',
      imgPath: '/assets/170.JPEG'
    },
    {
      key: 'slide17',
      title: 'SORRY SA LAHAT NAGAWA KO NOON NAKARAAN',
      content: 'WALA AKO MASABI DITO DAHIL KASALANAN KO AT NABIKTMA KA',
      imgPath: '/assets/180.JPEG'
    },
    {
      key: 'slide18',
      title: 'HILING KO SAYO',
      content: ' NAHIYA KO SABIHIN PERO AKO NALANG PO PLEASE HUHUHUHU KAHIT NGA WALA KANA PAGMAMAHAL SAKIN BASTA MAG-STAY KAMUE, MAHIRAP SAKIN PERO GUSTO KO MAG TAY SAYO',
      imgPath: '/assets/190.JPEG'
    },
    {
      key: 'slide19',
      title: 'GUSTONG GUSTO KO TALAGA',
      content: 'NA IKAW LAMANG, AYAW SA IBAAA KAHIT IBIGAY MOKO SA KANILA',
      imgPath: '/assets/190.JPEG'
    },
    {
      key: 'slide20',
      title: 'GUSTONG GUSTO KO PO',
      content: 'NA PAG NABUO TAYO FUTURE AY IKAW MAGIGING INA SA MGA ANAK NATIN WE DO BEST PARA IPARAMDAM MAHALIN NON TULAD PAGMAMAHAL NATIN',
      imgPath: '/assets/200.JPEG'
    },
    {
      key: 'slide21',
      title: 'I WANT TO SURE NA HANGGANG DULO PO TAYO',
      content: 'SANA MARAMDAMAN MO NA IKAW PINILI KO KASI MAY BAGAY MERON KA AT WALA SA IBA. YES MARUNONG MAGMAHAL YUN IBA PERO IBA PAGAMAMAHAL BINIBIGAY MO SAKIN',
      imgPath: '/assets/210.JPEG'

    },
    {
      key: 'slide22',
      title: 'I LOVE YOU SO MUCH HELEN',
      content: 'I WANT TO STAY SAYO HANGGANG PAGTANDAA',
      imgPath: '/assets/220.JPEG'
    },
    {
      key: 'slide23',
      title: 'HABANG BUHAY NATOOOOO',
      content: '---- YOUR BOYFRIEND, BUJOEWJOEW ----',
      imgPath: '/assets/230.JPEG'

    }
  ];
  public currentSlide: string = 'slide1';
  constructor(
    private _tempDataService: TempDataService,
    private _router: Router
  ) 
  {
    const data = this._tempDataService.get();
    if(data.name == undefined && data.password == undefined ) {
      this._router.navigate(['/']);
    }
    this.slides.slide1 = this.slides.slide1 + (data.name !== undefined ? " " +  data.name: null)
    // console.log(this.sildesEncrypted);
  }
  public onClickSlide(key: string): void {
    this.currentSlide = key;
  }
}
