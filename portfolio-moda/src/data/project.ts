export type Project = {
  slug: string
  title: string
  year: string
  description: string
  slides: string[] // caminhos em /public, ex.: '/projects/twog/01.jpg'
}

export const projects: Project[] = [
  {
    slug: 'twog',
    title: 'TWØG',
    year: '2026',
    description: 'Texto breve de apresentação do projeto (placeholder).',
    slides: [
        '../../public/projects/twog/1.jpg',
        '../../public/projects/twog/2.jpg'
    ], // vazio = mostra o placeholder "Em breve"
  },
  {
    slug: 'fashion-film',
    title: 'Fashion Film',
    year: '2026',
    description: 'Texto breve de apresentação do projeto (placeholder).',
    slides: [],
  },
]