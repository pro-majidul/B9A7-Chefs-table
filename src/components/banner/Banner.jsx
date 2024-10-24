
const Banner = () => {
    return (
        <div className=" my-8 py-8">
            <div className=" rounded-2xl w-full bg-cover bg-center md:py-20 bg-no-repeat flex items-center justify-center" style={{
                backgroundImage:'url(https://i.ibb.co.com/MBJS7r1/Rectangle-1.png)'
            }}>
                <div className=" space-y-10 w-10/12 mx-auto text-white py-8 text-center">
                    <h1 className="  font-bold md:text-5xl ">Discover an exceptional cooking class tailored for you!</h1>
                    <p>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className="space-y-5">
                        <button className="btn mr-5  bg-[#0BE58A] rounded-3xl ">Explore Now</button>
                        <button className="btn bg-transparent text-white ml-5 hover:text-black hover:bg-[#0BE58A] rounded-3xl">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;