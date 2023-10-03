import React from 'react'
import styles from "./categoryList.module.scss"
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {

  const categories = [
    {
      categoryName:"art",
      img1:"/art1.svg",
      desc:"Creative writing, storytelling.",
      img2:"/art2.svg",
      url:"/blog?cat=art",
    },
    {
      categoryName:"tech",
      img1:"/net1.svg",
      desc:"Tech industry Insights",
      img2:"/comp.svg",
      url:"/blog?cat=tech",
    }]


  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Popular Categories</h1>
      <div className={styles.categories}>

          {/* {categories.map(({categoryName, img1,desc,img2,url}, index)=>(
            <Link href={url} className={`${styles.category} ${styles.categoryName}`} key={index}>
               Todo: How do you pass the title to the class component
                  <div className={styles.left}>
                  <Image src={img1} width={32} height={32} className={styles.img} alt=""/> 
                    <h2 className={styles.subTitle}>{categoryName}</h2>
                    <p className={styles.desc}>{desc}</p>
                    </div>
                    <div className={styles.right}>
                  <Image src={img2} width={32} height={32} className={styles.img} alt=""/> 
                    </div>
              </Link>
          ))  
          } */}

        <Link href="/blog?cat=art" className={`${styles.category} ${styles.art}`}>
          <div className={styles.left}>
          <Image src="/art1.svg" width={32} height={32} className={styles.img} alt=""/> 
            <h2 className={styles.subTitle}>Art</h2>
            <p className={styles.desc}>Creative writing, storytelling.</p>
            </div>
            <div className={styles.right}>
          <Image src="/art2.svg" width={32} height={32} className={styles.img} alt=""/> 
            </div>
          </Link>

          <Link href="/blog?cat=tech" className={`${styles.category} ${styles.tech}`}>
          <div className={styles.left}>
          <Image src="/net1.svg" width={32} height={32} className={styles.img} alt=""/> 
            <h2 className={styles.subTitle}>Tech</h2>
            <p className={styles.desc}>Tech industry Insights</p>
            </div>
            <div className={styles.right}>
          <Image src="/comp.svg" width={32} height={32} className={styles.img} alt=""/> 
            </div>
          </Link>

          <Link href="/blog?cat=finance" className={`${styles.category} ${styles.finance}`}>
          <div className={styles.left}>
          <Image src="/finance1.svg" width={32} height={32} className={styles.img} alt=""/> 
            <h2 className={styles.subTitle}>Finance</h2>
            <p className={styles.desc}>Finance, Investment, Wealth</p>
            </div>
            <div className={styles.right}>
          <Image src="/finance2.svg" width={32} height={32} className={styles.img} alt=""/> 
            </div>
          </Link>


          <Link href="/blog?cat=fashion" className={`${styles.category} ${styles.fashion}`}>
          <div className={styles.left}>
          <Image src="/fashion1.svg" width={32} height={32} className={styles.img} alt=""/> 
            <h2 className={styles.subTitle}>Style</h2>
            <p className={styles.desc}>Fashion inspiration</p>
            </div>
            <div className={styles.right}>
          <Image src="/fashion2.svg" width={32} height={32} className={styles.img} alt=""/> 
            </div>
          </Link>

          <Link href="/blog?cat=travel" className={`${styles.category} ${styles.travel}`}>
          <div className={styles.left}>
          <Image src="/bag.svg" width={32} height={32} className={styles.img} alt=""/> 
            <h2 className={styles.subTitle}>Travel</h2>
            <p className={styles.desc}>Exciting Adventures</p>
            </div>
            <div className={styles.right}>
          <Image src="/car.svg" width={32} height={32} className={styles.img} alt=""/> 
            </div>
          </Link>

          <Link href="/blog?cat=sports" className={`${styles.category} ${styles.sports}`}>
          <div className={styles.left}>
          <Image src="/sports1.svg" width={32} height={32} className={styles.img} alt=""/> 
            <h2 className={styles.subTitle}>Sports</h2>
            <p className={styles.desc}>Sports Analysis Hub</p>
            </div>
            <div className={styles.right}>
          <Image src="/sports2.svg" width={32} height={32} className={styles.img} alt=""/> 
            </div>
          </Link>

        </div>
    </div>
  )
}

export default CategoryList