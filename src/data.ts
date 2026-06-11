/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MuralPreset, Testimonial, ValuePropItem, SectorItem } from './types';

export const MURAL_PRESETS: MuralPreset[] = [
  {
    id: 'nocturne-indigo',
    name: 'Nocturne Indigo',
    description: 'An expansive cosmic flow built on deep oceanic textures, transitioning into vivid twilight layers.',
    gradientFrom: '#214D72', // Midnight
    gradientVia: '#9675BC',  // Twilight
    gradientTo: '#252C3E',   // Ink
    styleType: 'celestial',
    featuredLocation: 'The Porcelain Hotel Lounge'
  },
  {
    id: 'twilight-dawn',
    name: 'Twilight Dawn',
    description: 'The iconic transition of colors tracing dusk till morning stars. Immersive gradients with sharp, crisp arcs.',
    gradientFrom: '#214D72', // Midnight
    gradientVia: '#9675BC',  // Twilight
    gradientTo: '#FFE0DB',   // Porcelain
    styleType: 'geometric',
    featuredLocation: 'Aurelia Grand Atrium'
  },
  {
    id: 'rose-gold-dust',
    name: 'Rose Gold Dust',
    description: 'Soft pastel waves accented by stark, elegant geometry, giving an airy presence with deep ink outlines.',
    gradientFrom: '#F1B3BE', // Rose
    gradientVia: '#FFE0DB',  // Porcelain
    gradientTo: '#252C3E',   // Ink
    styleType: 'organic',
    featuredLocation: 'La Maison Rose Flagship'
  },
  {
    id: 'brutalist-porcelain',
    name: 'Brutalist Porcelain',
    description: 'High-contrast raw structural lines meet elegant pastel backgrounds, demanding attention through restraint.',
    gradientFrom: '#FFE0DB', // Porcelain
    gradientVia: '#F1B3BE',  // Rose
    gradientTo: '#214D72',   // Midnight
    styleType: 'brutalist',
    featuredLocation: 'Veld & Co. Headquarters'
  }
];

export const VALUE_PROPS: ValuePropItem[] = [
  {
    id: 'craft',
    indexMark: 'i.',
    title: 'Craft',
    description: 'Fine-art discipline at building scale. Every line intentional; every surface prepared, painted and sealed to last.'
  },
  {
    id: 'vision',
    indexMark: 'ii.',
    title: 'Vision',
    description: 'We think in the dark so the work arrives like a dream — unexpected, specific, impossible to un-see.'
  },
  {
    id: 'bespoke',
    indexMark: 'iii.',
    title: 'Bespoke',
    description: 'No templates, no repeats. Each commission is conceived for one wall, one client, one moment.'
  },
  {
    id: 'presence',
    indexMark: 'iv.',
    title: 'Presence',
    description: 'The work earns the room. It commands attention and rewards a second, closer look.'
  }
];

export const CLIENT_SECTORS: SectorItem[] = [
  {
    id: 'hospitality',
    name: 'Hospitality & F&B',
    description: "Boutique hotels, fine dining establishments, private members' clubs, and bespoke bars seeking a permanent landmark."
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Interiors',
    description: 'High-end developments, designer lobbies, sales centers, and common areas designed to captivate buyers.'
  },
  {
    id: 'retail',
    name: 'Brand & Retail',
    description: 'Flagships, experiential brand spaces, galleries, and central headquarters making a bold, memorable statement.'
  },
  {
    id: 'private',
    name: 'Private Commissions',
    description: 'Sought-after residential collectors and private estates wanting exclusive, unrepeatable architectural murals.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Julian Veld',
    role: 'Principal Architect',
    company: 'Veld & Co. Real Estate',
    quote: "Our grand atrium went from a space people merely passed through to a landmark. The custom 'Twilight Dawn' mural defines our headquarters' identity.",
    location: 'Munich, Germany'
  },
  {
    id: 'test-2',
    clientName: 'Elena Rostova',
    role: 'Creative Director',
    company: 'Porcelain Collection Hotels',
    quote: "We commissioned Insomnia for three flagship suites. The work earns the room. It has this incredible tactile depth, catching changing light from morning to night.",
    location: 'St. Moritz, Switzerland'
  },
  {
    id: 'test-3',
    clientName: 'Marc-Antoine Rose',
    role: 'Art Advisor',
    company: 'Maison Rose Retail Group',
    quote: "The sheer restraint shown in their composition is luxury. They refused to clutter the layout; instead, they made the quiet space stand out brilliantly.",
    location: 'Paris, France'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Porcelain Collection', line1: 'PORCELAIN', line2: 'COLLECTION' },
  { name: 'Veld & Co Real Estate', line1: 'VELD & CO.', line2: 'REAL ESTATE' },
  { name: 'Maison Rose Paris', line1: 'MAISON ROSE', line2: 'PARIS' },
  { name: 'Aurelia Grand Hotels', line1: 'AURELIA', line2: 'GRAND HOTELS' },
  { name: 'Nocturne Club Group', line1: 'NOCTURNE', line2: 'CLUB GROUP' }
];
