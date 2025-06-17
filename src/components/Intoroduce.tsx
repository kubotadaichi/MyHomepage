
export default function Introduce() {

  return (
    <div>
      {/* 
      名前 kubota daichi
      所属 kyushu institute of technology, 	School of Computer Science and Systems Engineering, Department of Artificial Intelligence
      興味 Deep Learning
      研究室 : http://www.alp.ai.kyutech.ac.jp/tsuyoshi/index.html
      */}
      <h1 className="text-9xl font-mono">kubota daichi</h1>
      <h2>kyushu institute of technology</h2>
      <h3>School of Computer Science and Systems Engineering</h3>
      <h4>Department of Artificial Intelligence</h4>
      <p className="text-2xl font-mono">AI, Deep Learning</p>
      <a href="http://www.alp.ai.kyutech.ac.jp/tsuyoshi/index.html">lab</a>
      

      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-2">Contact</h2>
        <ul className="text-lg">
          {/* <li>
            Email: <a href="mailto:kubota.daichi405@mail.kyutech.jp" className="text-blue-600 underline">kubota.daichi405@mail.kyutech.jp</a>
          </li> */}
          <li>
            Email: <a href="mailto:kubotadaichi202@gmail.com" className="text-blue-600 underline">kubotadaichi202@gmail.com</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/kubotadaichi" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://github.com/kubotadaichi</a>
          </li>
        </ul>
      </div>
    </div>
  )
}