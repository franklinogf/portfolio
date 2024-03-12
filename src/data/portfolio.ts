import { type Portfolio } from 'src/types/portfolio'
const portfolio: Portfolio = {
  name: 'Franklin Omar González Flores',
  title: 'I do code and make content about it!',
  description:
    'I am a seasoned full-stack software engineer with over 8 years of professional experience, specializing in backend development. My expertise lies in crafting robust and scalable SaaS-based architectures on the Amazon AWS platform.',
  experiences: [
    {
      name: 'SchoolSoft',
      startDate: '2019-01-09',
      description:
        'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.'
    }
  ],
  projects: [
    { name: 'Project 1', image_url: `http://fakeimg.pl/800x460?text=Project 1&font=museo` },
    { name: 'Project 2', image_url: `http://fakeimg.pl/800x460?text=Project 2&font=museo` },
    { name: 'Project 3', image_url: `http://fakeimg.pl/800x460?text=Project 3&font=museo` },
    { name: 'Project 4', image_url: `http://fakeimg.pl/800x460?text=Project 4&font=museo` }
  ],
  footer_description:
    'Seasoned Full Stack Software Engineer with over 8 years of hands-on experience in designing and implementing robust, scalable, and innovative web solutions. Adept at leveraging a comprehensive skill set encompassing front-end and back-end technologies'
}
export default portfolio
