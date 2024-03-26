import { type Portfolio } from 'src/types/portfolio'
const portfolio: Portfolio = {
  name: 'Franklin Omar González Flores',
  title: 'I do code and make content about it!',
  description: `Dynamic and innovative Full Stack Web Developer with +5 years of experience Delivering consistent and
    professional work for every assignment. Adapts quickly to new needs and policies. Focused on helping the business
    achieve short- and long-term goals. Proficient in both front-end and back-end technologies. Skilled in HTML, CSS,
    JavaScript, PHP , and proficient in frameworks such as React for front-end development, and Laravel for back-end.
    coupled with database management using SQL and NoSQL solutions.
    `,
  experiences: [
    {
      name: 'SchoolSoftPR',
      startDate: '2019-01',
      descriptions: [
        'Development of diverse schools web projects.',
        'Designed and implemented intuitive user interfaces using HTML, CSS, and JavaScript.',
        'Verified the functioning of pages and applications by testing features after uploads.',
        'Database management (MySQL)',
        'Troubleshoot problems and develop successful solutions.'
      ]
    }
  ],
  projects: [
    { name: 'Rent car', image_url: '/images/projects/rent-car.webp' },
    { name: 'Hotel Kursaal Salsomagiore', image_url: '/images/projects/hotelkursaalsalso.webp' },
    { name: 'Schoolsoft', image_url: '/images/projects/schoolsoftpr.webp' }
  ],
  footer_description:
    'Seasoned Full Stack Software Engineer with over 8 years of hands-on experience in designing and implementing robust, scalable, and innovative web solutions. Adept at leveraging a comprehensive skill set encompassing front-end and back-end technologies'
}
export default portfolio
