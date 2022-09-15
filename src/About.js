import React from 'react'

function About() {
  return (
    <div className="mt-40 relative">
        <div className="flex flex-col mt-5">
            <p className="text-4xl font-bold font-mono ml-10">
                <p className="text-[#eab308]">
                    BAKED
                </p>
                <p className="text-[#ef4444]">
                    BITES
                </p>
            </p>
            <p className="text-xl font-semibold font-serif ml-5 mt-3">
                One stop for the aesthetes of baked goods.
            </p>
        </div>
        <div className="mt-10 flex flex-col gap-2 ml-5">
            <p className="text-2xl font-bold font-mono text-[#b91c1c]">
                What we offer?
            </p>
            <p className="text-m font-serif">
                A wide range of baked products that includes cakes, pastries, cupcakes and donuts, everything home-baked with love.
            </p>
        </div>
        <div className="mt-10 flex flex-col gap-2 ml-5">
            <p className="text-2xl font-bold font-mono text-[#b91c1c]">
                What makes us different?
            </p>
            <p className="text-m font-serif">
            We started this business with a dream of delivering the food that is baked with love. Our home-made goods are delectably delicious , strong in flavors along with a sweet seduction. 
            </p>
            <p className="text-m font-serif">
            This is a small-scale online bakery store that delivers cakes and other mentioned categories. We are famous for our premium cakes and donuts and became neighborhood favorites for our classic sophisticated products. We have come a long way in the journey of winning the hearts of many by our dedication to the highest quality baking and warm personal service.
            </p>
        </div>
    </div>
  )
}

export default About;

