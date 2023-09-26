import TopNav from '../_components/TopNav/TopNav'
import styles from './page.module.css'
const services = [
  {number: '01',title: 'Corporate Law', description: 'Our team of accomplished lawyers exemplify this ethos as they soar to remarkable heights in their pursuit of legal excellence and their unwavering dedication ensures the delivery of unparalleled legal services to our diverse and esteemed clientele.'},
  {number: '02',title: 'Dispute Resolution', description: 'Our team of accomplished lawyers exemplify this ethos as they soar to remarkable heights in their pursuit of legal excellence and their unwavering dedication ensures the delivery of unparalleled legal services to our diverse and esteemed clientele.'},
  {number: '03',title: 'International Trade', description: 'Our team of accomplished lawyers exemplify this ethos as they soar to remarkable heights in their pursuit of legal excellence and their unwavering dedication ensures the delivery of unparalleled legal services to our diverse and esteemed clientele.'},
  {number: '04',title: 'Intellectual Property & Technology', description: 'Our team of accomplished lawyers exemplify this ethos as they soar to remarkable heights in their pursuit of legal excellence and their unwavering dedication ensures the delivery of unparalleled legal services to our diverse and esteemed clientele.'},
  {number: '05',title: 'Energy Projects & Infrastrastructure', description: 'Our team of accomplished lawyers exemplify this ethos as they soar to remarkable heights in their pursuit of legal excellence and their unwavering dedication ensures the delivery of unparalleled legal services to our diverse and esteemed clientele.'},
]
export default function Home() {
  
  return (
    <>
    <TopNav/>
    <main>
    <div style={{
          backgroundImage: 'url(/images/happy-employees-3.png)'
        }} className={styles.image_banner + ' text-white container-padding flex flex-col justify-center items-center text-center'}>
          <p className="mb-[8px] md:mb-[16px] text-xl md:text-2xl font-semibold">Our Services</p>
            <h1 className={styles.h2 + ' max-w-[693px] pb-[80px] md:pb-[160px]'}>Unwavering focus and expert experience in providing quality legal services.</h1>
        </div>
        <section className="grid grid-cols-1 bg-light px-[24px] py-[80px] md:px-[117px] md:py-[160px]">
          <div className="col-span-1 md:pe-[32px] mb-[40px]">
            <p className="dark-color mb-[8px] md:mb-[16px] text-xl md:text-2xl">Our mantra</p>
            <span className={"primary-color " + styles.h2}>At Danol Partners, our commitment is to deliver exceptional legal services, tailored to our clients' unique needs, across these diverse practice areas. We </span>
            <span className={"gray-color " + styles.h2}>bring together the expertise of our seasoned lawyers to provide innovative and effective solutions for today's complex business and legal challenges.</span>
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
        <div style={{
          backgroundImage: 'url(/images/happy-employees-2.png)'
        }} className={styles.image_banner + ' container-padding flex flex-col justify-end'}>
            <h4 className={styles.h2 + ' max-w-[693px] text-white '}>we are guided by </h4>
            <h4 className={styles.h2 + ' max-w-[693px] pb-[80px] md:pb-[160px]'}>excellence, creativity & professionalism</h4>
        </div>
        
      </main>
    </>
    
  )
}
