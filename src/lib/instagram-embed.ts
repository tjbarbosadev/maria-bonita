export function loadInstagramEmbedScript() {
  if (document.querySelector('script[data-instagram-embed]')) {
    window.instgrm?.Embeds.process();
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://www.instagram.com/embed.js';
  script.async = true;
  script.defer = true;
  script.dataset.instagramEmbed = 'true';
  script.onload = () => window.instgrm?.Embeds.process();
  document.body.appendChild(script);
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
