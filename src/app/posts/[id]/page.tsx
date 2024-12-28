"use client";
import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Post {
  title: string;
  date: string;
  content: string;
  imageUrl: string;
}

export default function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const [postId, setPostId] = useState<string | null>(null);

  // Unwrap params and set the id after the Promise resolves
  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params; // Wait for the promise to resolve
      setPostId(resolvedParams.id);
    };
    
    fetchParams();
  }, [params]);

  const [comments, setComments] = useState<{ name: string; comment: string }[]>([
    { name: "Oliver", comment: "I love the layout of this website!!" },
    { name: "Sophia", comment: "This website is super user-friendly and appealing!" },
  ]);

  if (!postId) {
    return <div>Loading...</div>;
  }

  // Fetch post by id
  const post: Post | null = getPostById(postId); // Assume this function fetches the post by ID

  // If the post is not found, return a 404 page
  if (!post) {
    return notFound();
  }

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const comment = (form.elements.namedItem("comment") as HTMLTextAreaElement).value;
    setComments([...comments, { name, comment }]);
    form.reset();
  };

  return (
    <div className="container mx-auto p-6 relative bg-orange-400 text-white">
      <article className="relative bg-orange-500 text-stone-100 shadow-lg rounded-lg p-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Section: Content */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-stone-100">{post.title}</h2>
            <br />
            <p className="text-stone-800 text-sm hover:animate-bounce font-semibold cursor-grabbing">
              {post.date}
            </p>
            <div className="mt-6 text-stone-700">
              <p>{post.content}</p>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-1/2 p-6 flex items-center justify-center">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={500}
              height={500}
              className="w-full max-w-sm h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Comment Section */}
        <div className="mt-8 p-6">
          <h3 className="text-2xl font-semibold text-stone-100">Comments</h3>
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <input
              type="text"
              name="name"
              className="w-full p-4 border-2 text-stone-700 bg-orange-200 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-2"
              placeholder="Your Name"
              required
            />
            <textarea
              name="comment"
              className="w-full p-4 border-2 text-stone-700 bg-orange-200 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Add your comment here..."
              required
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-orange-600 text-stone-100 border-2  px-6 py-2 rounded-lg shadow-md hover:animate-bounce transition duration-300"
            >
              Submit Comment
            </button>
          </form>

          {/* Display Comments */}
          <div className="mt-6">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="bg-stone-200 p-4 rounded-lg shadow-sm mb-4 border-2 border-orange-300"
              >
                <p className="text-stone-700 font-bold">{comment.name}</p>
                <p className="text-orange-700 font-semibold">{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}



const getPostById = (id: string) => {
  const posts: Post[] = [
    {
      title: "BOOK 1 - IN A FAR-OFF LAND",
      date: "October 7, 2014",
      content: `

       In a Far-Off Land by Stephanie Landsem is a compelling historical novel set in 14th-century Europe, 
       during a time of war, political upheaval, 
       and the devastation of the Black Plague. 
       The story follows Grete, a young woman whose life is turned upside down when her family is torn apart by war. 
       Struggling to survive, she embarks on a perilous journey across Europe, 
       searching for safety, redemption, and belonging.
As Grete encounters various challenges—betrayal, loss, and the horrors of war—her journey becomes both a physical and spiritual quest. 
Along the way, she is forced to confront her own beliefs and fears, ultimately discovering the power of faith, 
loyalty, and personal strength. Through her character, Landsem explores deep themes of survival, 
self-discovery, and the transformative role of faith during difficult times.
The novel is richly detailed, offering readers an immersive experience in a turbulent period of history. 
Landsem skillfully brings the historical context of the Hundred Years' War and the Black Plague to life, 
adding depth to the narrative. The strong, 
relatable heroine and her emotional journey make In a Far-Off Land a poignant and thought-provoking tale, 
blending adventure with spiritual growth, resilience, and the enduring hope found in faith.
     `,
      imageUrl: "/book-1.jpg",
    },
    {
      title: "BOOK 2 - The Online War of Politics",
      date: "March 17, 2020",
      content: `
    The Online War of Politics by Brandon Harris explores the intersection of technology, social media, and modern political battles. The book delves into the digital age's impact on political campaigns, where social media platforms have become battlegrounds for ideologies, political manipulation, and public influence. Harris highlights how political figures and parties increasingly rely on online strategies to sway voters, manage public image, and control narratives.

What makes the book particularly interesting is its examination of the growing role of misinformation, echo chambers, and algorithm-driven content in shaping public opinion. Harris reveals how digital platforms, with their vast reach, can amplify both positive and negative political rhetoric, making the online space a crucial factor in elections and political power struggles.

Through case studies and analysis, the book sheds light on the power dynamics between politicians, tech companies, and the public, raising important questions about democracy, freedom of speech, and the ethical implications of online political warfare. In a time where social media influences nearly every aspect of political life, The Online War of Politics is a timely and thought-provoking exploration of how the digital age has reshaped the political landscape. It challenges readers to consider how technology is altering the way we engage with politics and what it means for the future.`,
      imageUrl: "/book-2.jpg",
    },
    {
      title: "BOOKS 3 - When Books Went to War",
      date: "May 27, 2014",
      content: `
     When Books Went to War by Molly Guptill Manning is a fascinating exploration of how books played a crucial role during World War II. The book tells the story of the "Armed Services Edition" (ASE) program, a unique initiative that provided millions of paperback books to soldiers fighting abroad. Manning vividly recounts how, during the war, books became a source of comfort, escape, and morale for troops, offering a much-needed mental reprieve from the harsh realities of combat.

What makes the book particularly interesting is its exploration of the impact of literature on soldiers’ well-being and the ways in which books were strategically chosen to cater to diverse interests and needs. Manning dives into the logistics behind the ASE program, which delivered over 120 million books to soldiers. The titles ranged from novels to educational texts, creating a bridge between entertainment, self-improvement, and emotional support.

Manning also uncovers the cultural and political significance of this effort, examining how the government and publishers collaborated to ensure that soldiers had access to literature that could boost their spirits, educate them, and keep them connected to the home front. When Books Went to War is a tribute to the power of books and the essential role they played in wartime, offering a compelling narrative about the enduring value of literature in shaping history.`,
      imageUrl: "/book-3.jpg",
    },
    {
      title: "BOOK 4 - The Secret Code-Breakers of Central Bureau",
      date: "August 1, 2019",
      content: `The Secret Code-Breakers of Central Bureau by David Dufty is a gripping account of Australia's contribution to code-breaking during World War II. The book focuses on the Central Bureau, an intelligence organization that played a critical role in deciphering enemy communications, particularly in the Pacific theater. What makes this book especially fascinating is its focus on the largely untold story of the Australian women and men who worked tirelessly to crack complex Japanese codes, often under the most challenging conditions.

Dufty brings to light the crucial work of the Central Bureau, revealing how its code-breakers, using a combination of intelligence, ingenuity, and early computing technology, helped turn the tide of the war. Through engaging storytelling and meticulous research, Dufty unveils the personalities and strategies behind the code-breaking efforts, detailing the risks and the challenges they faced in a secretive, high-stakes environment.

One of the most interesting aspects of the book is its exploration of the role of Australian code-breakers, who were often overshadowed by their British and American counterparts. Dufty highlights their critical impact, showing how their work was instrumental in Allied victories, such as the Battle of Midway. The Secret Code-Breakers of Central Bureau is a fascinating tribute to unsung heroes and their vital contribution to the war effort.`,
      imageUrl: "/book-4.jpg",
    },
    {
      title: "BOOK 5 - Forged in War",
      date: "March 1, 2023",
      content: `Forged in War by Mark Galeotti offers a deep and insightful look into the evolution of Russia's military, security, and intelligence services. The book traces the origins and development of Russia’s modern military and security apparatus, from the rise of the Soviet Union to the post-Cold War era. Galeotti explores how the Russian state has used its military power not only in combat but as a tool for political influence, both within its borders and on the global stage.

What makes the book particularly interesting is its examination of the complex relationship between Russia's military, security services, and political leadership. Galeotti highlights how military and intelligence organizations have often shaped—and been shaped by—the ruling elite, with a focus on how these institutions are interwoven with the power structures of the Russian state.

Through compelling analysis, Forged in War also sheds light on key historical events such as the Soviet Union's rise to power, the Cold War, and Russia's modern-day involvement in conflicts like Ukraine and Syria. The book provides a nuanced understanding of how war and conflict have been pivotal in the creation of Russia’s unique military culture. Galeotti's work is a vital resource for understanding the role of force in Russian politics and the state’s enduring legacy of militarization.`,
      imageUrl: "/book-5.jpg",
    },

    {
      title: "BOOKS 6 - Vietnam Stories: Dreams to Nightmares",
      date: "October 10, 2017",
      content: `Vietnam Stories: Dreams to Nightmares by Ted Pannell is a compelling collection of personal accounts that explore the emotional and psychological impact of the Vietnam War. The book offers a unique perspective, focusing on the experiences of soldiers who served in Vietnam, as well as the challenges they faced both during and after the conflict. Pannell draws on vivid, firsthand stories to illustrate the contrast between the initial dreams and ideals that motivated many soldiers to enlist and the harsh realities they encountered on the battlefield.

What makes the book particularly interesting is its honest portrayal of the emotional and psychological toll that war takes on individuals. Through these powerful narratives, readers gain insight into the trauma, guilt, and disillusionment that many soldiers carried with them long after their return home. Pannell emphasizes the complexities of the Vietnam War experience, highlighting not only the physical dangers of combat but also the internal battles faced by veterans.

The stories in Vietnam Stories: Dreams to Nightmares are both heartbreaking and inspiring, offering a nuanced view of the war's lasting effects on those who lived through it. This collection serves as a tribute to the resilience and courage of those who served, while also examining the lasting scars left by war on the human soul.

`,
      imageUrl: "/book-6.jpg",
    },
    {
      title: "Book 7 - Warrior of Rome: The Caspian Gates",
      date: "January 7, 2010",
      content: `Warrior of Rome: The Caspian Gates by Harry Sidebottom is an engaging historical novel set in the turbulent days of ancient Rome. It is the third installment in the Warrior of Rome series and follows the protagonist, Marcus Clodius Ballista, a seasoned Roman officer, as he embarks on a dangerous military campaign in the far eastern reaches of the Roman Empire.

What makes The Caspian Gates particularly captivating is its vivid portrayal of ancient warfare, political intrigue, and the harsh realities of life on the front lines. Set during the reign of Emperor Carus in the early 3rd century, the novel immerses readers in a world of brutal battles, shifting alliances, and the constant threat of invasion from the Persian Empire. Sidebottom masterfully combines action with historical detail, making the setting come alive with rich descriptions of landscapes, military tactics, and the complexities of Roman politics.

The character of Ballista is compelling, a strong and conflicted leader who must balance duty and personal loyalty while navigating the dangers of war and empire. The Caspian Gates is a thrilling and well-researched historical fiction that appeals to fans of military history, ancient Rome, and character-driven storytelling. It’s a gripping tale of heroism, survival, and the power struggles that shaped the Roman Empire.`,
      imageUrl: "/book-7.jpg",
    },
    {
      title: "Book 8 - The New Politics of Old Values",
      date: "October 1, 2011",
      content: `The New Politics of Old Values by John Kenneth White provides a thought-provoking analysis of the evolving role of values in American politics. The book delves into how traditional values, such as family, religion, and community, continue to shape political discourse, even as the nation faces rapid social, cultural, and technological changes. White argues that, despite the rise of new political issues and challenges, these "old values" remain central to the political ideologies and decisions of American voters.

What makes the book particularly interesting is its exploration of the complex relationship between personal beliefs and political behavior. White examines how values influence voter alignment, public policy, and the way political campaigns are conducted. He offers an in-depth look at the role of religion and morality in shaping public opinion and how political parties have adapted their strategies to appeal to voters' values.

The book is especially insightful in its discussion of the political divide in contemporary America, illustrating how competing values play a key role in the polarization of the electorate. White’s analysis provides readers with a clearer understanding of how traditional values persist and intersect with modern political movements, offering a timely and relevant perspective on the intersection of culture and politics in the 21st century.`,
      imageUrl: "/book-8.jpg",
    },
  ];

  return (
    posts.find((post) => post.title.toLowerCase().includes(id.toLowerCase())) ||
    null
  );
};
