/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MuralPreset {
  id: string;
  name: string;
  description: string;
  gradientFrom: string; // Hex code
  gradientVia?: string; // Opt hex code
  gradientTo: string; // Hex code
  styleType: 'geometric' | 'organic' | 'celestial' | 'brutalist';
  featuredLocation: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  quote: string;
  location: string;
}

export interface ValuePropItem {
  id: string;
  indexMark: string; // e.g. "i.", "ii.", "iii.", "iv."
  title: string;
  description: string;
}

export interface SectorItem {
  id: string;
  name: string;
  description: string;
}

export interface CommissionInquiry {
  name: string;
  email: string;
  phone: string;
  sector: string;
  width: number;
  height: number;
  selectedPreset: string;
  message: string;
  signature: string;
}
