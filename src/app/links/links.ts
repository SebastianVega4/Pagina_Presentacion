import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color?: string;
}

@Component({
  selector: 'app-links',
  imports: [RouterLink],
  templateUrl: './links.html',
  styleUrl: './links.css'
})
export class Links {
  readonly photoUrl = '/Profile.jpeg';
  readonly cvUrl = '/CV_SebastianVega.pdf';
  readonly bannerUrl = '/Banner.jpeg';

  readonly mainLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/johan-sebastian-vega-ruiz-b1292011b',
      icon: 'linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/SebastianVega4',
      icon: 'github'
    },
    {
      name: 'Pagos y transferencias',
      url: 'https://paypal.me/JohanVegaRuiz',
      icon: 'dollar'
    }
  ];

  readonly socialLinks: SocialLink[] = [
    { name: 'Facebook', url: 'https://www.facebook.com/SebastianVegaR', icon: 'facebook' },
    { name: 'Instagram', url: 'https://instagram.com/Sebastian.VegaR', icon: 'instagram' },
    { name: 'X (Twitter)', url: 'https://x.com/Sebas123Vega', icon: 'x' },
    { name: 'Threads', url: 'https://www.threads.com/@sebastian.vegar', icon: 'threads' },
    { name: 'TikTok', url: 'https://tiktok.com/@sebastianvegar', icon: 'tiktok' },
    { name: 'YouTube', url: 'https://www.youtube.com/channel/UCjOoZjxR_BltZN-mm4sk49Q', icon: 'youtube' },
    { name: 'Spotify', url: 'https://open.spotify.com/user/31fgnblui7xd3q6qghygkuxy5jme', icon: 'spotify' },
    { name: 'Telegram', url: 'https://t.me/SebastianVegaR', icon: 'send' },
    { name: 'WhatsApp', url: 'https://wa.me/573133890068', icon: 'whatsapp' },
    { name: 'Email', url: 'mailto:Sebastian.vegar2015@gmail.com', icon: 'mail' }
  ];
}
