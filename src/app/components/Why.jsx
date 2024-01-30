import Image from 'next/image';
import React from 'react';
import cover from "../../../public/images/cover.jpg";
import Heading from './Heading';
import Accordian from './Accordian';
const Why = () => {
    return (
        <div className='my-10'>
            <Heading subheading={'Why You Read from This Library'} heading={'Benifit'}></Heading>
            <div className='flex flex-col-reverse justify-center items-center md:flex-row gap-5 rounded-md bg-white p-5'>


                <div className='md:w-1/2 p-5 text-center md:px-12'>
                    <Accordian q={'Vast Collection of Resources'} a={'Online libraries boast massive collections that dwarf even the largest physical libraries. They offer access to millions of books, ebooks, audiobooks, journals, articles, newspapers, documentaries, and other materials, often in multiple languages. This vast array of resources caters to diverse interests and learning styles, ensuring you find the information you need, regardless of your subject or field of study.'}></Accordian>
                    <Accordian q={'Convenience and Accessibility'} a={'Gone are the days of physically visiting libraries during specific hours. Online libraries are accessible anytime, anywhere, as long as you have an internet connection. This convenience is especially beneficial for people with busy schedules, those living in remote areas, or individuals with disabilities who may face challenges accessing physical libraries'}></Accordian>
                    <Accordian q={'Advanced Search and Navigation'} a={'Online libraries utilize powerful search engines and navigation tools that make finding specific information effortless. You can easily search by title, author, keyword, subject, or even publication date, and refine your results with various filters. Additionally, many online libraries offer recommendations based on your search history and browsing habits, helping you discover new and relevant resources.'}></Accordian>
                    <Accordian q={'Enhanced Learning and Research'} a={'Online libraries provide valuable tools and features that enhance the learning and research process. Many platforms offer note-taking capabilities, highlighting options, bookmarking functions, and even citation management tools. Additionally, some libraries provide access to online courses, tutorials, and other learning resources, further enriching your research and study experience.'}></Accordian>
                    <Accordian q={'Cost-Effectiveness'} a={'Online libraries are generally free to use, eliminating the need for library memberships or fees for accessing resources. This is particularly beneficial for students, educators, and individuals with limited budgets. Additionally, online libraries save on physical space and resource maintenance costs, making them a sustainable and cost-effective alternative to traditional libraries.'}></Accordian>
                </div>

                <div className='md:w-1/2'>
                    <Image
                        className='rounded-lg'
                        quality={100}
                        src={cover}
                        alt='cover image' />
                </div>


            </div>
        </div>
    );
};

export default Why;