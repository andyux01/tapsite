import { LitElement, html, css } from 'lit';
// import './styles.css';

class ProfileCard extends LitElement {
  static get properties() {
    return {
      profileImage: { type: String },
      title: { type: String },
      description: { type: String },
      buttonLinks: { type: Array },
      socialLinks: { type: Object },
      facebookPixelId: { type: String }
    };
  }

  constructor() {
    super();
    this.profileImage = '';
    this.title = 'tapsite.ai';
    this.description = '#1 AI Landing Page Builder Indonesia\nBuat LP Sekali Tap, Hasil Maksimal!\nTulis Ide → Landing Page Ready 1 Menit';
    this.buttonLinks = [
      { text: 'Situs Web Utama', url: '#', color: 'bg-blue-500' },
      { text: 'Buat Landing Page 1 Menit', url: '#', color: 'bg-purple-500' },
      { text: 'Webinar Triple Power AI: Tapsite - Meta AI - Dripsender', url: '#', color: 'bg-violet-500' },
      { text: 'Youtube', url: '#', color: 'bg-red-500' },
      { text: 'Tiktok', url: '#', color: 'bg-black' },
      { text: 'Admin Konsultasi', url: '#', color: 'bg-green-500' },
      { text: 'Share', url: '#', color: 'bg-green-500' }
    ];
    this.socialLinks = {};
    this.facebookPixelId = '';
  }

  static styles = css`
    :host {
      display: block;
    }
    .container {
        max-width: 600px;
        margin: auto;
        padding: 2rem;
    }
    .container a {
        text-decoration: none;
        color: #fff;
        transition: background-color 0.3s ease;
    }
    .container a:hover {
        text-decoration: underline;
    }

    .profile-image {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: block;
        margin: 0 auto;
    }

    .bg-blue-500 { background-color: #b6d7f3; }
    .bg-purple-500 { background-color: #9f7aea; }
    .bg-violet-500 { background-color: #805ad5; }
    .bg-red-500 { background-color: #f56565; }
    .bg-black { background-color: #000; }
    .bg-green-500 { background-color: #48bb78; }

    .custom-cursor {
        cursor: pointer;
    }
    .flex {
        /* display: flex;
    }
    .flex-col {
        flex-direction: column;
    } */
    .space-y-4 > :not([hidden]) ~ :not([hidden]) {
        --tw-space-y-reverse: 0;
        margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
        margin-bottom: calc(1rem * var(--tw-space-y-reverse));
    }
    .inline-flex {
        display: inline-flex;
    }
    .justify-center {
        justify-content: center;
    }
    .items-center {
        align-items: center;
    }
    .py-3 {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
    }
    .px-5 {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
    }
    .text-base {
        font-size: 1rem;
    }
    .font-medium {
        font-weight: 500;
    }
    .text-center {
        text-align: center;
    }
    .text-white {
        color: #fff;
    }
    .rounded-lg {
        border-radius: 0.5rem;
    }
    .bg-blue-700 {
        background-color: #2b6cb0;
    }
    .hover\:bg-blue-800:hover {
        background-color: #2c5282;
    }
    .focus\:ring-4:focus {
        box-shadow: 0 0 0 4px rgba(66, 153, 225, 0.6);
    }
    .focus\:ring-blue-300:focus {
        box-shadow: 0 0 0 4px rgba(66, 153, 225, 0.6);
    }
    .dark\:focus\:ring-blue-900:focus {
        box-shadow: 0 0 0 4px rgba(26, 32, 44, 0.9);
    }
  `;

  render() {
    return html`
      <div class="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center py-12">
        <div class="container mx-auto px-4">
          <img class="profile-image mb-4 rounded-full shadow-lg" src="${this.profileImage}" alt="Profile Image">
          <h1 class="text-4xl font-bold text-center mb-4">${this.title}</h1>
          <p class="text-lg text-center mb-8 whitespace-pre-line">${this.description}</p>

          ${this.buttonLinks.map(link => html`
            <!-- <a href="${link.url}" class="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 text-center ">${link.text}</a> -->
                         <a href="${link.url}" class="block ${link.color} hover:opacity-75 text-white font-bold py-2 px-4 rounded mb-4 text-center transition duration-200 flex flex-col space-y-4">${link.text}</a>
          `)}
        </div>

        ${this.facebookPixelId ? html`
          <script>
            !function(f,b,e,v,n,t,s) {
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script',
            'https://connect.facebook.net/en_US/sdk.js');
            fbq('init', '${this.facebookPixelId}');
            fbq('track', 'PageView');
          </script>
        ` : ''}
      </div>
      <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
    `;
  }
}

customElements.define('profile-card', ProfileCard);
