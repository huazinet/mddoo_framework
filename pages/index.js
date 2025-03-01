import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/index.module.css'; // 用于样式

export default function Home() {
  const teamMembers = [
    {
      name: 'mddoo',
      position: 'Chief Shareholder',
      description: '专注研究服务器、网络、软件以及网络协议',
      frontImage: '/members/mddoo.jpg', // 正面图片
      backImage: '/members/mddoo_auth.jpg',  // 背面图片
    },
    {
      name: 'Pearson',
      position: 'Core Developer',
      description: '擅长Python、JS、羊毛届大佬 比较社恐',
      frontImage: '/members/Pearson.jpg',
      backImage: '/members/Pearson_auth.jpg',
    },
    {
      name: '十点',
      position: 'Loyal User',
      description: '毛豆框架深度用户 羊毛领域大佬 擅长京豆等0撸活动',
      frontImage: '/members/ten.jpg',
      backImage: '/members/shidian_auth.jpg',
    },
    {
      name: '华子',
      position: 'Organizer',
      description: '略懂网络 刚入门Python',
      frontImage: '/members/huazinet.jpg',
      backImage: '/members/huazi_auth.jpg',
    },
    {
      name: '小猪',
      position: 'Loyal User',
      description: '专注IT硬件',
      frontImage: '/members/xiaozhu.jpg',
      backImage: '/members/xiaozhu_auth.jpg',
    },
    {
      name: '可爱',
      position: 'Loyal User',
      description: '自动化羊毛领域专家 奶茶供应商',
      frontImage: '/members/keai.jpg',
      backImage: '/members/keai_auth.jpg',
    },
    {
      name: '晚安',
      position: 'Loyal User',
      description: '羊毛领域大佬 奶茶供应商',
      frontImage: '/members/wanan.jpg',
      backImage: '/members/wanan_auth.jpg',
    },
    {
      name: 'X',
      position: 'Loyal User',
      description: '羊毛领域大佬 擅长京豆等0撸活动',
      frontImage: '/members/X.jpg',
      backImage: '/members/X_auth.jpg',
    },
  ];

  const [flipped, setFlipped] = useState(Array(teamMembers.length).fill(false));

  const handleCardClick = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <div className={styles.container}>
      {/* 添加Logo */}
      <div className={styles.logoContainer}>
        <svg t="1722908181587" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1847" width="200" height="200"><path d="M901.4 394.5c11.3 50.9 9.1 119-11.8 166.2-23.6 53.1-68.4 101.1-109.9 141-51.5 49.3-105.6 84.2-181.3 67-61.7-13.9-130-91.4-116.4-155 14.7-67.8 77.2-68.1 123.3-102.4 0.5-0.5 1.1-1.1 2.1-1.6 1.6 0.5 5.6 1.9 7.5 2.1 17.4 4 35.9 10.7 53.6 4.8 17.4-5.6 34.9-24.7 40.5-41.6 13.1-41.6-18-65.7-49.1-80.2-2.1-1.1-9.1-3.2-11-2.9-5.4-18.8-9.4-38.9-4-57.1 9.1-30 53.1-66 83.1-75.1 62.4-17.5 159.7 74.5 173.4 134.8z" fill="#E3FFAE" p-id="1848"></path><path d="M622.9 296.1c-26.8-56-76.3-62.2-133.9-49.7-67.2 14.8-67 45.5-98.4 104.3-1 1.9-4.6 8.8-5.5 12-15.5 19.4-30.9 38.4-55.3 46.8-29.1 9.8-51.9 2.1-80.1 4.3-27.4 2.3-72.6 5.4-94.3 22.1-17.8 13.3-27.2 26.1-33.9 41-0.7 0.3-3 35.9-3 35.9-3.8 31.7 11.6 60.7 35 90.6 40 51.1 74.9 83.7 142.5 86.5 32.4 1.5 80.7 1.7 110.7-8 44.7-14.7 56.3-38.1 73.6-82 42.9-108.3 109.2-56 136.7-108 37-70 30-127 5.9-195.8z" fill="#E3FFAE" p-id="1849"></path><path d="M870.3 562.2c22.2-50.1 24.5-122.4 12.5-176.5-10.7-47.1-69.4-112.3-125.9-136.1-29.6 15.1-63.7 46.2-71.9 72.9-5.7 19.4-1.4 60.7 4.3 80.6 2-0.3 9.4 2 11.7 3.1 33 15.4 37.4 41.9 32.1 65.1-4.2 18.4-10.6 27.6-23 34.1-17.5 9.3-38.4 9.1-56.9 4.9-1.1-0.2-2.9-0.7-4.6-1.2-4.2 2.7-8.5 4.9-12.8 6.3l-2.1 0.6c-47.7 30.4-107 34.8-121.7 102.4C497.5 686 570.1 768.2 635.6 783c0.8 0.2 1.6 0.4 2.5 0.5 43.4-10.1 80.1-37.7 115.6-71.7 44.1-42.3 91.6-93.3 116.6-149.6z" fill="#A5D16B" p-id="1850"></path><path d="M911.4 394.5c-12.1-53.5-89.9-131.7-150.8-136.6 59.1 49.3 102.5 101.3 106.5 178.9 3.5 70.5-2.1 135.7-49.1 190.6-30.6 35.9-63 71.6-97.3 103.8-15.8 14.7-35.4 29.2-55.8 40.8 47.9-5.9 87.1-34.2 124.8-70.3 41.6-40 86.3-87.9 109.9-141 20.9-47.1 23.1-115.2 11.8-166.2z" fill="#97C153" p-id="1851"></path><path d="M491.6 294.3C449.3 305.2 422 354.8 391 413.1c-1 24.1-11.3 47.5-35.2 57.3-10.9 4.5-21.3 5.4-30.8 3.7-42.8-5.1-49-13.1-75.6-11-27.4 2.3-74.1 10.3-95.8 27.1-13.5 10.1-20.3 28.9-26.7 39.6 8.6 43.7 41.6 76.1 74.8 105.1 66 57.9 186.3 77 249.4 2.7 0.8-0.8 1.9-1.3 2.4-1.9-0.3-16.4 3.5-34.1 13.9-53.6 12.6-24.4 37.5-48.8 61.4-62.5 24.7-13.9 50.7-12.1 72.9-33.2 18.5-18 28.4-40.2 34.3-64.4-0.5-3.2-1.9-8.8-2.4-11-5.8-18.7-9.3-35.1-10.1-50.1-0.2-0.5-0.4-1.1-0.6-1.6-29.9-87-92.6-75-131.3-65z" fill="#A5D16B" p-id="1852"></path><path d="M617 475c7-13.3 21.8-26.5 25.9-39-6.2-1.4 8.6-23.7 2.5-25.1-1.9-0.3-5.3-8.8-6.9-9.4-1.1 0.5-32.6 29.4-33.1 29.9-46.1 34.3-108.6 34.6-123.3 102.4-2.9 13.4-2.1 27.4 1.5 41.4C526.5 477.3 590.2 525.7 617 475z" fill="#97C153" p-id="1853"></path><path d="M480.3 543.7c-61.1 60.1-196.1 97.4-264.8 50.2-32.8-22.5-73.5-58.7-96.9-100.1-0.1 1.4-0.1 2.2-0.1 2.2-3.8 31.7 11.6 60.7 35 90.6 40 51.1 79.1 89 146 99.5 33.3 5.2 72.5 9.7 102.5 0 35.5-11.6 54.7-49.8 67.9-78.4-5.1-8.4 27.5-54.7 10.4-64z" fill="#97C153" p-id="1854"></path><path d="M817.2 255.1c-48-39.4-95.5-24.1-142.4 11.5-54.7 41.8-61.1 79.9-41.3 144.3 0.5 2.1 1.9 7.8 2.4 11-5.9 24.1-15.8 46.4-34.3 64.4-22.3 21.2-48.3 19.3-72.9 33.2-23.9 13.7-48.8 38.1-61.4 62.5-10.5 19.6-14.2 37.3-13.9 53.6-0.5 0.5-1.6 1.1-2.4 1.9-63 74.3-183.4 55.2-249.4-2.7-38.1-33.2-75.9-71.1-77-125.2-1.3-54.4 45.6-83.7 97.9-83.4 16.9 0.3 34.1 0.3 50.9-0.5 13.4 33.2 44.8 60.3 82.3 44.8 37.3-15.3 41.6-63.5 28.7-96.3 15.8-20.6 31.3-41.9 41.3-66 43-103.2 134.8-47.8 196.5-8.2 11.8 7.5 22.8-11.5 11-19-34.1-21.7-108.6-59.4-150.1-50.6-48.5 10.5-71.1 59.3-94.4 98.1-26 43.2-53.4 67.8-104.8 73.7-28.4 3.2-56.8-1.1-85 2.4-36.2 4-73.7 28.2-89.8 61.9-38.3 80.8 46.9 166.6 106.5 207.4 68.6 47.2 181 48 242.1-12.1 9.9 30.3 34.6 56.6 61.7 83.1 45.3 44.8 114.5 67.3 177 41.3 30-12.3 61.4-33.5 84.5-55 34.3-32.2 66.8-67.8 97.3-103.8 46.9-55 52.5-120.1 49.1-190.6-4.2-79-49.2-131.6-110.1-181.7zM367.6 392.6c4.8 19.8 1.6 46.1-17.4 56.6-23.1 12.3-44.2-5.6-54.2-25.7 26.5-4.1 51.2-12.1 71.6-30.9z m318.5 78.9c-7 12.3-18.5 26-33.8 26.3-8.8 0.3-18.5-2.4-27.6-4.6 17.4-20.6 28.2-46.4 34.1-73.2 20.1 11 40.7 27.3 27.3 51.5z m215.3-77c11.3 50.9 9.1 119-11.8 166.2-23.6 53.1-68.4 101.1-109.9 141-51.5 49.3-105.6 84.2-181.3 67-61.7-13.9-130-91.4-116.4-155 14.7-67.8 77.2-68.1 123.3-102.4 0.5-0.5 1.1-1.1 2.1-1.6 1.6 0.5 5.6 1.9 7.5 2.1 17.4 4 35.9 10.7 53.6 4.8 17.4-5.6 34.9-24.7 40.5-41.6 13.1-41.6-18-65.7-49.1-80.2-2.1-1.1-9.1-3.2-11-2.9-5.4-18.8-9.4-38.9-4-57.1 9.1-30 53.1-66 83.1-75.1 62.4-17.5 159.7 74.5 173.4 134.8z m0 0" fill="#333333" p-id="1855"></path><path d="M638.8 496.4c2.2-10.3 3.4-20.5 3.9-30.6-5 9.8-10.9 19-18 27.4 4.6 1.1 9.4 2.3 14.1 3.2z" fill="#A5D16B" p-id="1856"></path><path d="M367.6 392.6c4.8 19.8 1.6 46.1-17.4 56.6-23.1 12.3-44.2-5.6-54.2-25.7 26.5-4.1 51.2-12.1 71.6-30.9z m318.5 78.9c-7 12.3-18.5 26-33.8 26.3-8.8 0.3-18.5-2.4-27.6-4.6 17.4-20.6 28.2-46.4 34.1-73.2 20.1 11 40.7 27.3 27.3 51.5z" fill="#E9FFCF" p-id="1857"></path></svg>
      </div>
      <h1 className={styles.title}>mddoo framework</h1>
      <p className={styles.description}>Intended to provide various automation and bot services.</p>
      <div className={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`${styles.member} ${flipped[index] ? styles.flipped : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className={`${styles.cardFace} ${styles.cardFront}`}>
              <Image
                src={member.frontImage}
                alt={`${member.name}'s front picture`}
                width={140}
                height={140}
                className={styles.memberImage}
              />
              <h2 className={styles.memberName}>{member.name}</h2>
              <h3 className={styles.memberPosition}>{member.position}</h3>
              <p className={styles.memberDescription}>{member.description}</p>
            </div>
            <div className={`${styles.cardFace} ${styles.cardBack}`}>
              <Image
                src={member.backImage}
                alt={`${member.name}'s back picture`}
                layout="fill" // 使用 fill 布局模式使图片填充整个容器
                className={styles.backImage}
              />
            </div>
            
          </div>
        ))}
      </div>
      <div className={styles.copyright}>
              © 2023 - 2024 毛豆框架. All rights reserved.
      </div>
    </div>
  );
}
