import React from 'react';
import './Blog.css';
import blogPost1 from '../assets/images/blogpost1.jpg';
import blogPost2 from '../assets/images/blogpost2.jpg';
import blogPost3 from '../assets/images/blogpost3.jpg';
import blogPost4 from '../assets/images/blogpost4.jpg';
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp, FaLinkedin, FaPinterestP } from 'react-icons/fa';

const Blog = () => {
    return (
        <main>
            <div className='main-blog'>
                <h1> Blog Post</h1>
                <div className=' topPosts'>
                    <div className='post'>
                        <h3>chika Dumego</h3>
                        <p>
                            {' '}
                            loren 20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. loren 20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, amet consectetur
                            adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. loren 20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                        </p>
                    </div>
                    <div className='img-div'>
                        <img src={blogPost1} alt='' />
                    </div>
                </div>
                <div className=' topPosts'>
                    <div className='img-div'>
                        <img src={blogPost2} alt='' />
                    </div>
                    <div className='post'>
                        <h3>Laila Philian</h3>
                        <p>
                            {' '}
                            loren 20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. loren 20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum
                            loren 20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. loren 20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum
                        </p>
                    </div>
                </div>

                <div className='midblog'>
                    <div className='img-div'>
                        <h3 style={{ padding: '20px' }}>Jacinta Boro</h3>
                        <img src={blogPost3} alt='blog post' />
                    </div>

                    <div className='img-div'>
                        <h3 style={{ padding: '20px' }}>Tarila Anderiyei</h3>

                        <img src={blogPost4} alt='blog post' />
                    </div>
                </div>

                <div className='p-div'>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quis reiciendis veritatis reprehenderit, saepe eaque! Beatae, deserunt repellendus unde explicabo aperiam quae dolore error ad libero amet eveniet, incidunt atque nemo quasi quis modi ipsa consequatur ut.
                        Doloribus repellendus ratione qui tempore natus explicabo expedita magni. Aut repudiandae explicabo aliquid excepturi fuga quod magni veniam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quis reiciendis veritatis reprehenderit, Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Dolorum quis reiciendis veritatis reprehenderit, saepe eaque! Beatae, deserunt repellendus unde explicabo aperiam quae dolore error ad libero amet eveniet, incidunt atque nemo quasi quis modi ipsa consequatur ut. Doloribus repellendus ratione qui
                        tempore natus explicabo expedita magni. Aut repudiandae explicabo aliquid excepturi fuga quod magni veniam Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quis reiciendis veritatis reprehenderit,
                    </p>
                </div>
                <div className='tags'>
                    <small>Tags:</small>
                    <span>Food</span>
                    <span>Friends</span>
                    <span>LifeStyle</span>
                    <span>Travel</span>
                </div>
                <div className='btn'>
                    <button className='prv'>Prev Post</button>
                </div>
                <div className='icon-div'>
                    <div className='icon'>
                        <FaFacebook />
                    </div>
                    <div className='icon'>
                        <FaGithub />
                    </div>
                    <div className='icon'>
                        <FaInstagram />
                    </div>
                    <div className='icon'>
                        <FaWhatsapp />
                    </div>
                    <div className='icon'>
                        <FaLinkedin />
                    </div>
                    <div className='icon'>
                        <FaPinterestP />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Blog;
