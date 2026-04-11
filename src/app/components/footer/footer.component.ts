import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  myWhatsApp = '919356219205';

  whatsappMessage = 'Hello Mayur, I saw your website and want to discuss a new project.';

  whatsappLink =
    `https://wa.me/${this.myWhatsApp}?text=${encodeURIComponent(this.whatsappMessage)}`;

}