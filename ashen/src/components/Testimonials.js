import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
        id: 1,
      name: "Aayush",
      testimonial: "Ailun intially came in as a student in the Stocks Campus. As a professor, I was impressed by his work ethic and willingness to help others. He is a hard-working young man  with a great sense of humor and commitment to his craft. He always goes the extra mile and answers other students questions, and providing very helpful market insight and charts anaylsis. His technical anaysis is top notch and has improved so much since he joined. He will be an asset to any team.",
    },
    {
        id:2,
      name: "Nikola",
      testimonial: "Having worked with Ailun for three years, I must say he is an excellent professional. He helped me understand the company’s SDLC process and started me with helpful tips and tricks. I am impressed by his work ethic and communication skills. Plus, he easily adjusts to any given situation or business dynamics. But what makes him stand out is his willingness to help others. I am glad to have worked with him and have no hesitation recommending him to potential employers.",
    },
    {
        id: 3,
        name: "Adam",
        testimonial: " Passed my masterclass within 3 months of joining. Came up with some of his own strategies. Helped imrpove my TPI by ending seasonality to it. Smart guy. Alawys goes above and beyond, and is willing to incoporate knowledge from others to improve his strategy. He has quite the sense of humour. Hilarious guy.",
      },
      {
        id: 4,
        name: "Michael ",
        testimonial: "Ailun  is an exceptional developer who possesses all the skills one would want in an excellent software developer. From .NET to Javascript, he has a wide breath of knowledge in a lot fo the popular programming languages. He has been a great resource to my company and my clients. He did an incredible job on all projects, making timely deliveries and helping me nurture long-term relationships with my clients. His work is always top-notch, and he is always welcoming to feedback and making improvements. Plus, he is self-motivated and a great team player. ",
      },
    {
        id: 5,
      name: "Chad Johnson",
      testimonial: "Ailun is a very hard-working person who can tackle any web dev problem with ease. We have worked together on several projects, and I found him a highly skilled and dedicated professional. His expertise in the tech field has helped us immensely. He’s also an all-around great guy to work with! I highly recommend him to anyone looking for help on their team",
    },
      {
        id: 6,
        name: "Yahya",
        testimonial:
          "Ailun is awesome and provides tasks that are catered to your goals. He is very quick to respond and answer questions you have as well as provide feedback on an array of things such as your resume as well as provide help with improving your portfolio.",
      },
      {
        id: 7,
        name: "Justin",
        testimonial:
          "Got a job so no longer using the mentorship actively. Ailun is great. Responds quickly and very smart.",
      },
      {
        id: 8,
        name: "Tia",
        testimonial:
          "Ailun gave me awesome advice and shared several resources. He was knowledgeable about some starting points for my interests in software development.",
      },
      {
        id:9,
        name: "David",
        testimonial: "AMAZING TO WORK WITH VERY KNOWLEDGEABLE",
      },
      {
        id: 10,
        name: "Mike",
        testimonial: "Always responds friendly smart guy",
      },
      {
        id:11,
        name: "Alaina",
        testimonial: "It was good. He gave great advice and resources to start building projects in React.",
      }
  ];

  
  return (
    <section id="testimonials" className="three">
      <div className="container">
        <header>
          <h2>Testimonials</h2>
        </header>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <blockquote>{testimonial.testimonial}</blockquote>
            <cite>- {testimonial.name}</cite>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
