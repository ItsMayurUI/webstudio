import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // ✅ WhatsApp & Email configuration
  myWhatsApp = '919356219205'; // Your WhatsApp number (country code + number, no +)
  myEmail = 'studio@mayurnirkhe.inp';

  // ✅ Form data model
  formData: ContactFormData = {
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  };

  constructor() {}

  ngOnInit(): void {}

  // ✅ When user submits the form
  onSubmit(form: NgForm): void {
    if (!form.valid) {
      alert('Please fill all required fields before submitting.');
      return;
    }

    // Log & confirm
    console.log('Quote Request Submitted:', this.formData);
    alert(`Thank you ${this.formData.name}! We'll contact you soon with your quote.`);

    // Open WhatsApp automatically with pre-filled message
    this.openWhatsApp(this.formData);

    // Optionally reset the form
    form.resetForm();
  }

  // ✅ Opens WhatsApp with user’s details
  openWhatsApp(v: ContactFormData): void {
    const text = `
🧾 New Quote Request
👤 Name: ${v.name}
📧 Email: ${v.email}
📞 Phone: ${v.phone}
💼 Project Type: ${v.projectType}
💬 Message: ${v.message || ''}
    `;
    const url = `https://wa.me/${this.myWhatsApp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  // ✅ Generates a mailto link for direct email
  mailtoHref(v: ContactFormData): string {
    const subject = encodeURIComponent('New Quote Request');
    const body = encodeURIComponent(
`Name: ${v.name}
Email: ${v.email}
Phone: ${v.phone}
Project Type: ${v.projectType}
Message: ${v.message}`
    );
    return `mailto:${this.myEmail}?subject=${subject}&body=${body}`;
  }
}
