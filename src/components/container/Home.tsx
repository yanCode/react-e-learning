import {hero} from 'src/assets'

const Home = () => (
    <section className="section" id="home">
        <div className="md:flex items-center justify-center">
            <div>
                <div className="font-bold text-xs text-Teal mb-4">
                    {" "}
                    Your e-learning partner.
                </div>
                <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
                    This is <br/> the new way <br/> to learn online.
                </div>
                <p className="text-sm leading-7 text-gray max-w-sm">Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ab aliquam deleniti harum optio quae
                    qui.</p>
                <div className="mt-6">
                    <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">Get Started
                    </button>
                    <button
                        className="px-6 py-3 font-bold border border-gray border-solid rounded-lg text-sm">Discover
                    </button>
                </div>
            </div>
            <div className="md:w-[60%]">
                <img src={hero} alt=""/>
            </div>
        </div>
    </section>)
export default Home