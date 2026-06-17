const generateImageUrl = (prompt: string, size: 'square_hd' | 'square' | 'portrait_4_3' | 'portrait_16_9' | 'landscape_4_3' | 'landscape_16_9' = 'landscape_16_9') => {
  return `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;
};

export const IMAGES = {
  GATE: generateImageUrl('Majestic South Asian wedding entrance gate with pink and orange silk drapes, white floral garlands, royal golden lanterns, mehndi ceremony decorations, traditional Indian palace architecture, luxury wedding aesthetic', 'landscape_16_9'),
  LOCK_ENTRY_BG: generateImageUrl('Royal South Asian courtyard at night with palace arches, pink orange and white mehndi decorations, golden candle lanterns, traditional Indian wedding venue, cinematic lighting, luxury atmosphere', 'landscape_16_9'),
  REVEAL_HALL: generateImageUrl('Grand South Asian banquet hall with pink orange white mehndi theme, royal golden chandelier, traditional Indian wedding decor, palace architecture, elegant luxury venue', 'landscape_16_9'),
  INVITATION_BG: generateImageUrl('Pink and orange velvet background with white mehndi henna patterns, royal golden filigree borders, traditional Indian wedding invitation design, elegant luxury aesthetic', 'portrait_4_3'),
  VENUE_BG: generateImageUrl('South Asian palace arch silhouette with pink orange sunset sky, white clouds, royal golden mehndi decorations, traditional Indian wedding venue, warm atmospheric lighting', 'portrait_4_3'),
  AMANAT_ALI_LOCAL: '/amanat-ali.jpg',
  PERFORMANCE_POSTER: generateImageUrl('South Asian singer performance stage with pink orange white mehndi theme, royal golden decorations, traditional Indian wedding concert atmosphere, luxury event poster', 'portrait_4_3'),
  RSVP_BG: generateImageUrl('Pink orange velvet background with white floral accents, royal golden orchids and candle lanterns, mehndi patterns, traditional Indian wedding RSVP card design, luxury aesthetic', 'landscape_16_9'),
  GUESTBOOK_BG: generateImageUrl('Pink and orange silk drapes framing white message area, royal golden mehndi patterns, traditional Indian wedding guestbook design, elegant luxury atmosphere', 'landscape_16_9'),
  COUNTDOWN_BG: generateImageUrl('South Asian temple columns with pink orange twilight sky, white stars, royal golden mehndi decorations, traditional Indian wedding countdown background, cinematic atmospheric', 'landscape_16_9'),
  MONOGRAM_BG: generateImageUrl('Pink and orange velvet background with white mehndi henna patterns, royal golden AI monogram design, traditional Indian wedding monogram, luxury elegant aesthetic', 'square_hd'),
  FAMILY_GATHERING: generateImageUrl('Warm family celebration with pink orange white mehndi theme, royal golden lighting, traditional Indian wedding family gathering, wholesome atmosphere, luxury aesthetic', 'portrait_4_3'),
};
