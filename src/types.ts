export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  category: 'social' | 'branding' | 'marketing' | 'vector' | 'packaging' | 'creative' | 'ai-video';
  categoryLabel: string;
  year: string;
  initialLikes: number;
  software: string[];
  aspectRatio: string;
  description: string;
  role: string;
  deliverables: string[];
  keyHighlights: string[];
  colorPalette: { name: string; hex: string }[];
  typography: string;
  posterKey?: string;
  imageUrl?: string;
}

export interface SoftwareSkill {
  name: string;
  iconLabel: string;
  badgeColor: string;
  level: number;
  experience: string;
  description: string;
  specialties: string[];
  roleSubtitle?: string;
  deliverablesCount?: string;
  fileExtension?: string;
  colorProfile?: string;
  signatureHotkeys?: { key: string; action: string }[];
  keyTools?: string[];
  realWorldProjects?: string[];
}

export interface DesignerProfile {
  name: string;
  title: string;
  location: string;
  yearsExperience: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  whatsappUrl: string;
  bioIntro: string;
  bioExtended: string;
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}
