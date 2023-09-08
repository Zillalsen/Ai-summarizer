import {logo} from "../assets"

const Hero = () => {
  return (
    <header className="w-full flex items-center justify-center flex-col">
        <nav className='w-full pt-3 mb-10 flex items-center justify-between'>
                <img src={logo} alt="logo" className="w-28 object-contain" />
                <button type="button" onClick={() => window.open('https://github.com/Zillalsen')} 
                className="black_btn">GitHub</button>
        </nav>
            <h1 className='head_text'>Sumrize Articles With <br className="max-md:hidden"/> <span className='orange_gradient'>OpenAI GPT-4</span> </h1>
            <h2 className='desc'>
            Simplify your reading with Summize, an open-source article summarizer
            that transforms lengthy articles into clear and concise summaries
            </h2>
    </header>
  )
}

export default Hero