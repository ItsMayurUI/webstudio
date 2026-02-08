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
  myEmail = 'studio@mayurnirkhe.in';

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

  if (form.invalid) {
    alert('Please fill all fields correctly before submitting.');
    return;
  }

  const data = { ...form.value };

  this.openWhatsApp(data);

  form.resetForm();
}


  // ✅ Opens WhatsApp with user’s details
 openWhatsApp(v: ContactFormData): void {
  const message =
    'New Quote Request\n\n' +
    'Name → ' + v.name + '\n' +
    'Email → ' + v.email + '\n' +
    'Phone → ' + v.phone + '\n' +
    'Project Type → ' + v.projectType + '\n\n' +
    'Message\n' +
    (v.message?.trim() || 'N/A');

  const url =
    `https://api.whatsapp.com/send?phone=${this.myWhatsApp}&text=${encodeURIComponent(message)}`;

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
