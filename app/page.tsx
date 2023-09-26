import Image from 'next/image'
import TopNav from './_components/TopNav/TopNav'
import styles from './page.module.css'
import Link from 'next/link'
const services = [
  {number: '01',title: 'Corporate Law', description: 'Our team of accomplished lawyers exemplify this ethos as they soar to remarkable heights in their pursuit of legal excellence and their unwavering dedication ensures the delivery of unparalleled legal services to our diverse and esteemed clientele.'},
  {number: '02',title: 'Dispute Resolution', description: 'Our team of accomplished lawyers exemplify this ethos as they soar to remarkable heights in their pursuit of legal excellence and their unwavering dedication ensures the delivery of unparalleled legal services to our diverse and esteemed clientele.'},
  {number: '03',title: 'International Trade', description: 'Our team of accomplished lawyers exemplify this ethos as they soar to remarkable heights in their pursuit of legal excellence and their unwavering dedication ensures the delivery of unparalleled legal services to our diverse and esteemed clientele.'},
  {number: '04',title: 'Intellectual Property & Technology', description: 'Our team of accomplished lawyers exemplify this ethos as they soar to remarkable heights in their pursuit of legal excellence and their unwavering dedication ensures the delivery of unparalleled legal services to our diverse and esteemed clientele.'},
  {number: '05',title: 'Energy Projects & Infrastrastructure', description: 'Our team of accomplished lawyers exemplify this ethos as they soar to remarkable heights in their pursuit of legal excellence and their unwavering dedication ensures the delivery of unparalleled legal services to our diverse and esteemed clientele.'},
]

const articles = [
  {
    imageUrl: '1',
    title: 'New Law Mandates Disclosure of Political Contributions by Corporations',
    text: 'Our core value lies in guaranteeing exceptional client experiences, coupled with unwavering professionalism in every facet of our business operations.....',
    name: 'Temitope Aiyegbusi',
    time: '5'
  },
  {
    imageUrl: '2',
    title: 'Supreme Court Decides Landmark Case in Favor of Free Speech',
    text: 'Our core value lies in guaranteeing exceptional client experiences, coupled with unwavering professionalism in every facet of our business operations.....',
    name: 'Temitope Aiyegbusi',
    time: '5'
  },
  {
    imageUrl: '3',
    title: 'Three recent legislative changes that affects you and your family.',
    text: 'Our core value lies in guaranteeing exceptional client experiences, coupled with unwavering professionalism in every facet of our business operations.....',
    name: 'Temitope Aiyegbusi',
    time: '5'
  },
  {
    imageUrl: '4',
    title: 'New Law Mandates Disclosure of Political Contributions by Corporations',
    text: 'Our core value lies in guaranteeing exceptional client experiences, coupled with unwavering professionalism in every facet of our business operations.....',
    name: 'Temitope Aiyegbusi',
    time: '5'
  },
  {
    imageUrl: '5',
    title: 'New Law Mandates Disclosure of Political Contributions by Corporations',
    text: 'Our core value lies in guaranteeing exceptional client experiences, coupled with unwavering professionalism in every facet of our business operations.....',
    name: 'Temitope Aiyegbusi',
    time: '5'
  },
  {
    imageUrl: '6',
    title: 'New Law Mandates Disclosure of Political Contributions by Corporations',
    text: 'Our core value lies in guaranteeing exceptional client experiences, coupled with unwavering professionalism in every facet of our business operations.....',
    name: 'Temitope Aiyegbusi',
    time: '5'
  },
]
export default function Home() {
  
  return (
    <>
    <TopNav/>
    <main>
        <section className={styles.hero_section}>
          <h1 className="primary-color">a world-class law firm.</h1>
          <h1>fuelled by excellence, creativity and professionalism, we are built to provide best-in-class legal services to our clients.</h1>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 bg-light px-[24px] py-[80px] md:px-[117px] md:py-[160px]">
          <div className="col-span-1 md:pe-[32px] mb-[40px]">
            <p className="dark-color mb-[8px] md:mb-[16px] text-xl md:text-2xl">About us</p>
            <span className={"primary-color " + styles.h2}>We're your formidable guardian</span>
            <span className={"gray-color " + styles.h2}> and reliable mentor</span>
          </div>
          <div className="col-span-1">
            <p className="p mb-[16px] md:mb-[24px]">Danol Partner's legal team has consistently taken a leading role in significant cases throughout the years, demonstrating a deep understanding of the legal landscape. We acknowledge that no two cases are identical.</p>
            <p className="p mb-[16px] md:mb-[24px]">Recognizing and honoring the distinctive intricacies, sensitivities, and difficulties inherent in each case, Danol Partner leverages its extensive experience and expertise to provide clients with expert legal counsel and representation in high-stakes commercial disputes and crisis scenarios. All the while, we remain committed to our fundamental values of excellence, innovation, and professionalism.</p>
            <div>
              <Link href="about-us"><button className="button button-primary mr-[20px] md:mr-[32px]">Find out more</button>
               </Link>
              <Link href="contact"><button className="button button-primary-outline">Contact us</button>
           </Link>
              </div>
          </div>
        </section>
        <div style={{
          backgroundImage: 'url(/images/happy-employees.png)'
        }} className={styles.image_banner}></div>
        <section className={styles.hero_section + ' ' + styles.section_sp}>
          <div className='flex flex-col items-center text-center mb-[40px] mb:mb-[128px]'>
          <p className="dark-color mb-[8px] md:mb-[16px] text-xl md:text-2xl font-semibold">Our Services</p>
          <h2 className={"primary-color max-w-[880px] " + styles.h2}>Unwavering focus and expert experience in providing quality legal services.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] md:gap-y-[64px]">
            {services.map((service, index) => {
              return (
                <div key={index} className={'col-span-1 ' + styles.service_block}>
                  <p className={styles.number}>{service.number}</p>
                  <h3 className={styles.title + ' primary-color'}>{service.title}</h3>
                  <p className={styles.description}>{service.description}</p>
              </div>)
})}
          </div>
        </section>
        <section className={styles.hero_section + ' relative ' + styles.section_tp}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1">
              <div className='mb-[40px] md:mb-[80px]'>
                <p className="dark-color mb-[8px] md:mb-[16px] text-xl md:text-2xl">Our Values</p>
            <h3 className={"primary-color " + styles.h3}>At Danol Partners we hold strong</h3>
            <h3 className={"gray-color " + styles.h3}>values which helps us provide quality legal services to our client</h3>
         </div>
              <div>
                <div className="pb-5 ps-5" style={{
                  borderLeft: '4px solid #87265B'
                }}>
                  <p className="primary-color font-semibold">Culture of Excellence</p>
                  <p className={styles.small_p}>Our team of accomplished lawyers exemplify this ethos as they soar to remarkable heights in their pursuit of legal excellence and their unwavering dedication ensures the delivery of unparalleled legal services to our diverse and esteemed clientele.</p>
                </div>
                <div className="pb-5 ps-5" style={{
                  borderLeft: '4px solid #E9E9E9'
                }}>
                  <p className="primary-color font-semibold">Creativity</p>
                  <p className={styles.small_p}>We dedicate ourselves to creative problem-solving, addressing both familiar and unique legal matters with ingenuity and precision. This unwavering dedication to innovation fuels our ability to provide clients with effective and forward-thinking legal solutions.</p>
                </div>
                <div className="pb-5 ps-5" style={{
                  borderLeft: '4px solid #E9E9E9'
                }}>
                  <p className="primary-color font-semibold">Professionalism</p>
                  <p className={styles.small_p}>Our core value lies in guaranteeing exceptional client experiences, coupled with unwavering professionalism in every facet of our business operations. Client satisfaction is our paramount concern, and we go to great lengths to ensure that each client interaction is marked by responsiveness, transparency, and a deep commitment to their best interests.</p>
                </div>
              </div>
           </div>
            <div className={"col-span-1 hidden md:block " + styles.right_image}><Image src="/images/employees-in-office.png" alt="employees in the office" width={600} height={800} />
          </div>
</div>
        
        </section>
        <div style={{
          backgroundImage: 'url(/images/happy-employees-2.png)'
        }} className={styles.image_banner + " flex flex-col justify-center text-white container-padding md:p-[216px]"}>

                <p className="mb-[8px] md:mb-[16px] text-xl md:text-2xl">Our Team</p>
            <h3 className={styles.h3 + ' max-w-[693px]'}>Unwavering focus and expert experience in providing quality legal services</h3>
            <Link href="lawyers"><button className="button button-primary mt-[20px] md:mt-[30px]">Search for Lawyers</button>
               </Link>
        </div>
        <section className='container-padding my-[80px] md:mt-[145px]'>
        <p className="dark-color mb-[8px] md:mb-[16px] text-xl md:text-2xl">Our blog</p>
            <h4 className={ styles.h2 +" primary-color"}>Stay up to date with the latest news,</h4>
          <h4 className={styles.h2}>announcements and events.</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] md:gap-y-[64px] mt-[40px] md:mt-[70px]">
            {articles.map((article, index) => {
              return (
                <div key={index} className={"col-span-1 " + styles.blog_article}>
                  <Image className="mb-5" src={`/images/blog/${article.imageUrl}.png`} alt={article.title} width={416} height={317} />
                  <p className={styles.title}>{article.title}</p>
                  <p className={styles.text}>{article.text}</p>
                  <p className='flex items-end mt-4'><span className={styles.name}>{article.name}</span>  <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2.5" cy="2.5" r="2.5" fill="#111111"/>
</svg>
                    <span className={styles.time}>{article.time} mins read</span></p>
     </div>
            )
       })}
          </div>
        </section>
        <div style={{
          backgroundImage: 'url(/images/employees-in-office-2.png)'
        }} className={styles.image_banner + ' container-padding flex flex-col justify-end'}>
            <h4 className={styles.h2 + ' max-w-[693px] text-white '}>we are guided by </h4>
            <h4 className={styles.h2 + ' max-w-[693px] pb-[80px] md:pb-[160px]'}>excellence, creativity & professionalism</h4>
        </div>
        
      </main>
    </>
    
  )
}
