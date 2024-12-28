import React from 'react'
import Card from './Card';
import Link from 'next/link';

export default function BookSection() {

    interface Ipost {
        id: number;
        title: string;
        date: string;
        excerpt: string;
        image: string;
    }

    const posts:Ipost[] = [
        {
          id: 1,
          title: 'In a Far-Off Land',
          date: 'October 7, 2014',
          excerpt:
            "In a Far-Off Land blends adventure, faith, and personal growth in 14th-century Europe.",
          image: '/book-1.jpg',
        },
        {
          id: 2,
          title: 'The Online War of Politics',
          date: 'March 17, 2020',
          excerpt:
            'The Online War of Politics explores how social media shapes modern political battles and strategies.',
          image: '/book-2.jpg',
        },
        {
          id: 3,
          title: 'When Books Went to War',
          date: 'May 27, 2014',
          excerpt:
            'When Books Went to War highlights how paperback books boosted soldier morale during World War II.',
          image: '/book-3.jpg',
        },
        {
          id: 4,
          title: 'The Secret Code-Breakers of Central Bureau',
          date: 'August 1, 2019',
          excerpt:
            '"The Secret Code-Breakers of Central Bureau" reveals Australia\'s pivotal role in World War II code-breaking.',
          image: '/book-4.jpg',
        },
        {
          id: 5,
          title: 'Forged in War',
          date: 'March 1, 2023',
          excerpt:
            '"Forged in War" explores Russia\'s military evolution, highlighting its impact on politics and global power.',
          image: '/book-5.jpg',
        },
        {
          id: 6,
          title: 'Vietnam Stories',
          date: 'October 10, 2017',
          excerpt:
            '"Vietnam Stories: Dreams to Nightmares" offers personal accounts of soldiers\' emotional struggles during and after Vietnam.',
          image: '/book-6.jpg',
        },
        {
          id: 7,
          title: 'Warrior of Rome',
          date: 'January 7, 2010',
          excerpt:
            '"Warrior of Rome: The Caspian Gates" follows a gripping military campaign on Rome’s eastern frontier.',
          image: '/book-7.jpg',
        },
        {
          id: 8,
          title: 'The New Politics of Old Values',
          date: 'October 1, 2011',
          excerpt:
            '"The New Politics of Old Values" explores how traditional values shape modern American political ideologies.',
          image: '/book-8.jpg',
        },
      ];

  return (
    <section>
        {/* Container */}
      <div id='sec' className='container bg-orange-500 mx-auto '>
        <h1 className='text-center text-[30px] font-bold text-stone-100 pt-3 pb-3'>Populars Books</h1>
             {/* Cards*/}
         <div  className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 '>
               {
                posts.map((post,index)=>(
                    <Link href={`/posts/${post.id}`} key={index}>
                          <Card post={post}/>
                    </Link>
                ))
               }
         </div>{/*End Cards*/}
      </div>
    </section>
  )
}